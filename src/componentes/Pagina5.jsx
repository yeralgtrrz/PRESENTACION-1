import React from "react";
import '../cssArchivos/Pagina5.css';
import imagen1 from '../imagenes/Artes_escenicas1.jpg';
import imagen2 from '../imagenes/Artes_escenicas2.jpg';
import imagen3 from '../imagenes/Artes_escenicas3.jpg';
import imagen4 from '../imagenes/Artes_escenicas4.jpg';
import imagen5 from '../imagenes/Artes_escenicas5.jpg';
import imagen6 from '../imagenes/Artes_escenicas6.jpg';
import imagen7 from '../imagenes/Artes_escenicas7.jpg';
import imagen8 from '../imagenes/Artes_escenicas8.jpg';
import imagen9 from '../imagenes/Artes_escenicas9.jpg';
import Comentario from '../imagenes/descarga_(5).jpeg';
import CartillaComentario from "./CartillaComentario";
import Cartillas from "./CartillaTexto";

export default function Pagina5() {
    return (
        <div className="contenedor-Principal-Pagina5">
            <div className="pagina5-titulo">
                <h2 className="titulo">CENTRO DE PRESENTACIONES OBRAS TEATRO</h2>
                <h3>Espacio escénico y teatral general</h3>
            </div>
            <div className="contenedor-columnas">
                <div className="columna1">
                    <div className="cartilla">
                        <Cartillas
                            titulo="El Lamento del Viento"
                            descripcion="Una obra que explora la melancolía de la vida a través de un monólogo lleno de emociones profundas."
                            imagenSrc={imagen1}
                            alt="Escena de El Lamento del Viento"
                        />
                    </div>
                    <div className="cartilla">
                        <Cartillas
                            titulo="Sombras en el Horizonte"
                            descripcion="Un drama psicológico que lleva a los personajes al límite de sus emociones."
                            imagenSrc={imagen2}
                            alt="Escena de Sombras en el Horizonte"
                        />
                    </div>
                    <div className="cartilla">
                        <Cartillas
                            titulo="El Último Aplauso"
                            descripcion="Una obra inspiradora sobre el poder del arte y el sacrificio en el escenario."
                            imagenSrc={imagen3}
                            alt="Escena de El Último Aplauso"
                        />
                    </div>
                </div>
                <div className="columna2">
                    <div className="cartilla">
                        <Cartillas
                            titulo="Máscaras de la Eternidad"
                            descripcion="Un viaje teatral a través de las culturas que muestran las emociones detrás de cada máscara."
                            imagenSrc={imagen4}
                            alt="Máscaras de la Eternidad"
                        />
                    </div>
                    <div className="cartilla">
                        <Cartillas
                            titulo="Ecos de un Pasado"
                            descripcion="Un misterio que combina nostalgia y traición. Una de las producciones más caras, conocida por sus escenarios impresionantes."
                            imagenSrc={imagen5}
                            alt="Escena de Ecos de un Pasado"
                        />
                    </div>
                    <div className="cartilla">
                        <Cartillas
                            titulo="La Tragedia Infinita"
                            descripcion="Conmovedora sobre amor y pérdida"
                            imagenSrc={imagen9}
                            alt="Escena de La Tragedia Infinita"
                        />
                    </div>
                </div>
                <div className="columna3">
                    <div className="cartilla">
                        <Cartillas
                            titulo="La Voz del Silencio"
                            descripcion="Un drama minimalista que muestra la fuerza de los momentos más simples de la vida."
                            imagenSrc={imagen6}
                            alt="Escena de La Voz del Silencio"
                        />
                    </div>
                    <div className="cartilla">
                        <Cartillas
                            titulo="Susurros de la Tempestad"
                            descripcion="Una obra épica que mezcla poesía y acción. La producción más cara hasta la fecha por su escenografía digital."
                            imagenSrc={imagen7}
                            alt="Escena de Susurros de la Tempestad"
                        />
                    </div>
                    <div className="cartilla">
                        <Cartillas
                            titulo="Lágrimas de Medianoche"
                            descripcion="Una obra intimista que relata un trágico amor en tiempos de guerra."
                            imagenSrc={imagen8}
                            alt="Escena de Lágrimas de Medianoche"
                        />
                    </div>
                </div>
            </div>
            <div className="comentarios">
    <CartillaComentario
        imagenSrc={Comentario}
        titulo="@MariaTeatroVive"
        descripcion="Tuve la oportunidad de asistir a la obra de teatro 'El Sueño de una Noche de Verano' el mes pasado, y fue una experiencia mágica. La puesta en escena, la actuación de los actores y la escenografía me sumergieron completamente en el mundo de Shakespeare. Cada escena estaba llena de emoción y humor, y la interacción con el público hizo que la experiencia fuera aún más especial. Sin duda, espero que haya más representaciones de obras clásicas en el futuro para continuar disfrutando del arte teatral."
    />
</div>

        </div>
    );
}
