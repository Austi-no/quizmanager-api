import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQuizDto } from '../dto/create-quiz.dto';
import { Question } from '../entity/question.entity';
import { Quiz } from '../entity/quiz.entity';
import { QuizRepository } from '../repository/quiz.repository';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository)
    private quizRepository: QuizRepository,
  ) {}

  getQuizes() {
    return this.quizRepository.find();
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne(id, { relations: ['questions'] });
  }

  async createQuiz(quiz: createQuizDto): Promise<Quiz> {
    return await this.quizRepository.save(quiz);
  }

  async getAllQuiz() {
    return await this.quizRepository
      .createQueryBuilder('q')
      .leftJoinAndSelect('q.questions', 'qt')
      // .leftJoinAndSelect('qt.options', 'o')
      .getMany();
  }
}
