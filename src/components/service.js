import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class service extends Component {
  state = {
    service: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Lorem ipsum dolorrererererer",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Lorem ipsum dolorrererererer",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "Lorem ipsum dolorrererererer",
      },
     
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.service.map((item, index) => {
            return <article key={index} className="service">
                <span>{item.icon}</span>
               <h6>{item.title}</h6>
               <p>{item.info}</p>
                
            </article>;
          })}
        </div>
      </section>
    );
  }
}
