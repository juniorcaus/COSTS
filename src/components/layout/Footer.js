import React from 'react'

import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaGithub />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Costs </span> 
        &copy; Todos direitos reservados - 2022  
      </p>
    </footer>
  )
}

export default Footer;