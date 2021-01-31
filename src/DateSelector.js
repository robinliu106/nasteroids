import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import * as asteroidSlice from "./redux/asteroidSlice";

import "react-datepicker/dist/react-datepicker.css";

const DateSelector = () => {
    //get the date from redux store
    const reduxDate = useSelector(asteroidSlice.selectDate);
    const jsDate = moment(reduxDate).toDate(); //convert back to JS Date Object to use in DatePicker

    const dispatch = useDispatch();

    return (
        <DatePicker
            selected={jsDate}
            onChange={(date) => {
                const formatDate = moment(date).format("YYYY-MM-DD");
                dispatch(asteroidSlice.setDate(formatDate));
            }}
        />
    );
};

export default DateSelector;
