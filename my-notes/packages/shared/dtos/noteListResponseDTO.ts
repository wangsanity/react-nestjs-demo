import { Note } from '../models/note.entity';

export interface noteListResponseDTO {
  count?: number;
  list?: Note[];
}
