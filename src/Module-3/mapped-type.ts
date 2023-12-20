const arrayOfNumbers = [1, 2, 3]     //['1','2','3']
const arrayOfStrings = arrayOfNumbers.map((number) => number.toString())
console.log(arrayOfStrings);
type Volume = {
    height: number;
    width: number;
    depth: number;
}
type Area<T> = {
    // [key in keyof Volume] : Volume[key]   /// Volume ['height'] ---> number
    readonly [key in keyof T] : T[key]
}
const area1: Area<{ height: number, width:string }> = { height:10, width:'10' }
// area1.height=17

type AreaString = {
     readonly height: string;
     readonly width:string
}
type AreaReadonly = {
    height: number
    width:number
}
const rectangularArea: AreaReadonly = {
    height: 10,
    width:12
}
rectangularArea.width=10
type A = AreaNumber['height'] //look up types
type B = keyof AreaNumber  // 'width' | 'height'




// const obj = {
//     name:'Mukta'
// }
// obj['name']











//  npx ts-node-dev --respawn src/Module-3/mapped-type.ts 