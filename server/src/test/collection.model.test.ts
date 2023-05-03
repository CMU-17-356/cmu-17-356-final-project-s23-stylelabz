import { CollectionModel } from "../models/collection.model";
import { expect } from 'chai';

const sample_collection= new CollectionModel({
    userId: "12jdjjhf65883jdndnnmm",
    clothingId: 'ggfhj77758ej0003938',
    response: 'like' }
    );
// Test if object should have userId
test('Collection has user id', () => {
    // Example Referencing
    expect(sample_collection).to.have.property('userId');
});
