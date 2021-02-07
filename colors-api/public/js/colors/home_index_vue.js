
var home_color_data = {
  page: 1,
  colors: [

  ],
  edit_color: {id: 4000 ,"color": "#aaaccc", "name": "Dummy Edit", "pantone": "999-999", "year": 400},
  b_show_edit_form: false,
  b_show_add_form: false
};

var home_actions = {
  next_page: function () {
    if (home_color_data.colors.length == 9) {
      home_color_data.page += 1;
      home_actions.getPage(home_color_data.page)
    }
  },

  prev_page: function () {
    if (home_color_data.page > 1) {
      home_color_data.page -= 1;
      home_actions.getPage(home_color_data.page)
    }
  },

  refresh_page: function () {
    home_actions.getPage(home_color_data.page)
  },

  getPage: function (page_number) {
    ColorAPI.getColors({
      page: page_number,
      success: function (response) {
        console.log("Data Success!")
        home_color_data.colors = response;
      },
      error: function (response) {
        //alert("THERE WAS AN ERROR");
      },
    })
  },

  delete: function (color_id) {
    ColorAPI.deleteColor(color_id, function () {
      home_actions.refresh_page();
    })
  },

}


Vue.component('color-card-item', {
  props: ['color'],
  template: `<div class="col-md-4"><div class="color-card" v-bind:style="{backgroundColor: color.color}">` +
    `<div class="color-year">{{color.year}}</div>` +
    '<div class="color-middle">' +
      `<div class="color-name">{{color.name}}</div>` +
      `<div class="color-hex">{{color.color}}</div>` +
      `<div class="color-actions">
        <a @click="cardEdit(color.id)" class="btn btn-primary"><i class="fas fa-edit"></i></a>
        <a @click="cardDelete(color.id)" class="btn btn-danger"><i class="fas fa-trash"></i></a>

      </div>` +
    '</div>' +
    `<div class="color-pantone">{{color.pantone}}</div>` +
    '</div></div>',
  methods: {
    cardDelete(color_id) {
      this.$parent.$options.methods.click_button_delete(color_id);
    },
    cardEdit(color_id) {
      this.$parent.$options.methods.click_button_edit(color_id);
    }
  }
})


var app = new Vue({
  el: '#app',
  data: home_color_data,
  methods: {
    click_button_prev: function () {
      home_actions.prev_page();
    },
    click_button_next: function () {
      home_actions.next_page();
    },
    click_button_delete: function (color_id) {
      var txt;
      var r = confirm("Do you want to delete this item?");
      if (r == true) {
        console.log('Deleting id:' + color_id);
        home_actions.delete(color_id);
      } else {
      }
    },
    click_button_add_color: function () {
      home_color_data.b_show_add_form = true;
      $("#add-color-form").dialog({
        appendTo: '#add-color-dialog',
        title: "Add Color",
        minHeight: 300,
        open: function () {
          $('.ui-dialog').css("top","200px");
        }
      });
    },
    click_button_save_add_form: function (e) {
      e.preventDefault();

      var serialized_form = $("#add-color-form").serialize();

      ColorAPI.createColor(serialized_form, function () {
          alert("CREATED NEW COLOR!");
          home_actions.refresh_page();
          $( "#add-color-form" ).dialog( "close" );
      });

      return false;
    },
    
    click_button_edit: function (color_id) {
      home_color_data.b_show_edit_form = true;
      $("#edit-color-form").dialog({
        appendTo: '#edit-color-dialog',
        title: "Edit Color",
        minHeight: 300,
        open: function () {
              $('.ui-dialog').css("top","200px");
        }

      });

      var result = home_color_data.colors.find( color => color.id == color_id)
      console.log(result);
      home_color_data.edit_color = result

    },
    click_button_save_form: function (e) {
      e.preventDefault();

      var color_id = $("#edit-color-form input[name=id]").val();
      var serialized_form = $("#edit-color-form").serialize();

      ColorAPI.updateColor(color_id, serialized_form, function () {
          home_actions.refresh_page();
          $( "#edit-color-form" ).dialog( "close" );
      });

      return false;
    }
  },
  mounted: function () {
    home_actions.getPage(1);
  }
});



$(document).ready(function () {

});
