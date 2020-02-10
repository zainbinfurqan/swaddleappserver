const express = require('express');
const bodyParser = require('body-parser');
const enforce = require('express-sslify');
const compression = require('compression');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

const graphqlSchema = require('./graphql/schema/index.gql');
const graphqlResolvers = require('./graphql/resolvers/index');
const isAuth = require('./middleware/auth');

const { ENV, PORT, MONGODB_URI } = require('./helpers/constants');

const app = express();
//Disable http on heroku
// if (ENV === 'production') {
//     app.use(enforce.HTTPS({ trustProtoHeader: true }));
// }

app.use(compression());
app.use(bodyParser.json());
app.use(isAuth);

app.use(
    '/graphql', cors(), bodyParser.json(),
    graphqlHttp({
        schema: graphqlSchema,
        rootValue: graphqlResolvers,
        graphiql: true
    })
);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Accept-Encoding, Accept-Language, Access-Control-Request-Headers, Access-Control-Request-Method");
    next();
});

app.use('/', express.static(`${__dirname}/../dist`));

//https://youtu.be/bgq7FRSPDpI?t=1517

mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true })
    .then(() => {
        app.listen(PORT);
        console.log("connected...!")
        console.info('Server running on port', PORT);
    })
    .catch(err => {
        console.log('err: ', err);
    });
// const duration = ENV === 'development' ? 1000 : 0;
// const delayPromise = () => result => new Promise(resolve => setTimeout(() => resolve(result), duration));
