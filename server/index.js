import path from 'path';
import fs from 'fs';
import {Provider} from "react-redux";

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from '../src/App';
import configureStore from '../src/store'
import {fetchPrograms} from '../src/actions'
import queryString from "query-string";

const PORT = process.env.PORT || 3006;
const app = express();

// ...

app.get('/', (req, res) => {
    const store = configureStore()
    const queryParams = queryString.stringify(req.query)
    const context = {};
    store.dispatch(fetchPrograms(`?${queryParams}`)).then(() => {
        const appHtml = ReactDOMServer.renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                <App/>
                </StaticRouter>
            </Provider>
        );
        const reduxState = JSON.stringify(store.getState());
        const indexFile = path.resolve('./build/index.html');
        fs.readFile(indexFile, 'utf8', (err, data) => {
            if (err) {
                console.error('Something went wrong:', err);
                return res.status(500).send('Something went wrong');
            }

            return res.send(
                data.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
                    .replace('"__SERVER_REDUX_STATE__"', reduxState)
            );
        });
    });

});

app.use(express.static('./build'));


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});