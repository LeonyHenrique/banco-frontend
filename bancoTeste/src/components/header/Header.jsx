import React from 'react';
import styles from './header.module.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
};
  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={handleLogoClick}>Banco Pulse</div>
      <nav className={styles.nav}>
        <a href="/CriarConta" className={styles.navItem}>Criar Conta</a>
        <a href="/cartoes" className={styles.navItem}>Cartões</a>
        <a href="/emprestimos" className={styles.navItem}>Empréstimos</a>
        <a href="/cotacao" className={styles.navItem}>Cotação</a>
      </nav>
      <div className={styles.profile}>
        <img src="https://via.placeholder.com/40" alt="Profile" className={styles.profileImage} />
      </div>
    </header>
  );
};

export default Header;
