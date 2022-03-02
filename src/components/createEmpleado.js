import React, { Component } from 'react';
import { Link } from "react-router-dom";     

class AddEmpleado extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Nombre: '',
            Apellido_Paterno: '',
            Apellido_Materno: '',
            Puesto: '',
            Area: '',
            Jefe_Inmediato: '',
            Hora_Entrada: '',
            Hora_Comida: '',
            Hora_Salida: ''
         }
    }

    cambioValor = (e) => {
        console.log(e.value);
        const state = this.state;
        state[e.target.name] = e.target.value; //Todo los elementos que han sido alterados, asignales los nuevos valores
        this.setState({ state});
    }

    enviarDatos = (e) => {
        e.preventDefault();
        console.log("Formulario enviado");

        const{Nombre,Apellido_Paterno,Apellido_Materno,Puesto,Area,Jefe_Inmediato,Hora_Entrada,
            Hora_Comida,Hora_Salida} = this.state;
        
        var datosAEnviar = {Nombre:Nombre, Apellido_Paterno:Apellido_Paterno,Apellido_Materno:Apellido_Materno,
            Puesto:Puesto,Area:Area,Jefe_Inmediato:Jefe_Inmediato,Hora_Entrada:Hora_Entrada,
            Hora_Comida:Hora_Comida,Hora_Salida:Hora_Salida};
        
        console.log(datosAEnviar);
        fetch('http://localhost:4000/api/employee/',{
            method:"POST",
            body:JSON.stringify(datosAEnviar),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => {
            this.props.history.push("/");
        })
        .catch(console.log)
    }

    render() { 

        const{Nombre,Apellido_Paterno,Apellido_Materno,Puesto,Area,Jefe_Inmediato,Hora_Entrada,
            Hora_Comida,Hora_Salida} = this.state;

        return ( 
            <div className="row">
                <center><h5>Alta de empleado</h5></center>
                <br></br>
                <form className="col s12" onSubmit={this.enviarDatos}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="Nombre" name="Nombre" onChange={this.cambioValor} value={Nombre} type="text" className="validate" />
                            <label htmlFor="Nombre">Nombre(s)</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Apellido_Paterno" name="Apellido_Paterno" onChange={this.cambioValor} value={Apellido_Paterno} type="text" className="validate" />
                            <label htmlFor="Apellido_Paterno">Apellido Paterno</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Apellido_Materno" name="Apellido_Materno" onChange={this.cambioValor} value={Apellido_Materno} type="text" className="validate" />
                            <label htmlFor="Apellido_Materno">Apellido Materno</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Puesto" name="Puesto" onChange={this.cambioValor} value={Puesto} type="text" className="validate" />
                            <label htmlFor="Puesto">Puesto</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Area" name="Area" onChange={this.cambioValor} value={Area} type="text" className="validate" />
                            <label htmlFor="Area">Área</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Jefe_Inmediato" name="Jefe_Inmediato" onChange={this.cambioValor} value={Jefe_Inmediato} type="text" className="validate" />
                            <label htmlFor="Jefe_Inmediato">Jefe Inmediato</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Hora_Entrada" name="Hora_Entrada" onChange={this.cambioValor} value={Hora_Entrada} type="time" className="validate" />
                            <label htmlFor="Hora_Entrada">Hora de Entrada</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Hora_Comida" name="Hora_Comida" onChange={this.cambioValor} value={Hora_Comida} type="time" className="validate" />
                            <label htmlFor="Hora_Comida">Hora de Comida</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Hora_Salida" name="Hora_Salida" onChange={this.cambioValor} value={Hora_Salida} type="time" className="validate" />
                            <label htmlFor="Hora_Salida">Hora de Salida</label>
                        </div>
                        <center>
                            <button className="btn-floating" type="submit" name="action">
                                <i className="material-icons right">add</i>
                            </button>
                            <Link className="btn-floating" to={'/'}>
                                <i className="material-icons right">highlight_off</i>
                            </Link>
                        </center>
                    </div>
                </form>
            </div> );
    }
}
 
export default AddEmpleado;