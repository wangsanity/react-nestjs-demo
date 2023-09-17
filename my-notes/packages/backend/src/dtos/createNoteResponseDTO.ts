import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, MaxLength } from 'class-validator';

export class CreateNoteResponseDTO {
  @ApiProperty({
    maxLength: 100,
    required: true,
    nullable: true,
    example: 'Today is a great day',
    description: 'note title',
  })
  @IsString()
  @MaxLength(100)
  title: string;

  @ApiProperty({
    description: 'note detail',
    required: false,
    nullable: true,
    example: 'Got promoted',
  })
  @IsOptional()
  @IsString()
  detail?: string;
}
