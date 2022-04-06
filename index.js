const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
    if(req.query.opcion=="suma")
    {
        var resultado=parseInt(req.query.numero1)+parseInt(req.query.numero2)
    }
  res.send('el resultado de laaaa '+ req.query.opcion+ " fue " + resultado)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})