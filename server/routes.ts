import express, { Request, Response } from 'express';
import { ClothingModel } from './src/models/clothing.model';

const router = express.Router()

router.get('/clothing', async(req: Request, res: Response) => {
    let numItems = 10;
    if ('numItems' in req.query) {
        numItems = ((req.query.numItems as unknown) as number);
    }
    const clothingItems = await ClothingModel.find({}, null, { limit: numItems })
    console.log(clothingItems);
    res.status(200).send(clothingItems);
  });

export default router;
