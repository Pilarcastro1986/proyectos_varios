


async function getUsers (req, res, next){
    try{
        const personas = await req.modelos.personas.find()
        res.status(200).send(personas)
    }
    catch (error){
        console.log(error)
    }
}

async function postUsers (req, res, next) {
    try{
        const persona =  await req.modelos.personas.create({
            name: req.body.name,
            avatar: req.body.avatar
        })
        res.send(persona)
    }
    catch(error){
        console.log(error) 
    }
}

async function getArticles(req, res, next){
            const tags = req.query.tags
    try{

        if(tags){
            const t = await req.modelos.articulos.find({ tags: { $in: tags } })
            res.send(t)
        } else {
            const t = await req.modelos.articulos.find()
            res.send(t)  
        }
    }
    catch (error){
        console.log(error)
    }
}


async function postArticle(req, res, next){
    try{
        const newArticle = req.modelos.articulos.create({
            title: req.body.title,
            text : req.body.text,
            tags : req.body.tags
        })
        res.send(newArticle )
    }
    catch (error){
        console.log(error)
    }
}


async function putArticle(req, res,next) {
    const objeto = req.params.id
    const actualizar = req.body
    
    try{
        const edit = await req.modelos.articulos.findByIdAndUpdate(objeto,actualizar)
        res.send(edit)
    }
    catch (error){
        console.log(error)
    }
}

async function deleteArticle(req, res, next){
    try{
        const eliminarId = await req.modelos.articulos.findByIdAndRemove(req.params.id)
        res.send({mensaje: 'Se elimino el articulo'})
    }
    catch (error){
        console.log(error)
    }
}


module.exports = {getUsers, postUsers, getArticles, postArticle, putArticle, deleteArticle}