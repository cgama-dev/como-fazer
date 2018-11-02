const express = require('express')

const { query, queryByParam, getById, pageSave, save, destroy, up } = require('../controllers/categoria.controller')()

const router = express.Router()

router.get('/', query)

router.get('/:categoriaId/publicacoes', queryByParam)

router.get('/nova', pageSave)

router.post('/nova', save)

router.get('/exluir/:id', destroy)

router.get('/editar/:id', getById)

router.post('/editar/:id', up)

module.exports = router