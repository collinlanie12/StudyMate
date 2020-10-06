module.exports = function (sequelize, DataTypes) {
    const Subject = sequelize.define("subject",
        {
            subject: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }
    );

    Subject.associate = models => {
        Subject.belongsToMany(models.user, {
            through: "user_subject"
        });
        Subject.hasOne(models.post);
    };
    return Subject;
};
