import { checkSchema } from "express-validator";

export const createTaskValidator = checkSchema({
    title: {
        in:["body"], //query? 
        notEmpty: true,
        errorMessage: "title is required",
        isString: true,
        isLength: {
            options: {
                max:100,
                min: 10,
            },
            errorMessage: "Title should be 100 chars"
        },
        trim: true,
    },
    description: {
        in: ["body"],
        notEmpty: true,
        isString: true,
        trim: true,
    },
    status: {
        in: ["body"],
        notEmpty: true,
        isIn: {
            options:[["todo", "inProgress", "completed"]]
        },
    },
    priority: {
        in: ["body"],
        notEmpty: true,
        isIn: {
            options:[["low", "normal", "high"]]
        },
    },
    dueDate: {
        in: ["body"],
        notEmpty: true,
        isISO8601: true,
    },
});