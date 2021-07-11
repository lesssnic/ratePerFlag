

const listFlagsURL = 'https://restcountries.eu/rest/v2/all';

const listRatesURL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

let template = document.querySelector('template').content;

template = template.firstElementChild.innerHTML;

console.dir(template);

(async function(){

    let reqListsArr = await Promise.all([fetch(listFlagsURL), fetch(listRatesURL)]);

    reqListsArr = await Promise.all(reqListsArr.map(item => item.json()));

    let [listFlags, listRates] = reqListsArr;

    for (let country of listFlags){
        country.rate = '';
        country.cc = '';
        for (let rate of listRates){
            for (let currency of country.currencies){
            if (currency.code == rate.cc){
                country.rate += rate.rate.toString() + '</br>';
                country.cc += rate.cc + ' - ' +rate.txt + '</br>';
                country.exchangedate = rate.exchangedate;
            }
        }
        }

    }
    
    listFlags = listFlags.filter(item => item.cc != '');
    
    displayResult(listFlags);

}());




function displayResult(dataArr){
       
    document.querySelector('#rates') .innerHTML = dataArr.map(item => `
    <tr>
        <th><img src="${item.flag}" alt="" width="130" height="100"></th>
        <th>${item.name}</th>
        <th>${item.cc}</th>
        <th>${item.rate}</th>
        <th>${item.exchangedate}</th>
    </tr>`).join('');

}