import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtTokenService: JwtService,
  ) {}

  async validateUserCredentials(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email, password);
    if (user) {
      return user;
    }
    return null;
  }

  async loginWithCredentials(user) {
    const { id, firstName, lastName, email } = user;
    const payload = {
      id,
      firstName,
      lastName,
      email,
    };
    return {
      accessToken: this.jwtTokenService.sign(payload),
    };
  }
}
