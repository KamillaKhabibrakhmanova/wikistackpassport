//expose our config directly to our application using modules


//using environmental variables to store API keys. Note that you can also just write the key strings in below, but it's not recommended. 

var facebookId = process.env.facebookID;

var facebookSecret = process.env.FacebookAPISecretKey;

module.exports = {
    'facebookAuth' : {
        'clientID'      : '844589928897365', // your App ID
        'clientSecret'  : facebookSecret, // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback'
    }
}