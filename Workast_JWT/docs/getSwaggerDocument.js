const swaggerJSDoc = require('swagger-jsdoc');
module.exports = () => {
    return swaggerJSDoc({
        swaggerDefinition: {
            info: {
                title: 'Api Documentation',
                version: '1.0.0',
            },
            basePath: '/api',
            schemes: ["http", "https"],
        }, 
       apis: ['./api/**/*.swagger.yml'],
      // apis: [`${process.env.PWD}/controllers/*.swagger.yml`],
    });
};

// apis: ['./example/v2/routes*.js', './example/v2/parameters.yaml'],