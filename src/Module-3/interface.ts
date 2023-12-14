type User = {
    name: string;
    age: number;
}
type extendedUser = {
    role:string
}
interface IUser{
    name: string;
    age: number;
}
interface IExtendedUser extends IUser{
    roll:string
}
const userr: IExtendedUser = {
    name: 'mukta',
    age: 400,
    roll:'Unknown'
}

const userWithTypeAlias: User = {
    name: 'Type Alias',
    age: 1000,
}

const userWithInterface: IUser = {
    name: 'Interface',
    age:200,
}