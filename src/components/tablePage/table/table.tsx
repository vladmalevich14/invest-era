import {StateType} from "types/state";
import styles from "./table.module.css";

type PropsType = {
    state: StateType[]
    firstCompany: number
    country: string
}

export const Table = ({state, firstCompany, country}: PropsType) => {

    const condition = (companyIndicator: string | undefined) => {
        if (country === 'USA') {
            return companyIndicator && companyIndicator.startsWith('-') ? 'red' : 'green'
        }
    }

    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead className={styles.tableHead}>
                <tr>
                    <th className={styles.companyTitle}>Название</th>
                    <th className={styles.columnHead}>
                        <div>
                            <span>Текущая цена</span>
                            <span>$</span>
                        </div>
                    </th>
                    <th className={styles.columnHead}>
                        {country === 'USA' ? <div><span>Доля</span> <span>%</span></div> : 'Валюта'}
                    </th>
                    <th>Сектор</th>
                    <th className={styles.columnHead}>
                        {country === 'USA' ? <div><span>Дивиденды</span><span>%</span></div> : 'Отрасль'}
                    </th>
                    <th className={styles.columnHead}>
                        <div><span>Потенциал</span><span>$</span></div>
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
                        <div><span>Точка входа</span><span>$</span></div>
                    </th>
                    <th>Уровень риска</th>
                    <th className={styles.columnHead}>
                        {country === 'USA' ? 'FWD P/E' : <div><span>Долгосрочный потенциал</span><span>$</span></div>}
                    </th>
                    {country === 'USA' && <th className={styles.columnHead}>Sales 5 past years</th>}
                    <th>Тикер</th>
                </tr>
                </thead>
                <tbody className={styles.tableBody}>
                {state && state.slice(firstCompany, firstCompany + 15).map((company, index) => {
                    return <tr key={`${company && (company['компания'])} ${index}`}
                               className={country === 'China' ? styles.indicatorFontSize : ''}>
                        <td className={styles.companyName}>
                            {company['компания'] ? company['компания'] : company['Название'] ? company['Название'] : '-'}
                        </td>
                        <td className={styles.companyIndicator}>{company['Текущая цена'] ? company['Текущая цена'] : '-'}</td>
                        <td className={styles.companyIndicator}>
                            {company['доля'] ? company['доля'].slice(0, -1) : company['Валюта'] ? company['Валюта'] : '-'}
                        </td>
                        <td className={styles.companyIndicator}>
                            {company['сектор'] ? company['сектор'].slice(0, -1) : company['Сектор'] ? company['Сектор'] : '-'}
                        </td>
                        <td className={styles.companyIndicator}
                            style={{color: condition(company['Дивиденды'])}}>
                            {company['Дивиденды'] ? company['Дивиденды'].slice(0, -3) : company['Отрасль'] ? company['Отрасль'] : '-'}
                        </td>
                        <td className={styles.companyIndicator}>{company['Потенциал'] ? company['Потенциал'] : '-'}</td>
                        <td className={styles.companyIndicator}
                            style={{color: condition(company['Потенциал роста'])}}>{company['Потенциал роста'] ? company['Потенциал роста'].slice(0, -3) : '-'}</td>
                        <td className={styles.companyIndicator}
                            style={{color: condition(company['Долгосрочный потенциал роста'])}}>{company['Долгосрочный потенциал роста'] ? company['Долгосрочный потенциал роста'].slice(0, -3) : '-'}</td>
                        <td className={styles.companyIndicator}>{company['Ср-срочн. потенциал'] ? company['Ср-срочн. потенциал'] : '-'}</td>
                        <td className={styles.companyIndicator}>{company['Точка входа'] ? company['Точка входа'] : '-'}</td>
                        <td className={styles.companyIndicator}>{company['Уровень риска'] ? company['Уровень риска'].slice(0, company['Уровень риска'].indexOf(',') + 3) : '-'}</td>
                        <td className={styles.companyIndicator}>{company['FWD P/E'] ? company['FWD P/E'] : company['Долгосрочный потенциал'] ? company['Долгосрочный потенциал'] : '-'}</td>
                        {company['Sales 5 past years'] &&
                            <td className={styles.companyIndicator}>{company['Sales 5 past years']}</td>}
                        <td className={styles.companyIndicator}>{company['тикер'] ? company['тикер'] : company['Тикер'] ? company['Тикер'] : '-'}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    );
};