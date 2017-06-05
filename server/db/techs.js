
const getTechs = (db) => {
  return db('techs')
    .select('*')
}

module.exports = {
  getTechs
}
