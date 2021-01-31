import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import AsteroidCard from "./AsteroidCard";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import * as asteroidSlice from "./redux/asteroidSlice";

import AsteroidBlurb from "./AsteroidBlurb";

const AsteroidList = () => {
    const [nearEarthObjects, setNearEarthObjects] = useState();
    const dateToday = useSelector(asteroidSlice.selectDate);
    const dispatch = useDispatch();

    const getAsteroids = async () => {
        const response = await axios.get("https://api.nasa.gov/neo/rest/v1/feed", {
            params: {
                api_key: process.env.REACT_APP_NASA_API_KEY,
                start_date: dateToday,
            },
        });

        console.log("get asteroids", response.data.near_earth_objects);

        setNearEarthObjects(response.data.near_earth_objects);

        // if (response.data.near_earth_objects[0]) {
        //     dispatch(asteroidSlice.setAsteroids())
        // }

        console.log("hi dateToday", dateToday);
        const asteroidsToday = response.data.near_earth_objects[dateToday] ?? false;
        console.log("asteroidsToday", asteroidsToday);
        if (asteroidsToday) {
            dispatch(asteroidSlice.setAsteroids(asteroidsToday));
        }
    };

    useEffect(() => {
        getAsteroids();
    }, [dateToday]);

    const goToDate = (date) => {
        console.log("goToDate", date);
        dispatch(asteroidSlice.setDate(date));
    };

    const DisplayAsteroids = () => {
        if (nearEarthObjects[dateToday]) {
            return nearEarthObjects[dateToday].map((asteroid) => <AsteroidCard key={asteroid.id} {...asteroid} />);
        }

        return "";
        // else {
        //     const nextAvailableDate = Object.keys(nearEarthObjects)[0];
        //     const formatNextAvailableDate = moment(nextAvailableDate).format("MMMM D, YYYY");

        //     const formatDateToday = moment(dateToday).format("MMMM D, YYYY");
        //     console.log("nothing for current date but ", formatNextAvailableDate);
        //     return (
        //         <div>
        //             <p> {`Nothing found for: ${formatDateToday}`}</p>
        //             <a
        //                 href="#"
        //                 onClick={() => {
        //                     goToDate(formatNextAvailableDate);
        //                 }}
        //             >{`Go to next available date: ${formatNextAvailableDate}`}</a>
        //         </div>
        //     );
        // }
    };

    return (
        <div>
            {nearEarthObjects ? (
                <Fragment>
                    <AsteroidBlurb />
                    <DisplayAsteroids />
                </Fragment>
            ) : (
                "Loading"
            )}
        </div>
    );
};

export default AsteroidList;
