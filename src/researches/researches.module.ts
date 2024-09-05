import { Module } from '@nestjs/common';
import { ResearchesService } from './researches.service';
import { ResearchesController } from './researches.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Researches } from './entities/researches.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Researches])],
  controllers: [ResearchesController],
  providers: [ResearchesService],
})
export class ResearchesModule {}
