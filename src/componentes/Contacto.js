import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contacto extends Component {
    
    render() { 
        const { nombre, apellido, telefono } = this.props.contacto;
        return (  
            <ul className="contacto">
                <li>{nombre}</li>
                <li>{apellido}</li>
                <li><span>{telefono}</span></li>
            </ul>
        );
    }
}

Contacto.propTypes = {
    contacto: PropTypes.object.isRequired
}
 
export default Contacto;