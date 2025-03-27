import { FC, ReactElement} from 'react';
import { TaskCounter } from '@/components/taskCounter/taskCounter';
import { Task } from '@/components/taskCounter/task/task';

export const Tasks: FC = (): ReactElement => {
    return <section className='flex flex-row w-full p-4 gap-8'>
        <section className='felx basis-2/3 justify-center'>
            <div className='flex flex-col w-4/5 p-4'>
                <h1 className='text-white front-bold text-2xl mb-8'>
                    Task as on: Saturday, 1 Mar 2025
                </h1>
                <div className='flex justify-around mb-12'>
                    <TaskCounter status="todo" count={12}/>
                    <TaskCounter status="inProgress" count={10}/>
                    <TaskCounter status="completed" count={5}/>
                </div>
                <Task />
            </div>
        </section >
        <section className='felx flex-col w-4/5 p-4 bg-pink-400'>
            Create Task Section
        </section>
        
    </section>
}