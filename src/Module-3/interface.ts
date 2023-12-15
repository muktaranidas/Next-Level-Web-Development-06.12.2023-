type User = {
    name: string;
    age: number;
}
const userWithTypeAlias: User = {
    name: 'Type Alias',
    age: 1000,
}

type extendedUser = User &  {
    role:string
}



interface IUser{
    name: string;
    age: number;
}
const userWithInterface: IUser = {
    name: 'Interface',
    age:200,
}
interface IExtendedUser extends IUser{
    role:string
}
const userr: extendedUser = {
    name: 'mukta',
    age: 400,
    role:'Unknown'
}

//object , function , array

//function
type addNumbersType = (num1: number, num2: number) => number
// interface IAddNumbers {
//     (num1:number, num2: number):number
// }
const addNumbers: addNumbersType = (num1, num2) => num1 + num2

// array
type rollNumbersType = number[]
interface IRollNumbers{
[index:number]:number
}
const rollNumbers: IRollNumbers = [1, 2, 3, 4]; //[index]