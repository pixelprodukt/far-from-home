import { SceneId } from '../../classes/BaseScene';
import { ActionType } from '../Action.enum';

export interface ActionDto {
    id: string;
    type: ActionType;
    label: string;
    nextSceneId?: SceneId;
    actions?: ActionDto[];
    resultText?: string;
    setsStates: string[];
    readsStates: string[];
}