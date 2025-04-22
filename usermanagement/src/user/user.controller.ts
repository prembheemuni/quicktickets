import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/auth.guard';
import { KafkaService } from 'src/kafka/kafka.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly kafkaService: KafkaService,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const newUser = await this.userService.createUser(createUserDto);
    // await this.kafkaService.sendMessage('user-topic', JSON.stringify(newUser));
    return newUser;
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.userService.getAllUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUserById(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.removeUserById(id);
  }
}
