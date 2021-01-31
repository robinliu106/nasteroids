import React from "react";
import { useSelector } from "react-redux";
import * as asteroidSlice from "./redux/asteroidSlice";

const AsteroidBlurb = () => {
    const currentAsteroids = useSelector(asteroidSlice.selectAsteroids);

    return `There are ${currentAsteroids.length} asteroids today`;
};

export default AsteroidBlurb;
