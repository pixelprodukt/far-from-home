import { ActionType } from '../Action.enum';
import { RoomId } from '../RoomId.enum';

export interface ActionDto {
    type: ActionType;
    text: string;
    moveToRoomId: RoomId;
}