import mongoose, { Error } from 'mongoose';
import { expect } from 'chai';
import { ClothingModel } from "../models/clothing.model";

const sample_clothing = new ClothingModel({
    type: 'shirts',
    pattern: 'floral',
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL'],
    color: 'Navy',
    colorScheme: 'Blue Family',
    colorPalette: 'Dark',
    link: 'test'
});

const clothingTypes=  ['activewear', 'blazers', 'coats', 'denim', 'jackets', 'jeans', 'knitwear', 'pants',
    'poloShirts', 'shirts', 'shorts', 'suits', 'tshirts', 'other'];
// Test if object should have type
test('Clothing has type', () => {
    // Example Referencing
    expect(sample_clothing).to.have.property('type');
});

// Test if type is one of the predefined list
test('Type is one of the predefined types', () => {
    // Example Referencing
    expect(clothingTypes).to.include(sample_clothing.type);
});
