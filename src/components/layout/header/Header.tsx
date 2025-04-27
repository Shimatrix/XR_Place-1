import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>XRPlace</h1>
        <nav className={styles.nav}>
          <a href='#features'>Возможности</a>
          <a href='#demo'>Демо</a>
          <a href='#contacts'>Контакты</a>
        </nav>
      </div>
    </header>
  );
}
