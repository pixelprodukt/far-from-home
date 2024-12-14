import { ActionType } from '../Action.enum';
import { RoomId } from '../RoomId.enum';

export interface ActionDto {
    type: ActionType;
    label: string;
    moveToRoomId?: RoomId;
    actions?: ActionDto[];
    resultText?: string;
    setsStates: string[];
    readsStates: string[];
}