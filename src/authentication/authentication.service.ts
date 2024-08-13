import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { LoginInput } from './inputs';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthenticationService {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}

  register() {
    return 'This action adds a new authentication';
  }

  async login(loginInput: LoginInput) {
    const { email, password } = loginInput;

    const user = await this.prismaService.user.findUnique({ where: { email } });
    if (!user) throw new NotFoundException('User not found');
    const hasPasswordMatch = await bcrypt.compare(password, user.password);
    if (!hasPasswordMatch) throw new NotFoundException('Wrong Credentials');

    return {
      user,
      token: 'ljñfjlskjalksjdalksdjalskdjasldk',
    };
  }

  validate() {
    return `This action updates a authentication`;
  }
}
