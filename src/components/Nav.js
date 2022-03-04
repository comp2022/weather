import React from "react";
import CloudIcon from '@mui/icons-material/Cloud';

function Nav() {
    return (
        <div class="nav-bar">
            <h1><CloudIcon /> Weather</h1>
            <div class="search-bar">
                <input type="text" placeholder="Search city..." />
                <button type="submit"><i class="fa fa-search"></i></button>
            </div>
        </div>
    );
}
export default Nav;