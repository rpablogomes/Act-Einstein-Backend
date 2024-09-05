import { PartialType } from '@nestjs/swagger';
import { CreateQuestionDto } from './create-question.dto';
import { IsUUID } from 'class-validator';

export class UpdateQuestionDto extends PartialType(CreateQuestionDto) {
}
