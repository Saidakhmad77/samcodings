/* let a = parseInt(prompt("Enter a number 'a'")),
    b = parseInt(prompt("Enter a number 'b'"))

    // Comparison operators
    console.log("Comparison Operations");
    console.log("a =", a > b);
    console.log("b =", b);
    console.log("a > b:", a > b);
    console.log("a >= b:", a >= b);
    console.log("a < b:", a < b);
    console.log("a =< b:", a <= b);
    console.log("a === b:", a === b); */
    // console.log("a !== b:", a !== b);


    // Logical Operands
    /* const isTrue = true
    const isFalse = false

    console.log("AND (&&):", isTrue && isFalse)
    console.log("OR (||):", isTrue || isFalse)
    console.log("NOT (!):", !isTrue)

//This is much more difficult
    console.log("XOR:", ((isTrue || isFalse) && !(isTrue && isFalse)))

//You can then combine these 2 together to get a more useful logic
    console.log("AND (&&) - (a > b) && (b >= c):", (a > b) && (b >= c));
    console.log("OR (||) - (a > b) || (b >= c):", (a > b) || (b >= c));
    console.log("NOT (!) - !(a === d):", !(a === d)); */


/*     let floor = 1;
    let maxFloor = 15
    let minFloor = -3
    let floorToGo = parseInt(prompt("Enter a floor: "))
    console.log("floorToGo = ", floorToGo)

    if(floorToGo === floor)
    {
        console.log("You are already on floor", floor)
    }
    else if (floorToGo === 0 || floorToGo < minFloor || floorToGo > maxFloor) {
        console.log("This floor does not exist, pick a real floor")
    }
    else if (!isNaN(floorToGo))
    {
        console.log("Going to floor", floorToGo, "Please wait")
        floor = floorToGo
    }
    else 
    {
        console.log("Invalid Input")
    } */

    let username = "user"
    let password = "password"

    userUsernameInput = prompt("Enter your Username")
    userPasswordInput = prompt("Enter your Password")

    if (userUsernameInput === username)
    {
        if(userPasswordInput === password)
        {
           console.log("Login Successful")
        }
        else
        {
            console.log("incorrect password")
        }
    }
    else
    {
        console.log()
    }