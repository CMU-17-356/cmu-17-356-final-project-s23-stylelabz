import { expect } from 'chai';
import { UserModel } from "../models/user.model";

const sample_user = new UserModel({
    username: "Alex123",
    first_name: "Alex",
    last_name: "S",
    gender: 'M',
    DOB: '2000-04-19T00:00:00.000Z',
});

// Test if object should have username
test('User has username', () => {
    // Example Referencing
    expect(sample_user).to.have.property('username');
});

// Test if object should have first and last name
test('User has First name and Last name:', () => {
    // Example Referencing
    expect(sample_user).to.have.property('first_name');
    expect(sample_user).to.have.property('last_name');
});


