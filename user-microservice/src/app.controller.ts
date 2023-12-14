import {
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  Body,
  HttpCode,
  Logger,
  InternalServerErrorException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LoginRequestDto, CreateUserRequestDto } from './dto/user.dto';

@Controller('user')
export class AppController {
  constructor(private appService: AppService) {}

  @Post('login')
  @HttpCode(200)
  async login(@Body() req: LoginRequestDto) {
    try {
      return this.appService.loginWithCredentials(req);
    } catch (error) {
      Logger.error(error.message);
      throw new InternalServerErrorException();
    }
  }

  @Post('create')
  async create(@Body() req: CreateUserRequestDto) {
    try {
      return this.appService.createUser(req);
    } catch (error) {
      Logger.error(error.message);
      throw new InternalServerErrorException();
    }
  }

  @Get('list')
  async list() {
    try {
      return this.appService.getUsers();
    } catch (error) {
      Logger.error(error.message);
      throw new InternalServerErrorException();
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('validate')
  validate(@Request() req) {
    try {
      return req.user;
    } catch (error) {
      Logger.error(error.message);
      throw new InternalServerErrorException();
    }
  }
}
