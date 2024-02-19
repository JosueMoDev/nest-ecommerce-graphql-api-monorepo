import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import {
  CreateUserInput,
  UpdateUserInput,
  ChangePasswordInput,
} from './inputs';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  registerUser(@Args('registerUserInput') createUserInput: CreateUserInput) {
    return this.usersService.register(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('email', { type: () => String }) email: string) {
    return this.usersService.findOne(email);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    console.log(updateUserInput);
    return this.usersService.update(updateUserInput);
  }

  @Mutation(() => Boolean)
  changePassword(
    @Args('changePasswordInput', { type: () => ChangePasswordInput })
    changePasswordInput: ChangePasswordInput,
  ) {
    return this.usersService.changePassword(changePasswordInput);
  }

  @Mutation(() => User, {
    description: 'This mutations change user activate status',
  })
  toggleActiveStatus(@Args('email', { type: () => String }) email: string) {
    return this.usersService.toggleActivateStatus(email);
  }
}
