module.exports = function (sequelize, DataTypes) {
    const Post = sequelize.define("Post",
        {
            content: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            time: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            date: {
                type: DataTypes.STRING,
                allowNull: false
            },
            link: {
                type: DataTypes.STRING,
                allowNull: false
            }
        });

    Post.associate = models => {
        Post.belongsTo(models.Subject);
        Post.belongsTo(models.User);
        Post.belongsToMany(models.User, {
            as: 'attendees',
            through: "user_post"
        })
    };

    return Post;
};
