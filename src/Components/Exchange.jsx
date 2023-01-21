import React, { useEffect } from "react";
import axios from "axios";
import { server } from "../index";
import { useState } from "react";
import Loading from "./Loading";
import ExchangeCard from "./ExchangeCard";
import "./Style/style.css";

const articles = [];

function Exchange() {
  const [exchange, setExchange] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const fetchExchange = async () => {
      axios.get(`${server}exchanges?per_page=20`).then((response) => {
        setExchange(response.data);
        console.log(exchange);
        setloading(false);
      });
    };

    fetchExchange();
  }, []);

  return (
    <>
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <div className="container">
            <>
              <div className="row">
                {exchange.map((item) => {
                  const { name, image, id, url, trust_score_rank } = item;
                  return (
                    <>
                      <div className=" col-md-2 my-4 " key={id}>
                        <ExchangeCard
                          name={name}
                          img={image}
                          rank={trust_score_rank}
                          l={url}
                        />
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          </div>
        )}
      </div>
    </>
  );
}

export default Exchange;
