// type MandatoryType = { name: string, age: number, salary: number }
interface MandatoryInterface  { name: string, age: number, salary: number }
const addMeInMyCrushMind = <T extends MandatoryInterface>(myInfo: T) => {
  const crush = "kate Winsle";
  const newData = { ...myInfo, crush };
  return newData;
};
type myInfoType = {
    name: string;
    age: number;
    salary: number;
    other1: boolean;
    other2: null;
}
const myInfo:myInfoType = {
  name: "Mukta",
  age: 215,
  salary: 1000,
  other1: false,
  other2: null,
};
const result5 = addMeInMyCrushMind(myInfo);
