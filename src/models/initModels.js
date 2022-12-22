const Users = require('./users.models')
const RecoveryPasswords = require('./recoveryPasswords.models')
const Posts = require('./posts.models')
const Likes = require('./likes.models')
const Comments = require('./comments.models')
const Follows = require('./follows.models')

const initModels = () => {
    //? FK = RecoveryPasswords
    Users.hasMany(RecoveryPasswords)
    RecoveryPasswords.belongsTo(Users)

    //? Users - Posts
    Users.hasMany(Posts)
    Posts.belongsTo(Users)

    //? Users - Likes
    Users.hasMany(Likes)
    Likes.belongsTo(Users)

    //? Posts - Likes 
    Posts.hasMany(Likes)
    Likes.belongsTo(Posts)

    //users-folow (following)
    Users.hasMany(Follows)
    Follows.belongsTo(Users,{
        as:"following",
        foreignKey:"userId2"
    }) 
    Follows.belongsTo(Users, {
        as: 'followers',
        foreignKey: 'userId'
    })


}

module.exports = initModels