import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserInput } from './inputs/create-user.input';
import { UpdateUserInput } from './inputs/update-user.input';
import { PrismaService } from 'src/prisma.service';
import { UserRole } from './enum/user-role.enum';
import * as bcrypt from 'bcrypt';
import { ChangePasswordInput } from './inputs/change-password.input';

@Injectable()
export class UsersService {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}

  async register(createUserInput: CreateUserInput) {
    const passwordHash = await bcrypt.hash(createUserInput.password, 10);
    return await this.prismaService.user.create({
      data: {
        name: createUserInput.name,
        email: createUserInput.email,
        password: passwordHash,
        role: UserRole[createUserInput.userRole],
      },
    });
  }

  async findAll() {
    // TODO pagination and seaching
    return await this.prismaService.user.findMany({});
  }

  async findOne(email: string) {
    try {
      const user = await this.prismaService.user.findUnique({
        where: { email },
      });
      if (!user) throw new NotFoundException('Any user found');
      return user;
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async changePassword(changePassword: ChangePasswordInput) {
    try {
      const { email, password, newPassword } = changePassword;
      const user = await this.findOne(email);
      const hasMatch = await bcrypt.compare(password, user.password);
      if (!hasMatch) throw new BadRequestException(`Incorrect Password`);
      const hashPassword = await bcrypt.hash(newPassword, 10);
      const response = await this.prismaService.user.update({
        where: { email },
        data: { password: hashPassword },
      });
      return !!response;
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async update(updateUserInput: UpdateUserInput) {
    try {
      const user = await this.prismaService.user.findUnique({
        where: { id: updateUserInput.id },
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, ...rest } = updateUserInput;
      if (!user) throw new NotFoundException('Not found user');
      return await this.prismaService.user.update({
        where: {
          id: updateUserInput.id,
        },
        data: {
          ...user,
          ...rest,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async toggleActivateStatus(email: string) {
    const { isActive } = await this.findOne(email);
    return this.prismaService.user.update({
      where: {
        email,
      },
      data: {
        isActive: !isActive,
      },
    });
  }
}
