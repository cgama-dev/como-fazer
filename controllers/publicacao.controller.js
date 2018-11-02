module.exports = () => {

    const api = require('../api')

    const PublicacaoController = {

        query: async (req, res) => {
            const publicacoes = await api.findAll('publicacoes')

            res.render('publicacoes/index', { publicacoes: publicacoes })
        },
        getById: async (req, res) => {
            const content = await api.findById('publicacoes', req.params.id)

            const titulo = content.data.titulo

            const conteudo = content.data.conteudo

            res.render('publicacoes/edit',
                {
                    id: req.params.id,
                    titulo: titulo,
                    conteudo: conteudo
                }
            )
        },
        pageSave: async (req, res) => {

            const categorias = await api.findAll('categorias')

            res.render('publicacoes/create', { categorias: categorias })

        },
        save: async (req, res) => {
            const publicacao = {
                titulo: req.body.titulo,
                conteudo: req.body.conteudo,
                categoria_id: req.body.idCategoria
            }

            await api.create('publicacoes', publicacao)

            res.redirect('/publicacoes')
        },
        destroy: async (req, res) => {
            await api.del('publicacoes', req.params.id)

            res.redirect('/publicacoes')
        },
        up: async (req, res) => {
            const publicacao = {
                titulo: req.body.titulo,
                conteudo: req.body.conteudo
            }

            await api.update('publicacoes', req.params.id, publicacao)

            res.redirect('/publicacoes')
        }

    }

    return PublicacaoController
}