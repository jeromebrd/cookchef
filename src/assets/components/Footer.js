import styles from '../components/Footer.module.scss';

function Footer() {
  return (
    <footer
      className={`${styles.footer} p-20 d-flex align-items-center justify-content-center`}
    >
      <p>Copyright © 2022 Cookchef Dyma, Inc.</p>
    </footer>
  );
}

export default Footer;
