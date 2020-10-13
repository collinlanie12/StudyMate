module.exports = function (sequelize, DataTypes) {
    const Subject = sequelize.define("Subject",
        {
            subject: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }
    );

    Subject.associate = models => {
        Subject.belongsToMany(models.User, {
            through: "user_subject"
        });
        Subject.hasOne(models.Post);
        Subject.hasMany(models.Notifications);
    };
    return Subject;
};
