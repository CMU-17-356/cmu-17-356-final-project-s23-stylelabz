import express from 'express';
import { UserModel} from '../models/user.model';

const router = express.Router();

/******************************
 * User APIs
 **************************** */
// Login
router.post('/login', async (req, res) => {
    try {
        const data = await UserModel.findOne({ username: req.body.username});
        res.json(data);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
});

// Create New User
router.post('/register', async (req, res) => {

    let registeredUser= true;

    // check if the username exists:
    // email
    const isEmailRegistered= await UserModel.findOne({email: req.body.email});

    if (isEmailRegistered == null){
         registeredUser= false;
    }

    // username
    const isUsernameRegistered= await UserModel.findOne({ username: req.body.username});
    if (isUsernameRegistered == null){
       registeredUser=false;
    }

    if (!registeredUser) {
        try {
            const data = new UserModel({
                username: req.body.username,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                gender: req.body.gender,
                DOB: req.body.DOB,
                email: req.body.email,
            });
            const dataToSave = await data.save();
            res.status(200).json(dataToSave);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({message: error.message});
            }
        }
    }else{
        res.status(400).send({ message: 'Failed! Username or Email is already in use!'});
    }
});


// Get User by ID
router.get('/:user_id', async (req, res) => {
    try {
        const data = await UserModel.findOne({ _id: req.params.user_id });
        res.json(data);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
});

export default router;
