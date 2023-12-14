import { Injectable } from '@nestjs/common';
import {
  CreateMoneyRequestDto,
  UpdteMoneyRequestDto,
  ResponseDto,
  SaleMoneyRequestDto,
} from './dto/money.dto';
import { MoneyService } from './money/money.service';
import { Money } from './money/money.entitie';
import { MESSAGES } from './constants';

@Injectable()
export class AppService {
  constructor(private moneyService: MoneyService) {}
  async createMoney(request: CreateMoneyRequestDto, idUser: number) {
    const res = new ResponseDto();
    const { prefix, prefixChange, salePrice } = request;
    const exist = await this.moneyService.findOne(prefix, prefixChange);
    if (exist) {
      res.success = false;
      res.message = MESSAGES.MONEY_ALREADY_EXISTS;
      res.data = null;
      return res;
    }
    let money = new Money();
    money.prefix = prefix;
    money.prefixChange = prefixChange;
    money.salePrice = salePrice;
    money.createdBy = idUser;
    money.createdAt = new Date();
    money.updatedBy = idUser;
    money.updatedAt = new Date();

    money = await this.moneyService.create(money);

    res.success = true;
    res.message = MESSAGES.CREATED_SUCCESS;
    res.data = money;
    return res;
  }
  async updateMoney(request: UpdteMoneyRequestDto, idUser: number) {
    const res = new ResponseDto();
    const { id, prefix, prefixChange, salePrice } = request;
    let money = new Money();
    money.id = id;
    money.prefix = prefix;
    money.prefixChange = prefixChange;
    money.salePrice = salePrice;
    money.updatedBy = idUser;
    money.updatedAt = new Date();

    money = await this.moneyService.update(money);

    res.success = true;
    res.message = MESSAGES.UPDATED_SUCCESS;
    res.data = money;
    return res;
  }
  async getAllMoney() {
    const res = new ResponseDto();
    const money = await this.moneyService.findAll();

    res.success = true;
    res.data = money;
    res.message = '';
    return res;
  }
  async saleMoney(request: SaleMoneyRequestDto) {
    const res = new ResponseDto();
    const { prefix, prefixChange, amount } = request;
    const money = await this.moneyService.findOne(prefix, prefixChange) || null;
    if (!money) {
      res.success = true;
      res.data = null;
      res.message = MESSAGES.MONEY_NOT_SUPPORTED;
      return res;
    }
    const { salePrice } = money;
    const exchange = {
      prefix,
      prefixChange,
      salePrice,
      amount,
      totalToChange: amount * salePrice,
    };

    res.success = true;
    res.data = exchange;
    res.message = MESSAGES.REQUEST_SUCCESS;
    return res;
  }
}
