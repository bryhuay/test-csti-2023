import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Money } from './money.entitie';

@Injectable()
export class MoneyService {
  constructor(
    @InjectRepository(Money)
    private moneyRepository: Repository<Money>,
  ) {}

  async findAll(): Promise<Money[]> {
    return await this.moneyRepository.find({
      select: {
        id: true,
        prefix: true,
        prefixChange: true,
        salePrice: true,
      },
    });
  }

  async findOne(prefix: string, prefixChange: string): Promise<Money> {
    return await this.moneyRepository.findOne({
      where: {
        prefix: prefix,
        prefixChange: prefixChange,
      },
      select: {
        id: true,
        prefix: true,
        prefixChange: true,
        salePrice: true,
      },
    });
  }

  async create(money: Money): Promise<Money> {
    return await this.moneyRepository.save(money);
  }

  async update(money: Money): Promise<Money> {
    if (!money.id) {
      return null;
    }
    return await this.moneyRepository.save(money);
  }
}
