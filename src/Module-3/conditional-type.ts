// // a type is dependent on another type

// type a1 = number;
// type a3 = undefined
// type a4 = number
// type a2 = a1 extends string ? string : null

// // nesed conditional type
// type d = a1 extends null? null: a3 extends number ? number : a4 extends null ? null:never


// type Sheikh = {
//     wife1: string
//     wife2:string
// }
// type A = keyof Sheikh  //'wife1' | 'wife2'
//                           //wife1 extends 'wife1' | 'wife2'
// type CheckProperty<T,K> = K extends keyof  Sheikh ? true : false
// type CheckWife2 = CheckProperty<Sheikh,'wife2'>

// // check korbe ei sheikh type a wife1 ashe kina ?  true:false
// // check korbe ei sheikh type a wife2 ashe kina ?  true:false
// // check korbe ei sheikh type a wife2 ashe kina ?  true:false




// // matha nosto example
// type Bandhubi = 'Proma' | 'Oyeishi' | 'Nazmin'
// type RemoveBandhubi<T,K> = T extends K? never : T
// type CurrentBandhubi = RemoveBandhubi<Bandhubi,'Oyeishi'>