import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQuestionDto } from '../dto/create-question.dto';
import { Question } from '../entity/question.entity';
import { Quiz } from '../entity/quiz.entity';
import { QuestionRepository } from '../repository/question.repository';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionRepository)
    private questionRepository: QuestionRepository,
  ) {}

  getAllQuestions() {
    return this.questionRepository.find();
  }
  async createQuestion(
    question: createQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    const newQuestion = await this.questionRepository.save({
      question: question.question,
    });
    quiz.questions = [...quiz.questions, newQuestion];
    await quiz.save();
    return newQuestion;
  }

  async findQuestionById(id: number): Promise<Question> {
    return await this.questionRepository.findOne(id, {
      relations: ['quiz', 'options'],
    });
  }
}
