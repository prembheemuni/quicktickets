import {
  Body,
  Controller,
  Get,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async loginUser(@Body() userDetails: LoginUserDto) {
    const response = await this.authService.login(userDetails);

    if (response === null) {
      throw new UnauthorizedException('Not found');
    }

    return response;
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile() {
    return { message: 'Profile is here' };
  }
}
