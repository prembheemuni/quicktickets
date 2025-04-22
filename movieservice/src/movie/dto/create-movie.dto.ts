import {
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsNumber,
  IsArray,
  ArrayMinSize,
  IsString,
  IsDateString,
} from 'class-validator';

export class ShowdetailsDto {
  @IsNotEmpty()
  @IsString()
  cinemaLocation: string;

  @IsNotEmpty()
  @IsDateString()
  startTime: Date;

  @IsNotEmpty()
  @IsNumber()
  availableSeats: number;
}

export class CreateMovieDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  title: string;

  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(500)
  description: string;

  @IsNotEmpty()
  @IsString()
  duration: string;

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  genre: string[];

  @IsNotEmpty()
  @IsString()
  language: string;

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  showdetails: ShowdetailsDto[];
}
