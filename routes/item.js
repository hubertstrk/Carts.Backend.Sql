const db = require('../data/db')

exports.all = function (req, res) {
  db.execute(`SELECT * FROM CartItem WHERE CartId = ${req.params.id}`)
  .then((result) => {
    res.send(result) 
  })
}

exports.toggle = function (req, res) {
  db.execute(`UPDATE CartItem SET Active = '${!req.params.active}' WHERE Id = ${req.params.id}`)
  .then((result) => {
    res.send(result) 
  })
}

exports.delete = function (req, res) {
  db.execute(`DELETE From CartItem WHERE Id = ${req.params.id}`)
  .then((result) => {
    res.send(result) 
  })
}
