import { LitElement, html, css } from 'lit';
import './TodoList.js'

export class TodoApp extends LitElement {
  static properties = {
    todos: { type: Array },
    newTodo: { type: String }
  }

  constructor() {
    super();
    this.todos = [];
    this.newTodo = '';
  }

  static styles = css`
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    form {
      display: flex;
      margin-bottom: 1rem;
    }

    input[type="text"] {
      flex: 1;
      padding: 0.5rem;
      border: none;
      border-bottom: 2px solid #ccc;
      margin-right: 1rem;
      font-size: 1rem;
    }

    button[type="submit"] {
      padding: 0.5rem 1rem;
      background-color: #2ecc71;
      color: white;
      border: none;
      font-size: 1rem;
      cursor: pointer;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
  `;

  render() {
    return html`
      <h1>Todo App</h1>

      <form @submit="${this.addTodo}">
        <input type="text" placeholder="New Todo" .value="${this.newTodo}" @input="${this.updateNewTodo}">
        <button type="submit">Add Todo</button>
      </form>
      <todo-list .todos=${this.todos}></todo-list>
    `;
  }

  updateNewTodo(event) {
    this.newTodo = event.target.value;
  }

  addTodo(event) {
    event.preventDefault();
    this.todos = [...this.todos, {task: this.newTodo, completed: false}];
    this.newTodo = '';
  }
}
