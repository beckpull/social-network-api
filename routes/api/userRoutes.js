const router = require('express').Router();
const { 
    getUsers, 
    getOneUser, 
    createUser, 
    updateUser, 
    deleteUser, 
    addFriend, 
    removeFriend 
} = require('../../controllers/userControllers.js');

router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);
router.route('/:userId/friends/').post(addFriend).delete(removeFriend);

module.exports = router;


