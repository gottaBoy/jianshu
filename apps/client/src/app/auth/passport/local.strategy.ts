import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'email_or_mobile',
      passwordField: 'password',
      passReqToCallback: false,
    });
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateLocalUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
