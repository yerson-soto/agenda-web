import React, { Component } from 'react';
import Mensaje from './Mensaje';
import PropTypes from 'prop-types';

class Formulario extends Component {
    state = {  
        error: false,
        mostrar: false
    }

    //refs 
    nombreRef = React.createRef();
    apellidoRef = React.createRef();
    telefonoRef = React.createRef();

    enviarDatos = (e) => {
        e.preventDefault();
        
        const nombre = this.nombreRef.current.value,
              apellido = this.apellidoRef.current.value,
              telefono = this.telefonoRef.current.value;
        
        if (nombre === '' || /\s+$/.test(nombre) ||
            apellido === '' || /\s+$/.test(apellido) ||
            telefono === '' || /\s+$/.test(telefono) ) {

                 this.setState({
                     error: true,
                     mostrar: true
                 });

        } else {
            //leer los refs
            const infoContacto = {
                nombre,
                apellido,
                telefono
            }

            //enviar los datos del contacto hacia el padre
            this.props.datosContacto(infoContacto);

            //eliminar error del state
            this.setState({
                error: false,
                mostrar: true
            });

            //resetear el formulario
            e.currentTarget.reset();
        
        }    

        //resetear el state
        if (document.querySelector('.mensaje') === null) {
           setTimeout(() => {
                this.setState({
                    error: false,
                    mostrar: false
                });
            }, 3000); 
        }
        
    }

    mostrarMensaje = () => {
        //leer error del state
        const error = this.state.error,
              mostrar = this.state.mostrar;
        
        let mensaje;

        if (error && mostrar) {
            mensaje = <Mensaje mensaje="Todos los campos son obligatorios" tipo="error"/>
        } else if (!error && mostrar) {
            mensaje = <Mensaje mensaje="Contacto agregado!" tipo="success"/>
        } else if (!error && !mostrar) {
            mensaje = ''; 
        }

        return (
            mensaje 
        );
    }

    render() { 
        
        return (  
            <main className="contenedor caja agregar">
                <h2><i className="fas fa-users"></i> Añadir contactos</h2>
                <form className="form-agregar" onSubmit={this.enviarDatos}>
                    <div className="campos">
                        <div className="campo">
                            <input type="text" ref={this.nombreRef} className="nombre" required/>
                            <label>Nombre</label>
                        </div>

                        <div className="campo">
                            <input type="text" ref={this.apellidoRef} className="apellido" required/>
                            <label>Apellido</label>
                        </div>

                        <div className="campo">
                            <input type="tel" ref={this.telefonoRef} className="telefono" required/> 
                            <label>Teléfono</label>
                        </div>   
                         
                        {this.mostrarMensaje()} 
                        
                        <div className="boton">
                            <button type="submit" id="agregar-contacto" className="btn btn-agregar"><i className="fas fa-plus"></i>
                                Agregar
                            </button>
                        </div>
                    </div>
                  
                </form>
            </main>
        );
    }
}

Formulario.propTypes = {
    datosContacto: PropTypes.func.isRequired
}
 
export default Formulario;