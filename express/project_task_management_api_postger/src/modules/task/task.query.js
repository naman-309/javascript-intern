import pool from "../../db/db.js";


export const insertTask = async (
    title,
    description,
    status,
    userId) => {

    const result = await pool.query(
        `INSERT INTO tasks
        (title, description, status, user_id)
        VALUES ($1, $2, $3, $4)
        RETURNING *`,
        [title, description, status, userId]
    );

    return result.rows[0];
};


export const getTasksByUser = async (userId) => {
    const result = await pool.query(
        `SELECT * FROM tasks
         WHERE user_id = $1
         ORDER BY created_at DESC`,
        [userId]
    );

    return result.rows;
};

export const getTaskById = async (taskId, userId) => {
    try {
        const result = await pool.query(
            'SELECT * FROM tasks WHERE id = $1 AND user_id = $2',
            [taskId, userId]
        );
        // Returns the task object, or undefined if no match is found
        return result.rows[0];
    } catch (error) {
        console.error('Error fetching task by ID:', error);
        throw new Error('Database query failed');
    }
};


