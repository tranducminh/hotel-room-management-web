import React from 'react';
import HeaderComponent from '../HeaderComponent';
import RoomListComponent from '../RoomListComponent';
import FloorComponent from '../FloorComponent';

import './HomeComponet.scss'


// import PropTypes from 'prop-types';


// index.propTypes = {
    
// };

function HomeComponent(props) {
    return (
        <div>
            <HeaderComponent/>
           <div className="Content">
            <FloorComponent/>
            <RoomListComponent/>
            </div>
        </div>
    );
}

export default HomeComponent;