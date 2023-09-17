import { Injectable } from '@nestjs/common';
import { CreateNotePayloadDTO } from 'src/dtos/createNotePayloadDTO';
import { CreateNoteResponseDTO } from 'src/dtos/createNoteResponseDTO';
import { GetNoteListResponseDTO } from '../dtos/getNoteListResponseDTO';
import { NoteRepository } from '../repository/note.repository';

@Injectable()
export class NoteService {
  constructor(private readonly noteRepository: NoteRepository) {}

  async createNote(note: CreateNotePayloadDTO): Promise<CreateNoteResponseDTO> {
    const savedNote = await this.noteRepository.save(note);
    return savedNote;
  }

  async getNotes(): Promise<GetNoteListResponseDTO> {
    const noteList = await this.noteRepository.getNotes('');
    return {
      count: noteList?.length,
      list: noteList,
    };
  }
}
