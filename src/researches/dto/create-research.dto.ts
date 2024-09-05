import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty, IsArray } from 'class-validator';

export class CreateResearchDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  questions_ids: number[];
}
