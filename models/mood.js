module.exports = function (sequelize, DataTypes) {
  const Mood = sequelize.define('Mood', {
    alert: DataTypes.INTEGER,
    happy: DataTypes.INTEGER,
    relaxed: DataTypes.INTEGER
  });

  Mood.associate = function (models) {
    Mood.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Mood;
};
