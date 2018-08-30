const sqlMethods = require('../config/orm')
const selectAll = sqlMethods.selectAll
const insertOne = sqlMethods.insertOne
const updateOne = sqlMethods.updateOne

function createBurger(burgerName) {
  const newBurger = {
    burger_name: burgerName
  }
  insertOne(newBurger)
}

function updateBurger(burgerId) {
  const devoured = {
    devoured: true
  }
  const burgerId = {
    id: burgerId
  }
  updateOne(devoured, burgerId)
}

//createBurger('barbecue')
selectAll()