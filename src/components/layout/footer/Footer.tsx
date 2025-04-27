import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© 2024 XRPlace. Все права защищены</p>
        <div className={styles.links}>
          <a href='#'>Политика конфиденциальности</a>
          <a href='#'>Условия использования</a>
        </div>
      </div>
    </footer>
  );
}
