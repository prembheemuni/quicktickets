import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
export class CreateNotificationDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsEnum(['booking_confirmation', 'payment_success'])
  type: 'booking_confirmation' | 'payment_success';

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsNotEmpty()
  @IsEnum(['pending', 'sent'])
  status: 'pending' | 'sent';
}
