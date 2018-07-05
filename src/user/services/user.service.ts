import { Model } from 'mongoose';
import { Injectable, Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../interface/user.interface';
import { UserDTO } from '../dto/user.dto';

@Injectable()
@Component()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(dto: UserDTO): Promise<User> {
    const created = new this.userModel(dto);
    return await created.save();
    // const created = dto;
    // return created;
  }

  async findAll(): Promise<User[]> {
    const all = this.userModel.find().exec();
    // const all = [];
    return await all;
  }
}
