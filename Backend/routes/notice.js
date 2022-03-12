const express = require('express');
const router = express.Router();
const Notice = require('../models/Notice');
const fetchadmin = require('../middleware/fetchAdmin');
// const { body, validationResult } = require('express-validator');

// router.post('/createNotice',[
//     body('name', 'Enter a valid name').isLength({ min: 3 }),
//     body('email', 'Enter a valid email').isEmail(),
//     body('subject', 'Enter a valid subject'),
//     body('description', 'Enter a valid description'),
//   ], (req, res, next) => {

//     const errors = validationResult(req);
//     if (!errors.isEmpty()){
//         return res.status(400).json({errors: errors.array()});
//     }    
//     if(req.body){
//       Feedback.create({
//           name: req.body.name,
//           email: req.body.email,
//           subject: req.body.subject,
//           description: req.body.description,
//       })
//         .then((data) => res.json(data))
//         .catch(next);
//     } else {
//       res.json({
//         error: 'The input field is empty',
//       });
//     }
//   });

router.get('/', async(req,res) => {
    try{
           const notice = await Notice.find()
           res.json(notice)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const notice = await Notice.findById(req.params.id)
           res.json(notice)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/addnotice', fetchadmin, async(req,res) => {
    const notice = new Notice({
        date: req.body.date,
        title: req.body.title,
        description: req.body.disc
    })

    try{
        const n1 =  await notice.save() 
        res.json(n1)
    }catch(err){
        res.send('Error')
    }
})

router.delete('/:id',async(req,res)=> {
    try{
        const notice = await Notice.findById(req.params.id) 
        const n1 = await notice.delete()
        res.json(n1)   
    }catch(err){
        res.send('Error')
    }

})



// router.post('/createFeed', [
//   body('name', 'Enter a valid name').isLength({ min: 3 }),
//   body('email', 'Enter a valid email').isEmail(),
//   body('subject', 'Enter a valid subject'),
//   body('description', 'Enter a valid description'),
// ], async (req, res) => {
//   // If there are errors, return Bad request and the errors
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//   try {
//     // Check whether the user with this email exists already
//     // let user = await User.findOne({ email: req.body.email });
//     // if (user) {
//     //   return res.status(400).json({ error: "Sorry a user with this email already exists" })
//     // }
//     // const salt = await bcrypt.genSalt(10);
//     // const secPass = await bcrypt.hash(req.body.password, salt);

//     // Create a new user
//      let feed = await Feedback.create({
//       name: req.body.name,
//       email: req.body.email,
//       subject: req.body.subject,
//       description: req.body.description,
//     });
//     const data = {
//       feed: {
//         id: feed.id
//       }
//     }
//     // const authtoken = jwt.sign(data, JWT_SECRET);


//     res.json(feed)
//     // res.json({ authtoken })

//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// })


// // ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
// router.post('/login', [
//   body('email', 'Enter a valid email').isEmail(),
//   body('password', 'Password cannot be blank').exists(),
// ], async (req, res) => {
//   let success = false;
//   // If there are errors, return Bad request and the errors
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   const { email, password } = req.body;
//   try {
//     let user = await User.findOne({ email });
//     if (!user) {
//       success = false
//       return res.status(400).json({ error: "Please try to login with correct credentials" });
//     }

//     const passwordCompare = await bcrypt.compare(password, user.password);
//     if (!passwordCompare) {
//       success = false
//       return res.status(400).json({ success, error: "Please try to login with correct credentials" });
//     }

//     const data = {
//       user: {
//         id: user.id
//       }
//     }
//     const authtoken = jwt.sign(data, JWT_SECRET);
//     success = true;
//     res.json({ success, authtoken })

//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }


// });


// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
// router.post('/getuser', fetchuser,  async (req, res) => {

//   try {
//     userId = req.user.id;
//     const user = await User.findById(userId).select("-password")
//     res.send(user)
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// })
module.exports = router