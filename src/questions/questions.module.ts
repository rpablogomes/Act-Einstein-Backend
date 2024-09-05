import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { Questions } from './entities/questions.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Questions])],
  controllers: [QuestionsController],
  providers: [QuestionsService],
})
export class QuestionsModule {}
