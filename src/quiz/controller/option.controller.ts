import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { createOptionDto } from '../dto/option.dto';
import { OptionService } from '../service/option.service';
import { QuestionService } from '../service/question.service';

@Controller('question/option')
export class OptionController {
  constructor(
    private questionService: QuestionService,
    private optionService: OptionService,
  ) {}

  @Get('/all')
  getAllOptions() {
    return this.questionService.getAllQuestions();
  }

  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async saveOptionToQuestion(@Body() optionDto: createOptionDto) {
    const question = await this.questionService.findQuestionById(
      optionDto.questionId,
    );

    const option = await this.optionService.createOption(optionDto, question);
    return option;
  }
}
