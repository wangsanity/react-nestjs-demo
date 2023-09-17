import { HealthController } from './health.controller';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';

export const controllers = [NoteController, HealthController];
export const services = [NoteService];
