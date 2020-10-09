module.exports = function (sequelize, DataTypes) {
    const user_post = sequelize.define("user_post",
        {
            is_calendar: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                default: 0
            }
        }
    );

    return user_post;
};
