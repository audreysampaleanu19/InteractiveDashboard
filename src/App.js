import React, { useState } from "react";
import "./App.css";
import moviesRecent from "./data/moviesRecent";

import english from "./languages/english";
import romanian from "./languages/romanian";
import Card from "react-bootstrap/Card";
import RevenueBarChart from "./charts/BarChart";
import { getRevenueByGenre, getRevenueByYear } from "./data/dataProcessing";
import RevenueLineChart from "./charts/LineChart";



function App() {


    const [language, setLanguage] = useState("en");

    const translations = {
        en: english,
        ro: romanian
    };

    const t = translations[language];

    const [barYear, setBarYear] = useState(2025);

    const barMovies = moviesRecent.filter(m => m.release_year === barYear);

    const chartData = getRevenueByGenre(barMovies, t);

    const [lineRange, setLineRange] = useState("recent");
    const lineStartYear = lineRange === "recent" ? 2016 : 2006;
    const lineEndYear = lineRange === "recent" ? 2025 : 2015;

    const yearRevenue = getRevenueByYear(moviesRecent, t, lineStartYear, lineEndYear);


    return (
        <div className="App">
          
          <section className="title">

            <div className="language-toggle">

                  <button
                      className={language === "en" ? "active" : ""}
                      onClick={() => setLanguage("en")}
                  >
                      {t.languageEnglish}
                  </button>


                  <button
                      className={language === "ro" ? "active" : ""}
                      onClick={() => setLanguage("ro")}
                  >
                      {t.languageRomanian}
                  </button>

            </div>

              <h1>{t.title}</h1>

              <p>{t.subtitle}</p>


          </section>

            

          <div className="dashboard">     

                <main className="data">
                  <section className="chart-card">

                  <div className="title_card">
                    <h2>{t.chart1}</h2> 
                    
                    <div className="year-toggle">

                      <h4>{t.filters}: {t.yearLabel}</h4>

                    <button className={barYear === 2024 ? "active" : ""} onClick={() => setBarYear(2024)}>2024</button>
                    <button className={barYear === 2025 ? "active" : ""} onClick={() => setBarYear(2025)}>2025</button>


                    </div>
                    </div>

                    <Card>
                      <Card.Body>

                        <RevenueBarChart data={chartData} year={barYear} xLabel={t.genreLabel} yLabel={t.revenueLabel} formatCurrency={t.formatCurrency}/>

                      </Card.Body>
                    </Card>

                </section>

                <section className="chart-card">
                  <div className="title_card">
                    <h2>{t.chart2}</h2>
                      <div className="year-toggle">
                        <h4>{t.filters}: {t.decadeLabel}</h4>

                        <button
                            className={lineRange === "previous" ? "active" : ""}
                            onClick={() => setLineRange("previous")}
                        >
                            2006-2015
                        </button>

                        <button
                            className={lineRange === "recent" ? "active" : ""}
                            onClick={() => setLineRange("recent")}
                        >
                            2016-2025
                        </button>
                      </div>
                    </div>

                    <Card.Body>
                      <RevenueLineChart data={yearRevenue} xLabel={t.yearLabel} yLabel={t.revenueLabel} formatCurrency={t.formatCurrency} />
                    </Card.Body>
                  </section>

              </main>
            </div>
          </div>
    );
}

export default App;
