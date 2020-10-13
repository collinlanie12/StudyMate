module.exports = function (sequelize, DataTypes) {
  const Notifications = sequelize.define("Notifications",
    {
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false
      },
      atTime: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });

  Notifications.associate = models => {
    Notifications.belongsTo(models.Subject);
  };

  return Notifications;
};
