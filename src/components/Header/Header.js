import React from 'react';

const Header = () => {

    const iconImageStyle = {
        height: '100px',
    }

    return (
        <div style={{textAlign: 'center', padding: '10px', borderBottom: '1px solid gray'}}>
            <img style={iconImageStyle} src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg" alt=""/>
        </div>
    );
};

export default Header;