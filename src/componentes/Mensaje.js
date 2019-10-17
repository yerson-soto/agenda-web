import React from 'react';
import PropTypes from 'prop-types';

const Mensaje = (props) => {
    const clases = `mensaje ${props.tipo}`;
    return (
        <div className={clases}>
            <p>{props.mensaje}</p>
        </div>
    );
}

Mensaje.propTypes = {
    mensaje: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
}

export default Mensaje;