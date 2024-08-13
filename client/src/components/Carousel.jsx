import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import destinations from "../../data";

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const shuffledDestinations = shuffleArray([...destinations]);

  return (
    <>
      <div className="presentation">
        <h2>Présentation</h2>
        <p className="presentation-description">
          Tu as envie de partir en vacances mais tu ne sais pas encore où ? Tu
          rêves d’une plage de sable fin, d’une aventure en pleine montagne, ou
          d’une immersion culturelle dans une ville historique, mais le choix
          est trop vaste ? Pas de panique, BougeTonQ.com est là pour t’aider à
          choisir ta prochaine destination avec le sourire !
          <br />
          C’est le site de voyage qui a pour mission de te sortir du canapé et
          de te faire explorer le monde (ou du moins une petite partie pour
          commencer). On recense les villes et les pays les plus incroyables,
          les plus dépaysants, et même ceux que tu n'avais jamais envisagés. Que
          tu sois un aventurier dans l'âme, un adepte du farniente ou un fan de
          city-breaks, on a la destination qu'il te faut.
        </p>
      </div>
      <div className="carousel-container">
        <h3>Destinations de rêve</h3>
        <Slider
          dots={settings.dots}
          infinite={settings.infinite}
          speed={settings.speed}
          slidesToShow={settings.slidesToShow}
          slidesToScroll={settings.slidesToScroll}
          autoplay={settings.autoplay}
          autoplaySpeed={settings.autoplaySpeed}
          arrows={settings.arrows}
          responsive={settings.responsive}
        >
          {shuffledDestinations.map((destination, index) => (
            <div key={destination.id} className="carousel-slide">
              <img src={destination.image1} alt={`Slide ${index + 1}`} />
              <h4 className="carousel-title">{destination.City}</h4>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Carousel;
