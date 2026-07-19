const english = {
    title: "Movie Insights Dashboard",
    subtitle: "Interactive Data Visualization based on the International Box Office",

    filters: "Filters",

    yearLabel: "Year",
    decadeLabel: "Decade",

    allGenres: "All Genres",

    chart1: "Box Office Revenue in Millions of USD, by Genre",
    chart2: "Box Office Revenue by Year",

    genreLabel: "Genre",
    monthLabel: "Month",
    revenueLabel: "Revenue ($M USD)",


    currency: {
        code: "USD",
        rate: 1
    },

    formatCurrency: (value) => `$${value}M`,

    genres: {
        Action: "Action",
        Adventure: "Adventure",
        Comedy: "Comedy",
        Drama: "Drama",
        Horror: "Horror",
        Fantasy: "Fantasy",
        Music: "Music", 
        "Science Fiction": "Science Fiction",
        Thriller: "Thriller",
        Western: "Western"
    },

    months: {
        January: "January", February: "February", March: "March",
        April: "April", May: "May", June: "June",
        July: "July", August: "August", September: "September",
        October: "October", November: "November", December: "December"
    },

    placeholder: "Chart will appear here",

    languageEnglish: "English",
    languageRomanian: "Română"
};

export default english;