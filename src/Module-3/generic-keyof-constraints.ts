type PersonType = {
    name: string
    age: number
    address: string
}
type newType = "name" | "age" | "address"; // manully korsi

type newTypeUsingKeyOf = keyof PersonType
// const a: newType = 'age'
const b: newTypeUsingKeyOf = 'address'

// Y='name' | 'age'
function getProperty<X,Y extends keyof X>(obj: X, key: Y) {
    obj[key]
    
}
const property = getProperty({ name: 'Mukta', age: 100 }, "age")

// const a = {
//     name:'Mukta' , age:100
// }
// a['name']