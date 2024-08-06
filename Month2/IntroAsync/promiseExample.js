

function getPromise() {
    return new Promise((rsolve, reject) => {
        setTimeout(() => {
            const rondomNumber = Math.random();

            console.log(rondomNumber);

            if(rondomNumber < 0.5) {
                resolve("Promise resolved");
            } else {
                reject("Promise rejected");
            }
        }, 2000);
    });
}

getPromise().then(result => {
    console.log(result);
}).catch(error => {
    console.log("There was an error");
});


console.log("This is before everyhing") 