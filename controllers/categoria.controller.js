module.exports = () => {

    const api = require('../api')

    const CategoriaController = {

        query: async (req, res) => {

            const categorias = await api.findAll('categorias')

            res.render('categorias/index', { categorias: categorias })
        },
        getById: async (req, res) => {
            const content = await api.findById('categorias', req.params.id)

            const categoria = content.data.categoria

            res.render('categorias/editar', { id: req.params.id, categoria: categoria })
        },
        pageSave:  (req, res) => {
            res.render('categorias/create')
        },
        save: async (req, res) => {
            const categoria = {
                categoria: req.body.categoria
            }

            await api.create('categorias', categoria)

            res.redirect('/categorias')
        },
        destroy: async (req, res) => {
            await api.del('categorias', req.params.id)

            res.redirect('/categorias')
        },
        up: async (req, res) => {
            const categoria = {
                categoria: req.body.categoria
            }

            await api.update('categorias', req.params.id, categoria)

            res.redirect('/categorias')
        }

    }


    return CategoriaController
}