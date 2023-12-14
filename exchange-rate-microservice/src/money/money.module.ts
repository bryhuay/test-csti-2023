import { Module } from '@nestjs/common';
import { MoneyService } from './money.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Money } from './money.entitie';

@Module({
  imports: [TypeOrmModule.forFeature([Money])],
  providers: [MoneyService],
  exports: [MoneyService],
})
export class MoneyModule {}
