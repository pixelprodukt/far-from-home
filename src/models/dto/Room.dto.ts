import { ActionDto } from './Action.dto';
import { RoomId } from '../RoomId.enum';

export interface RoomDto {
    id: RoomId;
    description: string;
    states: Record<string, boolean>;
    actions: ActionDto[];
}