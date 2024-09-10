import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInterviewedDto } from './dto/create-interviewed.dto';
// import { UpdateInterviewedDto } from './dto/update-interviewed.dto';
import { ResponseQuestionsInterviewed } from './entities/response-questions-interviewed.entity';
import { Interviewed } from './entities/interviewed.entity';
import { Questions } from 'src/questions/entities/questions.entity';

@Injectable()
export class InterviewedService {
  constructor(
    @InjectRepository(Interviewed)
    private interviewedRepository: Repository<Interviewed>,

    @InjectRepository(ResponseQuestionsInterviewed)
    private readonly responseQuestionsInterviewedRepository: Repository<ResponseQuestionsInterviewed>,
  ) {}

  async create(createInterviewedDto: CreateInterviewedDto) {
    const interviewed_data = this.interviewedRepository.create({
      respondent_email: createInterviewedDto.respondent_email,
      public_group: createInterviewedDto.public_group,
      stars: createInterviewedDto.stars,
    });

    const savedInterviewed =
      await this.interviewedRepository.save(interviewed_data);

    const responses = createInterviewedDto.answers.map((answer) => ({
      interviewed_id: savedInterviewed.interviewed_id,
      research_id: createInterviewedDto.research_id,
      question_id: answer.question_id,
      answer: answer.answer,
    }));

    await this.responseQuestionsInterviewedRepository.save(responses);

    return savedInterviewed.interviewed_id;
  }

  async findAll() {
    return await this.interviewedRepository.find({
      relations: ['answers'],
    });
  }

  async findOne(interviewed_id: number) {
    return await this.interviewedRepository.findOne({
      where: { interviewed_id },
      relations: ['answers'],
    });
  }

//   async update(
//     interviewed_id: number,
//     updateInterviewedDto: UpdateInterviewedDto,
//   ) {
//     const existingInterviewed = await this.interviewedRepository.findOne({
//       where: { interviewed_id },
//       relations: ['answers'],
//     });

//     existingInterviewed.respondent_email =
//       updateInterviewedDto.respondent_email;
//     existingInterviewed.public_group = updateInterviewedDto.public_group;
//     existingInterviewed.stars = updateInterviewedDto.stars;

//     const savedInterviewed =
//       await this.interviewedRepository.save(existingInterviewed);

//     const responses = updateInterviewedDto.answers.map((answer) => ({
//       interviewed_id: savedInterviewed.interviewed_id,
//       research_id: answer.research_id,
//       question_id: answer.question_id,
//       answer: answer.answer,
//     }));

//     await this.responseQuestionsInterviewedRepository.save(responses);

//     return savedInterviewed.interviewed_id;
//   }

//   async remove(id: number) {
//     return await this.interviewedRepository.delete(id);
//   }
}
