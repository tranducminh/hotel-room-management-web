import React from 'react';


const Context = React.createContext();

class RoomDataDetailProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modalVisible : false,
            room: {},
            formVisible: false,
        };
    }
    setModalVisible = (visible) => {
        this.setState({
            modalVisible: visible   
        });
    }
    setRoom = (room) => {
        this.setState({
            room: room
        })
    }
    setFormVisible = (visible) => {
        this.setState({
            formVisible: visible   
        });
    }

    render(){
        const { modalVisible, room, formVisible } = this.state;
        const setModalVisible = this.setModalVisible;
        const setRoom = this.setRoom;
        const setFormVisible= this.setFormVisible;
        return(
            <Context.Provider value={{
                modalVisible,
                setModalVisible,
                room,
                setRoom,
                formVisible,
                setFormVisible,
                }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default RoomDataDetailProvider;
export { Context }