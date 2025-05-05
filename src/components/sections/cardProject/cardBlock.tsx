import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Title, TitleHighlight } from '../../ui/h2/Title';
import { Card } from '../../ui/card/card';
import { mockCards, CardData } from '../../../mocks/cardData';
import styles from './CardsBlock.module.css';
import { ArrowLeft } from '../../ui/arrow/ArrowLeft';
import { ArrowRight } from '../../ui/arrow/ArrowRight';

export const CardsBlock = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards] = useState<CardData[]>(mockCards);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  // Определяем карточку
  const currentCard = cards[currentIndex];

  // Пробуем перевести, если ключ есть, иначе отображаем оригинальный текст
  const translateIfExists = (key: string, fallback: string) => {
    const translation = t(key);
    return translation === key ? fallback : translation;
  };

  return (
    <div className={styles.block}>
      <div className={styles.headerContainer}>
        <Title label={t('projects.label')}>
          {t('projects.title.regular')}{' '}
          <TitleHighlight>{t('projects.title.highlight')}</TitleHighlight>
        </Title>

        <div className={styles.controls}>
          <button
            onClick={prevSlide}
            className={styles.arrowButton}
            disabled={currentIndex === 0}
            aria-label={t('common.back', 'Назад')}
          >
            <ArrowLeft />
          </button>

          <button
            onClick={nextSlide}
            className={styles.arrowButton}
            disabled={currentIndex === cards.length - 1}
            aria-label={t('common.forward', 'Вперед')}
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <Card
          key={currentCard.id}
          imageUrl={currentCard.imageUrl}
          captionLine1={translateIfExists(
            `projects.card${currentCard.id}.title`,
            currentCard.captionLine1
          )}
          captionLine2={translateIfExists(
            `projects.card${currentCard.id}.desc`,
            currentCard.captionLine2
          )}
        />
      </div>
    </div>
  );
};
