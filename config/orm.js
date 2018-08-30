import connection from './connection'

const selectAll = () => {
  connection.query(`SELECT * FROM ${connection.database}`)
    .then((err, res) => {
      if(err) throw err
      console.log(res)
    })
}

const insertOne = (set) => {
  connection.query(`INSERT INTO ${connection.database} SET ?`,
  ...set
  )
    .then((err, res) => {
      if(err) throw err
      console.log(res)
    })
}

const updateOne = (set, where) => {
  connection.query(`UPDATE ${connection.database} 
                    SET ? WHERE ?;`,
  ...set,
  ...where
  )
    .then((err, res) => {
      if(err) throw err
      console.log(res)
    })
}
