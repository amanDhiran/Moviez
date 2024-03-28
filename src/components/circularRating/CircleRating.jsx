import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style.css"

const CircleRating = ({ rating, className, textColor }) => {
    return (
        <div className={`  ${className}`}>
            <CircularProgressbar
                value={rating}
                maxValue={10}
                text={rating}
                styles={{path : {
                    stroke: `${rating < 5 ? "red" : rating < 7 ? "orange" : "green"}`,
                    },
                    text : {
                        fill : textColor
                    }
                }}
            />
        </div>
    );
};

export default CircleRating;