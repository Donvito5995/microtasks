import exp from "constants";

test("should take old man older than 90", () => {
    const ages = [19, 20, 22, 90, 100]
    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100)
})

test("should take cheap courses", () => {

    const courses = [
        {title: "CSS", price: 100},
        {title: "JS", price: 200},
        {title: "REACT", price: 150}
    ]

    const cheapCourse = courses.filter(course => course.price < 160);

    expect(cheapCourse.length).toBe(2);
    expect(cheapCourse[0].title).toBe('CSS')
    expect(cheapCourse[1].title).toBe('REACT')
})

test ('get only completed task', ()=>{
    const tasks = [
        {id:1, title:'Bread', isDone:false},
        {id:2, title:'Tea', isDone:true},
        {id:3, title:'Sugar', isDone:false},
        {id:4, title:'Milk', isDone:true}
    ]

    const completedTask = tasks.filter(tasks => tasks.isDone)

    expect(completedTask.length).toBe(2);
    expect(completedTask[0].id).toBe(2)
    expect(completedTask[1].id).toBe(4)

})