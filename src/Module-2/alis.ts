type CrushType = {
    name: string;
    age?: number;
    profession: string;
    address:string
    
} 
const crush1:CrushType= {
    name: "Mukta",
    age: 22,
    profession: "Web Dev",
    address:"BD"
}
const crush2:CrushType= {
    name: "Mkta",
    age: 2,
    profession: "We Dev",
    address:"B"
}

type CrushMarriedType = boolean;
const isCrushMarried: CrushMarriedType = false;


type CourseNameType = string;
const courseName: CourseNameType = "Next level Web development";

type operationType =( x: number, y: number )=>number
const calculate = (num1: number, num2: number, operation:operationType)=>{
    return operation(num1, num2)
}
calculate(10, 20,(x,y)=>x+y);
calculate(10, 20,(x,y)=>x-y);
calculate(10, 20,(x,y)=>x/y);
calculate(10, 20,(x,y)=>x*y);