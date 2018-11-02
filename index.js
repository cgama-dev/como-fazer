const express = require('express')
const app = express()
const routerCategorias = require('./routes/categorias')
const routerPublicacoes = require('./routes/publicacoes')
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 3030

app.use('/categorias', routerCategorias)

app.use('/publicacoes', routerPublicacoes)


app.listen(port, (err) => {
    if (err) {
        console.log('error')
    } else {
        console.log('Starting server at port:' + port)
    }
})