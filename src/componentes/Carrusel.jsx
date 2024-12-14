import React, { useState } from 'react';
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from 'reactstrap';
import '../cssArchivos/Carousel.css';
import ClaudeMonet1 from '../imagenes/Claude_Monet_1.jpg';
import ClaudeMonet2 from '../imagenes/Claude_Monet_2.jpg';
import ClaudeMonet3 from '../imagenes/Claude_Monet_3.jpg';
import ClaudeMonet4 from '../imagenes/Claude_Monet_4.jpg';
import ClaudeMonet5 from '../imagenes/Claude_Monet_5.jpg';

const items = [
  {
    src: ClaudeMonet1,
    altText: 'Slide 1',
    key: 1,
  },
  {
    src: ClaudeMonet2,
    altText: 'Slide 2',
    key: 2,
  },
  {
    src: ClaudeMonet3,
    altText: 'Slide 3',
    key: 3,
  },
  {
    src: ClaudeMonet4,
    altText: 'Slide 4', // Nueva imagen 4
    key: 4,
  },
  {
    src: ClaudeMonet5,
    altText: 'Slide 5', // Nueva imagen 5
    key: 5,
  },
];

export default function CustomCarousel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}
