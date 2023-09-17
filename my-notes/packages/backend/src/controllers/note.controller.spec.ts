import { Test, TestingModule } from '@nestjs/testing';
import { NoteRepository } from '../repository/note.repository';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';

describe('NoteController', () => {
  let noteController: NoteController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NoteController],
      providers: [NoteService, NoteRepository],
    }).compile();
    noteController = app.get<NoteController>(NoteController);
  });

  describe('note', () => {
    it('should return "Hello World!"', async () => {
      const notes = [{ title: 'New note' }];
      jest.spyOn(NoteService.prototype, 'getNotes').mockImplementation(
        () =>
          new Promise((resolve) => {
            resolve({
              count: 1,
              list: notes,
            });
          }),
      );
      const result = await noteController.getNotes();
      expect(result.count).toBe(1);
      expect(result.list).toBe(notes);
    });
  });
});
