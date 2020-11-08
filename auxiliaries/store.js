const redis = require('redis');
const { v4: uuidv4 } = require('uuid');
const client = redis.createClient(process.env.REDIS_URL || 6379);

async function saveAuth(interaction, interactionId){
    var requestUUID = uuidv4();
    client.hmset(requestUUID, JSON.stringify(interaction));
    interactionId(requestUUID);
}
async function authInfo(sessionId, callback) {
    client.hmget(sessionId, (err, result) => {
        if (err) {
            console.log('error returning the data');
        } else if (result) {
            callback(result);
        }
    });
}

async function updateAuth(requestUUID, interaction, interactionId){
    client.hmset(requestUUID, JSON.stringify(interaction));
    interactionId(requestUUID);
}



module.exports = {saveAuth, authInfo, updateAuth};