import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import TeamMember from '../TeamMember/TeamMember';

const Team = (props) => {
    const team = props.team
    const totalSalary = team.reduce((total, curruentValue) => total + curruentValue.salary, 0)

    return (
        <div style={{marginTop: '20px'}}>
            <h3>Total Available Player: {props.count}</h3>
            <h3>Total Selected Player: {team.length}</h3>
            <h5>Selected Players Total Budget: <FontAwesomeIcon icon={faDollarSign} /> {totalSalary}</h5>
            <p style={{textAlign: 'center', borderBottom: '2px solid gray', fontSize: '20px'}}>Selected Players</p>
            {
                team.map(player => <TeamMember player={player}></TeamMember>)
            }
        </div>
    );
};

export default Team;