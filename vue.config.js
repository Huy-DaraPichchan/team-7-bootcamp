const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../vuecrudappapi/public'),
    devServer: {
        proxy: {
            '/tasks': {
                target: 'http://localhost:3000'
            }
        }
    }
}