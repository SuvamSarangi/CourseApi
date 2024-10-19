import { json } from 'express';
import * as fs from 'fs';
import { title } from 'process';


const filePath = './cources.json';
let courses = [];
//Add cource

const addCourse = (req, res) => {
    // Read the existing data from the file
   
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf-8');
        if (data) {
            courses = JSON.parse(data);
        }
    }

    //create a new cource
    const newCourse = {
        id: courses.length > 0 ? courses[courses.length - 1].id + 1 : 1,
        title: req.body.title,
        description: req.body.description,
        duration: req.body.duration
    }
    

    //Add the new course to the courses array

    courses.push(newCourse);
    // Write the updated courses array back to the file
    try {
        fs.writeFileSync(filePath, JSON.stringify(courses, null, 2));
        res.status(201).json({
            message: "Course added successfully", course: newCourse
        })
    } catch (error) {
        res.status(500).json({ message: 'Error during saving course', error });
    }

}


// get all cources
const getAllCources = (req, res) => {

    //check is file exist or not
    if (!fs.existsSync(filePath)) {
        console.log("file not exist");
        return res.status(404).json({ message: 'File not found' });
    } else {
        console.log("fiel: ", filePath);
    }

    //get all cource details from the file
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        const courses = JSON.parse(data);
        res.status(200).json(courses);
    } catch (error) {
        console.error('Error reading or parsing the file:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }

}

//get cource by id

const getCourceById = (req,res) =>{
const courceId = parseInt(req.params.id);

//check file is exist or not if exist parse data into an array
if(fs.existsSync(filePath)){
    const data = fs.readFileSync(filePath,'utf-8') ;
   courses = JSON.parse(data);
}

// find the course by its id
const course = courses.find(course => course.id === courceId);

if(course){
    res.status(200).json(course);
}else{
    res.status(404).json({ message: 'Course not found' });
}

}

//Update Course

const updateCourse = (req,res) =>{
    // Extract the Course ID from the URL parameter.
        const courceId = parseInt(req.params.id);
    // Read the Courses Data from the JSON file and Parse the JSON data into a JavaScript object.
    
    // Search for the Course with the given ID in the parsed data.

    // validate courece input
    // Update the Course with the new data.
    // Write the Updated Data back to the JSON file

}





export { getAllCources, addCourse, getCourceById };

