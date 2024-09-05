import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Questions } from './entities/questions.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Questions)
    private questionsRepository: Repository<Questions>,
  ) {}
  
  async create(createQuestionDto: CreateQuestionDto) {
    try{
      const question = await this.questionsRepository.create(createQuestionDto);
      const { question_id } = await this.questionsRepository.save(question);
      return question_id
    }catch{
      throw new Error('Pergunta não adicionada')
    }
    
  }

  async findAll() {
    return await this.questionsRepository.find();
  }

  async findOne(question_id: number) {
      return await this.questionsRepository.findOne({
        where: { question_id }
      })
  }
    async update(question_id: number, updateQuestionDto: UpdateQuestionDto) {
      const question =  await this.questionsRepository.preload({
        question_id,
        ...updateQuestionDto,
      });
      await this.questionsRepository.save(question)
    }

  async remove(id: number) {
    return await this.questionsRepository.delete(id);
  }
}
