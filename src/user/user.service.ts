import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export interface User {
  id: string;
  name: string;
  email: string;
}

@Injectable()
export class UserService {
  private users: User[] = [];
  create(createUserDto: CreateUserDto): User {
    const newUser: User = {
      id: Math.random().toString(36).substring(7),
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }
  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto): User {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    const updatedUser = {
      ...this.users[userIndex],
      ...updateUserDto,
    };
    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  remove(id: string): void {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    this.users.splice(userIndex, 1);
  }
}
