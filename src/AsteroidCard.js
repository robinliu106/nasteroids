import React from "react";

const AsteroidCard = (props) => {
    // console.log("props", props);
    const isPotentiallyHazardous = props.is_potentially_hazardous_asteroid;
    const cardColor = isPotentiallyHazardous ? "bg-danger" : "bg-light";
    const closeApproachData = {
        distance: parseInt(props.close_approach_data[0].miss_distance.miles),
        velocity: parseInt(props.close_approach_data[0].relative_velocity.miles_per_hour),
    };

    const asteroidDiameter = {
        min: parseInt(props.estimated_diameter.meters.estimated_diameter_min),
        max: parseInt(props.estimated_diameter.meters.estimated_diameter_max),
    };

    return (
        <div className={`card ${cardColor}`}>
            <div className="card-header">{props.name}</div>
            <div className="card-body">
                <h5 className="card-title">{isPotentiallyHazardous ? "Asteroid is Potentially Dangerous" : ""}</h5>

                <p className="card-text">{`Estimated Diameter: ${asteroidDiameter.min}-${asteroidDiameter.max} meters`}</p>
                <p className="card-text">{`Distance from Earth: ${closeApproachData.distance} miles, traveling at ${closeApproachData.velocity} miles/hour`}</p>
            </div>
        </div>
    );
};

export default AsteroidCard;
