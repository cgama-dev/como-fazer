const express = require('express')

const router = express.Router()

const { query, getById, pageSave, save, destroy, up } = require('../controllers/publicacao.controller')()

router.get('/', query)

router.get('/create', pageSave)

router.post('/create', save)

router.get('/destroy/:id', destroy)

router.get('/edit/:id', getById)

router.post('/edit/:id', up)

module.exports = router