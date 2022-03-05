const db = require('../dbConfig')


function add(recipe){
  return db('budget')
  .insert(recipe, "id");
}
 
const find = () => {
    return db('budget')
}

const findById = (id) =>{
    return db('budget')
    .where({id})
    .first()
}


const remove = (id) =>{
    return db('budget')
    .where({id})
    .del()
}

const update = (id, changes) => {
    return db('budget')
    .where({id})
    .update(changes, '*')
}
module.exports = {
    add,
    findById,
    find,
    update, 
    remove
}