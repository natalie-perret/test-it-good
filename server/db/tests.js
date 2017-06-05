
const getTests = (db) => {
  return db('tests')
    .select('*')
}

module.exports = {
  getTests
}
