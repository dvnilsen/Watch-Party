const Post = require('../../models/post')

module.exports = {
    getAllPosts,
    create
}

async function getAllPosts(req, res) {
    try {
        req.body.user = req.user._id
        const posts = await Post.find({user: req.user._id});
        res.json(posts);
    } catch (err) {
        res.status(400).json(err)
    }
    
}

async function create(req, res) {
    try {
        req.body.user = req.user._id
        const newPost = await Post.create(req.body);
        res.json(newPost);
    } catch (err) {
        res.status(400).json(err)
    }
}