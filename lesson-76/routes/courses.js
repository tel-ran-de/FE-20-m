const {Router} = require('express')
const Course = require('../models/Course')

const router = Router();

router.get('/', async(req, res)=>{
    const courses = await Course.getAll();
    res.render('courses',{
        title:'Course',
        courses
    })
})

module.exports = router