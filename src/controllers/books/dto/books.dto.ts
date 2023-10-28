import { ValidateNested, ArrayMinSize, Min, IsNotEmpty, IsString, IsNumber, MinLength, MaxLength, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';
import { AuhtorDto } from './author.dto';

export class BookDto {

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  readonly name: string;

  @IsNotEmpty()
  @Type(() => AuhtorDto)
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  readonly author: Array<AuhtorDto>;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  readonly language: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly releaseYear: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  readonly publisher: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Min(10)
  readonly pages: number;

}