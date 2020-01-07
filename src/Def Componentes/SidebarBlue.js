/* Componente barra lateral derecha azul */
/* Componentes: - Input nombre cliente, input numero de mesa, pedido realizado, botón enviar cocina */

import React, {Component} from 'react';
import './SidebarBlue.css';
import dataBase from "../firebaseConfig.js"

class BlueSidebar extends Component {

       state={
        orders:[],
        inputName:"",
        inputNumber:"",
    }

    componentDidMount(){
        dataBase.collection("customersAndOrders").get()
        .then((snapShots) => {
            this.setState({
                orders:snapShots.docs.map(doc => {
                    return {id:doc.id, data:doc.data()}
                })
            })
        }), error => {console.log(error)}
    }

    changeValue = (e) =>{
        this.setState({
            inputName: e.target.value
        })
    }

    action = ()=>{
        const {inputValue} = this.state;
        dataBase.collection("customersAndOrders").add({
            Order:inputValue
        }).then(()=>{
            console.log("Agregado");
        }).catch(() => {
            console.log("error");
        })
    }

    render(){
        return(
        <div className="sidebarBlue">
            <input 
            type="text" 
            placeholder="Nombre Cliente"/>
            <input 
            type="number" 
            placeholder="Nº de Mesa" />
            <h1 className="orderNumber">Pedido Nº</h1>
            <button className="btnKitchen">Enviar a Cocina</button>
        </div>
        )
    }
}

export default BlueSidebar;


