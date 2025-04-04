import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/api_error.js";
import { ApiResponse } from "../utils/api_response.js";
import { Book } from "../models/book.model.js";

const getBook = asyncHandler(async (req, res) => {
    // Fetch books from MongoDB
    const book = await Book.find();

    // Check if books exist
    if (!book || book.length === 0) {
        throw new ApiError(404, "Book not found");
    }

    // Send response
    return res.status(200).json(new ApiResponse(200, book, "Book details fetched successfully"));
});

export { getBook };
