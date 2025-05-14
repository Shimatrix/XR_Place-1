import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Title, TitleHighlight } from '../../ui/h2/Title';
import { Card } from '../../ui/card/card';
import { mockCards, CardData } from '../../../mocks/cardData';
import styles from './CardsBlock.module.css';
import { ArrowLeft } from '../../ui/arrow/ArrowLeft';
import { ArrowRight } from '../../ui/arrow/ArrowRight';
import { ArrowButton } from '../../ui/arrow/ArrowButton';
import { useMediaQuery } from 'react-responsive';

export const CardsBlock = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards] = useState<CardData[]>(mockCards);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % cards.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);

  const isFourOrMoreCards = cards.length >= 4;
  const displayedCards = isFourOrMoreCards ? cards.slice(0, 4) : cards;

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
            aria-label={t('common.forward', 'Вперёд')}
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      {/* Кнопка "Смотреть все проекты" */}
      {(isFourOrMoreCards || isMobile) && (
        <a href='#' className={styles.allProjectsButton}>
          {t(isMobile ? 'projects.viewAllMobile' : 'projects.viewAll')}
          <div className={styles.arrowIcon}>
            <ArrowButton color='#4d4d4d' mobileColor='#4d4d4d' />
          </div>
        </a>
      )}

      {/* Сетка карточек */}
      <div className={`${styles.cardGrid} ${styles.gridLayout}`}>
        {displayedCards.map((card) => (
          <Card
            className={styles.card}
            key={card.id}
            imageUrl={card.imageUrl}
            captionLine1={translateIfExists(
              `projects.card${card.id}.title`,
              card.captionLine1
            )}
            captionLine2={translateIfExists(
              `projects.card${card.id}.desc`,
              card.captionLine2
            )}
            hideCaption={isMobile}
          />
        ))}
      </div>
    </div>
  );
};
