const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('¡Hola Mundo!')
})

app.listen(port, () => {
    console.log('La Aplicacion Se Esta Ejecutando Por El Puerto'+ `${port}`)
})