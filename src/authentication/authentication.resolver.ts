import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthenticationService } from './authentication.service';
import { Authentication } from './entities/authentication.entity';
import { LoginInput } from './inputs';

@Resolver(() => Authentication)
export class AuthenticationResolver {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Mutation(() => Authentication)
  createAuthentication() {
    return this.authenticationService.register();
  }

  @Query(() => Authentication, { name: 'Login' })
  login(
    @Args('loginInput', { type: () => LoginInput }) loginInput: LoginInput,
  ) {
    return this.authenticationService.login(loginInput);
  }

  @Mutation(() => Authentication)
  validate() {
    return this.authenticationService.validate();
  }
}
