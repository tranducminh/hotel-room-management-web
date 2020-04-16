import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './MenuHeader.scss'

export default class MenuHeader extends Component {
    static propTypes = {
        prop: PropTypes
    }
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="menuHeaderBox">
                <div className="content">{ this.props.menu }</div>
                <div className="border-bottom">
                    <div className="border-bottom-left"></div>
                    <div className="border-bottom-right"></div>
                </div>
            </div>
        )
    }
}
