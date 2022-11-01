import { EntityRepository, Repository } from 'typeorm';
import { Quiz } from '../entity/quiz.entity';

@EntityRepository(Quiz)
export class QuizRepository extends Repository<Quiz> {}
