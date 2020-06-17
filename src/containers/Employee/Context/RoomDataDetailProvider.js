import React from 'react';


const Context = React.createContext();

class RoomDataDetailProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modalVisible : false,
            roomINUSE: {
                room: {},
                customer: {},
                services: [],
            },
            roomREADY:{},
            roomListINUSE:[],
            roomListREADY: [], 
            formVisible: false,
        };
    }

    setRoomListINUSE = (listRoom) => {
        this.setState({roomListINUSE: listRoom})
    }
    setRoomListREADY = (listRoom) => {
        this.setState({roomListREADY: listRoom})
    }
    setModalVisible = (visible) => {
        this.setState({
            modalVisible: visible   
        });
    }
    setRoomINUSE = (room) => {
        this.setState({
            roomINUSE: room
        })
    }
    setRoomREADY = (room) => {
        this.setState({
            roomREADY: room
        });
    }

    setFormVisible = (visible) => {
        this.setState({
            formVisible: visible   
        });
    }

    render(){
        const {
            modalVisible, roomINUSE, roomREADY, formVisible,
            roomListINUSE,
            roomListREADY,  } = this.state;
        const setModalVisible = this.setModalVisible;
        const setRoom = this.setRoom;
        const setFormVisible= this.setFormVisible;
        const setRoomListINUSE = this.setRoomListINUSE;
        const setRoomListREADY = this.setRoomListREADY;
        const setRoomINUSE = this.setRoomINUSE;
        const setRoomREADY = this.setRoomREADY;
        return(
            <Context.Provider value={{
                modalVisible,
                setModalVisible,
                roomREADY,
                roomINUSE,
                setRoom,
                formVisible,
                setFormVisible,
                roomListINUSE,
                roomListREADY,
                setRoomListINUSE,
                setRoomListREADY,
                setRoomREADY,
                setRoomINUSE,
                }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default RoomDataDetailProvider;
export { Context }