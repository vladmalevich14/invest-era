import styles from "components/tablePage/table/table.module.css";
import {StateType} from "types/state";

type PropsType = {
    company: StateType
    country: string
}

export const TableRow = ({company, country}: PropsType) => {

    const condition = (companyIndicator: string | undefined) => {
        if (country === 'USA') {
            return companyIndicator && companyIndicator.startsWith('-') ? 'red' : 'green'
        }
    }

    return (
        <tr>
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
    );
};