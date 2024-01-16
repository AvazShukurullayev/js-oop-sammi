"use strict"
const seriesDB = {
    count: 0,
    series: {},
    actors: {},
    genres: [],
    private: false,
    startApp: function () {
        seriesDB.count = +prompt("Nechta serial ko'rdingiz?", "")
        while (seriesDB.count === 0 || seriesDB.count == null || isNaN(seriesDB.count)) {
            seriesDB.count = +prompt("Nechta serial ko'rdingiz?", "")
        }
    },
    rememberMySeries: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Oxirgi ko'rgan serialingiz?", ""),
                b = prompt("Nechi marotaba ko'rganisz?");
            if (a !== null && b !== null && a !== "" && b !== "") {
                seriesDB.series[a] = b
                console.log("Success")
            } else {
                console.log("Error")
                i--
            }
        }
    },
    detectLevelSeries: function () {
        if (seriesDB.count >= 10) {
            console.log("Max viewer")
        } else if (5 <= seriesDB.count && seriesDB.count < 10) {
            console.log("Normal viewer")
        } else {
            console.log("Min viewer")
        }
    },
    showDB: function () {
        if (!seriesDB.private) {
            console.log(seriesDB)
        }
    },
    writeGenres: function () {
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Yaxshi ko'rgan janringiz? ${i + 1}?`)
            if (genre !== null && genre !== "") {
                console.log("Success")
                seriesDB.genres[i] = genre
            } else {
                console.log("Error")
                i--
            }
        }
        seriesDB.genres.forEach((item, index) => {
            console.log(`Yaxshi ko'rgan janringiz #${index + 1} - nomi ${item}`)
        })
    },
    visibleDB: function () {
        seriesDB.private = !seriesDB.private
    },
}