import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario'; 
import Listado from './componentes/Listado';
import Footer from './componentes/Footer';

class App extends Component {

    state = {
        contacto: {},
        contactos: []
    }

    componentDidMount() {
        this.cargarContactos();
    }

    //Esperar por un cambio en el state para consultar la api
    componentDidUpdate(prevProps, prevState) {
        if (prevState.contacto !== this.state.contacto) {
            this.agregarContacto();
            this.cargarContactos();
        }

        this.cargarContactos();
    }  

    //Enviar por props al formulario para traer los datos del contacto
    datosContacto = contacto => {
        this.setState({
            contacto
        });
    }

    //Enviar contacto con fetch
    agregarContacto = () => {
        const url = 'http://www.raydelto.org/agenda.php';
        const header = new Headers();
    
        //crear cabecera
        const post = {
            method: 'POST',
            body: JSON.stringify(this.state.contacto),
            headers: header
        }

        //enviar con fetch
        fetch(url, post)
            .then(respuesta => respuesta.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }

    cargarContactos = () => {
        const url = 'http://www.raydelto.org/agenda.php';

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(contactos => {
               this.setState({
                   contactos
               });
            })
            .catch(error => console('Error', error));

    }

    render() {
        return (
            <div className="app">
                <div className="componente">
                    <Header 
                        titulo="Agenda React"
                    />
                </div>
    
                <div className="principal">
                    <div className="componente">
                        <Formulario
                            datosContacto={this.datosContacto}
                        />
                    </div>
    
                    <div className="componente">
                        <Listado
                            contactos={this.state.contactos}
                            cantidad={this.state.contactos.length}
                        />
                    </div>
                </div>
                
    
                <div className="componente">
                    <Footer
                        contenido="Todos los derechos reservados &copy; 2019"
                    />
                </div>     
            </div>
        );
    }
}

export default App;

        

