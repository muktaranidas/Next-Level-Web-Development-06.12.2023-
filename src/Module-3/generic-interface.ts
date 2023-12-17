// //Generic Interface
// interface CrushInterface<T,U=null>{
//     name: string
//     husband: T
//     wife?:U
// }
// const crushOne: CrushInterface<boolean,string> = {
//     name: "Mukta",
//     husband: true,
//     wife:"Ami"
// }
// const crushTwo: CrushInterface<string> = {
//     name: "Mukta",
//     husband:"Sudipto"
// }
// interface HusbandInterface
//     {name:string,salary:number}

// const crushThree: CrushInterface<HusbandInterface> = {
//     name: 'Mukta',
//     husband: {
//         name: 'Sudipto',
//         salary:0.01,
//     }
// }
// interface PersonInterface
// { name: string, age: number }
// const crushFour: CrushInterface<PersonInterface, PersonInterface> = {
//     name: 'Kate',
//     husband: {
//         name: 'Persian',
//         age:25,
//     } ,
//     wife: {
//         name: 'Winsle',
//         age:30
//     }
// }
// type GenericTuple<X, Y> = [X, Y]
// const relation: GenericTuple<string, string> = ['Mukta', 'Proma']
// type relationWithSalaryType = { name: string, salary: number }
// interface relationWithSalaryInterface{
//     name: string;
//     salary:number
// }
// const relationWithSalary: GenericTuple<relationWithSalaryInterface, string> = [{
//     name: 'Mukta',
//     salary:100000
// },
//     'Mukta'
// ]
// const relationWithSalary2: GenericTuple<relationWithSalaryType, string> = [{
//     name: "Thakur",
//     salary:100000
// },
//     'Mukta'
// ]
// type GenericArray<T> = Array<T>
// const rollNumbers: GenericArray<number> = [44, 12, 4]
// const rollNumbers2: GenericArray<string> = ['44', '12', '4']
// const rollNumbers3: GenericArray<boolean> = [true, false]
// type NameRollType = { name: string, roll: number }
// const UserNameAndRollNumbers: GenericArray<NameRollType> = [
//     {
//     name: "Mukta",
//     roll:1
//     },
//     {
//     name: "Thakur",
//     roll: 2
//     }
// ]

