import {fetchTemplate} from "utils/fetchTemplate";
import {useEffect, useState} from "react";
import {StateType} from "types/state";
import arrow from 'assets/svg/left-arrow.svg'
import {useNavigate} from "react-router-dom";
import styles from './tablePage.module.css'
import {Table} from "components/tablePage/table/table";

type PropsType = {
    country: string
}

export const TablePage = ({country}: PropsType) => {
    const navigate = useNavigate();
    const [state, setState] = useState<StateType[]>([])

    const getData = async () => {
        if (country === 'USA') {
            const data = await fetchTemplate({country})
            const companiesWithNames = data.filter((el: StateType) => el.hasOwnProperty('компания'))
            const companiesWithoutFake = companiesWithNames.filter((el: StateType) => el['компания'] !== 'компания')
            const finalData = companiesWithoutFake.filter((el: StateType) => Object.keys(el).length > 1)
            setState(finalData)
        } else {
            const data = await fetchTemplate({country})
            setState(data)
        }
    };

    useEffect(() => {
        getData()
    }, []);

    return (
        <div className={styles.tablePageContainer}>
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

            <Table state={state} country={country}/>
        </div>
    );
};