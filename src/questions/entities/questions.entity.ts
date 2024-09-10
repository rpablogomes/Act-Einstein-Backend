import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { Researches } from '../../researches/entities/researches.entity';
import { ResponseQuestionsInterviewed } from '../../interviewed/entities/response-questions-interviewed.entity';

@Entity('questions')
export class Questions {
  @PrimaryGeneratedColumn()
  question_id: number;

  @Column({ type: 'text' })
  question_text: string;

  @ManyToMany(() => Researches, (research) => research.questions)
  researches?: Researches[];

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
