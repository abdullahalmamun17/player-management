import React, { useState } from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Player = (props) => {

    const { name, img, dob, position, salary, country } = props.player
    const [isAdded, setStatus] = useState(false)

    return (
        <div className="player">
            <div className="player-image">
                <img src={img} alt="" />
            </div>
            <div className="player-info mt-1">
                <h4>{name}</h4>
                <p>Date of Birth: {dob}</p>
                <p>Nationality: {country}</p>
                <p>Position: {position}</p>
                <h5>Salary: {salary}</h5>
                <Button className="add-button btn-success" onClick={() => {
                    props.addToTeam(props.player)
                    setStatus(!isAdded)
                }}>{
                        isAdded ? <span><FontAwesomeIcon icon={faUserMinus} /> remove from team</span> : <span><FontAwesomeIcon icon={faUserPlus} /> add to team</span>
                    }</Button>
            </div>
        </div>
    );
};

export default Player;