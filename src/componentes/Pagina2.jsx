import React from "react";
import '../cssArchivos/Pagina2.css';
import Comentario from '../imagenes/descarga_(2).jpeg';
import Libro1 from '../imagenes/libros1.jpg';
import Libro3 from '../imagenes/libros3.jpg';
import Libro4 from '../imagenes/libros4.jpg';
import Libro5 from '../imagenes/libros5.jpg';
import CartillaComentario from "./CartillaComentario";
import Cartillas from "./Cartillas";

export default function Pagina2() {
    return (
        <div className="contenedor-Principal-Pagina2">
            <div className="titulo-pagina2-titulo">
                <div>
                    <h2>LIBROS DE EXPOSICIÓN</h2>
                    <h3>Exploraremos el mundo de los libros y su impacto cultural</h3>
                </div>
            </div>
            <div className="contenedor-libros-pagina2">
                <div className="parte1">
                    <Cartillas
                        titulo="La metamorfosis"
                        descripcion="Franz Kafka"
                        imagenSrc={Libro3}
                    />
                    <p className="descripcion">Este libro, escrito por Franz Kafka, relata la historia de Gregorio Samsa, quien un día se despierta convertido en un insecto gigante. La obra explora temas como la alienación, la identidad y la incomunicación. Es una reflexión profunda sobre la naturaleza humana y las relaciones familiares, presentada en un estilo surrealista y filosófico.</p>
                </div>
                <div className="parte2">
                    <Cartillas
                        titulo="Hamlet"
                        descripcion="William Shakespeare"
                        imagenSrc={Libro1}
                    />
                    <p className="descripcion">En esta famosa tragedia de Shakespeare, Hamlet, el príncipe de Dinamarca, busca vengar la muerte de su padre, asesinado por su propio hermano. La obra aborda temas como la venganza, la locura, la moralidad y el destino. A través de sus complejos personajes, Shakespeare nos invita a reflexionar sobre la naturaleza del poder y la justicia.</p>
                </div>
                <div className="parte4">
                    <Cartillas
                        titulo="Grimorio"
                        descripcion="Anónimo"
                        imagenSrc={Libro4}
                    />
                    <p className="descripcion">Este misterioso y fascinante libro, de autor anónimo, es una recopilación de conocimientos esotéricos, hechizos y rituales. A lo largo de sus páginas, el Grimorio ofrece una visión profunda de las prácticas ocultas y la magia ancestral, invitando al lector a explorar el mundo de lo desconocido y lo místico.</p>
                </div>
                <div className="parte5">
                    <Cartillas
                        titulo="Drácula"
                        descripcion="Bram Stoker"
                        imagenSrc={Libro5}
                    />
                    <p className="descripcion">La famosa novela de terror de Bram Stoker, 'Drácula', cuenta la historia del conde Drácula, un vampiro que viaja de Transilvania a Inglaterra para propagar su maldición. A través de esta obra, Stoker profundiza en temas de lo sobrenatural, el miedo y la lucha entre el bien y el mal, ofreciendo una crítica sobre la moralidad y la naturaleza humana.</p>
                </div>
            </div>
            <div className="comentarios">
    <CartillaComentario
        imagenSrc={Comentario}
        titulo="@ValeriaLectura"
        descripcion="Tuve la oportunidad de visitar la exposición de libros en la feria literaria el mes pasado, y realmente fue una experiencia única. Los libros expuestos no solo mostraban obras literarias, sino también una profunda conexión con diversas culturas y épocas. Cada ejemplar parecía contar una historia que resonaba con todos los visitantes, invitándonos a reflexionar y a sumergirnos en el poder de las palabras. Sin duda, espero que haya más eventos así para seguir celebrando el amor por la lectura y la literatura."
    />
</div>
``

        </div>
    );
}
