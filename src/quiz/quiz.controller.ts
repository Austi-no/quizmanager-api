import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { createQuizDto } from './dto/create-quiz.dto';
import { Quiz } from './quiz.entity';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get('/')
  @HttpCode(200)
  getAllQuizzes() {
    return this.quizService.getQuizes();
  }

  @Post('/add')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: createQuizDto): Promise<Quiz> {
    return await this.quizService.createQuiz(quizData);
  }
}
