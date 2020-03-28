const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/** Métodos HTTP:
 * GET : Buscar/listar informação;
 * POST : Criar informação;
 * PUT : Alterar informação;
 * DELETE : Deletar informação.
*/

/** Tipos de parâmetro
 * Query : Parâmetros nomeados enviados na rota após "?" (Filtros, Páginas); 
 * Route : Parâmetros utilizados para identificar recursos;
 * Request Body : Corpo da requisição, utilizado para criar/alterar recursos;
 */

/** Bancos de dados
 * SQL : MySQL, SQLite, PostgreSQL, Oracle, Microsoft Sql Server;
 * NoSQL : MogoDB, CouchDB, etc...
*/

/** 
  * Drivers : SELECT * FROM users;
  * Query Builder : table('users').select('*').where();
*/

app.listen(3333);
