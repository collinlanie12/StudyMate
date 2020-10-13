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
    // Notifications.belongsToMany(models.User, {
    //   through: "user_notifications"
    // });
    Notifications.belongsTo(models.Subject);
  };

  return Notifications;
};
