const express = require('express')
const app = express()
const port = 3000;


app.use(express.json())
app.use(express.static('public')) // send the files in public folder to the browser

// open port and listen for requests
app.listen(port, (err, data) =>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`Connected at Port: ${port}`)
    }
})


app.get('/cu', (req, res) => {

    try{
        const data = req.query
        const subList = JSON.parse(data.subjects)

        console.log(data)
        console.log(subList)
    }
    catch(e){
        console.log(e.message)
    }
})
