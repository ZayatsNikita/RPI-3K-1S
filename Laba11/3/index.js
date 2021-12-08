
async function GetOneInBynByAbbreviation(abbreviation){
    let response = await getRequest(`https://www.nbrb.by/api/exrates/rates/${abbreviation}?parammode=2`);

    let information = await response.text();

    let rate = JSON.parse(information);

    return { Name: abbreviation, PriceInBel: rate.Cur_OfficialRate / rate.Cur_Scale};
}

function getRequest(url){
    return fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    });
}


elements = []

// Финляцдия не работает взял ту что стоит перед ней
// const FINAbbreviation = 'FIM';

const CNYAbbreviation = 'CNY';
const GELAbbreviation = 'GEL';
const HKDAbbreviation = 'HKD';

let fimInByn = GetOneInBynByAbbreviation(GELAbbreviation)
    .then((x) => elements.push(x))
    .then(() => GetOneInBynByAbbreviation(HKDAbbreviation).then((x) => elements.push(x)))
    .then(() => GetOneInBynByAbbreviation(CNYAbbreviation).then((x) => elements.push(x)))
    .then(() => {
        let cny = elements.find(x => x.Name === CNYAbbreviation);
        let gel = elements.find(x => x.Name === GELAbbreviation);
        let hkd = elements.find(x => x.Name === HKDAbbreviation);
        
        let hkdInGel = hkd.PriceInBel / gel.PriceInBel;
        let cnyInGel = cny.PriceInBel / gel.PriceInBel;


        let contentElentmt = document.getElementById('content');

        let firstDocumtnt = document.createElement('p');
        firstDocumtnt.innerText = `CNY in GEl = ${cnyInGel}`

        let secondDocument = document.createElement('p');
        secondDocument.innerText = `HKD in GEL = ${hkdInGel}`

        contentElentmt.appendChild(firstDocumtnt);
        contentElentmt.appendChild(secondDocument);
    });


// let gelInByn = await GetOneInBynByAbbreviation(GELAbbreviation);
// let hkdInByn = await GetOneInBynByAbbreviation(HKDAbbreviation);


