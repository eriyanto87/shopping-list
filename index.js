function addItems() {
  $("#js-shopping-list-form").submit(function (e) {
    e.preventDefault();
    $("ul").append(
        `<li> <span class="shopping-item"> ${$("#shopping-list-entry").val()} </span> <div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div> </li>`
    );
  });
}

function deleteItems() {
    $('.shopping-item-delete').on('click', 'li', function(e) {
        e.stopPropagation()
        this.closest('li').remove();
      });
   /* $('.shopping-item-delete').click(function(e) {
        e.stopPropagation()
        console.log(this.closest('li'))
        this.closest('li').remove()
    })*/
}

addItems();
deleteItems();
