import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResearchesModule } from './researches/researches.module';
import { QuestionsModule } from './questions/questions.module';
import { InterviewedModule } from './interviewed/interviewed.module';
import { dataSourceOptions } from 'AppDataSource';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature([]),
    ResearchesModule,
    QuestionsModule,
    InterviewedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
