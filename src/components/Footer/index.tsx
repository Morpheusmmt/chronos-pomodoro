import styles from './styles.module.css';

export function Footer() {
  return <footer className={styles.footer}>
    <a href=""> entenda como funciona a tecnica pomodoro</a>
  <a href="">Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito por Maida Martins</a>
  </footer>;
}
