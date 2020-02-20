const optionsDate = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
};

const initItems = [{
        id: 5,
        task: `Vue2 in China`,
        date: new Date().toLocaleString("ru", optionsDate).toString(),
        done: true
    },
    {
        id: 4,
        task: `Vue in China`,
        date: new Date().toLocaleString("ru", optionsDate).toString(),
        done: true
    },
    {
        id: 3,
        task: `Vue3 in China`,
        date: new Date(2020, 1, 15).toLocaleString("ru", optionsDate).toString(),
        done: true
    },
    {
        id: 2,
        task: `React in Facebook`,
        date: new Date(2020, 1, 15).toLocaleString("ru", optionsDate).toString(),
        done: true
    },
    {
        id: 1,
        task: `Angular in Google`,
        date: new Date().toLocaleString("ru", optionsDate).toString(),
        done: false
    },
];

export {initItems, optionsDate};