import React from 'react';
import { Modal, Descriptions } from 'antd';
import {Context} from './../../containers/Employee/Context/RoomDataDetailProvider';

class ModalDataRoom extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Context.Consumer>
                {
                    ({modalVisible, setModalVisible, room})=>{console.log(room);
                        return(
                            <Modal
                                title={`Room ${room.roomNumber}`}
                                visible={modalVisible}
                                onOk={() =>{ setModalVisible(false)}}
                                onCancel={() =>{ setModalVisible(false)}}
                            >
                                <Descriptions title="Room Info">
                                    <Descriptions.Item label="Room Number">{room.roomNumber}</Descriptions.Item>
                                    <Descriptions.Item label="status">{room.roomStatus}</Descriptions.Item>
                                    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                                    <Descriptions.Item label="Remark">empty</Descriptions.Item>
                                    <Descriptions.Item label="Address">
                                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                                    </Descriptions.Item>
                                </Descriptions>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </Modal>
                        );
                    }
                }
                
            </Context.Consumer>
            
        )
    }
}
export default ModalDataRoom;