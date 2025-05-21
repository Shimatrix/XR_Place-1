import { useTranslation } from 'react-i18next';
import {
  BusinessTeamSectionTitle,
  BusinessTeamTitleHighlight
} from '../../ui/h2/BusinessTeamSectionTitle';
import styles from './BusinessTeam.module.scss';

export const BusinessTeam = () => {
  const { t } = useTranslation();

  return (
    <section id='about-company' className={styles.businessTeam}>
      <BusinessTeamSectionTitle label={t('team.sectionLabel')}>
        {t('team.sectionTitle.main')}{' '}
        <BusinessTeamTitleHighlight>
          {t('team.sectionTitle.highlight')}
        </BusinessTeamTitleHighlight>
      </BusinessTeamSectionTitle>

      {/* ДЕСКТОП */}
      <div className={styles.desktopLayoutWrapper}>
        <div className={styles.desktopGrid}>
          <div className={styles.left}>
            <div className={styles.teamCard}>
              <img
                src='../src/assets/images/artem.jpg'
                alt='фотография Артёма Тарханова'
                className={styles.avatar}
              />
              <div className={styles.cardDescription}>
                <div className={styles.name}>{t('team.member1.name')}</div>
                <div className={styles.role}>{t('team.member1.role')}</div>
              </div>
              <img
                src='../src/assets/images/Group.svg'
                alt='декор'
                className={`${styles.decor} ${styles.decorLeftCard}`}
              />
              <img
                src='../src/assets/images/square.svg'
                alt='декор квадрат'
                className={`${styles.decor} ${styles.decorSquare}`}
              />
            </div>

            <div className={styles.closingStatementWrapper}>
              <p className={styles.closingStatementText}>
                {t('team.closingText')}
              </p>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.teamTextBlock}>
              <div className={styles.topParagraph}>
                <p>{t('team.member1.about1')}</p>
              </div>
              <div className={styles.bottomParagraph}>
                <p>{t('team.member1.about2')}</p>
              </div>
            </div>

            <div className={styles.teamCard}>
              <img
                src='../src/assets/images/victor.jpg'
                alt='фотография Виктора Карнеева'
                className={`${styles.avatar} ${styles.avatarRight}`}
              />
              <div
                className={`${styles.cardDescription} ${styles.cardDescriptionRight}`}
              >
                <div className={styles.name}>{t('team.member2.name')}</div>
                <div className={styles.role}>{t('team.member2.role')}</div>
              </div>
              <img
                src='../src/assets/images/GroupTwo.svg'
                alt='декор'
                className={`${styles.decor} ${styles.decorRightCard}`}
              />
              <img
                src='../src/assets/images/circle.svg'
                alt='декор круг'
                className={`${styles.decor} ${styles.decorCircle}`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* МОБИЛКА */}
      <div className={styles.mobileLayout}>
        <div className={styles.teamTextBlock}>
          <p>{t('team.member1.about1')}</p>
        </div>

        <div className={styles.teamCard}>
          <img
            src='../src/assets/images/artem.jpg'
            alt='фотография Артёма Тарханова'
            className={styles.avatar}
          />
          <div className={styles.cardDescription}>
            <div className={styles.name}>{t('team.member1.name')}</div>
            <div className={styles.role}>{t('team.member1.role')}</div>
          </div>
          <img
            src='../src/assets/images/GroupOneMobile.svg'
            alt='декор'
            className={`${styles.decor} ${styles.decorLeftCard}`}
          />
          <img
            src='../src/assets/images/rectangle.svg'
            alt='декор прямоугольник'
            className={`${styles.decor} ${styles.decorRectangle}`}
          />
        </div>

        <div className={styles.teamTextBlock}>
          <p>{t('team.member1.about2')}</p>
        </div>

        <div className={styles.teamCard}>
          <img
            src='../src/assets/images/victor.jpg'
            alt='фотография Виктора Карнеева'
            className={styles.avatar}
          />
          <div className={styles.cardDescription}>
            <div className={styles.name}>{t('team.member2.name')}</div>
            <div className={styles.role}>{t('team.member2.role')}</div>
          </div>
          <img
            src='../src/assets/images/GroupTwoMobile.svg'
            alt='декор'
            className={`${styles.decor} ${styles.decorRightCard}`}
          />
          <img
            src='../src/assets/images/circle.svg'
            alt='декор круг'
            className={`${styles.decor} ${styles.decorCircle}`}
          />
        </div>

        <div className={styles.closingStatementWrapper}>
          <p className={styles.closingStatementText}>{t('team.closingText')}</p>
        </div>
      </div>
    </section>
  );
};
