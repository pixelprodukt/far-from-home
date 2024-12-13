import { ActionDto } from './Action.dto';
import { RoomId } from '../RoomId.enum';

export interface RoomDto {
    id: RoomId;
    text: string;
    actions: ActionDto[]
}