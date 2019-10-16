module.exports = function (db) {
  return {
    // Get all examples
    getExamples: function (req, res) {
      db.Example.findAll({}).then(function (dbExamples) {
        res.json(dbExamples);
      });
    },
    // Create a new example
    createExample: function (req, res) {
      db.Example.create(req.body).then(function (dbExample) {
        res.json(dbExample);
      });
    },
    // Delete an example by id
    deleteExample: function (req, res) {
      db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
        res.json(dbExample);
      });
    },
    getMoods: function (req, res) {
      db.Mood.findAll({}).then(function (db) {
        res.json(db);
      });
    },
    createMood: function (req, res) {
      db.Mood.create(req.body).then(function (db) {
        res.json(db);
      });
    },
    deleteMood: function (req, res) {
      db.Mood.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
        res.json(dbExample);
      });
    }
  };
};
