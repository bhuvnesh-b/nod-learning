const http = require('http')

const server = http.createServer((req,res) => {
    console.log(req)
    if(req.url == '/'){
        res.write('welcome to my first page')
        res.end()
    }
    else if(req.url == '/about'){
        res.end('this is about page')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>Nothing here</p>
    `)
})


server.listen(5000)