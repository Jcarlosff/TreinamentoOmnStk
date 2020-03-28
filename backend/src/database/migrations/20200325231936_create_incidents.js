
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();
        table.string('title').notNullable();
        table.string('descricao').notNullable();
        table.decimal('value').notNullable();

        /**cria uma coluna para mostrar qual ong que cria o incidente'relacionamento */
        table.string('ong_id').notNullable();
        /**criando a chave estrangeira */
        table.foreign('ong_id').references('id').inTable('ongs');
       
    });
};

exports.down = function(knex) {

    return  knex.schema.dropTable('incidents');
  
};
