import { ActionDto } from '../models/dto/Action.dto';
import { SceneHandler } from './SceneHandler';

export interface BaseScene {
    id: SceneId;
    description: string;
    actions: BaseAction[];

    addAction(action: BaseAction): void;
    deleteAction(actionId: string): void;
}

export enum SceneId {
    GATE = 'GATE',
    CAR = 'CAR',
    FRONT_YARD = 'FRONT_YARD',
    FRONT_DOOR = 'FRONT_DOOR'
}

export abstract class BaseAction {
    protected id: string;
    protected label: string;
    protected setsStates: string[];
    protected readsStates: string[];

    constructor(dto: ActionDto) {
        this.id = dto.id;
        this.label = dto.label;
        this.setsStates = dto.setsStates || [];
        this.readsStates = dto.readsStates || [];
    }

    public handle(sceneHandler: SceneHandler): void { 
        console.log('NOT IMPLEMENTED'); 
    };
}

export class NextSceneAction extends BaseAction {

    private nextSceneId: SceneId;

    constructor(dto: ActionDto) {
        super(dto);
        this.nextSceneId = dto.nextSceneId!;
    }

    public override handle(sceneHandler: SceneHandler): void {
        console.log('NextSceneAction', sceneHandler);
        sceneHandler.setCurrentScene(this.nextSceneId);   
    }
}

export class LookAction extends BaseAction {

    private resultText: string;

    constructor(dto: ActionDto) {
        super(dto);
        this.resultText = dto.resultText!;
    }

    public override handle(sceneHandler: SceneHandler): void {
        console.log('LookAction', sceneHandler);   
    }
}