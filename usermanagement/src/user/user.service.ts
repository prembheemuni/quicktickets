import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import * as bycrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private readonly userModel: typeof User) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userModel.findAll();
  }

  async createUser(user: CreateUserDto): Promise<User> {
    return await this.userModel.create({
      ...user,
      password: bycrypt.hashSync(user.password),
    });
  }

  async getUserById(id: string): Promise<User | null> {
    return await this.userModel.findOne({ where: { id: id } });
  }

  async updateUserById(
    id: string,
    user: UpdateUserDto,
  ): Promise<[number, User[]] | null> {
    return await this.userModel.update(
      { ...user },
      { where: { id: id }, returning: true },
    );
  }

  async removeUserById(id: string): Promise<Number> {
    return await this.userModel.destroy({ where: { id: id } });
  }
}
