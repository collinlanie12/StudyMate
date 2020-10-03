module.exports = function (sequelize, DataTypes) {
    const Post = sequelize.define("post",
        {
            content: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            }
        });

    Post.associate = models => {
        Post.belongsTo(models.User);
        Post.belongsTo(models.Subject);
    };

    return Post;
};
