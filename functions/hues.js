let hues = [0, 120, 240]; 
let circleConfigs = [
    { size: 700, position: { bottom: 0, left: 0 } },
    { size: 300, position: { top: 0, right: 0 } },
    { size: 500, position: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' } }
];

exports.handler = async (event) => {
    if (event.httpMethod === 'GET') {
        return {
            statusCode: 200,
            body: JSON.stringify({ hues, circleConfigs }),
        };
    }

    if (event.httpMethod === 'POST') {
        try {
            const data = JSON.parse(event.body);
            if (data.hues) hues = data.hues;
            if (data.circleConfigs) circleConfigs = data.circleConfigs;

            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Data updated successfully' }),
            };
        } catch (error) {
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
