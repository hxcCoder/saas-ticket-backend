import { UsersRepository } from './users.repository';
import { UpdateUserDTO } from './users.types';

export const UsersService = {
  async getProfile(userId: string) {
    const user = await UsersRepository.findById(userId);
    if (!user) throw new Error('User not found');
    return user;
  },

  async getAllUsers(requestingRole: string) {
    if (requestingRole !== 'ADMIN') {
      throw new Error('Forbidden');
    }

    return UsersRepository.findAll();
  },

  async updateProfile(userId: string, data: UpdateUserDTO) {
    return UsersRepository.update(userId, data);
  }
};
