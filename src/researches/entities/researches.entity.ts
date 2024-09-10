import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Questions } from '../../questions/entities/questions.entity';
import { ResponseQuestionsInterviewed } from '../../interviewed/entities/response-questions-interviewed.entity';

@Entity('researches')
export class Researches {
  @PrimaryGeneratedColumn()
  research_id: number;

  @Column()
  title: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at?: string;

  @ManyToMany(() => Questions, (question) => question.researches)
  @JoinTable({
    name: 'researches_questions',
    joinColumn: { name: 'research_id', referencedColumnName: 'research_id' },
    inverseJoinColumn: {
      name: 'question_id',
      referencedColumnName: 'question_id',
    },
  })
  questions: Questions[];

  @OneToMany(
    () => ResponseQuestionsInterviewed,
    (response) => response.research,
    {
      cascade: ['insert', 'update', 'remove'],
      onDelete: 'CASCADE',
    },
  )
  responses?: ResponseQuestionsInterviewed[];
}
