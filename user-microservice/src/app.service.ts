import { Injectable } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
import {
  LoginRequestDto,
  CreateUserRequestDto,
  ResponseDto,
} from './dto/user.dto';
import { User } from './user/user.entitie';
import { MESSAGES } from './constans';

@Injectable()
export class AppService {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}
  async loginWithCredentials(request: LoginRequestDto) {
    const res = new ResponseDto();
    const { email, password } = request;
    const user = await this.authService.validateUserCredentials(
      email,
      password,
    );
    if (!user) {
      res.success = false;
      res.data = null;
      res.message = MESSAGES.LOGIN_ERROR;
      return res;
    }
    const { accessToken } = await this.authService.loginWithCredentials(user);
    res.success = true;
    res.data = { accessToken };
    res.message = MESSAGES.LOGIN_SUCCESS;
    return res;
  }
  async createUser(request: CreateUserRequestDto) {
    const res = new ResponseDto();
    const { firstName, lastName, email, password } = request;
    let user = new User();
    user.email = email;
    user.firstName = firstName;
    user.lastName = lastName;
    user.password = password;
    user = await this.userService.create(user);

    res.data = user;
    res.message = MESSAGES.CREATED_SUCCESS;
    res.success = true;
    return res;
  }
  async getUsers() {
    const res = new ResponseDto();
    const users = await this.userService.findAll();

    res.success = true;
    res.data = users;
    res.message = MESSAGES.REQUEST_SUCESS;
    return res;
  }
}
