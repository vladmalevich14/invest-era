import styles from './main.module.css'

export const Main = () => {

    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.pageHeader}>Портфели</h1>
            <span className={styles.separator}></span>
            <h2 className={styles.linksHeader}>США</h2>
            <a href="/usa" className={styles.links}>Американские компании с наибольшим числом работников</a>

            <h2 className={styles.linksHeader}>Китай</h2>
            <a href="/china" className={styles.links}>Китайские компании с наибольшим числом работников</a>
        </div>
    );
};