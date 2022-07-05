
import {CityType} from "./map";
import {getStreetsTitleOfGovermentsBuildings} from "./map";
import {getStreetsTitleOfHouse} from "./map";
import {createMessages} from "./map";
let city : CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1, buildAt: 2012, repaired: false,
                adress: {
                    number: 100,
                    street: {title: "White street"}
                }
            },
            {
                id: 2, buildAt: 2000, repaired: false,
                adress: {
                    number: 100,
                    street: {title: "Happy street"}
                }
            },
            {
                id: 2, buildAt: 2020, repaired: false,
                adress: {
                    number: 101,
                    street: {title: "Happy street"}
                }
            }
        ],
        govermentBuilding :[
            {
                type:"Hospital",
                adress:{street:{ title: "Central str"},number:12},
                budget:200000, staffCount:200
            },
            {
                type:"FIRE-STATION",
                adress:{street:{ title: "South str"},number:12},
                budget:500000, staffCount:1000
            }
        ],
        citizenNumber:100000
    }
})

test("list of streets titles of goverments buildings", ()=>{
    let streetsName = getStreetsTitleOfGovermentsBuildings(
        city.govermentBuilding
    )

    expect(streetsName.length).toBe(2);
    expect(streetsName[0]).toBe("Central str");
    expect(streetsName[1]).toBe("South str");
})

test("list of streets title",()=>{
    let streets = getStreetsTitleOfHouse(
        city.houses
    )
    expect(streets.length).toBe(3)
    expect(streets[0]).toBe("White street");
    expect(streets[1]).toBe("Happy street");
    expect(streets[2]).toBe("Happy street");
})

test("create greeting messages for streets", ()=>{
    let messages = createMessages(city.houses)
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello White street")
    expect(messages[1]).toBe("Hello Happy street")
    expect(messages[2]).toBe("Hello Happy street")
})