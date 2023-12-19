// // Arrow Function

// const createArray = <X, Y>(param1: X, param2: Y): [X, Y] => {
//   return [param1, param2];
// };
// const result = createArray<string, string>("Bangladesh", "I Love");
// const result1 = createArray<boolean, Array<string>>(true, ["USA"]);

// type Name = {
//   name: string;
// };

// const result3 = createArray<Name, boolean>({ name: "Bangladesh" }, false);

// // spread operator



// const addMeInMyCrushMind = <T>(myInfo: T) => {
//   const crush = "kate Winsle";
//   const newData = { ...myInfo, crush };
//   return newData;
// };

// const myInfo = {
//   name: "Mukta",
//   age: 215,
//   salary: 1000,
// };
// const result5 = addMeInMyCrushMind(myInfo);