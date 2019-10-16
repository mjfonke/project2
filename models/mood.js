module.exports = function (sequelize, DataTypes) {
  const Mood = sequelize.define('Mood', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
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

  // Mood.prototype.toJSON = function () {
  //   const values = Object.assign({}, this.get());
  //   return values;
  // };

  Mood.associate = function (models) {
    Mood.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Mood;
};
