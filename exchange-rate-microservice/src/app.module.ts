import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoneyModule } from './money/money.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Money } from './money/money.entitie';

@Module({
  imports: [
    MoneyModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [Money],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
