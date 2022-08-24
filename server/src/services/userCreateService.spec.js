const UserCreateService = require('./userCreateService');
const UserRepositoryInMemory = require('../repositories/UserRepositoryInMemory');
const AppError = require('../utils/AppError');

describe('UserCreateService', () => {
  let userRepositoryInMemory = null;
  let userCreateService = null;

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    userCreateService = new UserCreateService(userRepositoryInMemory);
  });

  it('should be created a user', async () => {
    const user = {
      name: 'User test',
      email: 'user@gmail.com',
      password: '123456',
    };

    const userCreated = await userCreateService.execute(user);

    expect(userCreated).toHaveProperty('id');
  });

  it('should not create a user with repeated e-mail', async () => {
    const user1 = {
      name: 'User test',
      email: 'user@gmail.com',
      password: '123456',
    };
    const user2 = {
      name: 'User test',
      email: 'user@gmail.com',
      password: '123456',
    };

    await userCreateService.execute(user1);
    await expect(userCreateService.execute(user2)).rejects.toEqual(
      new AppError('Este e-mail já está em uso'),
    );
  });
});
