// load all country data...
const countryDetails = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showCountryData(data));
}
countryDetails();

// display country data....
const showCountryData = (alldata) => {
    const countryContainerDiv = document.getElementById('country-container');
    alldata.forEach(data => {
        // console.log(data)
        const singleCountryDiv = document.createElement('div');
        singleCountryDiv.innerHTML = `
                <h2>${data.name.common}</h2>
                <p>${data.capital}</p>
                <button onclick="displayAllCountryDetails('${data.name.common}')" style="color: peru; border: 1px solid peru;" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button>
        `;
        
        singleCountryDiv.classList.add('countryDivStyle');
        countryContainerDiv.appendChild(singleCountryDiv);
    })
    
}
const displayAllCountryDetails = (countryName) => {
    const url = `https://restcountries.com/v3.1/name/${countryName}`
    fetch(url)
    .then(respons => respons.json())
    .then(data => displaySingleCountryDetails(data[0]));
}

const displaySingleCountryDetails = (countryData) => {
    const currency = Object.values(countryData.currencies)[0].name;
    const language = Object.values(countryData.languages)[0];
    const modelHeadContainer = document.getElementById('model-head');
    const modelBodyContainer = document.getElementById('model-body-container');
    modelHeadContainer.innerHTML=`
        <h1 class="modal-title fs-5" id="staticBackdropLabel">${countryData.name.common}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    `;
    modelBodyContainer.innerHTML = `
        <h4>Official Name: ${countryData.name.official}</h4>
        <p style="text-align:center;">National Flag</p>
        <img src="${countryData.flags.png}" style="width:100%">
        <h3>Capital: ${countryData.capital}</h3>
        <h3>Area: ${countryData.area}</h3>
        <h3>Continents: ${countryData.continents[0]}</h3>
        <h3>Flag: ${countryData.flag}</h3>
        <h3>Independent: ${countryData.independent}</h3>
        <h3>Languages: ${language}</h3>
        <h3>Currence: ${currency}</h3>
        <h3>Population: ${countryData.population}</h3>
        <h3>Region: ${countryData.region}</h3>
        <h3>Status: ${countryData.status}</h3>
        <h3>Subregion: ${countryData.subregion}</h3>
        <h3>Timezones: ${countryData.timezones[0]}</h3>
        <h3>Coat of Arms </h3>
        <img width="100%"src="${countryData.coatOfArms.png}">
        
        
    `;
    
}
