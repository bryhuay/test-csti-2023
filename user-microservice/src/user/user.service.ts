import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entitie';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find({
      select: {
        firstName: true,
        lastName: true,
        id: true,
        email: true,
      },
    });
  }

  async findOne(email: string, password: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        email: email,
        password: password,
      },
      select: {
        firstName: true,
        lastName: true,
        id: true,
        email: true,
      },
    });
  }

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
}
