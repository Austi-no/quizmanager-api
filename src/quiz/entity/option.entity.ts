import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Question } from './question.entity';

@Entity('option')
export class Option extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'The option unique identifier' })
  id: number;

  @Column({ type: 'varchar' })
  text: string;

  @Column({ type: 'boolean', default: false })
  isCorrect: boolean;

  @ManyToOne(() => Question, (question) => question.options)
  question: Question;
}
