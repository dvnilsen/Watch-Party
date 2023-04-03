const Post = require('../../models/post')
const Movie = require("../../models/movie");

module.exports = {
    getAllPosts,
    create,
    deletePost,
    updatePost
}

async function getAllPosts(req, res) {
    try {
        req.body.user = req.user._id
        const posts = await Post.find({user: req.user._id}).populate("movie");
        res.json(posts);
    } catch (err) {
        res.status(400).json(err)
    }
}

async function create(req, res) {
    console.log(req.body);
    const movie = await Movie.findOne({imdbID: req.body.movie});
    req.body.movie = movie;
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

async function updatePost(req, res) {
    try {
        const postId = req.params.postId;
        const updatedPost = await Post.findOneAndUpdate({_id: postId, user: req.user._id}, req.body, {new: true});
        if (!updatedPost) {
            return res.status(404).json({message: 'Post not found or you are not authorized to update it.'});
        }
        res.json(updatedPost);
    } catch (err) {
        res.status(400).json(err);
    }
}