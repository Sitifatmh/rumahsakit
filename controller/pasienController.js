const Pasien = require("../model/Pasien")

module.exports = {
  index: function(req, res) {
    Pasien.get(req.con, function(err, rows) {
      res.render("pasien/index", { data: rows })
    })
  },

  create: function(req, res) {
    res.render("pasien/create")
  },

  store: function(req, res) {
    Pasien.create(req.con, req.body, function(err) {
      res.redirect("/pasien")
    })
  },

  edit: function(req, res) {
  Pasien.getById(req.con, req.params.id, function(err, rows) {
      res.render("pasien/edit", { data: rows[0] })
    })
  },

  update: function(req, res) {
    Pasien.update(req.con, req.body, req.params.id, function(err) {
      res.redirect("/pasien")
    })
  },

  destroy: function(req, res) {
    Pasien.destroy(req.con, req.params.id, function(err) {
      res.redirect("/pasien")
    })
  }
}
