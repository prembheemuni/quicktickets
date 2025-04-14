const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require('dotenv')

dotenv.config();

const services = [
    // {
    //     route: '/userservice',
    //     target: 'http://localhost:4001/'
    // },
    {
        route: '/movieservice',
        target: process.env.MOVIE_SERVICE
    },
    {
        route: '/bookingservice',
        target: process.env.BOOKING_SERVICE
    },
    // {
    //     route: '/paymentservice',
    //     target: 'http://localhost:4004/'
    // },
    // {
    //     route: '/notificationservice',
    //     target: 'http://localhost:4005/'
    // },
];
console.log(services)
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



app.listen(process.env.PORT || 9000, () => {
    console.log("API Gateway is running");
});
