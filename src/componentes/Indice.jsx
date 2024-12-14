import React from "react";
import '../cssArchivos/Indice.css';
import Cultural from '../imagenes/Centro-cultural.jpg';
export default function Indice() {
    return (
        <div className="contenedor-Principal-Indice">
            <div className="portada">
                <div className="titulo-de-arte">
                <h2>BIENVENIDOS AL CENTRO CULTURAL</h2>
                <h3>un espacio para explorar, crear y compartir el arte en todas sus formas</h3>
                </div>
                <img src={Cultural} alt="Centro Cultural" className="imagen-contenedor" />
                <div className="row">
                    <div className="col principal-columna">
                        <h2>Descripción de la Página</h2>
                        <div className="contenido">
                            <p>
                                Descubre un espacio donde el arte, la música y la creatividad se unen para inspirar. 
                                En nuestro Centro Cultural, ofrecemos exposiciones, talleres y eventos diseñados para conectar 
                                comunidades y fomentar la expresión artística. Nos apasiona crear un entorno donde todos puedan 
                                explorar nuevas formas de expresión y ser parte de una comunidad creativa.
                            </p>
                            <p>
                                Además, contamos con actividades interactivas que permiten a los visitantes involucrarse en el arte de manera dinámica. 
                                Desde pinturas al óleo hasta presentaciones de danza, cada rincón de nuestro centro está diseñado para sorprender y emocionar.
                            </p>
                        </div>
                        <h2>Actividades Destacadas</h2>
                        <div className="contenido">
                            <p>
                                ¡Este mes tenemos actividades para todos! Desde talleres para principiantes hasta exposiciones de artistas emergentes. 
                                No te pierdas nuestra programación, donde podrás sumergirte en el mundo del arte y explorar nuevas técnicas.
                            </p>
                            <ul>
                                <li><strong>Taller de Escultura:</strong> Aprende las técnicas básicas para crear esculturas de barro.</li>
                                <li><strong>Exposición de Fotografía:</strong> Una muestra que celebra la belleza de la naturaleza a través del lente.</li>
                                <li><strong>Clase de Baile Moderno:</strong> Disfruta de una clase de baile con instructores expertos.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col secundaria-columna">
                        <div className="subtitulo">
                            <h2>Próximos Eventos</h2>
                        </div>
                        <div className="evento">
                            <h3>Taller de Pintura</h3>
                            <p>Martes 15 de diciembre - 3:00 PM</p>
                        </div>
                        <div className="evento">
                            <h3>Concierto de Jazz</h3>
                            <p>Viernes 18 de diciembre - 7:00 PM</p>
                        </div>
                        <div className="evento">
                            <h3>Feria de Artesanía</h3>
                            <p>Domingo 20 de diciembre - 10:00 AM</p>
                        </div>
                        <div className="evento">
                            <h3>Obra de Teatro: “El Juego de la Mente”</h3>
                            <p>Jueves 24 de diciembre - 8:00 PM</p>
                        </div>
                    </div>
                </div>

                <h2 className="Artistas-Destacados">Artistas Destacados</h2>
                <div className="contenido">
                    <p className='contenido-destacado'>
                        Cada mes, nuestro centro cultural ofrece espacio para artistas locales y nacionales. Queremos resaltar la increíble 
                        creatividad que existe en nuestra comunidad, por lo que cada exposición busca mostrar el trabajo de artistas 
                        que rompen los límites del arte convencional.
                    </p>
                    <div className="artistas">
                        <div className="artista">
                            <h3>Juan Pérez - Pintor Abstracto</h3>
                            <p className='contenido-destacado'>Juan Pérez es un pintor reconocido por su enfoque en el color y la forma, creando piezas que exploran la relación entre 
                            lo físico y lo emocional. Su exposición será inaugurada el 10 de enero.</p>
                        </div>
                        <div className="artista">
                            <h3>María González - Escultora Contemporánea</h3>
                            <p className='contenido-destacado'>María González trabaja con materiales reciclados para crear esculturas que buscan inspirar reflexión sobre el 
                            impacto ambiental. Su trabajo estará disponible para su apreciación en el mes de febrero.</p>
                        </div>
                        <div className="artista">
                        <h3>Carlos Pérez - Pintor Abstracto</h3>
                        <p className='contenido-destacado'>Carlos Pérez explora el uso del color y la geometría para crear obras abstractas que desafían la percepción visual. Su exposición estará abierta al público en marzo.</p>
                        </div>
                        <div className="artista">
                            <h3>Ana Rodríguez - Fotógrafa de Paisajes</h3>
                            <p className='contenido-destacado'>Ana Rodríguez captura la esencia de la naturaleza a través de su lente, enfocándose en la belleza de paisajes deslumbrantes. Su nueva colección será presentada en abril.</p>
                        </div>
                        <div className="artista">
                            <h3>David López - Artista Digital</h3>
                            <p className='contenido-destacado'>David López utiliza tecnología digital para crear arte interactivo que invita a la audiencia a participar activamente. Su obra será expuesta en mayo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}