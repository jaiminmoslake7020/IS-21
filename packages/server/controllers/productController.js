module.exports = {
  async view (req, res) {
    res.setHeader('Content-Type', 'application/json')
    return res.status(200).send(true)
  },

  async list (req, res) {
    return res.status(204).send("delete")
  },

  async delete (req, res) {
    return res.status(204).send("delete")
  },

  async create (req, res) {
    return res.status(204).send("delete")
  },

  async update (req, res) {
    return res.status(204).send("delete")
  }

}
