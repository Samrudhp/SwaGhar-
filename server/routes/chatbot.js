const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

// First, verify API key exists
if (!process.env.GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY is not set in environment variables');
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post('/chat', async (req, res) => {
    try {
        // Log incoming request
        console.log('Received message:', req.body.message);

        // Check if message exists
        if (!req.body.message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Initialize the model
        const model = genAI.getGenerativeModel({
            model: "gemini-pro",
            generationConfig: {
                maxOutputTokens: 2048,
                temperature: 0.9,
                topP: 0.8,
                topK: 40
            }
        });

        // Create a chat session
        const chat = model.startChat({
            history: [],
            safetySettings: [
                {
                    category: "HARM_CATEGORY_HARASSMENT",
                    threshold: "BLOCK_MEDIUM_AND_ABOVE"
                }
            ]
        });

        // Send message and get response
        const result = await chat.sendMessage(req.body.message);
        const response = result.response.text(); // Ensure you await the response text if necessary
        
        // Log success
        console.log('Gemini response received:', response);

        // Send response back
        res.status(200).json({ data: response });
        
    } catch (error) {
        console.error('Detailed error:', error);

        // Send appropriate error response
        if (error.message.includes('API key')) {
            res.status(500).json({
                error: 'API configuration error',
                details: 'Invalid or missing API key'
            });
        } else {
            res.status(500).json({
                error: 'Failed to process chat message',
                details: error.message
            });
        }
    }
});

module.exports = router;
