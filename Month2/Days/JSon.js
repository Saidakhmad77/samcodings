/* let companies = [];

fetch('JSon_exercise.json')
.then(response => response.json())
.then(data => {
    console.log(data);
   // companies.push(data);

    //console.log("Companies" + companies);
    //console.log("Data" + data);

    console.log("Data" + data);
    console.log( data[2].Ceo)
    //console.log("Companies" + companies[0][0].name); 


   // console.log(data);
    console.log(data[0]);
})
.catch(error => {
    console.error("Error:", error);

}); */


/* let catImages = []; */

// Fetch a random cat image from The Cat API
/* fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
        console.log("Data:", data);

        // Optionally, push the data to the catImages array
        catImages.push(data);

        // Example usage of the fetched data
        console.log("Cat Images:", catImages);
        console.log("First Cat Image:", data[0]); // Shows the first image object

        // Access specific properties of the image data
        const catImageUrl = data[0].url;
        console.log("Cat Image URL:", catImageUrl); // Shows the URL of the cat image

        // Update the src attribute of the img element to show the cat image
        document.getElementById('Cats').src = catImageUrl;
    })
    .catch(error => {
        console.error("Error:", error);
    });
 */

    let companies = [];
     
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "JSon_exercise.json", true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);

                displayData(xhr.responseText);
                console.log(data)
            }
        }
    }

    xhr.send();