import { Todo } from '../../@types/todo.type'
import PropTypes from 'prop-types'
import { TodoTypes } from '../PropTypes/todo.proptype'
import styles from './taskList.module.scss'

interface taskListProps {
  doneTaskList?: boolean
  todos: Todo[]
  handleDoneTodo: (id: string, done: boolean) => void
  startEditTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

export default function TaskList(props: taskListProps) {
  const { doneTaskList, todos, handleDoneTodo, startEditTodo, deleteTodo } = props

  return (
    <div className='mb-2'>
      <h2 className={styles.title}>{doneTaskList ? 'Hoàn thành' : 'Chưa hoàn thành'}</h2>
      <div className={styles.tasks}>
        {todos.map((todo) => (
          <div className={styles.task} key={todo.id}>
            <input
              type='checkbox'
              className={styles.taskCheckbox}
              checked={todo.done}
              onChange={(event) => handleDoneTodo(todo.id, event.target.checked)}
            />
            <span className={`${styles.taskName} ${todo.done ? styles.taskNameDone : ''}`}>{todo.name}</span>
            <div className={styles.taskActions}>
              <button className={styles.taskBtn} onClick={() => startEditTodo(todo.id)}>
                🖊️
              </button>
              <button className={styles.taskBtn} onClick={() => deleteTodo(todo.id)}>
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

TaskList.propTypes = {
  doneTaskList: PropTypes.bool,
  todos: PropTypes.arrayOf(TodoTypes),
  handleDoneTodo: PropTypes.func,
  startEditTodo: PropTypes.func,
  deleteTodo: PropTypes.func
}
