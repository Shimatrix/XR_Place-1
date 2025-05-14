import styles from './MainContent.module.scss';

export function MainContent() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>3D Туры по будущей недвижимости</h1>
        <p>Покажите покупателям квартиру ещё до постройки дома</p>
        <button className={styles.ctaButton}>Заказать демо</button>
      </section>

      <section className={styles.features}>
        <h2>Наши преимущества</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h3>Вид из окна</h3>
            <p>Реалистичная визуализация окружения</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Свобода перемещения</h3>
            <p>Навигация как в компьютерной игре</p>
          </div>
        </div>
      </section>
    </div>
  );
}
