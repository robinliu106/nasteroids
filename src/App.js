import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import AsteroidCard from "./AsteroidCard";

const App = () => {
    const [nearEarthObjects, setNearEarthObjects] = useState();
    const [dateToday, setDateToday] = useState();
    const [errorToday, setErrorToday] = useState(false);

    const setCurrentDate = () => setDateToday(moment(new Date()).format("YYYY-MM-DD"));

    const getAsteroids = async () => {
        const response = await axios.get("https://api.nasa.gov/neo/rest/v1/feed", {
            params: {
                api_key: process.env.REACT_APP_NASA_API_KEY,
                start_date: dateToday,
            },
        });
        console.log("get asteroids", response.data.near_earth_objects);
        setNearEarthObjects(response.data.near_earth_objects);
    };

    useEffect(() => {
        setCurrentDate();
        getAsteroids();
    }, []);

    return (
        <div>
            {nearEarthObjects
                ? nearEarthObjects[dateToday].map((asteroid) => <AsteroidCard key={asteroid.id} {...asteroid} />)
                : "Loading"}
        </div>
    );
};

export default App;
