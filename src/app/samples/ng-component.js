import _ from 'underscore';
//import functions from './functions';
const COMPS = [];

function init() {
  console.log(COMPS);
  COMPS.forEach(comp => {
    document.querySelectorAll(comp.selector).forEach(node => {
      let inst = new comp.class();
      node.innerHTML = comp.template(inst);
    });
  });
}

function Component(config) {
  config.template = _.template(config.template);
  return function(target) {
    config.class = target;
    COMPS.push(config);
  };
}

@Component({
  selector: 'my-app',
  template: `<h1>Todo list</h1>
  <ul>
  <% todos.forEach(todo => { %>
    <li style='text-decoration: <%=todo.done ? "line-through" :"none" %>'><%= todo.text %></li>
  <% } ); %>
  </ul>
  `
})
class TodoListComponent {
  todos = [];
  constructor() {
    this.todos.push({ text: 'buy milk', done: true });
    this.todos.push({ text: 'pick up cat', done: false });
  }
  handleClick(e) {
    console.log(e.target);
  }
}

init();

// <% todos.forEach(todo => { %>
//   <li style='text-decoration: <%=todo.done ? "line-through" :"none" %>'>
//     <%= todo.text %>
//   </li>
// <% }); %>

// <% todos.forEach(todo => { %>
//   <li><%= todo.text %></li>
// <% } ) %>
