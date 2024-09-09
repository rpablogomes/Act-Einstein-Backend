import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ResponseQuestionsInterviewed } from './response-questions-interviewed.entity';

@Entity('interviewed')
export class Interviewed {
  @PrimaryGeneratedColumn()
  interviewed_id: number;

  @Column({ type: 'varchar', length: 255 })
  respondent_email: string;

  @Column({ type: 'int' })
  public_group: number;

  @Column({ type: 'int', width: 1 })
  stars: number;

  @OneToMany(
    () => ResponseQuestionsInterviewed,
    (response) => response.interviewed,
  )
  answers: ResponseQuestionsInterviewed[];
}
