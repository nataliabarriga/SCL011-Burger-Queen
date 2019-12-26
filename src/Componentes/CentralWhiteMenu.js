import React, {Component} from "react";
import Data from '../Data/menu.json';
import LunchMenu from './LunchMenu.js';
import "./CentralWhiteMenu.css";


class Buttons extends Component{
    render(){
        return <div className="containerButtons">
        <button className="btn">Desayuno</button>
        <button className="btn">Almuerzo</button>
        </div>
    }
}


class Container extends Component{
    state ={
        menu : Data
    }

    render(){
        return <div>
            <Buttons/>
            <LunchMenu menu ={this.state.menu}/>
        </div>
    }
}


export default Container;
