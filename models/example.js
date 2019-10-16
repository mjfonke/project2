module.exports = function (sequelize, DataTypes) {
  const Example = sequelize.define('Example', {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
<<<<<<< HEAD
  return Example;
=======

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
>>>>>>> 04d36789d6661789ef87e56afdbb455b6b5044dc
};
