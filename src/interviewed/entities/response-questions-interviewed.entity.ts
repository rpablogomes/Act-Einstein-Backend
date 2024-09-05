import { Entity, PrimaryColumn, ManyToOne, Column, JoinColumn } from 'typeorm';
import { Interviewed } from './interviewed.entity';
import { Researches } from 'src/researches/entities/researches.entity';
import { Questions } from 'src/questions/entities/questions.entity';


@Entity('response_questions_interviewed')

export class ResponseQuestionsInterviewed {
  @PrimaryColumn()
  interviewed_id: number;

  @PrimaryColumn()
  research_id: number;

  @PrimaryColumn()
  question_id: number;

  @Column({ type: 'text' })
  answer: string;

  @ManyToOne(() => Interviewed, (interviewed) => interviewed.answers)
  @JoinColumn({ name: 'interviewed_id' })
  interviewed?: Interviewed;

  @ManyToOne(() => Researches, (research) => research.research_id)
  @JoinColumn({ name: 'research_id' })
  research: Researches

  @ManyToOne(() => Questions, (question) => question.question_id)
  @JoinColumn({ name: 'question_id' })
  question: Questions;
}
