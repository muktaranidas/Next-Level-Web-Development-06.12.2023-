// ternary operator
const age: number = 22
// if (age >= 18) {
//     console.log("yes");
// }
// else {
//     console.log("no");
// }


const isAdult = age >= 18 ? "yes" : "No"
console.log(isAdult);

// nullish coalescing operator
// null and undefined

// const isAuthenticatedUser = null
// const isAuthenticatedUser = undefined
const isAuthenticatedUser = ""
const userName = isAuthenticatedUser ?? "Guest";
const userName2 = isAuthenticatedUser ? isAuthenticatedUser: 'Guest'
console.log({ userName }, { userName2 });

type Manush = {
    name: string
    age: number
    address: {
        city: 'No City'
        road: 'No Road'
        home?:''
    }
}
const manush1: Manush = {
    name: "manush",
    age: 35,
    address: {
        city: 'No City',
        road: 'No Road',
        
    }
}

const home = manush1?.address?.home ?? 'No Home' // default  'No Home'
console.log({home});