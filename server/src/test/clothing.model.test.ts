import { expect } from 'chai';
import { ClothingModel } from "../models/clothing.model";

const sample_clothing = new ClothingModel({
    id: "15970",
    price: 14.34,
    name: "Turtle Check Men Navy Blue Shirt",
    variantName: "Check",
    brand: "Turtle",
    ageGroup: "Adults-Men",
    gender: "Men",
    color: "Navy Blue",
    season: "Fall",
    usage: "Casual",
    imgLink: "http://assets.myntassets.com/h_480,q_95,w_360/v1/images/style/properties/7a5b82d1372a7a5c6de67ae7a314fd91_images.jpg",
    category: "Topwear",
    type: "Shirts",
    description: "<p style=\"text-align: justify;\"><strong>Composition</strong><br />Dark brown and indigo blue plaid check shirt with white accents, made of 100% cotton, has long sleeves with buttoned cuffs and a button on the elbow for rolling up the sleeve, denim spread collar, buttoned front placket, patch pocket on the upper left chest and a curved hemline<br /><br /><strong>Fitting</strong><br />Slim<br /><br /><strong>Wash care</strong><br />Machine wash cold at 30 degrees with like colours<br />Do not bleach <br />Wash and dry inside out<br />Hang to dry in shade<br />Medium iron<br /><br />The cleverly mitired pocket on the upper left chest and denim collar adds smooth styling to this dark brown and indigo blue plaid check shirt from turtle, while the cotton fabric keeps you feeling fresh and comfortable all day. Part of the proceeds from the sale of this product go towards the Save Turtle project in collaboration with WWF and Wildlife Society of Orissa, making it an environment friendly choice. Team this with chinos or jeans and sneakers.<br /><br /><em>Model statistics</em><br />Product is a size M on a model of height 6' and chest 39\"</p>",
    fit: "Slim Fit",
    pattern: "Checked",
    fabric: "Cotton"
});

const clothingTypes = [
    'Baby Dolls', 'Bath Robe', 'Belts',
    'Blazers', 'Booties', 'Boxers',
    'Bra', 'Briefs', 'Camisoles',
    'Capris', 'Churidar', 'Clothing Set',
    'Dresses', 'Dupatta', 'Innerwear Vests',
    'Jackets', 'Jeans', 'Jeggings',
    'Jumpsuit', 'Kurta Sets', 'Kurtas',
    'Kurtis', 'Leggings', 'Lehenga Choli',
    'Lounge Pants', 'Lounge Shorts', 'Lounge Tshirts',
    'Nehru Jackets', 'Night suits', 'Nightdress',
    'Patiala', 'Rain Jacket', 'Rain Trousers',
    'Robe', 'Rompers', 'Salwar',
    'Salwar and Dupatta', 'Sarees', 'Shapewear',
    'Shirts', 'Shorts', 'Shrug',
    'Skirts', 'Stockings', 'Suits',
    'Suspenders', 'Sweaters', 'Sweatshirts',
    'Swimwear', 'Tights', 'Tops',
    'Track Pants', 'Tracksuits', 'Trousers',
    'Trunk', 'Tshirts', 'Tunics',
    'Waistcoat'
]

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
