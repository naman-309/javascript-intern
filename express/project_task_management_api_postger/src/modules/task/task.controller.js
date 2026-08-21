import { insertTask, getTasksByUser, getTaskById } from "./task.query.js";

//create  task 
export const createTask = async (req, res) => {

    try {

        const { title, description, status } = req.body
        if (!title) {
            return res.json({ message: "task created sucessfully" })
        }
        const userId = req.user.id

        const task = await insertTask(title, description, status || "pending", userId)
        res.json({
            message: "task created sucessfully",
            task: task
        })
    } catch (error) {

        console.log(error)
    }
}

// get  all task 
export const getAllTasks = async (req, res) => {

    try {

        const userId = req.user.id
        const task = await getTasksByUser(userId)

        res.json({ message: "Task fetched sucessfully", task: task })
    } catch (error) {

        console.log(error)
    }
}

// get task by id 
export const getSingleTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const userId = req.user.id;

        const task = await getTaskById(
            taskId,
            userId
        );

        if (!task) {
            return res.json({
                message: "Task not found"
            });
        }

        res.json({
            message: "Task fetched successfully",
            task: task
        });

    } catch (error) {

        console.log(error);

        res.json({
            message: "Something went wrong"
        });

    }
};

