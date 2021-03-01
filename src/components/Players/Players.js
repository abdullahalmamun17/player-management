import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import data from '../../data/data.json'
import './Players.css'
import Team from '../Team/Team';

const Players = () => {

    const [players, setPlayers] = useState([])
    useEffect(() => setPlayers(data), [])

    const [team, setTeam] = useState([])
    const [count, setCount] = useState(18)

    const addToTeam = player => {
        if (team.indexOf(player) === -1) {
            setTeam([...team, player])
            setCount(count - 1)
        }
        else {
           team.splice(team.indexOf(player), 1)
           setTeam([...team])
           setCount(count + 1)
        }
    }


    return (
        <div className="main-container">
            <div className="players-container">
                {
                    players.map(player => <Player player={player} addToTeam={addToTeam}></Player>)
                }
            </div>
            <div className="team-container">
                <h1 className="team-title">Team Management</h1>
                <Team team={team} count={count}></Team>
            </div>
        </div>
    );
};

export default Players;