import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Quiz } from './quiz.entity';

@Entity('question')
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'The question unique identifier' })
  id: number;

  @Column({ type: 'varchar', length: 255, comment: 'The question' })
  question: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz;
}
