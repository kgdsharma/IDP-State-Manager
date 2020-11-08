const redis = require('redis');
const { v4: uuidv4 } = require('uuid');
const client = redis.createClient(process.env.REDIS_URL || 6379);

async function saveAuth(interaction, interactionId){

    console.log ('SAVE INTERACTION >>>  ', JSON.stringify(interaction));
    var requestUUID = uuidv4();
    client.hmset(requestUUID,'auth_data', JSON.stringify(interaction));
    interactionId(requestUUID);
}
async function authInfo(sessionId, callback) {
    client.hmget(sessionId, 'auth_data', (err, result) => {
        if (err) {
            console.log('error returning the data');
        } else if (result) {
            callback(result);
        }
    });
}
async function updateAuth(requestUUID, interaction, interactionId){
    console.log ('UPDATE INTERACTION >>>  ', JSON.stringify(interaction));
    client.hmset(requestUUID, 'auth_data',JSON.stringify(interaction));
    interactionId(requestUUID);
}

module.exports = {saveAuth, authInfo, updateAuth};