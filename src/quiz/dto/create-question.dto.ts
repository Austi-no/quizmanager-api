import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class createQuestionDto {
  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'the question should have a name' })
  @Length(5, 255, {
    message: 'the question should be between 5 and 20 characters',
  })
  question: string;
  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'The quiz id is required' })
  quizId: number;
}
