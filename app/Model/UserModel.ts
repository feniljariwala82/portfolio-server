import Encryption from '@ioc:Adonis/Core/Encryption'
import User from 'App/Schema/UsersSchema'

type UserCreateType = {
  email: string
  firstName: string
  lastName: string
  password: string
}

class UserModel {
  /**
   * @description create user
   * @param user user data
   * @returns Promise
   */
  public static async create(user: UserCreateType) {
    // checking user availability
    try {
      let resultedUser = await User.findOne({ email: user.email })
      if (resultedUser) {
        return Promise.reject('User with this email id already exists')
      }
    } catch (error) {
      console.log(error)
      return Promise.reject(error.message)
    }

    // creating the user
    try {
      await User.create({
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        password: Encryption.encrypt(user.password),
      })
      return Promise.resolve('User created')
    } catch (error) {
      console.log(error)
      return Promise.reject(error.message)
    }
  }
}

export default UserModel
