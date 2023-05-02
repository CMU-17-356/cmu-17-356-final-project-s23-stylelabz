import express from 'express';
import { UserModel} from '../models/user.model';

const router = express.Router();

/******************************
 * User APIs
 **************************** */
// Create New User
router.post('/', async (req, res) => {
    const data = new UserModel({
        username: req.body.username,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender,
        DOB: req.body.DOB,
        email: req.body.email,
    });
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
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

//Get all users
router.get('/', async (req, res) => {
    try {
        const data = await UserModel.find();
        res.json(data);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
});

export default router;
