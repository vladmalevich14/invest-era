import investEraLogo from '../../assets/svg/invest-era-full-logo.svg'
import youtubeLogo from '../../assets/svg/logo-youtube.svg'
import styles from './footer.module.css'

export const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
        <div className={styles.footerContainer}>
            <div className={styles.footerSubContainer}>
                <div className={styles.description}>
                    <img src={investEraLogo} alt="Invest Era logo" className={styles.logo}/>
                    <div className={styles.descriptionWrapper}>
                    <p>Благодорим вас за визит нашего сайта!</p>
                    <p>Обращаем внимание: все материалы, представленные на сайте, не являются инвестиционной
                        рекомендацией.</p>
                    </div>
                </div>
                <div className={styles.infoAndContactsWrapper}>
                <div className={styles.info}>
                    <span>Разборы компаний</span>
                    <span>Новости</span>
                    <span>IE UNITY</span>
                    <span>Аналитика</span>
                    <span>IE IDEAS</span>
                </div>
                <div className={styles.contacts}>
                    <div className={styles.contactsWrapper}>
                    <span>+7 (900) 000-00-00</span>
                    <span className={styles.contactsInfo}>Для звонков по России</span>
                    </div>
                    <a href="https://www.youtube.com/@investera3816"><img src={youtubeLogo} alt="youtube logo"/></a>
                </div>
                </div>
            </div>
            <div>
                <p className={styles.copyright}>©ИП Артём Николаев, 2023. Все права защищены. </p>
            </div>
        </div>
        </div>
    );
};