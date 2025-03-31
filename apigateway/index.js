const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const services = [
    {
        route: '/userservice',
        target: 'http://localhost:4001/'
    },
    {
        route: '/movieservice',
        target: 'http://localhost:4002/'
    },
    {
        route: '/bookingservice',
        target: 'http://localhost:4003/'
    },
    {
        route: '/paymentservice',
        target: 'http://localhost:4004/'
    },
    {
        route: '/notificationservice',
        target: 'http://localhost:4005/'
    },
];

const app = express();

services.forEach((service) => {
    const proxyOptions = {
        target: service.target,
        changeOrigin: true,
        pathRewrite: {
            [`^/api${service.route}`]: "",
        }
    }

    app.use(`/api${service.route}`, createProxyMiddleware(proxyOptions));
});



app.listen(9000, () => {
    console.log("API Gateway is running at http://localhost:9000");
});
