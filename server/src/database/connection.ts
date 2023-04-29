import mongoose from "mongoose";

function connect_db(){
    mongoose.connect(
        "mongodb+srv://dzellmer:40EwV0UgYH8DAp2O@cluster0.u1ayvwq.mongodb.net/?retryWrites=true&w=majority"
    );
}

function disconnet_db(){
    mongoose.connection.close();
}

export{ connect_db, disconnet_db };