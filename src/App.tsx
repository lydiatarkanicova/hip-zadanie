import { Http2ServerRequest } from "http2";
import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Faculties from "./components/Faculties";
import Subjects from "./components/Subjects";

const inferencnaSiet = {
  question: "Pre aký ročník vyberáš predmet?",
  items: [
    {
      value: "1. ročník",
      question: "Pre aký semester vyberáš predmet?",
      items: [
        {
          value: "Zimný semester",
          question: "Chceš predmet navyše?",
          items: [
            {
              value: "Áno",
              question: "Chceš si zlepšiť zručnosti z angličtiny?",
              items: [
                {
                  value: "Áno",
                  result: "Angličtina",
                },
                {
                  value: "Nie",
                  question: "Chceš si zlepšiť zručnosti z fyziky?",
                  items: [
                    {
                      value: "Áno",
                      result: "Úvod do fyziky",
                    },
                    {
                      value: "Nie",
                      result: "Pre Vami zvolené kritéria neexistuje predmet",
                    },
                  ],
                },
              ],
            },
            {
              value: "Nie",
              result: "Pre Vami zvolené kritéria neexistuje predmet",
            },
          ],
        },
        {
          value: "Letný semester",
          result: "Pre Vami zvolené kritéria neexistuje predmet",
        },
      ],
    },
    {
      value: "2. ročník",
      question: "Pre aký semester vyberáš predmet?",
      items: [
        {
          value: "Zimný semester",
          question: "Chceš..",
          items: [
            {
              value: "ekonomický predmet ľahši na zvládnutie",
              result: "Podniková ekonomika",
            },
            {
              value: "matematicky zameraný a náročnejší predmet",
              result: "Diskrétna matematika",
            },
          ],
        },
        {
          value: "Letný semester",
          question: "Chceš..",
          items: [
            {
              value: "skupinovú prácu so širokým záberom programovateľných zadaní",
              result: "Základy cloudových technológií",
            },
            {
              value: "manažérske rozvrhovanie procesov v podniku",
              result: "Rozvrhovanie a logistika",
            },
          ],
        },
      ],
    },
    {
      value: "3. ročník",
      question: "Pre aký semester vyberáš predmet?",
      items: [
        {
          value: "Zimný semester",
          question: "Chceš programovať?",
          items: [
            {
              value: "Áno",
              question: "Rád sa zúčastníš na ekonomickom predmete?",
              items: [
                {
                  value: "Áno",
                  result: "Oceňovanie investičných zámerov",
                },
                {
                  value: "Nie",
                  question: "Chceš..",
                  items: [
                    {
                      value: "nenáročný predmet ale so skúškou ",
                      result: "Znalostné systémy",
                    },
                    {
                      value: "náročnejší predmet ale ukončenie cez klasifikovaný zápočet",
                      result: "Vývoj mobilných inteligentných riešení",
                    },
                  ],
                },
              ],
            },
            {
              value: "Nie",
              result: "Optimalizácia v ekonomických procesoch",
            },
          ],
        },
        {
          value: "Letný semester",
          question: "Máš záujem..",
          items: [
            {
              value: "naučiť sa účtovať pomocou softvéru",
              result: "Účtovníctvo v informačných procesoch",
            },
            {
              value: "o hodnotné poznatky z praxe a zároveň o prácu na skupinovom projekte",
              result: "Hospodárska informatika v praxi",
            },
          ],
        },
      ],
    },
  ],
};

function App() {
  let navigate = useNavigate();
  let location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log(location)
  }, [location])
  

  return (
    <div className="app">
      <header>
        <div
          className="logo"
          onClick={(e) => {
            navigate("/predmety");
            if(searchParams.has('items')){
              let newSearch = searchParams;
              newSearch.delete('items')
              setSearchParams(newSearch)
            }
          }}
        >
          Výber voliteľných predmetov TUKE
        </div>
        <nav>
          <a className={location.pathname === "/fakulty" ? 'active' : ''} onClick={() => navigate("/fakulty")}>Fakulty</a>
          <a className={location.pathname === "/predmety" || location.pathname === "/"? 'active' : ''} onClick={() => navigate("/predmety")}>Predmety</a>
          <a>Štúdium</a>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Subjects inferencnaSiet={inferencnaSiet} />} />
          <Route path="/predmety" element={<Subjects inferencnaSiet={inferencnaSiet} />} />
          <Route path="/fakulty" element={<Faculties />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
