import { css, html, LitElement } from 'lit';

class TodoItem extends LitElement {
  static get properties() {
    return {
      task: { type: String },
      completed: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        margin-bottom: 10px;
      }

      .todo {
        display: flex;
        align-items: center;
      }

      .todo-text {
        flex: 1;
        margin-left: 10px;
        font-size: 16px;
      }

      .todo-text.completed {
        text-decoration: line-through;
        color: gray;
      }
    `;
  }

  constructor() {
    super();
    this.task = '';
    this.completed = false;
  }

  render() {
    return html`
      <div class="todo">
        <input type="checkbox" .checked=${this.completed} @change=${this._handleCheckboxChange} />
        <div class="todo-text ${this.completed ? 'completed' : ''}">${this.task}</div>
      </div>
    `;
  }

  _handleCheckboxChange(e) {
    this.completed = e.target.checked;
  }
}

customElements.define('todo-item', TodoItem);
