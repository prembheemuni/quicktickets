import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  IsDate,
} from 'class-validator';

export class CreateBookingDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  showdetailsId: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  seats: string[];

  @IsNotEmpty()
  @IsEnum(['pending', 'confirmed', 'cancelled'])
  status: 'pending' | 'confirmed' | 'cancelled';

  @IsOptional()
  @IsString()
  @IsUUID()
  paymentId?: string;
}
