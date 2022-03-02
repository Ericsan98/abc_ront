import React, { Component } from 'react';
import {  Link } from "react-router-dom"; 

class ReadRegistros extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datosConsumidos: false,
            empleados:[]
        }
    }

    consumiendoAPIBorrado = (id) => {
        console.log(id);
        fetch('http://localhost:4000/api/employee/' + id,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            this.consumiendoAPI();
        })
        .catch(console.log)
    }


    consumiendoAPI(){
        fetch('http://localhost:4000/api/employee')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({datosConsumidos: true, empleados: data});
        })
        .catch(console.log)
    }

    componentDidMount(){
        this.consumiendoAPI();
    }

    render() { 
        const{datosConsumidos, empleados}=this.state

        if(!datosConsumidos){ return(<div>Loading....</div>); }
        else{
        return ( 
            <div>
                <center><h5>Lista de Empleados activos</h5></center>
                <br></br>
                <table className="centered">
                    <thead className="thead-inverse">
                        <tr>
                            <th>Número de empleado</th>
                            <th>Nombre</th>
                            <th>Apellido Paterno</th>
                            <th>Apellido Materno</th>
                            <th>Puesto</th>
                            <th>Área</th>
                            <th>Jefe Inmediato</th>
                            <th>Hora de entrada</th>
                            <th>Hora de comida</th>
                            <th>Hora de Salida</th>
                            <th><Link to='/create'><i className="material-icons left">add_circle</i>
                                </Link></th>
                        </tr>
                    </thead>
                    <tbody>
                        {empleados.map(
                            (empleado) => (
                                <tr key={empleado._id}>
                                    <td>{empleado._id}</td>
                                    <td>{empleado.Nombre}</td>
                                    <td>{empleado.Apellido_Paterno}</td>
                                    <td>{empleado.Apellido_Materno}</td>
                                    <td>{empleado.Puesto}</td>
                                    <td>{empleado.Area}</td>
                                    <td>{empleado.Jefe_Inmediato}</td>
                                    <td>{empleado.Hora_Entrada}</td>
                                    <td>{empleado.Hora_Comida}</td>
                                    <td>{empleado.Hora_Salida}</td>
                                    <td>
                                        <div>
                                            <Link to={'/update/'+empleado._id}>
                                                <i className="material-icons left">update</i>
                                            </Link>
                                            <Link to='/'><i className="material-icons left"
                                            onClick={()=>this.consumiendoAPIBorrado(empleado._id)}
                                            >delete_forever</i>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            )

                        )}
                    </tbody>
                </table>
            </div>);}
    }
}
 
export default ReadRegistros;