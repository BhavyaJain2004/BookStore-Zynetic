import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: String,
    category: String,
    price: Number,
    rating: Number,
    publishedDate: Date
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
