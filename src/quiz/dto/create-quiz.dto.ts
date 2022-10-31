import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class createQuizDto {
  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'the quiz should have a title' })
  @Length(5, 20, {
    message: 'the quiz title should be between 5 and 20 characters',
  })
  title: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'the quiz should have a description' })
  description: string;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}
