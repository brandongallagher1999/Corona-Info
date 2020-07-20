const fetch = require("node-fetch");

const getAllData = async () =>
{
    let obj = await fetch("https://disease.sh/v3/covid-19/all", {
        "headers": {
            "accept": "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
            "accept-language": "en-US,en;q=0.9",
            "x-requested-with": "XMLHttpRequest",
          },
          "method": "GET",
        "mode": "cors"
    })
    .then(res => {return res.text();})
    .then(data => {
        return data;
    });
    return await Promise.resolve(obj);
}

const getTotalRecovered = async () =>
{
    let obj = await fetch("https://disease.sh/v3/covid-19/all", {
        "headers": {
            "accept": "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
            "accept-language": "en-US,en;q=0.9",
            "x-requested-with": "XMLHttpRequest",
          },
          "method": "GET",
        "mode": "cors"
    })
    .then(res => {return res.text();})
    .then(data => {
        let json = JSON.parse(data);
        return json.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // return formatted with commas
    });
    return await Promise.resolve(obj);
}

const getTotalDeaths = async () =>
{
    let obj = await fetch("https://disease.sh/v3/covid-19/all", {
        "headers": {
            "accept": "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
            "accept-language": "en-US,en;q=0.9",
            "x-requested-with": "XMLHttpRequest",
          },
          "method": "GET",
        "mode": "cors"
    })
    .then(res => {return res.text();})
    .then(data => {
        let json = JSON.parse(data);
        return json.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // return formatted with commas
    });
    return await Promise.resolve(obj);
}

const getTotalCases = async () =>
{
    let obj = await fetch("https://disease.sh/v3/covid-19/all", {
        "headers": {
            "accept": "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
            "accept-language": "en-US,en;q=0.9",
            "x-requested-with": "XMLHttpRequest",
          },
          "method": "GET",
        "mode": "cors"
    })
    .then(res => {return res.text();})
    .then(data => {
        let json = JSON.parse(data);
        return json.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // return formatted with commas
    });
    return await Promise.resolve(obj);
}



module.exports = {
    getAllData,
    getTotalCases,
    getTotalDeaths,
    getTotalRecovered
};