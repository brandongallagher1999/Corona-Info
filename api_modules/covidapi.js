const fetch = require("node-fetch");

const getCountryData = async () => {
  let resp = await fetch("https://disease.sh/v3/covid-19/countries", {
    headers: {
      accept:
        "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
      "accept-language": "en-US,en;q=0.9",
      "x-requested-with": "XMLHttpRequest",
    },
    method: "GET",
    mode: "cors",
  });

  return JSON.parse(resp.text().data);
};

const getAllData = async () => {
  let resp = await fetch("https://disease.sh/v3/covid-19/all", {
    headers: {
      accept:
        "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
      "accept-language": "en-US,en;q=0.9",
      "x-requested-with": "XMLHttpRequest",
    },
    method: "GET",
    mode: "cors",
  });

  return JSON.parse(resp.text().data);
};

const getTotalRecovered = async () => {
  let resp = await fetch("https://disease.sh/v3/covid-19/all", {
    headers: {
      accept:
        "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
      "accept-language": "en-US,en;q=0.9",
      "x-requested-with": "XMLHttpRequest",
    },
    method: "GET",
    mode: "cors",
  });
  const json = JSON.parse(resp.text().data);
  return json.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const getTotalDeaths = async () => {
  let resp = await fetch("https://disease.sh/v3/covid-19/all", {
    headers: {
      accept:
        "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
      "accept-language": "en-US,en;q=0.9",
      "x-requested-with": "XMLHttpRequest",
    },
    method: "GET",
    mode: "cors",
  });

  const json = JSON.parse(resp.text().data);
  return json.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const getTotalCases = async () => {
  let resp = await fetch("https://disease.sh/v3/covid-19/all", {
    headers: {
      accept:
        "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
      "accept-language": "en-US,en;q=0.9",
      "x-requested-with": "XMLHttpRequest",
    },
    method: "GET",
    mode: "cors",
  });

  const json = JSON.parse(resp.text().data);
  return json.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

module.exports = {
  getAllData,
  getTotalCases,
  getTotalDeaths,
  getTotalRecovered,
  getCountryData,
};
