import styles from './main.module.css'

export const Main = () => {

    const BASE_URL = 'http://127.0.0.1:8000/'

    const data = fetch(BASE_URL + 'api/tables/model-portfolio-usa/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res)=>{
        return res.json()
    })

    const data2 = fetch(BASE_URL + 'api/tables/online-table-chn/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res)=>{
        return res.json()
    })

    return (
        <div className={styles.mainContainer}>
            <h2 className={styles.linksHeader}>США</h2>
            <a href="#" className={styles.links}>Американские компании</a>

            <h2 className={styles.linksHeader}>Китай</h2>
            <a href="#" className={styles.links}>Китайские компании</a>
        </div>
    );
};