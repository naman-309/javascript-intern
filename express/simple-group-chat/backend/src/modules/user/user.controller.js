// Admin user-list and delete-user controllers will be added here.


import { findAllUsers, deleteUserById } from "./user.model.js";

// Get all users controller
export const getAllUsers = async (req, res) => {
    try {
        // 1. Fetch all users from your database helper
        const users = await findAllUsers();

        // 2. Return the array and total count directly
        return res.status(200).json({
            message: "Users fetched successfully",
            totalUsers: users.length,
            users
        });
    } catch (error) {
        console.log("Get all users error: ", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};


// Delete user by ID controller 

export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        console.log("User ID to delete: ", userId);
        // Logged-in admin cannot delete themselves
        if (String(userId) === String(req.user.id)) {
            return res.json({
                message: "Admin cannot delete their own account"
            });
        }

        const deletedUser = await deleteUserById(userId);

        if (!deletedUser) {
            return res.json({
                message: "User not found"
            });
        }

        return res.json({
            message: "User deleted successfully",
            user: deletedUser
        });

    } catch (error) {
        console.log(error);

        return res.json({
            message: "Internal server error"
        });
    }
};
