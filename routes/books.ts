import express from 'express';
import Book from '../models/bookModel';
import verifyToken from '../middleware/authMiddleware';

const router = express.Router();

// Add a new book
router.post('/', verifyToken, async (req, res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ error: 'Book save failed' });
    }
});

// Get all books (with filters if given)
router.get('/', async (req, res) => {
    try {
        const query: any = {};

        if (req.query.author) query.author = req.query.author;
        if (req.query.category) query.category = req.query.category;
        if (req.query.rating) query.rating = { $gte: req.query.rating };
        if (req.query.title) query.title = { $regex: req.query.title, $options: 'i' };

        const books = await Book.find(query);
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: 'Could not fetch books' });
    }
});

// Get a book by ID
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ error: 'Book not found' });

        res.json(book);
    } catch (err) {
        res.status(400).json({ error: 'Invalid book ID' });
    }
});

// Update a book
router.put('/:id', verifyToken, async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedBook) return res.status(404).json({ error: 'Book not found' });

        res.json(updatedBook);
    } catch (err) {
        res.status(400).json({ error: 'Could not update book' });
    }
});

// Delete a book
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) return res.status(404).json({ error: 'Book not found' });

        res.json({ message: 'Book deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: 'Delete failed' });
    }
});

export default router;
