import {
  BusinessTeamSectionTitle,
  BusinessTeamTitleHighlight
} from '../../ui/h2/BusinessTeamSectionTitle';

import styles from './BusinessTeam.module.scss';

export const BusinessTeam = () => (
  <section id='about-company' className={styles.businessTeam}>
    <BusinessTeamSectionTitle label='Кто мы'>
      БИЗНЕС <BusinessTeamTitleHighlight>КОМАНДА</BusinessTeamTitleHighlight>
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
              <div className={styles.name}>Артём Тарханов</div>
              <div className={styles.role}>Co-founder & CEO</div>
            </div>
            <img
              src='../src/assets/images/Group.svg'
              alt='декоративный элемент векторной графики в виде абстрактных линий'
              className={`${styles.decor} ${styles.decorLeftCard}`}
            />
            <img
              src='../src/assets/images/square.svg'
              alt='декоративный элемент векторной графики в виде точек, составляющих фигуру квадрат'
              className={`${styles.decor} ${styles.decorSquare}`}
            />
          </div>

          <div className={styles.closingStatementWrapper}>
            <p className={styles.closingStatementText}>
              С нами вы получите не только продукт, но и партнёрство, основанное
              на доверии и взаимопонимании.
            </p>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.teamTextBlock}>
            <p>
              Мы понимаем, что каждая компания уникальна, поэтому мы работаем в
              тесном сотрудничестве с нашими клиентами, чтобы создавать
              индивидуальные решения, которые отвечают их потребностям.
            </p>
            <p>
              Наша команда не только разрабатывает технологии, но и обеспечивает
              поддержку на каждом этапе сотрудничества.
            </p>
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
              <div className={styles.name}>Виктор Карнеев</div>
              <div className={styles.role}>
                Co-founder & Production Director
              </div>
            </div>
            <img
              src='../src/assets/images/GroupTwo.svg'
              alt='декоративный элемент векторной графики в виде абстрактных линий'
              className={`${styles.decor} ${styles.decorRightCard}`}
            />
            <img
              src='../src/assets/images/circle.svg'
              alt='декоративный элемент векторной графики в виде точек, составляющих фигуру круг'
              className={`${styles.decor} ${styles.decorCircle}`}
            />
          </div>
        </div>
      </div>
    </div>

    {/* МОБИЛКА */}
    <div className={styles.mobileLayout}>
      <div className={styles.teamTextBlock}>
        <p>
          Мы понимаем, что каждая компания уникальна, поэтому мы работаем в
          тесном сотрудничестве с нашими клиентами, чтобы создавать
          индивидуальные решения, которые отвечают их потребностям.
        </p>
      </div>

      <div className={styles.teamCard}>
        <img
          src='../src/assets/images/artem.jpg'
          alt='фотография Артёма Тарханова'
          className={styles.avatar}
        />
        <div className={styles.cardDescription}>
          <div className={styles.name}>Артём Тарханов</div>
          <div className={styles.role}>Co-founder & CEO</div>
        </div>
        <img
          src='../src/assets/images/GroupOneMobile.svg'
          alt='декоративный элемент векторной графики в виде в виде абстрактных линий'
          className={`${styles.decor} ${styles.decorLeftCard}`}
        />
        <img
          src='../src/assets/images/rectangle.svg'
          alt='декоративный элемент векторной графики в виде в виде точек, составляющих фигуру прямоугольник'
          className={`${styles.decor} ${styles.decorRectangle}`}
        />
      </div>

      <div className={styles.teamTextBlock}>
        <p>
          Наша команда не только разрабатывает технологии, но и обеспечивает
          поддержку на каждом этапе сотрудничества.
        </p>
      </div>

      <div className={styles.teamCard}>
        <img
          src='../src/assets/images/victor.jpg'
          alt='фотография Виктора Карнеева'
          className={styles.avatar}
        />
        <div className={styles.cardDescription}>
          <div className={styles.name}>Виктор Карнеев</div>
          <div className={styles.role}>Co-founder & Production Director</div>
        </div>
        <img
          src='../src/assets/images/GroupTwoMobile.svg'
          alt='декоративный элемент векторной графики в виде в виде абстрактных линий'
          className={`${styles.decor} ${styles.decorRightCard}`}
        />
        <img
          src='../src/assets/images/circle.svg'
          alt='декоративный элемент векторной графики в виде в виде точек, составляющих фигуру круг'
          className={`${styles.decor} ${styles.decorCircle}`}
        />
      </div>

      <div className={styles.closingStatementWrapper}>
        <p className={styles.closingStatementText}>
          С нами вы получите не только продукт, но и партнёрство, основанное на
          доверии и взаимопонимании.
        </p>
      </div>
    </div>
  </section>
);
