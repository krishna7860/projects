// Storage Controller
const StorageCtrl = (function() {
  // Public Methods
  return {
    storeItem: function(item) {
      let items;
      // Check If Any Items
      if (localStorage.getItem('items') == null) {
        items = [];
        // Push New Items
        items.push(item);
        // Set To LocalStorage
        localStorage.setItem('items', JSON.stringify(items));
      } else {
        // Getting Previous Data
        items = JSON.parse(localStorage.getItem('items'));

        // Push new item
        items.push(item);

        // Re set Ls
        localStorage.setItem('items', JSON.stringify(items));
      }
      localStorage.getItem('items');
    },
    getItemsFromStorage: function() {
      let items;
      if (localStorage.getItem('items') === null) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem('items'));
      }
      return items;
    },
    updateItemStorage: function(updatedItem) {
      let items = JSON.parse(localStorage.getItem('items'));

      items.forEach(function(item, index) {
        if (updatedItem.id === item.id) {
          items.splice(index, 1, updatedItem);
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    },
    deleteItemFromStorage: function(id) {
      let items = JSON.parse(localStorage.getItem('items'));

      items.forEach(function(item, index) {
        if (id === item.id) {
          items.splice(index, 1);
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    },
    clearItemsFromStorage: function() {
      localStorage.removeItem('items');
    }
  };
})();

// Item Controller
const ItemCtrl = (function() {
  // Item Contrusctor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  //Data Structure / State
  const data = {
    item: StorageCtrl.getItemsFromStorage(),
    currentItem: null,
    totalCalories: 0
  };
  //Public Methods
  return {
    logData: function() {
      return data;
    },
    getItems: function() {
      return data.item;
    },
    addItem: function(name, calories) {
      let ID;
      // create ID
      if (data.item.length > 0) {
        ID = data.item[data.item.length - 1].id + 1;
      } else {
        ID = 0;
      }
      calories = parseInt(calories);
      newItem = new Item(ID, name, calories);

      // Add to item array
      data.item.push(newItem);

      return newItem;
    },
    getItemById: function(id) {
      let found = null;
      data.item.forEach(function(item) {
        if (item.id === id) {
          found = item;
        }
      });
      return found;
    },
    updateItem: function(name, calories) {
      // Turn calories to number
      calories = parseInt(calories);
      let found = null;
      data.item.forEach(function(item) {
        if (item.id === data.currentItem.id) {
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    },
    deleteItem: function(id) {
      // Get ids
      ids = data.item.map(function(item) {
        return item.id;
      });

      // Get the index
      const index = ids.indexOf(id);

      data.item.splice(index, 1);
    },
    clearAllItems: function() {
      data.item = [];
    },
    setCurrentItem: function(item) {
      data.currentItem = item;
    },
    getCurrentItem: function() {
      return data.currentItem;
    },
    getTotalCalories: function() {
      let total = 0;

      // Adding total calories
      data.item.forEach(function(item) {
        total += item.calories;
      });

      // loading calories
      data.totalCalories = total;

      // return total calories
      return data.totalCalories;
    }
  };
})();

// UI Controller
const UICtrl = (function() {
  const UISelectors = {
    itemList: '#item-list',
    listItem: '#item-list li',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    clearBtn: '.clear-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'
  };

  // Public Methods
  return {
    //Adding item to ul
    populateItemList: function(items) {
      let html = '';
      items.forEach(function(item) {
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name} : </strong><em> ${item.calories} Calories </em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`;
      });

      //   Insert
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function() {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      };
    },
    getSelectors: function() {
      return UISelectors;
    },
    addListItem: function(item) {
      // create li item
      document.querySelector(UISelectors.itemList).style.display = 'block';
      const li = document.createElement('li');
      li.classList.add('collection-item');
      li.id = `item-${item.id}`;
      li.innerHTML = `  <strong>${item.name} : </strong><em> ${item.calories} Calories </em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>`;
      //Insert item
      document
        .querySelector(UISelectors.itemList)
        .insertAdjacentElement('beforeend', li);
    },
    updateListItem: function(item) {
      let listItems = document.querySelectorAll(UISelectors.listItem);
      // Turn list to array
      listItems = Array.from(listItems);

      listItems.forEach(function(listItem) {
        const itemId = listItem.getAttribute('id');
        if (itemId === `item-${item.id}`) {
          document.querySelector(
            `#${itemId}`
          ).innerHTML = `  <strong>${item.name} : </strong><em> ${item.calories} Calories </em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>`;
        }
      });
    },
    deleteListItem: function(id) {
      const itemID = `#item-${id}`;
      const item = document.querySelector(itemID);
      item.remove();
    },
    clearInput: function() {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    addItemToForm: function() {
      document.querySelector(
        UISelectors.itemNameInput
      ).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(
        UISelectors.itemCaloriesInput
      ).value = ItemCtrl.getCurrentItem().calories;

      UICtrl.showEditState();
    },
    removeItems: function() {
      let listItems = document.querySelectorAll(UISelectors.listItem);

      // Turn node list into array
      listItems = Array.from(listItems);

      listItems.forEach(function(item) {
        item.remove();
      });
    },
    hideList: function() {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    showTotalCalories: function(totalCalories) {
      document.querySelector(
        UISelectors.totalCalories
      ).textContent = totalCalories;
    },
    clearEditState: function() {
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    showEditState: function() {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    }
  };
})();

// App Controller
const App = (function(ItemCtrl, UICtrl, StorageCtrl) {
  // load event listners
  function loadEventListners() {
    // Get UI selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item events
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener('click', itemAddSubmit);
    // Disable Submit on enetr
    document.addEventListener('keypress', function(e) {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    });
    document
      .querySelector(UISelectors.itemList)
      .addEventListener('click', itemEditClick);
    document
      .querySelector(UISelectors.updateBtn)
      .addEventListener('click', itemUpdateSubmit);
    document
      .querySelector(UISelectors.backBtn)
      .addEventListener('click', backItem);
    document
      .querySelector(UISelectors.deleteBtn)
      .addEventListener('click', itemDeleteSubmit);
    document
      .querySelector(UISelectors.clearBtn)
      .addEventListener('click', clearAllItemsClick);
  }
  // Add item
  const itemAddSubmit = function(e) {
    e.preventDefault();
    // Get form input from UI Controller
    const input = UICtrl.getItemInput();
    //Check form name and calories
    if (input.name !== '' && input.calories !== '') {
      const newItem = ItemCtrl.addItem(input.name, input.calories);

      // Add item to ui list
      UICtrl.addListItem(newItem);

      // get total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      // Add total calories to ui
      UICtrl.showTotalCalories(totalCalories);

      // Store In Local Storage
      StorageCtrl.storeItem(newItem);
      // clear fields
      UICtrl.clearInput();
    }
  };

  // Back to state
  const backItem = function(e) {
    e.preventDefault();
    UICtrl.clearEditState();
  };
  const itemEditClick = function(e) {
    e.preventDefault();
    if (e.target.classList.contains('edit-item')) {
      // Get List Item Id
      const listId = e.target.parentNode.parentNode.id;

      // Break into array
      const listIdArr = listId.split('-');
      // Get Actual ID
      const id = parseInt(listIdArr[1]);

      // Get Item
      const itemToEdit = ItemCtrl.getItemById(id);

      // Set current item
      ItemCtrl.setCurrentItem(itemToEdit);

      // Add Item to form
      UICtrl.addItemToForm();
    }
  };

  const itemUpdateSubmit = function(e) {
    e.preventDefault();
    // Get item input
    const input = UICtrl.getItemInput();

    // Update item
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);
    UICtrl.updateListItem(updatedItem);
    // get total calories
    const totalCalories = ItemCtrl.getTotalCalories();

    // Add total calories to ui
    UICtrl.showTotalCalories(totalCalories);

    // Update Local Storahe
    StorageCtrl.updateItemStorage(updatedItem);
    UICtrl.clearEditState();
  };

  // Item Delete
  const itemDeleteSubmit = function(e) {
    e.preventDefault();
    // get Current item

    const currentItem = ItemCtrl.getCurrentItem();

    // Delete from datastructure
    ItemCtrl.deleteItem(currentItem.id);

    // delete from UI
    UICtrl.deleteListItem(currentItem.id);

    // get total calories
    const totalCalories = ItemCtrl.getTotalCalories();

    // Add total calories to ui
    UICtrl.showTotalCalories(totalCalories);
    //Delete From local Storage
    StorageCtrl.deleteItemFromStorage(currentItem.id);

    UICtrl.clearEditState();
  };
  const clearAllItemsClick = function(e) {
    e.preventDefault();
    // Delete All Items from Data Structure
    ItemCtrl.clearAllItems();

    // Remove From UI
    UICtrl.removeItems();

    // Clear From Local Storage
    StorageCtrl.clearItemsFromStorage();
    // Hide UL
    UICtrl.hideList();

    // get total calories
    const totalCalories = ItemCtrl.getTotalCalories();

    // Add total calories to ui
    UICtrl.showTotalCalories(totalCalories);
  };
  // Public Methods
  return {
    init: function() {
      // Clear Edit State
      UICtrl.clearEditState();
      //   Fetch Item from Data Structure
      const items = ItemCtrl.getItems();
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        //Populate list with items
        UICtrl.populateItemList(items);
      }
      // get total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      // Add total calories to ui
      UICtrl.showTotalCalories(totalCalories);
      //load event listner
      loadEventListners();
      //

      // hide ul
    }
  };
})(ItemCtrl, UICtrl, StorageCtrl);

App.init();
