import { Controller, Get, Req, Param, Body, Post } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UserService } from './services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(@Req() request) {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() dto: UserDTO) {
    return this.userService.create(dto);
  }

  @Get(':username')
  async findOne(@Param() params) {
    console.log('PARAMS', params);
    let response = params;
    return response;
  }
}
