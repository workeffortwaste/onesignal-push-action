const core = require('@actions/core')
const github = require('@actions/github')

const sendNotification = (data) => {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: 'Basic ' + core.getInput('rest-api-key')
  }

  const options = {
    host: 'onesignal.com',
    port: 443,
    path: '/api/v1/notifications',
    method: 'POST',
    headers: headers
  }

  const https = require('https')
  const req = https.request(options, (res) => {
    res.on('data', (data) => {
      console.log('Response:')
      console.log(JSON.parse(data))
    })
  })

  req.on('error', (e) => {
    console.log('ERROR:')
    console.log(e)
  })

  req.write(JSON.stringify(data))
  req.end()
}

try {
  var message = {
    app_id: core.getInput('app-id'),
    headings: { en: core.getInput('title') },
    contents: { en: core.getInput('message') },
    included_segments: ['All']
  }

  sendNotification(message)
} catch (error) {
  core.setFailed(error.message)
}
