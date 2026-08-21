import { getUserById, updateUser, deleteUserQuery } from "./user.query.js";

// get  the  profile  
export const getProfile = async (req, res) => {
    try {

        const userId = req.user.id;

        const user = await getUserById(userId);

        if (!user) {
            return res.json({
                message: "User not found"
            });
        }

        res.json({
            message: "User profile",
            user: user
        });

        console.log(user)

    } catch (error) {

        console.log(error);

        res.json({
            message: "Something went wrong"
        });

    }
};

// user update  
export const updateProfile = async (req, res) => {

    try {


        const userId = req.user.id

        const { name, email } = req.body
        if (!name || !email) {
            return res.json({ message: "name and email req" })
        }

        const user = await updateUser(userId, name, email)

        res.json({ message: "profile  updated successfully", user: user })

    } catch (error) {
        console.log(error)
        res.json({ message: "internal server error" })

    }

}

// delete user  

export const deleteUser = async (req, res) => {

    try {
        const userId = req.user.id;

        await deleteUserQuery(userId);

        res.clearCookie("token");

        res.json({
            message: "Profile deleted successfully"
        });
    }
    catch (err) {
        console.log(err)
    }


}

// delte  user  by admin by id 

export const userDeleteByAdmin = async (req, res) => {
    try {
        const userId = req.params.id;

        const deletedUser = await deleteUserQuery(userId);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.json({ message: "User deleted successfully by admin" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};