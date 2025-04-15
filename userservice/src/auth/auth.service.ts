import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/user/models/user.model';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private readonly userModel: typeof User,
    private readonly jwtService: JwtService,
  ) {}

  async login(
    userDetails: LoginUserDto,
  ): Promise<{ accessToken: string } | null> {
    const user = await this.userModel.findOne({
      where: { email: userDetails.email },
    });

    if (user !== null) {
      const isPasswordMatched = bcrypt.compareSync(
        userDetails.password,
        user.password,
      );
      if (isPasswordMatched) {
        const accessToken = this.jwtService.sign({ user: user, sub: user.id });
        return { accessToken };
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}
