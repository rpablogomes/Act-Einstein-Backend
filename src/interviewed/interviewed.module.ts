import { Module } from '@nestjs/common';
import { InterviewedService } from './interviewed.service';
import { InterviewedController } from './interviewed.controller';
import { Questions } from 'src/questions/entities/questions.entity';
import { Researches } from 'src/researches/entities/researches.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Interviewed } from './entities/interviewed.entity';
import { ResponseQuestionsInterviewed } from './entities/response-questions-interviewed.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Interviewed, ResponseQuestionsInterviewed])
  ],
  controllers: [InterviewedController],
  providers: [InterviewedService, Questions, Researches],
})
export class InterviewedModule {}
