import { ITask } from '@/types/task.interface';
import { ITaskCounter } from '@/types/taskCounter';
import {FC, ReactElement } from 'react';

export const TaskCounter: FC<ITaskCounter> = ( props ):ReactElement => {
    const {status, count } = props;
    return (
    <div className= "flex flex-col items-center justify-center">
    <div className= {`p-6 border-solid border-4 rounded-full mb-4
        ${status === "todo" && "border-red-500"}
        ${status === "inProgress" && "border-green-500"}
        ${status === "completed" && "border-blue-500"}`}>
            <div className="leading-10 text-3xl min-w-10 min-h-10 text-center justify-center text-white">{count}</div>
        </div>
        <div className="text-white text-xl text-center">
            {status === "todo" && "Todo"}
            {status === "inProgress" && "in Progress"}
            {status === "completed" && "completed"}
        </div>
    </div>
    );
}