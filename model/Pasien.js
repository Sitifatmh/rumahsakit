module.exports = {
  get: function(con, callback) {
    con.query("SELECT * FROM pasien", callback)
  },

  getById: function(con, id, callback) {
    con.query(`SELECT * FROM pasien WHERE id = ${id}`, callback)
  },

  create: function(con, data, callback) {
    con.query(
      `INSERT INTO pasien SET 
      tanggal = '${data.tanggal}',
      name = '${data.name}',
      address = '${data.address}',
      diagnosa = '${data.diagnosa}', 
      obat = '${data.obat}',
      dokter = '${data.dokter}',
      kamar = '${data.kamar}'`, 
      callback
    )
  },

  update: function(con, data, id, callback) {
    con.query(
      `UPDATE pasien SET 
      tanggal = '${data.tanggal}', 
      name = '${data.name}', 
      address = '${data.address}' ,
      diagnosa = '${data.diagnosa}', 
      obat = '${data.obat}', 
      dokter = '${data.dokter}', 
      kamar = '${data.kamar}'
      WHERE id = ${id}`,
      callback
    )
  },

  destroy: function(con, id, callback) {
    con.query(`DELETE FROM pasien WHERE id = ${id}`, callback)
    
  }
}
