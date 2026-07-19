export function getRevenueByGenre(movies, t) {

    const revenueByGenre = {};

    movies.forEach(movie => {
        if (!revenueByGenre[movie.genre]) {
            revenueByGenre[movie.genre] = 0;
        }
        revenueByGenre[movie.genre] += movie.revenue;
    });

    return Object.keys(revenueByGenre)
        .map(genre => ({
            genre: t.genres[genre] || genre,
            revenue: Number(
                ((revenueByGenre[genre] * t.currency.rate) / 1000000).toFixed(1)
            )
        }))
        .sort((a, b) => b.revenue - a.revenue)
        .slice(0, 10);
}

export function getRevenueByYear(movies, t, startYear, endYear) {

    const seen = new Set();
    const revenueByYear = {};

    movies.forEach(movie => {
        if (movie.release_year < startYear || movie.release_year > endYear) return;

        const key = `${movie.title}-${movie.release_year}`;
        if (seen.has(key)) return;
        seen.add(key);

        if (!revenueByYear[movie.release_year]) {
            revenueByYear[movie.release_year] = 0;
        }
        revenueByYear[movie.release_year] += movie.revenue;
    });

    // ensure every year in the range appears, even if revenue is 0
    const years = [];
    for (let y = startYear; y <= endYear; y++) years.push(y);

    return years.map(year => ({
        year,
        revenue: Number(
            (((revenueByYear[year] || 0) * t.currency.rate) / 1000000).toFixed(1)
        )
    }));
}
