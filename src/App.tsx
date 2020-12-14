import React from 'react';
import { TodoList } from './components/todo/todoList';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <TodoList />
    </Card>
  );
}

export default App;
