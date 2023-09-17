import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, MaxLength, IsNotEmpty } from 'class-validator';

export class CreateNotePayloadDTO {
  @ApiProperty({
    maxLength: 100,
    required: true,
    nullable: false,
    example: 'Today is a great day',
    description: 'note title',
  })
  @IsString()
  @IsNotEmpty()
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
