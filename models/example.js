module.exports = function (sequelize, DataTypes) {
  const Mood = sequelize.define('Mood', {
    alert: DataTypes.INTEGER,
    happy: DataTypes.INTEGER,
    relaxed: DataTypes.INTEGER
  });

  Mood.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Mood.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Mood;
};
