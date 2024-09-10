import { Module } from '@nestjs/common';
import { QuestionsController } from './questions.controller';
import { Questions } from './entities/questions.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Researches } from 'src/researches/entities/researches.entity';
import { ResponseQuestionsInterviewed } from 'src/interviewed/entities/response-questions-interviewed.entity';
import { Interviewed } from 'src/interviewed/entities/interviewed.entity';
import { QuestionsService } from './questions.service';

@Module({
  imports: [TypeOrmModule.forFeature([Questions, QuestionsService])],
  controllers: [QuestionsController],
  providers: [Interviewed, QuestionsService, Researches, ResponseQuestionsInterviewed],
})
export class QuestionsModule {}
