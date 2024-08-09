'use strict';

import { server as _server } from '@hapi/hapi';

const init = async () => {

    const server = _server({
        port: 5000,
        host: 'localhost'
    });

    // root path
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return {
                'msg': 'hello world'
            };
        }
    });

    server.route({
        method:'GET',
        path: '/profile',

        handler:(request,h)=>{
            return {
                'name': 'kresna aprianto',
                'address': 'kampungbaru nganjuk',
                'phone number' : '9478342323'
            }
        }
    })


    server.route({
        method:'GET',
        path: '/about',

        handler:(request,h)=>{
            return {
                'msg': 'ini adalah halaman about'
            }
        }
    })

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();