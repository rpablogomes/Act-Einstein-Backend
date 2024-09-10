import {
  Injectable,
} from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Questions } from './entities/questions.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Questions)
    private readonly questionsRepository: Repository<Questions>,
  ) {}

  async create(createQuestionDto: CreateQuestionDto): Promise<number | string> {
    try {
      const question = this.questionsRepository.create(createQuestionDto);
      const result = await this.questionsRepository.save(question);
      return result.question_id;
    } catch (error) {
      return 'Erro: ' + error;
    }
  }

  async findAll(): Promise<Questions[]> {
    return this.questionsRepository.find();
  }

  async findOne(question_id: number): Promise<Questions | string> {
    const question = await this.questionsRepository.findOne({
      where: { question_id },
    });
    if (!question) {
      return 'Não existe';
    }
    return question;
  }

  async update(
    question_id: number,
    updateQuestionDto: UpdateQuestionDto,
  ): Promise<void | string> {
    const question = await this.questionsRepository.preload({
      question_id,
      ...updateQuestionDto,
    });
    if (!question) {
      return 'Não existe essa pergunta';
    }
    await this.questionsRepository.save(question);
  }

  async remove(question_id: number): Promise<void | string> {
    const result = await this.questionsRepository.delete(question_id);
    if (result.affected === 0) {
      return 'Não removido';
    }
  }
}
