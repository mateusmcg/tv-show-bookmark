export interface Show {
    title: string;
    year_Tests: number;
    ids: {
        trakt: number;
        slug: string;
        tvdb: number;
        imdb: string;
        tmdb: number;
        tvrage: number;
    };
    posterImageUrl: string;
}
