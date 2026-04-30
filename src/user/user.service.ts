import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/User.entity';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    // const newUser: User = {
    //   // userId: Math.random().toString(36).substring(7),
    //   ...createUserDto,
    // };
    const newUser = await this.userRepository.save(createUserDto);
    return newUser;
  }
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { userId: id } });
    // const user = users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<void> {
    const updatedUser = await this.userRepository.update(
      { userId: id },
      updateUserDto,
    );
    // const userIndex = await users.findIndex((user) => user.id === id);
    if (updatedUser.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    // const updatedUser = {
    //   ...users[userIndex],
    //   ...updateUserDto,
    // };
    // users[userIndex] = updatedUser;
    // return updatedUser;
  }

  async remove(id: string): Promise<void> {
    const deletedUser = await this.userRepository.delete({ userId: id }); // Should have a disable column in user entity?
    // const userIndex = users.findIndex((user) => user.id === id);
    if (deletedUser.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    // users.splice(userIndex, 1);
  }
}
