function userForm (req, res){
    res.writeHead(200 , {'Content-Type' : 'text/html'})
    res.write(`
        <form action="/submit" method="POST">
        <input type="text"placeholder="name" name="name"> <br> <br>
        <input type="number"placeholder="age" name="age"> <br> <br>
        <input type="text"placeholder="address" name="address"> <br> <br>
        <button>submit</button>
    </form>`
)
res.end()
}
module.exports = userForm;