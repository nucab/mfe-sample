import faker from 'faker';

const mount = (el) => {
  let todolist = '';

  for (let i = 0; i < 5; i++) {
    const todo = faker.company.companyName();
  
    todolist += `item ${i} - ${todo}<br />`;
  }
  
  el.innerHTML = todolist;
}

export { mount }
