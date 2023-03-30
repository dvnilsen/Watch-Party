const Post = require('../../models/post')

module.exports = {
    getAllPosts,
    create,
    deletePost
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

async function deletePost(req, res) {
    try {
        const postId = req.params.postId;
        const deletedPost = await Post.findOneAndDelete({_id: postId, user: req.user._id});
        if (!deletedPost) {
            return res.status(404).json({message: 'Post not found or you are not authorized to delete it.'});
        }
        res.json(deletedPost);
    } catch (err) {
        res.status(400).json(err);
    }
}