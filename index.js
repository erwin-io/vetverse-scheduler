
var request = require('request');


const post = async function() {
    return await request.post(
        'http://localhost:3000/api/v1/scheduler',
        async function (error, response, body) {
            if (!error && response.statusCode == 200) {
                return {
                    error,
                    body,
                    response
                };
            }
        }
    );
};
post().then(res => {
    console.log('response ', res);
})