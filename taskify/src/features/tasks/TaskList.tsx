import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { toggleTask, deleteTask } from './taskSlice';
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  return (
    <List>
      {tasks.map(task => (
        <ListItem
          key={task.id}
          secondaryAction={
            <IconButton edge="end" onClick={() => dispatch(deleteTask(task.id))}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <Checkbox
            checked={task.completed}
            onChange={() => dispatch(toggleTask(task.id))}
          />
          <ListItemText
            primary={task.title}
            sx={{
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
    