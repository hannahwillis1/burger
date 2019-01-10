module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("Burger", {
    name: {
      type: DataTypes.STRING
    },
    eaten: {
      type: DataTypes.BOOLEAN
    }
  });
  return burger;
};
