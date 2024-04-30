const {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../controllers/userControllers');
const { User } = require('../models');


describe('getUsers', () => {
  it('should return an array of users', async () => {
    // Mock request and response objects
    const req = {};
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    await getUsers(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  }, 20000);

  it('should return a 500 status if an error occurs', async () => {
    // Mock request and response objects
    const req = {};
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    // Mock User.find() to throw an error
    const originalFind = User.find;
    User.find = jest.fn().mockRejectedValue(new Error('Database error'));

    // Call the getUsers function
    await getUsers(req, res);

    // Assert that the response status is 500
    expect(res.status).toHaveBeenCalledWith(500);

    // Restore the original User.find() method
    User.find = originalFind;
  }, 15000);

});


