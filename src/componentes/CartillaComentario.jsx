import React from "react";

export default function CartillaComentario({ imagenSrc, titulo, descripcion }) {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      border: "1px solid #ddd",
      borderRadius: "8px",
      margin:"10px",
      maxWidth: "100%",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
    },
    image: {
      width: "150px",
      height: "150px",
      objectFit: "cover",
      borderRadius: "20%",
      marginRight: "16px"
    },
    title: {
        fontSize: "1.3em",
        color: "#984",
        backgroundColor: "rgba(169, 169, 169, 0.2)",
        borderRadius: "10px",
      },      
    description: {
      margin: "8px",
      color: "rgba(200, 200, 200, 0.8)",
      
    }
  };

  return (
    <div style={styles.container}>
      <img src={imagenSrc} alt={titulo} style={styles.image} />
      <div>
        <h2 style={styles.title}>{titulo}</h2>
        <p style={styles.description}>{descripcion}</p>
      </div>
    </div>
  );
}