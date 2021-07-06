

const listFlagsURL = 'https://restcountries.eu/rest/v2/all';

const listRatesURL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

(async function(){

    let reqListsArr = await Promise.all([fetch(listFlagsURL), fetch(listRatesURL)]);

    console.log(reqListsArr);

//    let listFlags =  fetch(listFlagsURL);
//    let listRates =  fetch(listRatesURL);
    

}())




function displayResult(dataArr){
    for (item of dataArr){
        let row = nearestAtm.insertRow();
      
        let cell = row.insertCell();
        let text = document.createTextNode(item.distance);
        cell.appendChild(text);

        cell = row.insertCell();
        text = document.createTextNode(' - ');
        cell.appendChild(text);

        cell = row.insertCell();
        text = document.createTextNode(item.fullAddressRu);
        cell.appendChild(text);
      }
}