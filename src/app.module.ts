import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResearchesModule } from './researches/researches.module';
import { QuestionsModule } from './questions/questions.module';
import { Questions } from './questions/entities/questions.entity';
import { Researches } from './researches/entities/researches.entity';
import { InterviewedModule } from './interviewed/interviewed.module';
import { Interviewed } from './interviewed/entities/interviewed.entity';
import { ResponseQuestionsInterviewed } from './interviewed/entities/response-questions-interviewed.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'einstein-db',
      password: 'einstein',
      database: 'einstein-db',
      entities: [Questions, Researches, Interviewed, ResponseQuestionsInterviewed],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([]),
    ResearchesModule,
    QuestionsModule,
    InterviewedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
