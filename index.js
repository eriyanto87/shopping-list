function addItems() {
  $("#js-shopping-list-form").submit(function (e) {
    e.preventDefault();
    $("ul").append(
        `<li> <span class="shopping-item"> ${$("#shopping-list-entry").val()} </span> <div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div> </li>`
    );
    deleteItems();
    checkedItems();
  });
}

function deleteItems() {
        $('.shopping-item-delete').on('click', function() {
          this.closest('li').remove();
        });
    }

function checkedItems() {
    $('.shopping-item-toggle').on('click', function () {
        $(this)
          .closest('li')
          .find('.shopping-item')
          .toggleClass('shopping-item__checked');
      })
}


addItems();
deleteItems();
checkedItems();
