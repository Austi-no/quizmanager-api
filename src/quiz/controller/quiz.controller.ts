import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminRoleGuard } from 'src/auth/guards/admin-role.guard';
import { Roles } from 'src/auth/guards/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { createQuizDto } from '../dto/create-quiz.dto';
import { Quiz } from '../entity/quiz.entity';
import { QuizService } from '../service/quiz.service';

@ApiTags('Quiz controller')
@ApiBearerAuth()
@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get('/')
  @HttpCode(200)
  @UseGuards(RolesGuard)
  @Roles('admin', 'user')
  async getAllQuizzes() {
    return await this.quizService.getAllQuiz();
  }

  @Post('/add')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  @UseGuards(AdminRoleGuard)
  async createQuiz(@Body() quizData: createQuizDto): Promise<Quiz> {
    return await this.quizService.createQuiz(quizData);
  }

  @Get('/:id')
  getQuizById(@Param('id', ParseIntPipe) id: number) {
    return this.quizService.getQuizById(id);
  }
}
