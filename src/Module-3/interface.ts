type User = {
    name: string;
    age: number;
}
type extendedUser = User &  {
    role:string
}
interface IUser{
    name: string;
    age: number;
}
interface IExtendedUser extends IUser{
    role:string
}
const userr: IExtendedUser = {
    name: 'mukta',
    age: 400,
    role:'Unknown'
}

const userWithTypeAlias: User = {
    name: 'Type Alias',
    age: 1000,
}

const userWithInterface: IUser = {
    name: 'Interface',
    age:200,
}