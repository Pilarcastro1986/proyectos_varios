const swaggerJSDoc = require('swagger-jsdoc');

module.exports = () => {
    return swaggerJSDoc({
        swaggerDefinition: {
            info: {
                title: 'Api Documentation',
                version: '1.0.0',
            },
            basePath: '/controller',
        }, 
        apis: ['.../controller/**/*.yml'],
    });
};