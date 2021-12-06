const todos = [
  {
    id: 1,
    title: "Go to school",
    completed: true
  },
  {
    id: 2,
    title: "Go to museum",
    completed: true
  },
  {
    id: 3,
    title: "Go to shopping",
    completed: false
  }
];

for(let i = 0; i < todos.length; i ++) {
  let todo = todos[i];
  // console.log(todo)
  if(todo.completed == true) {
    console.log(i, todos[i].title);
  }
}

// 値を取得するには、オブジェクト[ プロパティ ]
for(let i in todos) {
  let todo = todos[i];
  if(todo.completed == true) {
    console.log(i, todos[i].title);
  }
};

for(let todo of todos) {
  if(todo.completed == true) {
    console.log(todo.title);
  }
};
