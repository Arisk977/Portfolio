import { Skill } from "./skills.interface";

export interface Project {
    description: string;
    implementation: string;
    h1: string;
    imagePath: string;
    stickerPath: string;
    duration: string;
    arrowWidth: string;
    skills: Skill[];
    git: string;
    live: string;
}
