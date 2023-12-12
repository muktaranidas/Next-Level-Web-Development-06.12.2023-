type NoobDeveloper = {
    name: string   
}
//intersection types
type JuniorDeveloper = NoobDeveloper &{
    expertise: string
    experience:number
}

enum Level{
    junior='junior',
    mid='mid', 
    senior='senior'
}
type nextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number;
    // level:"junior" | "mid" | "senior"
    level:Level
}
//union type
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Mukta",
    expertise: "JS",
    experience:1
}
const developer: nextLevelDeveloper={
    name:"Next Vhai",
    expertise:"Typescript",
    experience:2,
    leadershipExperience: 1,
    level:Level.junior

}