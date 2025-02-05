// functions/hues.js
let hues = [0, 120, 240]; // Initial hue values

exports.handler = async (event) => {
    if (event.httpMethod === 'GET') {
        return {
            statusCode: 200,
            body: JSON.stringify({ hues }),
            headers: { 'Content-Type': 'application/json' },
        };
    }

    if (event.httpMethod === 'POST') {
        try {
            const body = JSON.parse(event.body);
            if (body.hues && Array.isArray(body.hues)) {
                hues = body.hues;
                return {
                    statusCode: 200,
                    body: JSON.stringify({ message: 'Hues updated successfully' }),
                    headers: { 'Content-Type': 'application/json' },
                };
            } else {
                return {
                    statusCode: 400,
                    body: JSON.stringify({ error: 'Invalid data format' }),
                };
            }
        } catch (err) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid JSON' }),
            };
        }
    }

    return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
};
