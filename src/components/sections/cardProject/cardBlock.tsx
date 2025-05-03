import { useState } from 'react';
import { Title, TitleHighlight } from '../../ui/h2/Title';
import { Card } from '../../ui/card/card';
import { mockCards, CardData } from '../../../mocks/cardData';
import styles from './CardsBlock.module.css';
import { ArrowLeft } from '../../ui/arrow/ArrowLeft';
import { ArrowRight } from '../../ui/arrow/ArrowRight';

export const CardsBlock = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards] = useState<CardData[]>(mockCards);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className={styles.block}>
      <div className={styles.headerContainer}>
        <Title label='сотрудничество'>
          Реализованые <TitleHighlight>проекты</TitleHighlight>
        </Title>

        <div className={styles.controls}>
          <button
            onClick={prevSlide}
            className={styles.arrowButton}
            disabled={currentIndex === 0}
            aria-label='Назад'
          >
            <ArrowLeft />
          </button>

          <button
            onClick={nextSlide}
            className={styles.arrowButton}
            disabled={currentIndex === cards.length - 1}
            aria-label='Вперед'
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <Card
          key={cards[currentIndex].id}
          imageUrl={cards[currentIndex].imageUrl}
          captionLine1={cards[currentIndex].captionLine1}
          captionLine2={cards[currentIndex].captionLine2}
        />
      </div>
    </div>
  );
};
