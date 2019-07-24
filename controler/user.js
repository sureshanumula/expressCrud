var express = require('express');
var router = express.Router();
var User = require('./models/User')      

router.get('/',(req,rep)=>{
User.find({},(err,data)=>{
    if(err)
    {
        console.log(err);
        return err;
    }
    else
    {
        rep.json(data);
    }
})
});

router.post('/create',(req,rep)=>{
    var userData = new User();
    userData.firstname = req.body.firstname;
    userData.lastname = req.body.lastname;
    userData.contact = req.body.contact;
    userData.address = req.body.address;
    User.save(userData,(err,data)=>{
        if(err)
        {
            return err;
        }
        else
        {
            rep.json(data);
        }
    })
})

router.put('/edit/:id',(req,rep)=>{
    let user = {};
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.contact = req.body.contact;
    user.address = req.body.address;

    let query = {_id:req.params.id}
    User.update(query,user,(err,data)=>{
        if(err)
        {
            return err;
        }
        else
        {
            rep.json(data);
        }
    })

})

router.delete('/',(req,rep)=>{
    let query = {_id:req.params.id}
    User.findById(query,(err,fdata)=>{
        if(err)
        {
            return err;
        }
        else
        {
            User.remove(query,(err,data)=>{
                if(err)
                {
                    return err;
                }
                else
                {
                   rep.json(data)
                }
            }) 
        }
    })
});


module.exports = router;