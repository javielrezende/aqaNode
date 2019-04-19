import { User } from "../models";

//----------------------------------------------------------------------
// Forma 1
/* async function findById(id) {
    try {
      const user = await User.findByPk(id)
      return user
    } catch (error) {
      res.status(404).send({ message: "User not found", error: err });    
    }
}

module.exports = {
    findById
} */
// Fim forma 1
//----------------------------------------------------------------------

class UserService {
    static async findAll() {
        try {
            const user = await User.findAll();
          } catch (error) {
            return res.status(404).send({ error: "User not found" });
          }
    }

  static async findById(id) {
    try {
      const user = await User.findByPk(id);

      if(!user)
        throw new Error('User not found')
      
      return user
    } catch (error) {
        throw new Error('User not found')
    }
  }

  static async create(body) {
    try {
      const user = await User.create(body);
      //console.log(body)

      if(!user)
        throw new Error('Do not was possible create the user')
      
      return user
    } catch (error) {
        throw new Error('Do not was possible create the user')
    }
  }
}
module.exports = UserService;