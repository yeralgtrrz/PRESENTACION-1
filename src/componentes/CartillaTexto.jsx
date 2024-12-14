import React from 'react';

export default function CartillaConTexto({ imagenSrc, titulo, descripcion }) {
    const styles = {
        cartillaImagen: {
            position: 'relative',
            maxWidth: '100%',
        },
        imagenCartilla: {
            width: '100%',
            height: 'auto',
            borderRadius: '10px',
            display: 'block',
        },
        textoCartilla: {
            position: 'absolute',
            bottom: '10px', 
            left: '10px',   
            color: 'white',
            textAlign: 'left',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '5px',
            padding: '5px', 
        },
    };
    return (
        <div style={styles.cartillaImagen}>
            <img src={imagenSrc} alt={titulo} style={styles.imagenCartilla} />
            <div style={styles.textoCartilla}>
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
            </div>
        </div>
    );
}
