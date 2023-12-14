// normal function
//default parameter

function add(num1:number, num2:number=10):number {
    return num1 + num2;
}
add(24, 25);
// spread operator
const myFriend = ['Sudipto', 'Proma', 'Mukta']
const myNewFriends = ['Sajid', 'Oyeishi', 'Nazmin']

const myBestFriend = {
    fullname: 'Proma',
    age:23,
}
const [bestfriend] = myFriend;
const { fullname: myFullName } = myBestFriend;
console.log(myFullName);

myFriend.push(...myNewFriends)
// console.log(myFriend);

//rest parameter
const greetFriends = (...friends: string[]
    // friend1: string,
    // friend2: string,
    // friend3: string
)
    : void => friends.forEach(friend => console.log(`Hi ${friend}`));
    // console.log(friends);
    // console.log(`Hi${friend1}\nHi ${friend2} \nHi ${friend3}`);
greetFriends('Mukta', 'Proma', 'Oyeishi', 'Sajid', 'Rana');

//array and object destructuring

    




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
        // console.log(`My New Balance is ${this.balance + money}`);
    }
}
