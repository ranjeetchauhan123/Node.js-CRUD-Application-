const querystring = require('querystring')
const fs = require('fs')

function formdata(req, res) {

    if (req.url === '/submit' && req.method === 'POST') {
        let body = ''
        req.on('data', (chunk) => {
            body += chunk
        })
        req.on('end', () => {
            const data = querystring.parse(body)
            res.write('Form details...')
            console.log(data);
            res.write(`<h2> Name : ${data.name}</h2>`)
            res.write(`<h2> Age : ${data.age}</h2>`)
            res.write(`<h2> Address : ${data.address}</h2>`)

            
            res.end()
        })
    }
}
module.exports = formdata