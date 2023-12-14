import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  Injectable,
} from '@nestjs/common';
import axios from 'axios';
import { GLOBAL } from '../constants';
@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const token = req.headers[GLOBAL.AUTH_HEADER];
    if (!token) {
      throw new UnauthorizedException();
    }
    const config = {
      headers: {
        Authorization: token,
      },
    };

    try {
      const { data } = await axios.get(GLOBAL.URL_AUTH, config);

      if (data) {
        req.user = data;
        return true;
      }
      throw new UnauthorizedException();
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
}
