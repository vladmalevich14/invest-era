import {fetchTemplate} from "utils/fetchTemplate";
import {useEffect, useState} from "react";
import {ChinaStateType, UsaStateType} from "types/state";
import arrow from 'assets/svg/left-arrow.svg'
import {useNavigate} from "react-router-dom";
import {LeftArrow} from "assets/left-arrow";
import styles from './tablePage.module.css'

type PropsType = {
    country: string
}

export const TablePage = ({country}: PropsType) => {
    const navigate = useNavigate();
    // const [state, setState] = useState<UsaStateType[] | ChinaStateType[]>([])
    const [state, setState] = useState<UsaStateType[]>([])
    const [firstCompany, setFirstCompany] = useState<number>(0)

    const getData = async () => {
        if (country === 'USA') {
            const data = await fetchTemplate({country})
            const companiesWithNames = data.filter((el: UsaStateType) => el.hasOwnProperty('компания'))
            const finalData = companiesWithNames.filter((el: UsaStateType) => Object.keys(el).length > 1)
            setState(finalData)
        } else {
            const data = await fetchTemplate({country})
            setState(data)
        }
    };

    const condition = (companyIndicator: string | undefined) => {
        return companyIndicator && companyIndicator.startsWith('-') ? 'red' : 'green'
    }

    const onClickHandler = (direction: string) => {
        if (direction === 'next' && firstCompany < state.length) setFirstCompany(prevState => prevState + 15)
        if (direction === 'back' && firstCompany !== 0) setFirstCompany(prevState => prevState - 15)
    }


    useEffect(() => {
        getData()
    }, []);

    return (
        <div className={styles.tableContainer}>
            <div className={styles.breadCrumbs}>
                <div>
                    <img src={arrow} alt="back arrow"/>
                    <span onClick={() => navigate('/')} className={styles.backLink}>Главная</span>
                </div>
                <div>
                    <img src={arrow} alt="back arrow"/>
                    <span onClick={() => navigate(`/${country === 'USA' ? 'usa' : 'china'}`)}
                          className={styles.backLink}>Портфели</span>
                </div>
            </div>

            <h1>
                {country === 'USA' ? 'Американские' : 'Китайские'} компании с наибольшим числом работников
            </h1>

            <div className={styles.pagination}>
                <div className={styles.backArrow} onClick={() => onClickHandler('back')}>
                    <LeftArrow/>
                </div>
                <div className={styles.nextArrow} onClick={() => onClickHandler('next')}>
                    <LeftArrow/>
                </div>
            </div>

            <table className={styles.table}>
                <thead className={styles.tableHead}>
                <tr>
                    <th className={styles.companyTitle}>Название</th>
                    <th className={styles.columnHead}>
                        <div>
                            <span>Текущая цена</span>
                            <span>₽</span>
                        </div>
                    </th>
                    <th className={styles.columnHead}>
                        <div><span>Доля</span> <span>%</span></div>
                    </th>
                    <th className={styles.columnHead}>
                        <div><span>Дивиденды</span><span>%</span></div>
                    </th>
                    <th className={styles.columnHead}>
                        <div><span>Потенциал</span><span>₽</span></div>
                    </th>
                    <th className={styles.columnHead}>
                        <div><span>Потенциал роста</span><span>%</span></div>
                    </th>
                    <th className={styles.columnHead}>
                        <div><span>Долгосрочный потенциал роста</span><span>%</span></div>
                    </th>
                    <th className={styles.columnHead}>
                        <div><span>Ср-срочн. потенциал</span><span>%</span></div>
                    </th>
                    <th className={styles.columnHead}>
                        <div><span>Точка входа</span><span>₽</span></div>
                    </th>
                    <th>Уровень риска</th>
                </tr>
                </thead>
                <tbody className={styles.tableBody}>
                {state && state.slice(firstCompany, firstCompany + 15).map((company, index) => {
                    return <tr key={`${company && (company['компания'])} ${index}`}>
                        <td className={styles.companyName}>{company['компания'] ? company['компания'] : '-'}</td>
                        <td className={styles.companyIndicator}>{company['Текущая цена'] ? company['Текущая цена'] : '-'}</td>
                        <td className={styles.companyIndicator}>{company['доля'] ? company['доля'].slice(0, -1) : '-'}</td>
                        <td className={styles.companyIndicator}
                            style={{color: condition(company['Дивиденды'])}}>{company['Дивиденды'] ? company['Дивиденды'].slice(0, -3) : '-'}</td>
                        <td className={styles.companyIndicator}>{company['Потенциал'] ? company['Потенциал'] : '-'}</td>
                        <td className={styles.companyIndicator}
                            style={{color: condition(company['Потенциал роста'])}}>{company['Потенциал роста'] ? company['Потенциал роста'].slice(0, -3) : '-'}</td>
                        <td className={styles.companyIndicator}
                            style={{color: condition(company['Долгосрочный потенциал роста'])}}>{company['Долгосрочный потенциал роста'] ? company['Долгосрочный потенциал роста'].slice(0, -3) : '-'}</td>
                        <td className={styles.companyIndicator}>{company['Ср-срочн. потенциал'] ? company['Ср-срочн. потенциал'] : '-'}</td>
                        <td className={styles.companyIndicator}>{company['Точка входа'] ? company['Точка входа'] : '-'}</td>
                        <td className={styles.companyIndicator}>{company['Уровень риска'] ? company['Уровень риска'].slice(0, company['Уровень риска'].indexOf(',') + 3) : '-'}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    );
};