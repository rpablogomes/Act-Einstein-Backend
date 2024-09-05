import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

class AnswerDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  question_id: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  answer: string;
}

export class CreateInterviewedDto {
    @ApiProperty()  
    @IsString()
    @IsNotEmpty()
    respondent_email: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    public_group: number;
    
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    stars: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    research_id: number;

    @ApiProperty({ type: [AnswerDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnswerDto)
    answers: AnswerDto[];
  }