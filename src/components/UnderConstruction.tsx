// src/components/UnderConstruction.tsx - VERSÃO FINAL E CORRIGIDA

import React, { useEffect } from 'react';
import styles from './UnderConstruction.module.css';

// A importação dos arquivos. Se os nomes na sua pasta estiverem
// exatamente como abaixo, vai funcionar.
import logo from '../assets/alpha-logo.png'; 
import whatsappIcon from '../assets/whatsapp.png';
import instagramIcon from '../assets/instagram.png';
import emailIcon from '../assets/email.png';

const UnderConstruction: React.FC = () => {
  // Efeito para o spotlight seguir o mouse
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const currentYear = new Date().getFullYear();

  // ***** COLOQUE SUAS INFORMAÇÕES DE CONTATO AQUI *****
  const whatsappLink = "https://wa.me/5534991405711";
  const instagramLink = "https://instagram.com/alphatecnologia__";
  const emailLink = "mailto:contato@alphatecnologia.com";

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img src={logo} alt="Alpha Tecnologia Logo" className={styles.logo} />
        <h1 className={styles.title}>Estamos construindo algo novo.</h1>
        <p className={styles.subtitle}>
          Nossa nova plataforma está sendo desenvolvida com as mais recentes tecnologias para oferecer uma experiência incrível.
        </p>
        <div className={styles.socialLinks}>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.socialButton} aria-label="WhatsApp">
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer" className={styles.socialButton} aria-label="Instagram">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href={emailLink} className={styles.socialButton} aria-label="Email">
            <img src={emailIcon} alt="Email" />
          </a>
        </div>
      </div>
      <footer className={styles.footer}>
        &copy; {currentYear} Alpha Tecnologia. Todos os direitos reservados.<br/>
        Ituiutaba, MG. Desenvolvido por Alpha Tecnologia.
      </footer>
    </div>
  );
};

export default UnderConstruction;