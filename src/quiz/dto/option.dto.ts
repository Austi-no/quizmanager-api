import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class createOptionDto {
  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'the option should have a name' })
  text: string;
  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'The question id is required' })
  questionId: number;
  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'This is required' })
  isCorrect: boolean;
}
