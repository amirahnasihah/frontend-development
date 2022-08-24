import React, { useState, useEffect } from "react";

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString("en-GB"));
    const interval = setInterval(updateTime, 1000);

    useEffect(() => {
        return () => {
            clearInterval(interval);
        };
    }, [time]);

    function updateTime() {
        setTime(new Date().toLocaleTimeString("en-GB"));
    }
    return <h2>{time}</h2>;
}

export default Clock;
