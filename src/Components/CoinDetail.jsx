import React from "react";
import Loading from "./Loading";
import { useState, useEffect } from "react";
import axios from "axios";
import { server } from "../index";
import { useParams } from "react-router-dom";
import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

const CoinDetail = () => {
  const [loading, setloading] = useState(false);
  const [coin, setcoin] = useState({});
  const [img, setimg] = useState("");
  const [price, setprice] = useState();
  const [pricechange, setpricechange] = useState(0);
  const params = useParams();
  // useEffect(() => {
  //   const fetchExchange = async () => {
  //     await axios.get(`${server}coins/${params.id}`).then((response) => {
  //       setcoin(response.data);
  //       console.log(response.data);
  //       setloading(false);
  //     });
  //   };

  //   fetchExchange();
  // }, [params.id]);
  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}coins/${params.id}`);
        setcoin(data);
        setprice(data.market_data.current_price["inr"]);
        setpricechange(data.market_data.price_change_percentage_24h);
        console.log(data);
        setimg(data.image.large);
        setloading(false);
      } catch (error) {
        setloading(false);
      }
    };
    fetchCoin();
  }, [params.id]);

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="container my-5">
            <p>Last updated on {coin.last_updated}</p>
            <img
              className="p-3"
              src={img}
              alt=""
              style={{ objectFit: "contain", width: "8rem", height: "8rem" }}
            />
            <div className="p-3">
              <h4>{coin.name}</h4>
              <h5>₹{price}</h5>
              <h5>
                {pricechange > 0 ? <AiFillCaretUp /> : <AiFillCaretDown />}
                {pricechange}
              </h5>
            </div>
            <div >
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  aria-label="Success example"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="my-2" style={{display:'flex' ,justifyContent:'space-between',alignItems:'center'}}>
              <span class="badge rounded-pill text-bg-danger">45</span>
              <h5 >24H Range</h5>
              <span
                class="badge rounded-pill text-bg-success"
                
              >
                898
              </span>
              </div>
              
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CoinDetail;
