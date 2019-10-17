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
      db.Mood.findAll({}).then(function (dbMoods) {
        res.json(dbMoods);
      });
    },
    createMood: function (req, res) {
      const mood = {
        alert: req.body.alert,
        happy: req.body.happy,
        relaxed: req.body.relaxed
      };

      return db.Mood.create(mood).then(() => {
        res.status(200).json({ message: 'Mood created.' });
      });
    },
    deleteMood: function (req, res) {
      db.Mood.destroy({ where: { id: req.params.id } }).then(function (dbMood) {
        res.json(dbMood);
      });
    }
  };
};
