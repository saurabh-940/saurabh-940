import React, { useEffect } from "react";
import axios from "axios";
import { server } from "../index";
import { useState } from "react";
import Loading from "./Loading";
import "./Style/style.css";
import CoinCard from "./CoinCard";

function Coin() {
  const [coins, setcoins] = useState([]);
  const [loading, setloading] = useState(true);
  let [page, setpage] = useState(1);
  useEffect(() => {
    const fetchExchange = async () => {
      axios
        .get(
          `${server}coins/markets?vs_currency=inr&order=market_cap_desc&per_page=25&page=${page}&sparkline=false`
        )
        .then((response) => {
          setcoins(response.data);
          console.log(coins);
          setloading(false);
        });
    };

    fetchExchange();
  }, [page]);

  const nextPage = () => {
    console.log("next");
    setpage(page + 1);
  };
  const prevPage = () => {
    console.log("prev");
    if (page > 1) setpage(page - 1);
  };

  return (
    <>
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <div className="container">
            <>
              <div className="row">
                {coins.map((item) => {
                  const { name, image, id, current_price, symbol } = item;
                  return (
                    <>
                      <div className=" col-md-2 my-4 " key={id}>
                        <CoinCard
                          name={name}
                          img={image}
                          key_id={id}
                          price={current_price}
                          inr="₹"
                          l={"/CoinDetail"}
                          sym={symbol}
                        />
                      </div>
                    </>
                  );
                })}
              </div>
              <nav
                aria-label="Page navigation example"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <ul className="pagination">
                  <li className="page-item px-4">
                    <button
                      disabled={page <= 1}
                      className="page-link"
                      onClick={prevPage}
                    >
                      Previous
                    </button>
                  </li>

                  <li className="page-item px-4">
                    <button className="page-link px-3" onClick={nextPage}>
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </>
          </div>
        )}
      </div>
    </>
  );
}

export default Coin;
