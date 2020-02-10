const constants = {
    // ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://swaddle:SWADDLE@cluster0-3oan8.mongodb.net/test?retryWrites=true&w=majority    ',
    JWT_SECRET: process.env.JWT_SECRET || 'W$GR#34'
};

module.exports = Object.freeze(constants);
