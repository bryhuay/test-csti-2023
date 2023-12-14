import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  UseGuards,
  Request,
  Logger,
  InternalServerErrorException,
} from '@nestjs/common';
import { AppService } from './app.service';
import {
  CreateMoneyRequestDto,
  UpdteMoneyRequestDto,
  SaleMoneyRequestDto,
} from './dto/money.dto';
import { AuthGuard } from './middleware/auth.guard';

@Controller('money')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard)
  @Get('list')
  getAllMoney() {
    try {
      return this.appService.getAllMoney();
    } catch (error) {
      Logger.error(error.message);
      throw new InternalServerErrorException();
    }
  }

  @UseGuards(AuthGuard)
  @Post('create')
  async create(@Body() req: CreateMoneyRequestDto, @Request() data) {
    try {
      const { user: id } = data;
      return this.appService.createMoney(req, id);
    } catch (error) {
      Logger.error(error.message);
      throw new InternalServerErrorException();
    }
  }

  @UseGuards(AuthGuard)
  @Put('update')
  async update(@Body() req: UpdteMoneyRequestDto, @Request() data) {
    try {
      const { user: id } = data;
      return this.appService.updateMoney(req, id);
    } catch (error) {
      Logger.error(error.message);
      throw new InternalServerErrorException();
    }
  }

  @UseGuards(AuthGuard)
  @Post('sale')
  async sale(@Body() req: SaleMoneyRequestDto) {
    try {
      return this.appService.saleMoney(req);
    } catch (error) {
      Logger.error(error.message);
      throw new InternalServerErrorException();
    }
  }
}
