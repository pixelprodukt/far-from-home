import { BaseScene } from './BaseScene';

export class SceneHandler {
    private scenes: BaseScene[];
    private currentScene: BaseScene;

    constructor(scenes: BaseScene[]) {
        this.scenes = scenes;
        this.currentScene = this.scenes[0];
    }

    public getSceneById(sceneId: string): BaseScene {
        return this.scenes.filter(scene => scene.id === sceneId)[0];
    }

    public getCurrentScene(): BaseScene {
        return this.currentScene;
    }

    public setCurrentScene(nextSceneId: string): void {
        this.currentScene = this.scenes.filter(scene => scene.id === nextSceneId)[0];
    }
}