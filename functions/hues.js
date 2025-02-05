// netlify/functions/hues.js
exports.handler = async (event, context) => {
    try {
        // Generate random hue values between 0 and 360
        const hues = [
            Math.floor(Math.random() * 360),
            Math.floor(Math.random() * 360),
            Math.floor(Math.random() * 360)
        ];

        // Return the hues as a JSON response
        return {
            statusCode: 200,
            body: JSON.stringify({ hues })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to generate hues', error: error.message })
        };
    }
};