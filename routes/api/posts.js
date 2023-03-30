const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /posts
router.get('/', ensureLoggedIn, postsCtrl.getAllPosts);

// POST /posts
router.post('/', ensureLoggedIn, postsCtrl.create);

router.delete('/:postId', ensureLoggedIn, postsCtrl.deletePost);

module.exports = router;