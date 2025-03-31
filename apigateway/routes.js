const express = require('express');
const { createProxy } = require('http-proxy');
const proxy = createProxy();


const router = express.Router();


router.all('/user/*',(req,res)=>{
    proxy.web(req, res,{target: 'http://localhost:4001/'})
})

router.all('/movie/*',(req,res)=>{
    proxy.web(req, res,{target: 'http://localhost:4002/'})
})

router.all('/booking/*',(req,res)=>{
    proxy.web(req, res,{target: 'http://localhost:4003/'})
})

router.all('/payment/*',(req,res)=>{
    proxy.web(req, res,{target: 'http://localhost:4004/'})
})



module.exports = router

