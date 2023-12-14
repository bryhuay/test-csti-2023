import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entitie';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  exports: [UserService],
})
export class UsersModule {}
