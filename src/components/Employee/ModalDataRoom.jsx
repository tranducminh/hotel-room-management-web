import React from 'react';
import { Modal, Button, Descriptions } from 'antd';
import Axios from "axios";
import {Context} from './../../containers/Employee/Context/RoomDataDetailProvider';

class ModalDataRoom extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
        }
    }

    onCheckout = () => {
        this.setState({ loading: true });
        const {roomINUSE} = this.props;
        
        setTimeout(() => {
          this.setState({ loading: false});
          Axios.post(`http://localhost:8080/booking-rooms/checkout/${roomINUSE.room.id}`)
          .then(room => {
             // console.log(room);
            this.props.setModalVisible(false);
          })
            
        }, 1000);
    }

    render() {
        const {modalVisible, setModalVisible, roomINUSE} = this.props;
        const {loading} = this.state;
        console.log(roomINUSE);
        
        return(
            <Modal
                title={`Room ${roomINUSE.room.roomNumber}`}
                visible={modalVisible}
                onOk={this.onCheckout}
                onCancel={() =>{ setModalVisible(false)}}
                footer={[
                    <Button key="back" onClick={() =>{ setModalVisible(false)}}>
                        Return
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={this.onCheckout}>
                        Checkout
                    </Button>,
                    ]}
            >
                <Descriptions title="Room Info">
                    <Descriptions.Item label="Room Number">{roomINUSE.room.roomNumber}</Descriptions.Item>
                    <Descriptions.Item label="Status">{roomINUSE.room.roomStatus}</Descriptions.Item>
                    <Descriptions.Item label="Room type">{roomINUSE.room.roomType}</Descriptions.Item>
                    <Descriptions.Item label="Capacity">{roomINUSE.room.capacity}</Descriptions.Item>
                    
                </Descriptions>
                <Descriptions title="Customer Info">
                    <Descriptions.Item label="Customer fullname">{roomINUSE.customer.fullName}</Descriptions.Item>
                    <Descriptions.Item label="Email">{roomINUSE.customer.email}</Descriptions.Item>
                    <Descriptions.Item label="Phone number">{roomINUSE.customer.phoneNumber}</Descriptions.Item>
                </Descriptions>
                <Descriptions title="Time Info">
                    <Descriptions.Item label="Time start">{roomINUSE.timeStart}</Descriptions.Item>
                    <Descriptions.Item label="Time end">{roomINUSE.timeEnd}</Descriptions.Item>
                    
                </Descriptions>
                <Descriptions title="Sevices">
                    {
                        roomINUSE.services.map((service,index) =>  
                            <Descriptions.Item key={index} label={index+1}>{service.serviceName}</Descriptions.Item>)
                    }
                   
                   
                    
                </Descriptions>
            </Modal>
        );
            
    }
}
// export default ModalDataRoom;

export default props => (
    <Context.Consumer>
      {({ setModalVisible, setRoom, roomINUSE, setFormVisible, formVisible, modalVisible}) => (
        <ModalDataRoom setModalVisible={setModalVisible}
        setRoom={setRoom} 
        roomINUSE={roomINUSE}
        modalVisible={modalVisible}
        setFormVisible={setFormVisible}
        formVisible={formVisible}
  
        {...props} />
      )}
    </Context.Consumer>
  );