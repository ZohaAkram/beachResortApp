import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Service from "../components/service";
import FeaturedRooms from "../components/FeaturedRooms";
import Button from "../components/StyledHero";
export const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious Rooms"
          subtitle="Deluxe rooms starting at Rs 9000"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Service />
      <FeaturedRooms />
      <h5 style={{textAlign:"center"}}>Made by Zoha Akram 😊 </h5>
         </>
  );
};
export default Home;
