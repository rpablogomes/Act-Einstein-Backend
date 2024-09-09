import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
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
  
  async create(createQuestionDto: CreateQuestionDto): Promise<number> {
    try {
      const question = this.questionsRepository.create(createQuestionDto);
      const result = await this.questionsRepository.save(question);
      return result.question_id;
    } catch (error) {
      console.error('Error creating question:', error);
      throw new InternalServerErrorException('Pergunta não adicionada');
    }
  }

  async findAll(): Promise<Questions[]> {
    return this.questionsRepository.find();
  }

  async findOne(question_id: number): Promise<Questions> {
    const question = await this.questionsRepository.findOne({
      where: { question_id },
    });
    if (!question) {
      throw new NotFoundException(`Question with ID ${question_id} not found`);
    }
    return question;
  }

  async update(question_id: number, updateQuestionDto: UpdateQuestionDto): Promise<void> {
    const question = await this.questionsRepository.preload({
      question_id,
      ...updateQuestionDto,
    });
    if (!question) {
      throw new NotFoundException(`Question with ID ${question_id} not found`);
    }
    await this.questionsRepository.save(question);
  }

  async remove(question_id: number): Promise<void> {
    const result = await this.questionsRepository.delete(question_id);
    if (result.affected === 0) {
      throw new NotFoundException(`Question with ID ${question_id} not found`);
    }
  }
}
