import express, { Router } from 'express';
import { addCourse, getAllCources, getCourceById } from '../controllers/courses.js';

const router = Router();


router.get('/courses',getAllCources);
router.post('/addCourse',addCourse);
router.get('/course/:id',getCourceById);

export default router;