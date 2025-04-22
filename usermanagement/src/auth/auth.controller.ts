import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto, VerifyPayload } from './dto/login-user.dto';
import { JwtAuthGuard } from './guards/auth.guard';

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

  @UseGuards(JwtAuthGuard)
  @Get('isAuthenticated')
  isAuth(@Req() req: Request) {
    return { message: 'User Valid' };
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile() {
    return { message: 'Profile is here' };
  }
}
