const {insert, fetch}=require('../Controller/Save_Controller')
const saveRouter=require('express').Router()

saveRouter.post('/insertsave/:recipeid/:img/:source/:label/:yield',insert)
saveRouter.get('/fetchsave',fetch)

module.exports=saveRouter