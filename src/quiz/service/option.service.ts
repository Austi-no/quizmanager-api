import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createOptionDto } from '../dto/option.dto';
import { Question } from '../entity/question.entity';
import { OptionRepository } from '../repository/option.repository';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(OptionRepository)
    private optionRepository: OptionRepository,
  ) {}

  async createOption(option: createOptionDto, question: Question) {
    const newOption = await this.optionRepository.save({
      text: option.text,
      iscorrect: option.isCorrect,
    });

    question.options = [...question.options, newOption];
    question.save();
    return newOption;
  }
}
