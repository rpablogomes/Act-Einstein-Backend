// import { ApiProperty, PartialType } from '@nestjs/swagger';
// import { CreateInterviewedDto } from './create-interviewed.dto';
// import { IsArray, IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';
// import { Type } from 'class-transformer';

// class AnswerDto {
//   @ApiProperty()
//   @IsNumber()
//   @IsNotEmpty()
//   question_id: number;

//   @ApiProperty()
//   @IsString()
//   @IsNotEmpty()
//   answer: string;

//   @ApiProperty()
//   @IsNumber()
//   @IsNotEmpty()
//   research_id?: number;
// }

// export class UpdateInterviewedDto {
//     @ApiProperty()
//     @IsString()
//     @IsNotEmpty()
//     respondent_email: string;

//     @ApiProperty()
//     @IsNumber()
//     @IsNotEmpty()
//     public_group: number;

//     @ApiProperty()
//     @IsNumber()
//     @IsNotEmpty()
//     stars: number;

//     @ApiProperty({ type: [AnswerDto] })
//     @IsArray()
//     @ValidateNested({ each: true })
//     @Type(() => AnswerDto)
//     answers: AnswerDto[];
//   }
