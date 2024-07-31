document.addEventListener("DOMContentLoaded", () => {
    const countrySelect = document.getElementById("countrySelect");
    const countrySearch = document.getElementById("countrySearch");
    const resultDiv = document.getElementById("result");

    let data = [];

    // Fetch data from JSON file
    fetch('countries.json')
        .then(response => response.json())
        .then(jsonData => {
            data = jsonData;
            popCountrySelect();
        })
        .catch(error => console.error("There is an Error:", error));

    // Populate country select dropdown
    function popCountrySelect() {
        countrySelect.innerHTML = '<option value="">Select a country</option>';
        data.forEach(item => {
            const option = document.createElement("option");
            option.value = item.country;
            option.textContent = item.country;
            countrySelect.appendChild(option);
        });
    }

    // Display result based on selection or search
    function displayResult(value, isCountry) {
        const item = data.find(obj => isCountry ? obj.country === value : obj.capital === value);
        if (item) {
            resultDiv.textContent = isCountry ? `The capital of ${item.country} is ${item.city}.` : `The country with the capital ${item.capital} is ${item.country}.`;
        } else {
            resultDiv.textContent = '';
        }
    }

    // Handle country selection
    countrySelect.addEventListener('change', (e) => {
        displayResult(e.target.value, true);
    });

    // Handle input for searching countries
    countrySearch.addEventListener('input', () => {
        const searchValue = countrySearch.value;
        console.log(searchValue)
        const filteredCountries = data.filter(item => item.country.includes(searchValue));
        console.log(filteredCountries)
        countrySelect.innerHTML = '<option value="">Select a country</option>';
        filteredCountries.forEach(item => {
            const option = document.createElement('option');
            option.value = item.country;
            option.textContent = item.country;
            countrySelect.appendChild(option);
        });
        // Clear result when searching
        resultDiv.textContent = '';
    });
});
