import styles from './burger-menu.module.css'
import {ChangeEvent, useState} from "react";

export const BurgerMenu = () => {
    const [checkboxValue, setCheckboxValue] = useState<boolean>(false);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckboxValue(e.target.checked)
    }

    return (
        <div className={styles.hamburgerMenu}>
            <input id='menuToggle' className={styles.toggleMenu} type="checkbox" checked={checkboxValue} onChange={onChangeHandler}/>
            <label className={styles.menuBtn} htmlFor="menuToggle">
                <span></span>
            </label>
            <ul className={styles.menuBox}>
                <li><a className={styles.menuItem} href="#">Новости</a></li>
                <li><a className={styles.menuItem} href="#">Аналитика</a></li>
                <li><a className={styles.menuItem} href="#">Обучение</a></li>
                <li><a className={styles.menuItem} href="#">О компании</a></li>
                <li><a className={styles.menuItem} href="#">Портфели</a></li>
            </ul>
        </div>
    );
};