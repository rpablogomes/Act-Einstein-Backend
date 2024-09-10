import {
  Entity,
  PrimaryColumn,
  ManyToOne,
  Column,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Interviewed } from './interviewed.entity';
import { Researches } from '../../researches/entities/researches.entity';
import { Questions } from '../../questions/entities/questions.entity';

@Entity('response_questions_interviewed')
export class ResponseQuestionsInterviewed {
  @PrimaryGeneratedColumn()
  response_questions_interviewed_id: number;

  @Column()
  interviewed_id: number;

  @Column()
  research_id: number;

  @Column()
  question_id: number;

  @Column({ type: 'text' })
  answer: string;

  @ManyToOne(() => Interviewed, (interviewed) => interviewed.answers)
  @JoinColumn({ name: 'interviewed_id' })
  interviewed: Interviewed;

  @ManyToOne(() => Researches, (research) => research.responses)
  @JoinColumn({ name: 'research_id' })
  research: Researches;

  @ManyToOne(() => Questions, (question) => question.question_id)
  @JoinColumn({ name: 'question_id' })
  question: Questions;
}
