import Users from "../models/UserModel.js";

export const getUsers = async(req, res) => {
    try {
        const response = await Users.findAll();  

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error});
    }
}
