import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from '../components/RoomsContainer'
export const Rooms = () => {
  return (
    <>
    <Hero hero="roomsHero">
      <Banner title="our rooms">
        <Link to="/" className="btn-primary">
          Return home
        </Link>
      </Banner>
    </Hero>
    <RoomsContainer/>
    </>
  );
};
export default Rooms;
