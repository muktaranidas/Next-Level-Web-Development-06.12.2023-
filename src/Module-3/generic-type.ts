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

