const romanian = {
    title: "Tablou de Analiză a Filmelor",
    subtitle: "Vizualizare Interactivă a Datelor Bazată pe încasările la Nivel Mondial",

    filters: "Filtre",

    yearLabel: "An",
    decadeLabel: "Deceniu",

    allGenres: "Toate Genurile",

    chart1: "Încasări la Box Office în Milioane de RON, după Gen",
    chart2: "Încasări la Box Office pe An",

        
    genreLabel: "Gen",
    monthLabel: "Lună",
    revenueLabel: "Venituri (RON, mil.)",

    placeholder: "Graficul va apărea aici",

    languageEnglish: "English",
    languageRomanian: "Română",

    currency: {
        code: "RON",
        rate: 4.57 
    },

    formatCurrency: (value) => `${String(value).replace(".", ",")}M RON`,


    genres: {
        Action: "Acțiune",
        Adventure: "Aventură",
        Comedy: "Comedie",
        Drama: "Dramă",
        Horror: "Groază",
        Fantasy: "Fantezie",
        Music: "Muzical",
        "Science Fiction": "Ştiințifico Fantastic",
        Thriller: "Poliţist",
        Western: "Western",
        History: "Istorie",
        Family: "Familie",
        Mystery: "Mister"
    },

    months: {
        January: "Ianuarie", February: "Februarie", March: "Martie",
        April: "Aprilie", May: "Mai", June: "Iunie",
        July: "Iulie", August: "August", September: "Septembrie",
        October: "Octombrie", November: "Noiembrie", December: "Decembrie"
    },

};

export default romanian;