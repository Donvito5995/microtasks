import React from "react";

const ages = [19, 20, 22, 90, 98, 100]

const predicate = (age: number) => {
    return age > 90
}

type  CourseType = {
    title:string,
    price:number
}

const courses = [
    {title: "CSS", price: 100},
    {title: "JS", price: 200},
    {title: "REACT", price: 150}
]

const cheapPredicate = (course:CourseType)=>{
    return course.price < 160;
}

const cheapCourses  = ()=>{}
