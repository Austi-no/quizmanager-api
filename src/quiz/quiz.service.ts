import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQuizDto } from './dto/create-quiz.dto';
import { Quiz } from './quiz.entity';
import { QuizRepository } from './quiz.repository';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository)
    private quizRepository: QuizRepository,
  ) {}

  getQuizes() {
    return this.quizRepository.find();
  }

  async createQuiz(quiz: createQuizDto): Promise<Quiz> {
    return await this.quizRepository.save(quiz);
  }
}
