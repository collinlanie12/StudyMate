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
            },
            time: {
                type: DataTypes.DATE,
                allowNull: false
            }
        });

    Post.associate = models => {
        Post.belongsTo(models.user, {
            foreignKey: 'post_name',
            sourceKey: 'username'
        });
        Post.belongsTo(models.subject);
    };

    return Post;
};
