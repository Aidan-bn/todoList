import { oneItem } from './declaration';
import preview from './preview.js';

const remove = (id) => {
  //const containerDiv = document.getElementById('todoSection');
  let lists = [];
  let contentDiv = '';
  lists = JSON.parse(localStorage.getItem('ListItems'));
  lists.splice(id, 1);

  const updateIndex = lists.filter((oneItem, index) => {
    if(oneItem.index !== index){
      oneItem.index = index;
    }
  })
}