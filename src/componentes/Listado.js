import React, { Component } from 'react';
import THead from './THead';
import Contacto from './Contacto';
import PropTypes from 'prop-types';

class Listado extends Component {
       
    render() { 
        
        return (  
            <div className="contenedor caja listar">
                <h2>{this.props.cantidad} Contactos Agregados</h2>
                <div className="listado">
                    <THead/>
                    {Object.keys(this.props.contactos).map((key) => (
                       <Contacto
                            key={key}
                            contacto={this.props.contactos[key]}
                       /> 
                    ))}
                </div>
                
            </div>
        );
    }
}

Listado.propTypes = {
    contactos: PropTypes.array.isRequired,
    cantidad: PropTypes.number.isRequired
}
 
export default Listado;