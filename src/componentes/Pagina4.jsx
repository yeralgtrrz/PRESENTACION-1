import React from "react";
import '../cssArchivos/Pagina4.css';
import Monet1 from '../imagenes/Claude_Monet_1.jpg';
import Monet10 from '../imagenes/Claude_Monet_10.jpg';
import Monet2 from '../imagenes/Claude_Monet_2.jpg';
import Monet3 from '../imagenes/Claude_Monet_3.jpg';
import { default as Monet11, default as Monet4 } from '../imagenes/Claude_Monet_4.jpg';
import Monet5 from '../imagenes/Claude_Monet_5.jpg';
import Monet6 from '../imagenes/Claude_Monet_6.jpg';
import Monet7 from '../imagenes/Claude_Monet_7.jpg';
import Monet8 from '../imagenes/Claude_Monet_8.jpg';
import Monet9 from '../imagenes/Claude_Monet_9.jpg';
import Comentario from '../imagenes/descarga_(4).jpeg';
import CustomCarousel from './Carrusel';
import CartillaComentario from "./CartillaComentario";

import Cartillas from "./Cartillas";

export default function Pagina4() {
    const images = [Monet1, Monet2, Monet3, Monet4, Monet5];
    return (
        <div className="contenedor-Principal-Pagina4">
            <div className="titulo-de-arte-p4">
                <h2 className="titulo">CENTRO DE ARTE Y CULTURA</h2>
                <h3>Centro de exposición de cuadros (Claude Monet)</h3>
            </div>
            <div className="carrusel-contenedor">
                <CustomCarousel images={images} />
            </div>
            <div className="pagina4-columnas-contenidor2">
                <div className="pagina4-columna1-contenido2">
                        <Cartillas
                            titulo="Impresión al amanecer"
                            descripcion="Una representación de la luz reflejada sobre el agua."
                            imagenSrc={Monet6}
                            alt="Obra Impresión al amanecer"
                        />
                        <Cartillas
                            titulo="Jardín de flores"
                            descripcion="Una escena vibrante con un enfoque en la naturaleza."
                            imagenSrc={Monet7}
                            alt="Obra Jardín de flores"
                        />
                </div>
                <div className="pagina4-columna2-contenido2">
                        <Cartillas
                            titulo="Paisaje en la niebla"
                            descripcion="Un paisaje sereno con una atmósfera etérea."
                            imagenSrc={Monet8}
                            alt="Obra Paisaje en la niebla"
                        />
                        <Cartillas
                            titulo="Puente japonés"
                            descripcion="Un puente rodeado de vegetación exuberante."
                            imagenSrc={Monet9}
                            alt="Obra Puente japonés"
                        />
                </div>
                <div className="pagina4-columna3-contenido2">
                        <Cartillas
                            titulo="A orillas del río"
                            descripcion="Un río tranquilo en un día soleado."
                            imagenSrc={Monet10}
                            alt="Obra A orillas del río"
                        />
                        <Cartillas
                            titulo="Reflejos en el agua"
                            descripcion="Colores suaves reflejados en la superficie del agua."
                            imagenSrc={Monet11}
                            alt="Obra Reflejos en el agua"
                        />
                </div>
            </div>
            <div className="comentarios">
                            <CartillaComentario
                                imagenSrc={Comentario}
                                titulo="@ErmestorVillacencio1223"
                                descripcion="Tuve el placer de asistir a la exposición cultural a puertas abiertas el mes pasado, y fue una experiencia inolvidable. Los libros expuestos reflejaron una profunda conexión con la historia y la cultura, permitiendo a todos los asistentes sumergirse en el fascinante mundo de la literatura. Fue increíble ver cómo cada obra narraba una historia única que invitaba a la reflexión y al diálogo. Definitivamente, espero que haya más eventos de este tipo en el futuro para seguir promoviendo el amor por la lectura."
                            />
                        </div>
        </div>
    );
}
