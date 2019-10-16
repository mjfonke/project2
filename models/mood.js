module.exports = function (sequelize, DataTypes) {
  const Mood = sequelize.define('Mood', {
    alert: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    happy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    relaxed: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: true
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
