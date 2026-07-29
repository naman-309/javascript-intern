

import { course } from "../../db/db.js";

const createCourse = (req, res) => {

    // for post api 
    const { courseName, fees } = req.body
    const courseData = { courseName, fees }
    course.push(courseData)
    console.log("course added sucesfully", courseData)
    console.log("all Courses are:", course)

    res.json({
        message: "course added sucessfully"
    })
}

const getCourse = (req, res) => {
    res.json({
        message: "courses fatched sucesfuly",
        data: course
    })
}
export { getCourse, createCourse } 