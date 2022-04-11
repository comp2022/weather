import React, { useState } from "react";
import CloudIcon from '@mui/icons-material/Cloud';

function Nav(props) {
    const [city, setCity] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setCity(newValue);
    }

    return (
        <div class="nav-bar">
            <h1><CloudIcon fontSize="large" /> Weather</h1>
            <div class="search-bar">
                <input type="text" placeholder="Search city..." value={city} 
                    onChange={handleChange} 
                    onKeyPress={(ev) => {
                        if (ev.key === "Enter") {
                            props.handleClick(city);
                            setCity("");
                            ev.preventDefault();
                        }
                    }}/>
                <button type="submit" onClick={(event) => {
                    props.handleClick(city);
                    setCity("");
                    event.preventDefault();
                }}><i class="fa fa-search"></i></button>
            </div>
        </div>
    );
}
export default Nav;