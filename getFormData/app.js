// const http = require('http')
// const fs = require('fs')
// const path = require('path')
// const querystring = require('querystring')
// const port = 3300

// //server create
// const server = http.createServer((req, res) => {
//     const filepath = path.join(__dirname, 'index.html')
//     fs.readFile(filepath, (err, data) => {
//         if (req.url === '/submit' && req.method === 'POST') {
//             // get data chunk          
//             let body = ''
//             req.on('data', (chunk) => {
//                 body += chunk;
//             });
//             req.on('end', () => {
//                 const data = querystring.parse(body)
//                 console.log('data submited successfull. !');
//                 res.write('go to the details page and show tha data')
//                 // create file
//                 const createPath = path.join(__dirname, 'formdata', `${data.name}.text`)
//                 fs.writeFile(createPath, `user name is ${data.name} and email is ${data.email}`, (err) => {
//                     if (err) {
//                         console.log('file not created .');
//                     } else {
//                         console.log('file created successfull. !');
//                     }

//                 })
//                 res.end()
//             })
//         }
//         else if (err) {
//             res.writeHead(500, { 'Content-Type': 'text/html' })
//             res.end('server error')
//         }
//         else {
//             res.writeHead(200, { 'Content-Type': 'text/html' })
//             res.write(data)
//             res.end()
//         }
//     })
// })
// server.listen(port, () => {
//     console.log(`server is listen on port ${port}`);
// })

const http = require('http')
const fs = require('fs')
const path = require('path')
const querystring = require('querystring')
const port = 4100

const server = http.createServer((req, res)=>{
    const filepath = path.join(__dirname , 'index.html')
    fs.readFile(filepath , (err , data)=>{
        if(req.url === '/submit' && req.method === 'POST'){
            let body = ''
            req.on('data' ,(chunk)=>{
                body+=chunk;
            })
            req.on('end' , ()=>{
                const data = querystring.parse(body)
                res.write('data successfull save go to the details page')
                console.log('data submit successfull !'); 
                
                const createpata = path.join(__dirname , 'formdata', `${data.name}.text`, )
                fs.writeFile(createpata , `user name is ${data.name} and email is ${data.email}`, (err)=>{
                    if(err){
                        console.log('file create faild');                        
                    }else{
                         console.log('file created successfully');
                    }
                })
                res.end()                           
            })
        }
        else if(err){
            res.writeHead(500 , {'content-type' : 'text/html'} )
            res.write('server error')
            res.end()
        }else{
             res.writeHead(200 , {'content-type' : 'text/html'} )
            res.write(data)
            res.end()
        }
    })
})
server.listen(port ,()=>{
console.log(`server is running on port ${port}`)
})