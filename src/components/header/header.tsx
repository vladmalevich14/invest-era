import investEra from 'assets/svg/invest-era-short-logo.svg'
import {BurgerMenu} from "components/header/burger-menu/burger-menu";
import styles from './header.module.css'

export const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerContainer}>
                <div className={styles.headerSubContainer}>
                    <img src={investEra} alt="Invest Era logo" className={styles.logo}/>
                    <BurgerMenu/>
                </div>
                <button className={styles.authBtn}>Авторизация</button>
            </div>
        </div>
    );
};