import { User } from "../models";
import UserService from "../services/userService";

export const findAll = async (req, res) => {
  try {
    const user = await User.findAll();
    return res.send({ user })
  } catch (error) {
    return res.status(404).send({ error: "User not found" })
  }
}

export const findById = async (req, res) => {
  try {
    const user = await UserService.findById(req.params.id)
    return res.status(200).send({ user })
  } catch (error) {
    return res.status(404).send({ error: error.message })
  }
}

export const create = async (req, res) => {
  try {
    const user = await UserService.create(req.body)
      console.log(req.body)
    return res.status(200).send({ user })
  } catch (error) {
    return res.status(404).send({ error: error.message })
  }
}
