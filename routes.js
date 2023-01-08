let express=require('express');
let router=express.Router();

router.get('/',(req,res)=>{
    res.send('GET Route');
});

router.post('/',(req,res)=>{
    res.send('POST Route');
});

module.exports=router;