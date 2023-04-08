const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0418dace08msh227c25a8112091fp196af3jsndf6a9e336c30",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };
  
  const caseAktif = document.getElementById("caseAktif");
  const caseNew = document.getElementById("caseNew");
  const caseRecovered = document.getElementById("caseRecovered");
  const caseDeaths = document.getElementById("caseDeaths");
  const caseTotal = document.getElementById("caseTotal");
  const caseTests = document.getElementById("caseTests");
  
  function getData(country) {
    fetch(`https://covid-193.p.rapidapi.com/history?country=${country}`, options)
      .then((response) => response.json())
      .then((response) => {
        let result = response.response[0];
        caseAktif.innerText = result.cases.active;
        caseNew.innerText = result.cases.new;
        caseRecovered.innerText = result.cases.recovered;
        caseDeaths.innerText = result.deaths.total;
        caseTotal.innerText = result.cases.total;
        caseTests.innerText = result.tests.total;
      })
      .catch((err) => console.error(err));
  }
  
  const btn_search = document.getElementById("btn_search");
  const input_contry = document.getElementById("input_country");
  
  btn_search.addEventListener("click", (e) => {
    e.preventDefault();
    const country = input_contry.value;
    console.log(country)
    getData(country);
  });