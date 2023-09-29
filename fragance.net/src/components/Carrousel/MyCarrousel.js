import React from "react";
import badboy from "../../assets/img/badboy.webp";
import twelve from "../../assets/img/twelve.webp";
import Moschino from "../../assets/img/Moschino.png";

const MyCarrousel = () => {
  return (
    <div className="d-flex align-items-center">
      <div>
        <h2 className="mb-4">Próximos Lanzamientos</h2>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex align-items-center">
                <img src={badboy} className="d-block w-25 mr-4" alt="..." />
                <div>
                  <h3>CAROLINA HERRERA BAD BOY</h3>
                  <p>
                    Carolina Herrera presenta BAD BOY, un perfume masculino
                    innovador y explosivo que actualiza el mito del rebelde. Es
                    una fragancia Oriental Aromática que combina la luminosidad
                    de la Salvia, la Bergamota Verde y la Pimienta con la
                    oscuridad sensual del Haba Tonka, el Cacao y la Madera de
                    Ámbar. BAD BOY es una oda a los hombres que luchan por sus
                    principios y son fieles a su propia identidad, expresando
                    las luces y sombras de la naturaleza del hombre actual.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex align-items-center">
                <img src={twelve} className="d-block w-25 mr-4" alt="..." />
                <div>
                  <h3>CAROLINA HERRERA 212 HEROES EDT</h3>
                  <p>
                    212 Heroes es una fragancia masculina que celebra la
                    juventud y la autenticidad. Con una fórmula vegana, un
                    frasco de diseño en forma de patineta y un aroma fresco con
                    notas de pera, jengibre y geranio. Es auténtico y 100%
                    vegano, ideal para quienes viven la vida al máximo.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex align-items-center">
                <img src={Moschino} className="d-block w-25 mr-4" alt="..." />
                <div>
                  <h3>MOSCHINO TOY BOY EDP</h3>
                  <p>
                    Toy Boy EDP es una fragancia masculina amaderada y especiada
                    lanzada en 2019. Representa a un hombre moderno, apasionado
                    y lleno de energía. Reinterpreta la elegancia con un toque
                    de ironía y habla a quienes buscan algo único y dinámico.
                    Sus notas incluyen pimienta rosa, nuez moscada, pera,
                    magnolia, y vetiver, entre otras. Ideal para aquellos que
                    muestran su lado tierno y lúdico.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCarrousel;
