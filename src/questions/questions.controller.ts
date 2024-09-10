import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  InternalServerErrorException,
} from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('questions')
@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  async create(@Body() createQuestionDto: CreateQuestionDto) {
    try {
      const question_id = await this.questionsService.create(createQuestionDto);
      return question_id;
    } catch (error) {
      return 'Erro:' + error;
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.questionsService.findAll();
    } catch (error) {
      return 'Erro:' + error;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const question = await this.questionsService.findOne(+id);
      return question;
    } catch (error) {
      return 'Erro:' + error;
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    try {
      await this.questionsService.update(+id, updateQuestionDto);
      return 'Atualizada com sucesso';
    } catch (error) {
      return 'Erro:' + error;
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const result = await this.questionsService.remove(+id);
      return 'removido com sucesso';
    } catch (error) {
      return 'Erro:' + error;
    }
  }
}
