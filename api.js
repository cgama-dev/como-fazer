const baseURL = 'https://como-fazer-2dc07.firebaseio.com/'

const axios = require('axios')

const findAll = async (key) => {
    const content = await axios.get(baseURL + `${key}.json`)

    let objetos = []

    if (content.data) {
        objetos = Object.keys(content.data)
            .map((key) => {
                return {
                    id: key,
                    ...content.data[key]
                }
            })
    }

    return objetos
}

const create = async (key, obj) => {

    await axios.post(baseURL + `${key}.json`, obj)

    return true
}

const del = async (key, id) => {

    await axios.delete(baseURL + `${key}/${id}.json`)

    return true
}

const delCascade = (key, objects) => {

    for (const item of objects) {
        del(key, item.id)
    }

    return true
}

const findById = async (key, id) => {

    const object = await axios.get(baseURL + `${key}/${id}.json`)

    return object
}

const findByParam = async (key, param, value) => {

    const url = baseURL + `${key}.json?orderBy="${param}"&startAt="${value}"&endAt="${value}"`

    const content = await axios.get(url)

    let objetos = []

    if (content.data) {
        objetos = Object.keys(content.data)
            .map((key) => {
                return {
                    id: key,
                    ...content.data[key]
                }
            })
    }

    return objetos
}

const update = async (key, id, obj) => {

    await axios.put(baseURL + `${key}/${id}.json`, obj)

    return true
}

module.exports = {
    findAll,
    findByParam,
    findById,
    create,
    del,
    delCascade,
    update

}