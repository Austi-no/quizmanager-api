import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('quiz')
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'The quiz unique identifier' })
  id: number;

  @Column({ type: 'varchar', length: 20, comment: 'The quiz title' })
  title: string;

  @Column({ type: 'varchar', length: 255, comment: 'The quiz description' })
  description: string;

  @Column({ type: 'boolean', default: true, comment: 'The quiz status' })
  isActive: boolean;
}
