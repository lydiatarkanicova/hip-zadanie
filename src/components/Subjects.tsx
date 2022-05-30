import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export interface ISubjects {
  inferencnaSiet: any;
}

const Subjects: React.FC<ISubjects> = ({ ...props }) => {
  const [question, setQuestion] = useState(props.inferencnaSiet.question);
  const [items, setItems] = useState<any>(props.inferencnaSiet.items);
  const [result, setResult] = useState(null);
  const [link, setLink] = useState(null);
  let navigate = useNavigate();

  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.has("items")) {
      const selected = searchParams.get("items")?.split(">");
      let currentObj = props.inferencnaSiet;
      selected?.forEach((item) => {
        let newResult = null;
        let newLink = null;
        currentObj = currentObj.items?.find((sietItem: any) => sietItem.value === item);
        if (currentObj.result) {
          newResult = currentObj.result;
          newLink = currentObj.link;
        }
        setResult(newResult);
        setLink(newLink);
        setQuestion(currentObj?.question);
        setItems(currentObj?.items);
      });
    } else {
      setResult(null);
      setQuestion(props.inferencnaSiet?.question);
      setItems(props.inferencnaSiet?.items);
    }
  }, [searchParams]);

  return (
    <>
      <h3>Fakulta elektrotechniky a informatiky</h3>
      <h4>Odbor Hospodárska informatika</h4>
      {result ? (
        <>
          {result !== "Pre Vami zvolené kritéria neexistuje predmet" ? <h2>Predmet, ktorý by si si mal zvoliť:</h2> : null}
          <h5>{result}</h5>
          {link && (
            <a href={link ? `${window.location.origin}/assets/${link}` : window.location.origin} style={{display:"block", marginBottom: "1rem" }}>
              Informačný list predmetu
            </a>
          )}
          <br />
          <button onClick={() => navigate("/feedback")}>Pomôž iným študentom pri výbere predmetu</button>
        </>
      ) : (
        <>
          <h1>{question}</h1>
          <div className="buttons">
            {items?.length &&
              items?.map((item: any) => {
                return (
                  <button
                    onClick={(e) => {
                      if (searchParams.has("items")) {
                        let selected = searchParams.get("items");
                        setSearchParams({ items: [selected, item.value].join(">") });
                      } else {
                        setSearchParams({ items: item.value });
                      }

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
          {searchParams.has("items") && (
            <button
              onClick={(e) => {
                if (searchParams.has("items")) {
                  let selected = searchParams.get("items")?.split(">");
                  selected?.pop();
                  if (selected && selected?.length > 0) {
                    setSearchParams({ items: selected.join(">") });
                  } else {
                    let newSearch = searchParams;
                    newSearch.delete("items");
                    setSearchParams(newSearch);
                  }
                }
              }}
            >
              Späť
            </button>
          )}
        </>
      )}
    </>
  );
};

export default Subjects;
