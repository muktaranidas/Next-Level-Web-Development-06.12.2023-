// normal function
function add(num1:number, num2:number):number {
    return num1 + num2;
}
add(24, 25);

//arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2;

//call back function
const arr = [1, 2, 3];
const newArray = arr.map((element: number) => element * element)

const person: {
    name: string,
    balance: number,
    addBalance(money:number):void
} = {
    name: "Mukta",
    balance: 5,
    addBalance(money: number) {
        console.log(`My New Balance is ${this.balance + money}`);
    }
}
