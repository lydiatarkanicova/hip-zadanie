import React, { useEffect, useState } from "react";

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
  const [question, setQuestion] = useState(inferencnaSiet.question);
  const [items, setItems] = useState<any>(inferencnaSiet.items);
  const [result, setResult] = useState(null);

  return (
    <div className="app">
      <header>Výber voliteľných predmetov TUKE</header>
      <main>
        {result ? (
          <h1>{result}</h1>
        ) : (
          <>
            <h1>{question}</h1>
            <div className="buttons">
              {items?.length &&
                items?.map((item: any) => {
                  return (
                    <button
                      onClick={(e) => {
                        if (item.result) {
                          setResult(item.result);
                          return;
                        }
                        setQuestion(item.question);
                        setItems(item.items);
                      }}
                    >
                      {item.value}
                    </button>
                  );
                })}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
