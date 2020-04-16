import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './HeaderComponent.scss'
import MenuHeader from './MenuHeader'

export default class HeaderAdmin extends Component{
    static propTypes = {
        prop: PropTypes
    }
    constructor(props){
        super(props);
        this.state = {
            menu : ["In Use", "Empty", "Maintaince"]
        }
    }
    render(){
        return(
            <div className="headerAdmin">
                <div className="boxmain">
                    <div className="content">
                        <div className="namehotel">
                            <h1>Muong Thanh</h1>
                        </div>
                        <div className="menubox">
                            {this.state.menu.map(function(_menu,index) {
                            return <MenuHeader key = {index} menu = {_menu}></MenuHeader>
                            })}
                        </div>
                        <div className="searchbox">
                            <input type="text" placeholder="Tìm kiếm tại đây"/>
                            <button>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}