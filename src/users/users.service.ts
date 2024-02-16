import { Inject, Injectable } from '@nestjs/common';
import { CreateUserInput } from './inputs/create-user.input';
import { UpdateUserInput } from './inputs/update-user.input';
import { PrismaService } from 'src/prisma.service';
import { UserRole } from './enum/user-role.enum';
import * as bcrypt from 'bcrypt';

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

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
