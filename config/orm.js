const connection = require('./connection')
const table = 'burgers'

const selectAll = () => {
  connection.query(`SELECT * FROM ${table}`, 
    function(err, res) {
      if(err) throw err
      console.log(res)
    })
}

const insertOne = (set) => {
  connection.query(`INSERT INTO ${table} SET ?`,
  ...set
  )
    .then((err, res) => {
      if(err) throw err
      console.log(res)
    })
}

const updateOne = (set, where) => {
  connection.query(`UPDATE ${table} 
                    SET ? WHERE ?;`,
  ...set,
  ...where
  )
    .then((err, res) => {
      if(err) throw err
      console.log(res)
    })
}

module.exports = {
  selectAll, insertOne, updateOne 
}
