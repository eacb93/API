const User = require('../models/user')

exports.create = (req, res)=>{
    const nUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    })

    nUser.save().then(
     data=>{
       res.send(data)
     }
    ).catch(
     error=>{
       res.status(500).send({
           message: error.message || 'Error al crear el usuario'
       })
      }
    )
    console.log(nUser);
}

exports.findAll = (req, res)=>{
  User.find({})
     .then((data)=>{
       res.send(data)
     })
     .catch((error)=>{
       res.status(500).send({message:"hubo un error en el servidor"})
     })
}
exports.findOne = (req,res)=>{
  const id = req.params.id
  User.findById(id)
    .then((data)=>{
    if(!data){
      res.status(404).send({message:"no se encontro el id"+id})
    } else{
      res.send(data)
    }
   })
    .catch((error)=>{
      res.status(500).send({message:"error en el servidor"})
  })
}
exports.update = (req,res)=>{
   const id = req.params.id
   if(!req.body){
     return res.status(400).send({message:"la petición no puede ir vacia"})
   }
   User.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
   .then((data)=>{
    if(!data){
      res.status(404).send({message:"no se puede editar"})
    }else{
      res.send({message:"el usuario se ha actualizado"})
    }
   })
   .catch((error)=>{
     res.status(500).send({message:"error en el servidor principal"})
   })
}
exports.delete = (req,res)=>{
  const id = req.params.id

  User.findByIdAndRemove(id)
   .then((data)=>{
     if(!data){
       res.status(404).send({message:"no se puede eliminar"})
     }else{
       res.send({message:"se elimino correctamente"})
     }
   })
   .catch((error)=>{
     res.status(500).send({message:"servidor caido"})
   })
}