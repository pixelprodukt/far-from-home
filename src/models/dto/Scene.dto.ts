import { ActionDto } from './Action.dto';
import { SceneId } from '../../classes/BaseScene';

export interface SceneDto {
    id: SceneId;
    description: string;
    actions: ActionDto[];
    resultText?: string;
    requires?: any[];
    resolves?: any[];
}