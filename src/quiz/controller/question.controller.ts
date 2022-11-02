import {
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
  HttpCode,
  ParseIntPipe,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { createQuestionDto } from '../dto/create-question.dto';
import { Question } from '../entity/question.entity';
import { QuestionService } from '../service/question.service';
import { QuizService } from '../service/quiz.service';

@ApiTags('Quiz controller')
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

  @Get('/:id')
  getQuestionById(@Param('id', ParseIntPipe) id: number) {
    return this.questionService.findQuestionById(id);
  }

  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createQuestion(@Body() question: createQuestionDto): Promise<Question> {
    const quiz = await this.quizService.getQuizById(question.quizId);
    return await this.questionService.createQuestion(question, quiz);
  }
}
