const http = require('http')
const port = 3200
const userForm = require('./userForm')
const formData = require('./formDetails')


const server = http.createServer((req, res) => {
    if(req.url === '/'){
        userForm(req,res)
    }
    else if(req.url === '/submit'){
        formData(req,res)
        res.writeHead(200 , {'Content-Type' : 'text/html'})
    } 
        
})
server.listen(port, () => {
    console.log(`Server is listen on port ${port}`)
})