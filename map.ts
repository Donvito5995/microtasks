import exp from "constants";

export type ManType = {
    name: string
    age: number
}

const people: ManType[] = [
    {name: "Aleksandr Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18},
    {name: "Honzo Honzo", age: 38}
]


const sashaTransformator = (man: ManType)=> ({
    stack: ["css,html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
})

const devs = [
    {
        stack: ["css,html", "js", "tdd", "react"],
        firstName: "Aleksand", lastName: "Petrov"
    },
    {
        stack: ["css,html", "js", "tdd", "react"],
        firstName: "Dmitry", lastName: "Sidorov"
    },
    {
        stack: ["css,html", "js", "tdd", "react"],
        firstName: "Honzo", lastName: "Honzo"
    }

]
const devs1 = [
    sashaTransformator(people[0]),
    sashaTransformator(people[1]),
    sashaTransformator(people[2])

]
const devs2 = people.map(sashaTransformator)
const devs3 = people.map(man => ({
    stack: ["css,html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))

const messages = people.map( man => "hello " + man.name.split(" ")[0] + " welcome to it ")
export  const createGreetingMessages = (people:ManType[])=>{
    return  people.map( man => "hello " + man.name.split(" ")[0] + " welcome to it")
}

export  type CityType = {
    title:string,
    houses: housesType[]
    govermentBuilding:govermentsBuildingsType[]
    citizenNumber: number
}
type housesType= {
    id:number,
    buildAt:number
    repaired:boolean
    adress:adressType
}
type adressType = {
    number:number,
    street: streetType

}
type streetType = {
    title:string
}
type govermentsBuildingsType ={
    type:string,
    adress:adressType,
    budget:number,
    staffCount:number
}


export const getStreetsTitleOfGovermentsBuildings =(buildings:govermentsBuildingsType[])=>{
    return buildings.map(b=> b.adress.street.title)
}

export const getStreetsTitleOfHouse = (buildings:housesType[])=>{
    return buildings.map(b => b.adress.street.title)
}

export const createMessages = (steets:housesType[])=>{
    return steets.map(s => "Hello " + s.adress.street.title)
}
