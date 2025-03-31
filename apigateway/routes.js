const express = require('express');
const { createProxy } = require('http-proxy');
const proxy = createProxy();


const router = express.Router();

router.get('/',(req,res)=>{
    res.json({msg : 'working'})
})

router.all('/movie/*',(req,res)=>{
    proxy.web(req, res,{target: 'http://localhost:4002/'})
})

module.exports = router

