module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_tutor: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    timezone: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_bio: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });

  User.prototype.comparePassword = function (challenge) {
    return this.password === challenge;
  }

  User.associate = models => {
    User.belongsToMany(models.Subject, {
      through: "user_subject"
    });
    User.hasMany(models.Post);
    User.belongsToMany(models.Post, {
      through: "user_post"
    });
    User.belongsToMany(models.Notifications, {
      through: "user_notifications"
    });
  }

  return User;
};


