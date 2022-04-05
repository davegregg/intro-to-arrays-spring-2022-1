let names = [
    "DMG", 
    "Quana", 
    "Eliana", 
    "Muhammad", 
    "Jose",
    "Tracy",
    "Jean",
    "Min",
]

let listOfPrices = [
    ["coffee", 5.50],
    ["orange", 1.00],
    ["avocado toast", 16.00]
]




let pets = ['pig', 'ferret', 'llama', 'bird', 'raccoon', 'gerbil']
// let message = "OMG nevermind"

for (let index = 0; index < pets.length; index += 1) {
    let currentPet = pets[index]

    // ... index ...
    // ........
    // .... index ...

    console.log(currentPet)
}

// LEARNING PRACTICE: Avoid for...of loops until you are
// VERY comfortable and familiar with standard FOR loops.
for (let currentPet of pets) { // NO INDEX PROVIDED

}
