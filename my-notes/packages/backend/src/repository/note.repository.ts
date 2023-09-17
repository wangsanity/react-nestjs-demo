import { Note } from 'src/models/note.entity';
import { Repository } from 'typeorm';

export class NoteRepository extends Repository<Note> {
  getNotes(createdBy: string): Promise<Note[]> {
    const where: { [key: string]: string } = {};
    if (createdBy) {
      where.createdBy = createdBy;
    }
    return this.createQueryBuilder('note')
      .where(where)
      .orderBy({
        note_id: 'DESC',
      })
      .getMany();
  }
}
