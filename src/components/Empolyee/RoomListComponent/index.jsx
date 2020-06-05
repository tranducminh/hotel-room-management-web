import React from "react";
import './RoomListComponent.scss'
import Button from 'react-bootstrap/Button'



// import PropTypes from 'prop-types';

// RoomListComponent.propTypes = {

// };

function RoomListComponent(props) {
  return (
    <div className="Room-List">
      
     <h4 id ="Title"> Rooms on Floor 1 </h4>

      <table >
        <thead>
          <tr>
            <th>Room Name</th>
            <th>Room Type</th>
            <th>Room Status</th>
            <th>Action  </th>
          </tr>
        </thead>
        <tbody>
          <tr>
          
            <td>101</td>
            <td>single bed</td>
            <td>Using</td>
            <td>   <Button variant="success">Primary</Button>  </td>
          </tr>
          <tr>
            
            <td>102</td>
            <td>3 bed</td>
            <td>Free</td>
            <td>  <Button variant="secondary">Primary</Button></td>
          </tr>
         
        </tbody>
      </table>
    
    </div>
  );
}

export default RoomListComponent;
