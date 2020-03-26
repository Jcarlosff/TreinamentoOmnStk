const express = require('express');
/**importando as rotas */
const routes = require('./routes');
const cors = require ('cors');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

/**
 * metodos http: 
 * GET: Buscar/ listar uma informacao do back-end
 * POST: criar uma informacao no back-end
 * PUT: Alterar uma informacao no back-end
 * DELETE: Deletar uma informacao no back-end
 */
/**
 * tipos de parametros
 * Query Params: Parametros nomeados enviados na rota
 * (`link depois do /`) apos "?"(filtros, paginacao)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
 */

 /**
  * Usando----
  * Driver: para acessar os dados teria que ser SELECT * FROM users....
  * Query Builder ...usa jScrip... table(`users`).select(`*`).where
  * usando builder nao e necessario alterar a pesquisa quando mudar de banco (relacional)
  */
