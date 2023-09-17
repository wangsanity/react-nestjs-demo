import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateNotePayloadDTO } from '../dtos/createNotePayloadDTO';
import { CreateNoteResponseDTO } from '../dtos/createNoteResponseDTO';
import { GetNoteListResponseDTO } from '../dtos/getNoteListResponseDTO';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Create note' })
  @ApiResponse({
    status: 200,
    type: CreateNoteResponseDTO,
    description: 'Create note',
  })
  createNote(
    @Body() payload: CreateNotePayloadDTO,
  ): Promise<CreateNoteResponseDTO> {
    return this.noteService.createNote(payload);
  }

  @Get('list')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get note list' })
  @ApiResponse({
    status: 200,
    type: GetNoteListResponseDTO,
    description: 'Get note list',
  })
  getNotes(): Promise<GetNoteListResponseDTO> {
    return this.noteService.getNotes();
  }
}
