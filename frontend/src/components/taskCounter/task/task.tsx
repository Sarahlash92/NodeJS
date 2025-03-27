import {FC, ReactElement} from 'react';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Badge } from "@/components/ui/badge"
  import { Switch } from "@/components/ui/switch"
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

  

export const Task: FC = (): ReactElement => {
    return (
        <Card>
            <CardHeader className='flex flex-row justify-between'>
                <CardTitle className='basis-2/3 leading-8'>Title of Task</CardTitle>
                <div>
                    <Badge className='mr-2' variant="outline">1 mar, 2025</Badge> 
                    <Badge className= "bg-sky-800" variant="outline">normal</Badge>   
                </div>
                
            </CardHeader>
            <CardContent>
                <p>Descripton of the task</p>
            </CardContent>
            <CardFooter className='flex flex-row justify-between'>
                <div className='flex flex-row item'>
                    <Switch id="in-progress" />
                    <Label className='ml-4' htmlFor="in-progress">
                        In Progress
                    </Label>
                </div>
                <Button>Completed</Button>
            </CardFooter>
        </Card>
  )
  
};