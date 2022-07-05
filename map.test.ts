import {createGreetingMessages, ManType} from "./map";

let people:ManType[] = []

beforeEach( () =>{
    people = [
        {name: "Aleksandr Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 18},
        {name: "Honzo Honzo", age: 38}
    ]
})

test("should get arraay fo greeting messages", ()=>{
    const messages = createGreetingMessages(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("hello Aleksandr welcome to it")
})