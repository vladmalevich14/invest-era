import {StateType} from "types/state";
import {LeftArrow} from "assets/left-arrow";
import {useRef} from "react";
import {TableRow} from "components/tablePage/table/tableRow/tableRow";
import styles from "./table.module.css";

type PropsType = {
    state: StateType[]
    country: string
}

export const Table = ({state, country}: PropsType) => {
    const tableRef = useRef<HTMLDivElement>(null);

    const scrollTable = (direction: string) => {
        if (tableRef.current && direction === 'next') {
            tableRef.current.scrollLeft += 100;
        } else if (tableRef.current && direction === 'back') {
            tableRef.current.scrollLeft -= 100;
        }
    };

    return (
        <>
            <div className={styles.pagination}>
                <button className={styles.backArrow} onClick={() => scrollTable('back')}>
                    <LeftArrow/>
                </button>
                <button className={styles.nextArrow} onClick={() => scrollTable('next')}>
                    <LeftArrow/>
                </button>
            </div>
            <div className={styles.tableContainer} ref={tableRef}>
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
                            {country === 'USA' ? 'FWD P/E' :
                                <div><span>Долгосрочный потенциал</span><span>$</span></div>}
                        </th>
                        {country === 'USA' && <th className={styles.columnHead}>Sales 5 past years</th>}
                        <th>Тикер</th>
                    </tr>
                    </thead>
                    <tbody className={styles.tableBody}>
                    {state && state.map((company, index) => {
                        return <TableRow key={`${company && (company['компания'])} ${index}`} company={company}
                                         country={country}/>
                    })}
                    </tbody>
                </table>
            </div>
        </>

    );
};