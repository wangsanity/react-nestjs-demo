import { ApiProperty } from '@nestjs/swagger';
import { Note } from '../models/note.entity';
import { IsNumber, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { noteListResponseDTO } from '@my-notes/shared';
import { Type } from 'class-transformer';

export class GetNoteListResponseDTO implements noteListResponseDTO {
  @ApiProperty({
    description: 'note count',
  })
  @IsNumber()
  @IsOptional()
  count?: number;

  @ApiProperty({
    description: 'note object list',
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Note)
  list?: Note[];
}
