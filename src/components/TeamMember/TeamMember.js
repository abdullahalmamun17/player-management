import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

const TeamMember = (props) => {

    const {name, img, salary, position} = props.player

    const teamMemberStyle = {
        textAlign: 'center',
        border: '1px solid white',
        backgroundColor: '#00529F',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px',
        color: 'white'
    }

    return (
        <div style={teamMemberStyle}>
           <img style={{height: '100px', width: '100px', borderRadius: '50%'}} src={img} alt=""/>
           <h4>{name}</h4>
           <h5>{position}</h5>
           <h5><FontAwesomeIcon icon={faDollarSign} /> {salary}</h5>
        </div>
    );
};

export default TeamMember;