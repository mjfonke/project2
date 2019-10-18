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
        console.log('example worked');
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
      console.log('something: ' + JSON.stringify(req.body));
      // console.log('user:', req.user);

      const newRecord = {
        alert: req.body.alert,
        happy: req.body.happy,
        relaxed: req.body.relaxed,
        UserId: req.user.id
      };

      db.Mood.create(newRecord).then(function (dbMood) {
        console.log('OK');
        res.json(dbMood);
        console.log('something else: ' + res.json(dbMood));
      });
    },
    deleteMood: function (req, res) {
      db.Mood.destroy({ where: { id: req.params.id } }).then(function (dbMood) {
        res.json(dbMood);
      });
    }
  };
};
