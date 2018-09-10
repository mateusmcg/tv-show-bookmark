import { ShowTmdb } from './show-tmdb.interface';

export interface SearchShowTmdb {
    page: number;
    results: ShowTmdb[];
    total_results: number;
    total_pages: number;
}
