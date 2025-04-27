import styles from './Layout.module.scss';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
}
