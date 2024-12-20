import { ActionType } from '../Action.enum';
import { Items } from '../Items.enum';
import { RoomId } from '../RoomId.enum';

export interface ActionDto {
    type: ActionType;
    label: string;
    moveToRoomId?: RoomId;
    description?: string;
    failedDescription?: string;
    items?: Items[];
    setsStates: string[];
    readsStates: string[];
    requiresStates: string[];
    useOnlyOnce?: boolean;
}