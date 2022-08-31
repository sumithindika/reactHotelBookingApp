import React,{useState} from 'react'
import "./header.css";
import {faBed,faCalendarDays,faPerson} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Calendar, DateRange} from  "react-date-range";

const Header = () => {

// const {Date,setDate} =useState =>{


// }


  return (
    <div className='header'>
    <div className="headerSearch">
      <div className="headerSearchItem">
    <FontAwesomeIcon icon={faBed} className='headerIcon' />
 <input 
   type="text" 
  placeholder='where are you going ?'
   className='headerSearchInput' 

 />

    </div>
    <div className="headerSearchItem">
    <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
<span className='headerSearchText'>Date to Date</span>

    </div>


    <div className="headerSearchItem">
    <FontAwesomeIcon icon={faPerson} className='headerIcon' />
    <span className='headerSearchText'>1 Adults 0 Children 1 Rooms</span>

    </div>
    <div className="headerSearchItem">
    <button className="headerBtn">Search</button>

    </div>

    </div>
    </div>
  )
}

export default Header;
