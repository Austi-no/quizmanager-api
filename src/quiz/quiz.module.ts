import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from './controller/question.controller';
import { QuizController } from './controller/quiz.controller';
import { QuestionRepository } from './repository/question.repository';
import { QuizRepository } from './repository/quiz.repository';
import { QuestionService } from './service/question.service';
import { QuizService } from './service/quiz.service';

@Module({
  controllers: [QuizController, QuestionController],
  imports: [TypeOrmModule.forFeature([QuizRepository, QuestionRepository])],
  providers: [QuizService, QuestionService],
})
export class QuizModule {}
