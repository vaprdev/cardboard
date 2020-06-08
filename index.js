const { google } = require('googleapis')
const fs = require('fs')

const scopes = ['https://www.googleapis.com/auth/gmail.readonly']

fs.readFile('./env/local.json', (err, content) => {
    authorize(JSON.parse(content))
})

function authorize(creds) {
    const { client_id, client_secret, redirect } = creds
    const oAauth2Client = new google.auth.OAuth2(client_id, client_secret, redirect)
    getToken(oAauth2Client)
}

function getToken(oAauth2Client) {
    const authUrl = oAauth2Client.generateAuthUrl({ access_type: 'online', scope: scopes })
    console.log('visit url to authorize', authUrl)
}


// const oAauth2client = new google.auth.OAuth2(client_id, client_secret, 'http://localhost:1234')

// const authUrl = oAauth2client.generateAuthUrl({
//     access_type: 'online',
//     scope: scopes
// })

// console.log('authorize this app by visiting: ', authUrl)

