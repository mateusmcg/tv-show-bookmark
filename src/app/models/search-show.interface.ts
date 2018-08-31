import { Show } from "./show.interface";

export interface SearchShow {
    type: string;
    score: number;
    show: Show;
}