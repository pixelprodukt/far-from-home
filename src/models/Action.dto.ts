import { RoomId } from './RoomId.enum';

export interface Action {
    text: string;
    moveToRoomId: RoomId;
}