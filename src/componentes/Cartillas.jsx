import React from "react";

const styles = {
    cartilla: {
        background: "rgba(255, 255, 255, 0.1)",
        margin: '10px',
        color: "white",
        padding: "10px",
        borderRadius: "8px",
        boxShadow: "0px 8px 12px -4px rgba(0, 0, 0, 0.7)",
        textAlign: "center",
        transition: "transform 0.3s, box-shadow 0.3s",
    },
    cartillaHover: {
        transform: "scale(1.05)",
        boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.8)",
    },
    imagenCarta: {
        width: "100%",
        borderRadius: "8px",
    },
    tituloCarta: {
        fontSize: "1.5rem",
        margin: "10px 0",
    },
    textoCarta: {
        fontSize: "1rem",
    },
};

export default function Cartillas({ titulo, descripcion, imagenSrc, alt }) {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            className="cartilla"
            style={{ ...styles.cartilla, ...(isHovered ? styles.cartillaHover : {}) }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={imagenSrc}
                alt={alt}
                style={styles.imagenCarta}
            />
            <h3 style={styles.tituloCarta}>{titulo}</h3>
            <p style={styles.textoCarta}>{descripcion}</p>
        </div>
    );
}
