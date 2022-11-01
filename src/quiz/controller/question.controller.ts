import {
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
  HttpCode,
} from '@nestjs/common';
import { createQuestionDto } from '../dto/create-question.dto';
import { Question } from '../entity/question.entity';
import { QuestionService } from '../service/question.service';
import { QuizService } from '../service/quiz.service';

@Controller('question')
export class QuestionController {
  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
  ) {}

  @Get('/all')
  getAllQuestions() {
    return this.questionService.getAllQuestions();
  }

  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createQuestion(@Body() question: createQuestionDto): Promise<Question> {
    const quiz = await this.quizService.getQuizById(question.quizId);
    return await this.questionService.createQuestion(question, quiz);
  }
}
