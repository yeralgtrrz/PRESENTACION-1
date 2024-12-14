import React from "react";
import '../cssArchivos/Pagina3.css';
import Comentario from '../imagenes/descarga_(3).jpeg';
import imagen1 from '../imagenes/operas-musica1.jpg';
import imagen2 from '../imagenes/operas-musica2.jpg';
import imagen3 from '../imagenes/operas-musica3.jpg';
import imagen4 from '../imagenes/operas-musica4.jpg';
import imagen5 from '../imagenes/operas-musica5.jpg';
import imagen6 from '../imagenes/operas-musica6.jpg';
import imagen7 from '../imagenes/operas-musica7.jpg';
import CartillaComentario from "./CartillaComentario";
import Cartillas from "./Cartillas";

export default function Pagina3() {
    return (
        <div className="contenedor-Principal-Pagina3">
            <div className="titulo-pagina3">
                <h2>ESCENARIO ARTÍSTICO MUSICAL</h2>
                <h3>Espacio para ópera y música</h3>
            </div>
            <div className="contenedor-columnas-pagina3">
                <div className="contenedor-pagina3-columna1">
                    <div>
                        <b><p>Presentaciones</p></b>
                    </div>
                    <Cartillas
                        titulo="Orquesta Sinfónica Nacional"
                        descripcion="Horario: 19:00 - 21:00 hrs"
                        imagenSrc={imagen5}
                        alt="Orquesta Sinfónica Nacional"
                    />
                    <Cartillas
                        titulo="Ópera de Primavera"
                        descripcion="Horario: 17:30 - 19:00 hrs"
                        imagenSrc={imagen1}
                        alt="Ópera de Primavera"
                    />
                    <Cartillas
                        titulo="Serenata Clásica"
                        descripcion="Horario: 16:00 - 17:00 hrs"
                        imagenSrc={imagen2}
                        alt="Serenata Clásica"
                    />
                    <Cartillas
                        titulo="Tuna Universitaria Masculina"
                        descripcion="Horario: 18:00 - 19:00 hrs"
                        imagenSrc={imagen6}
                        alt="Tuna Universitaria Masculina"
                    />
                    <Cartillas
                        titulo="Tuna Estudiantil Internacional"
                        descripcion="Horario: 20:30 - 22:00 hrs"
                        imagenSrc={imagen7}
                        alt="Tuna Estudiantil Internacional"
                    />
                </div>

                <div className="contenedor-pagina3-columna2">
                    <Cartillas
                        titulo="Rigoletto - Verdi"
                        descripcion="Horario: 21:00 - 23:00 hrs"
                        imagenSrc={imagen3}
                        alt="Rigoletto de Verdi"
                    />
                    <p>Disfruta de una de las más célebres obras de Giuseppe Verdi, que captura la intensidad de las emociones humanas en un contexto operístico único.</p>
                    <Cartillas
                        titulo="El Fantasma de la Ópera"
                        descripcion="Horario: 19:30 - 21:00 hrs"
                        imagenSrc={imagen4}
                        alt="El Fantasma de la Ópera"
                    />
                    <p>Sumérgete en el misterio y la pasión de esta obra maestra que combina música y narrativa de manera inolvidable.</p>
                </div>
            </div>
            <div className="comentarios">
    <CartillaComentario
        imagenSrc={Comentario}
        titulo="@SofiaOpenhawerP46"
        descripcion="Tuve el honor de asistir a la función de 'La Traviata' el mes pasado, y fue una experiencia indescriptible. La actuación de los cantantes, acompañada de la magistral dirección de orquesta, me transportó al corazón de la ópera italiana. Cada aria estaba llena de emoción, y la escenografía me permitió vivir cada escena como si estuviera dentro de la historia. Fue una noche memorable que me reafirmó el poder de la música clásica. Sin duda, espero que haya más presentaciones de ópera en el futuro para seguir disfrutando de esta maravillosa forma de arte."
    />
</div>

        </div>
    );
}