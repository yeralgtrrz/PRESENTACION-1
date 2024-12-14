import React from "react";
import '../cssArchivos/Pagina1.css';
import imagen1 from '../imagenes/cine-boliviano1.jpg';
import imagen2 from '../imagenes/cine-boliviano2.jpg';
import imagen3 from '../imagenes/cine-boliviano3.jpg';
import imagen4 from '../imagenes/cine-boliviano4.jpg';
import imagen5 from '../imagenes/cine-boliviano5.jpg';
import imagen6 from '../imagenes/cine-boliviano6.jpg';
import Comentario from '../imagenes/descarga_(1).jpeg';
import CartillaComentario from "./CartillaComentario";
export default function Pagina1() {
    return (
        <div className="contenedor-Principal-Pagina1">
            <div className="titulo-pagina1">
            <h2>CINE Y TEATRO BOLIVIANO</h2>
            <h3>El cine boliviano y arte boliviano desde nuestros ojos </h3>
            </div>
            <p>A través de estos videos, podrás apreciar la diversidad cultural de Bolivia, sus tradiciones,
                sus festivales, su gente y sus historias. Este espacio no solo busca ser un punto de encuentro 
                para los amantes del cine, sino también una plataforma de aprendizaje e inspiración,
                en la que el cine se convierte en una herramienta poderosa para la reflexión social.</p>
            <div className="videos-container-pagina1">
                <div className="video-contenido-pagina1">
                    <a href="https://youtu.be/QS9nan5tuOw?si=VBfxJodhNKNoVFUd">
                        <img src={imagen1} />
                    </a>
                    <p className="video-description">video el asaltante</p>
                </div>
                <div className="video-contenido-pagina1">
                    <a href="https://youtu.be/7o2t9FT-gM0?si=NSLdZHW-HmNkjWCa" >
                        <img src={imagen2} alt="Cine boliviano contemporáneo" />
                    </a>
                    <p>obra cada dia</p>
                </div>
            </div>
            <div className="videos-container-pagina1">
                <div className="video-contenido-pagina1">
                    <a href="https://youtu.be/O07EU_1GnFA?si=MiEntfSwnpWgSAYk" >
                        <img src={imagen3} alt="Películas bolivianas internacionales" />
                    </a>
                    <p>Dama despierta</p>
                </div>
                <div className="video-contenido-pagina1">
                    <a href="https://www.youtube.com/watch?v=1g7JjBy0psQ" >
                        <img src={imagen4} alt="Evolución del cine boliviano" />
                    </a>
                    <p>La evolución del cine boliviano en los últimos 20 años.</p>
                </div>
            </div>
            <div className="videos-container-pagina1">
                <div className="video-contenido-pagina1">
                    <a href="https://youtu.be/4djUxd0DoxY?si=-Qr68DkDTNEpab6M" >
                        <img src={imagen5} alt="Video adicional 1" />
                    </a>
                    <p>obra cada dia por ti</p>
                </div>
                <div className="video-contenido-pagina1">
                    <a href="https://youtu.be/lxR4UxvNapc?si=x_gXpje38mbIflxK" >
                        <img src={imagen6} alt="Video adicional 2" />
                    </a>
                    <p>la droga y el sida</p>
                </div>
            </div>
            <div className="comentarios">
    <CartillaComentario
        imagenSrc={Comentario}
        titulo="@AdrianParedesLoza"
        descripcion="Tuve la oportunidad de asistir a la exposición de cine boliviano el mes pasado, y fue una experiencia impresionante. Las películas proyectadas reflejaron una conexión profunda con nuestra identidad cultural, mostrando historias auténticas que celebran nuestras tradiciones, luchas y sueños. Cada obra cinematográfica era una ventana a la realidad de Bolivia, llena de emoción y reflexión. Estoy seguro de que eventos como este seguirán promoviendo el cine boliviano y su impacto en la audiencia global."
    />
</div>

        </div>
    );
}
