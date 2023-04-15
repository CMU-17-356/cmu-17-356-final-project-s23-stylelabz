import {Schema} from 'mongoose';
import mongoose from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface CollectionInterface {
    ClothingType: string,
    availableSizes:[ string ],
    color: string,
    price: number,
    sourceLink: string
}

// 2. Create a Schema corresponding to the document interface.
const CollectionSchema = new Schema<CollectionInterface>({
    ClothingType :{
        type: String,
        required: true,
        enum: ['Activewear', 'Blazers', 'Coats', 'Denim', 'Jackets', 'Jeans', 'Knitwear', 'Pants',
            'Polo Shirts', 'Shirts', 'Shorts', 'Ski Clothing', 'Suits', 'T-Shirts', 'Other']
    },
    availableSizes : {
        type: [{ type: String,  required: true }],
    },
    color: {type: String,},
    price: {type: Number,},
    sourceLink:{ type: String, required: true,}
});

// 3. Create a Model.
export const Collection = mongoose.model('Collection', CollectionSchema);




