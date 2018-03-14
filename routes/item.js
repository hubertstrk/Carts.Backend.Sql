const db = require('../data/db')

exports.all = function (req, res) {
  db.execute(`SELECT * FROM CartItem WHERE CartId = ${req.params.id}`)
  .then((result) => {
    res.send(result) 
  })
}

exports.setState = function (req, res) {
  db.execute(`UPDATE CartItem SET IsActive = '${req.params.active}' WHERE Id = ${req.params.id}`)
  .then(() => {
    res.send()
  })

}

exports.delete = function (req, res) {
  db.execute(`UPDATE CartItem SET IsDeleted = 'true' WHERE Id = ${req.params.id}`)
  .then((result) => {
    res.send(result) 
  })
}
