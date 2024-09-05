import { Injectable } from '@nestjs/common';
import { CreateResearchDto } from './dto/create-research.dto';
import { UpdateResearchDto } from './dto/update-research.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Researches } from './entities/researches.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ResearchesService {
  constructor(
    @InjectRepository(Researches)
    private researchRepository: Repository<Researches>,
  ) {}

  async create(createResearchDto: CreateResearchDto) {
      const data = {
        title: createResearchDto.title,
        questions: createResearchDto.questions_ids.map((question_id) => ({ question_id })),
      }
      const research = this.researchRepository.create(data);
      const {research_id} = await this.researchRepository.save(research);
      return research_id;

  }

  async findAll() {
    return await this.researchRepository.find({
      relations: ['questions'],
    });
  }

  async findOne(research_id: number) {
    const research = await this.researchRepository.findOne({
      where: { research_id },
      relations: ['questions'],
    });
    return research;
  }

  async update(research_id: number, updateResearchDto: UpdateResearchDto) {
    try {
      const data = {
        research_id,
        title: updateResearchDto.title,
        questions: updateResearchDto.questions_ids.map((question_id) => ({ question_id })),
      }
      const research = await this.researchRepository.preload(data);
      await this.researchRepository.save(research);
      return research_id;
    } catch (error) {
      throw new Error('Error updating research');
    }
  }

  async remove(research_id: number) {
    return await this.researchRepository.delete(research_id);
  }
}
