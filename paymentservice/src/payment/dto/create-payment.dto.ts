import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  bookingId: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsEnum(['initiated', 'completed', 'failed'])
  status: 'initiated' | 'completed' | 'failed';

  @IsNotEmpty()
  @IsEnum(['credit_card', 'upi', 'net_banking'])
  paymentMethod: 'credit_card' | 'upi' | 'net_banking';
}
