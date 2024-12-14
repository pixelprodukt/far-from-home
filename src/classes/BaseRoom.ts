import { ActionType } from '../models/Action.enum';
import { RoomId } from '../models/RoomId.enum';

export abstract class BaseRoom {
    public actions: BaseAction[] = [];
}

export interface BaseAction {
    type: ActionType;
    label: string;
    setsStates: string[];
    readsStates: string[];
}

export interface MoveAction extends BaseAction {
    moveToRoomId: RoomId;
}

export interface LookAction extends BaseAction {
    resultText: string;
}