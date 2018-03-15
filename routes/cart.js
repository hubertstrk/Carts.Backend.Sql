const db = require('../data/db')

exports.all = function (req, res) {
  db.execute('SELECT * FROM Cart')
  .then((result) => {
    res.send(result) 
  })
}

exports.add = function (req, res) {
  const now = Date.now()
  db.execute(`INSERT INTO Cart (Title, Shop, CreationDate, IsDeleted) VALUES ('${req.body.title}', '${req.body.shop}', ${now}, 0)`)
  .then((result) => {
    res.send(result) 
  })
}

exports.cart = function (req, res) {
  db.execute(`SELECT * FROM Cart WHERE Id = ${req.params.id}`)
  .then((result) => {
    res.send(result) 
  })
}

exports.delete = function (req, res) {
  db.execute(`DELETE FROM Cart WHERE Id = ${req.params.id}`)
  .then((result) => {
    res.send(result) 
  })
}

exports.update = function (req, res) {
  db.execute(`UPDATE Cart SET Title = '${req.body.title}', Shop = '${req.body.shop}' WHERE Id = ${req.params.id}`)
  .then((result) => {
    res.send(result) 
  })
}

