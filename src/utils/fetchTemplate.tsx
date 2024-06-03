const BASE_URL = 'http://127.0.0.1:8000/'
const USA_URL_PART = 'model-portfolio-usa'
const CHINA_URL_PART = 'online-table-chn'

type PropsType = {
    country: string
}

export const fetchTemplate = async ({country}: PropsType) => {
    const response = await fetch(BASE_URL + `api/tables/${country === 'USA' ? USA_URL_PART : CHINA_URL_PART}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    if (country === 'USA') {
        return await response.json();
    } else {
        const text = await response.text();
        const cleanedData = text.replace(/NaN/g, "null");

        try {
            return JSON.parse(cleanedData);
        } catch (error) {
            console.error('Error parsing JSON:', error, cleanedData);
        }
    }
}

