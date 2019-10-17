import React from 'react';

const Footer = (props) => {
    return (  
        <div className="site-footer">
            <p>{props.contenido}</p>
        </div>
    );
}
 
export default Footer;