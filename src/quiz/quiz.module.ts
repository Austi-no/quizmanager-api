import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { OptionController } from './controller/option.controller';
import { QuestionController } from './controller/question.controller';
import { QuizController } from './controller/quiz.controller';
import { OptionRepository } from './repository/option.repository';
import { QuestionRepository } from './repository/question.repository';
import { QuizRepository } from './repository/quiz.repository';
import { OptionService } from './service/option.service';
import { QuestionService } from './service/question.service';
import { QuizService } from './service/quiz.service';

@Module({
  controllers: [QuizController, QuestionController, OptionController],
  imports: [
    TypeOrmModule.forFeature([
      QuizRepository,
      QuestionRepository,
      OptionRepository,
    ]),
    UserModule,
  ],
  providers: [QuizService, QuestionService, OptionService],
})
export class QuizModule {}
