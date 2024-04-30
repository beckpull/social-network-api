const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
    updateReaction
} = require('../../controllers/thoughtControllers');

router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
router.route('/:thoughtId/reactions').post(addReaction).delete(removeReaction);
router.route('/:thoughtId/reactions/:reactionId').put(updateReaction);

module.exports = router;
