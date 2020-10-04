module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("user", {
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
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_student: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_tutor: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    timezone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_bio: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  User.prototype.comparePassword = function (challenge) {
    return this.password === challenge;
  }

  User.associate = models => {
    User.belongsToMany(models.subject, {
      through: "user_subject"
    });
    User.hasOne(models.post, { foreignKey: 'post_name', sourceKey: 'username' });
  }

  return User;
};


