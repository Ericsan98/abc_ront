import './App.css';
import { Route, BrowserRouter as Router, Link } from "react-router-dom";     
import AddEmpleado from "./components/createEmpleado";
import ReadRegistros from "./components/ReadTuplas";
import EditEmpleado from "./components/editEmpleado";


function App() {
  return (
    <Router>
      <div className="App">
        <nav className='light-blue darken-4'>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo center"><h4>Administración de Empleados</h4></Link>
          </div>
        </nav>
        <br></br>  
        <Route exact path="/" component={ReadRegistros}></Route>
        <Route path="/create" component={AddEmpleado}></Route>
        <Route path="/update/:id" component={EditEmpleado}></Route>
      </div>
    </Router>
  );
}

export default App;


/* class App extends React.Component{
  
  datos = [];

  constructor(){
    super();
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
  
  addEmpleado(){
    console.log(this.state)
  }

  fetchInfo(){
    fetch('http://localhost:4000/api/employee')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.datos = data;
      });
  }
  
  render(){
    return (
      <div className="App">
        {/*Navegación}
        <nav className='light-blue darken-4'>
          <div className='container'>
            <a href="/"><b>Administración de Horarios</b></a>
          </div>
        </nav>
  
        <div className='container'>
          <div className='row'>
            <div className='col s5'>
              <div className='card'>
                <div className='card-content'>
                  <form>
                    <div className='row'>
                      <div className='input-field col s12'>
                        <input type={"text"} placeholder="Nombre del empleado"/>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='col s7'>
              
            </div>
          </div>
        </div>
  
        <center>
          <a className="waves-effect waves-light btn" onClick={() => this.addEmpleado()}><i className="material-icons left">description</i>
          Consultar registros de empleados</a>
          <a className="waves-effect waves-light btn" onClick={() => this.fetchInfo()}><i className="material-icons left">add</i>
          Añadir empleado</a>
          <a className="waves-effect waves-light btn"><i className="material-icons left">update</i>
          Actualizar registro</a>
          <a className="waves-effect waves-light btn"><i className="material-icons left">delete_forever</i>
          Eliminar registro de empleado</a>
        </center>
        <p>{this.datos}</p>


        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th className="text-center">Nombre</th>
              <th className="text-center">Apellido Paterno</th>
              <th className="text-center">Apellido Materno</th>
            </tr>
          </thead>
          <tbody>
 
          {datos.map(item => (         
          
            <tr>
              <th className="text-center" id={item.id}>{item._id}</th>
              <td className="text-center">{item.Nombre}</td>
              <td className="text-center">{item.Apellido_Paterno}</td>
              <td className="text-center">{item.Apellido_Materno}</td>
            </tr>
 
          ))}
 
          </tbody>
        </table>
      </div>
    );
  }
} */