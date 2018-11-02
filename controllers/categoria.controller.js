module.exports = () => {

    const api = require('../api')

    const CategoriaController = {

        query: async (req, res) => {

            const categorias = await api.findAll('categorias')

            res.render('categorias/index', { categorias: categorias })
        },

        queryByParam: async (req, res) => {

            const categoriaId = req.params.categoriaId;

            const publicacoes = await api.findByParam('publicacoes', 'categoria_id', categoriaId)

            res.render('publicacoes/index', { publicacoes: publicacoes })
        },
        getById: async (req, res) => {
            const content = await api.findById('categorias', req.params.id)

            const categoria = content.data.categoria

            res.render('categorias/editar', { id: req.params.id, categoria: categoria })
        },
        pageSave: (req, res) => {
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

            const publicacoes = await api.findByParam('publicacoes', 'categoria_id', req.params.id)

            //Caso exista publicacoes delata todas as publicacoes da categoria a ser excluida
            if (publicacoes.length) {
                 api.delCascade('publicacoes', publicacoes)
            }

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