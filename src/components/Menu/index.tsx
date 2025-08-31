import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, MoonIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
const [theme, setTheme] = useState<AvailableThemes>(() => {
  const savedTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark';
  return savedTheme;
});

const nextThemeIcon = {
  dark: <SunIcon />,
  light: <MoonIcon />,
};

function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
 event.preventDefault(); 

  setTheme(prevTheme=> {
    const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
    return nextTheme;
  });
}

useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

}, [theme]);

  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href='#' aria-Label='Ir para a página inicial' title='Ir para a página inicial'>
        <HouseIcon /> 
      </a>
      <a className={styles.menuLink} href='#' arial-Label='Ver histórico' title='Ver histórico'>
        <HistoryIcon /> 
      </a>
      <a className={styles.menuLink} href='#' aria-Label='Configurações' title='Configurações'>
        <SettingsIcon /> 
      </a>
      <a className={styles.menuLink} href='#' aria-Label='Mudar tema' title='Mudar tema' onClick={(event) =>handleThemeChange (event)}>
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
