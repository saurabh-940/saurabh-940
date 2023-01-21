import React from "react";
import "../Components/Style/style.css";

export default function ExchangeCard(props) {
  return (
    <a
      className="exchange-card "
      href={props.l}
      target="blank"
      style={{ textDecoration: "none", color: "black" }}
    >
      <div
        className="card"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={props.img}
          className="card-img-top pt-3"
          alt="..."
          style={{ width: "60px", height: "60px", objectFit: "contain" }}
        />
        <div
          className="card-body"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h5>{props.sym}</h5>
          <h5 style={{ whiteSpace: "nowrap", fontSize: "0.8rem" }}>
            {props.name}
          </h5>
          <p>
            {props.price}
            {props.inr}
          </p>
          <p className="card-text">{props.rank}</p>
        </div>
      </div>
    </a>
  );
}
