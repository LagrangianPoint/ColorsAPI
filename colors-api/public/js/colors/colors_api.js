var ColorAPI = {
  getColors: function (options) {
    $.ajax({
      url: '/colores?page=' + options.page,
      method: 'GET',
      dataType: 'json',
      headers: Session.auth_headers(),
      success: function (data) {
        options.success(data);
      },
      error: function (error) {
        options.error(error);
      }
    });
  },

  deleteColor: function (color_id, callback) {
    $.ajax({
      url: '/colores/' + color_id,
      method: 'DELETE',
      dataType: 'json',
      headers: Session.auth_headers(),
      success: function (data) {
        callback();
      },
      error: function (error) {
        // error
      }
    });
  },

  updateColor: function (color_id, serialized_form , callback) {
    $.ajax({
      url: '/colores/' + color_id,
      method: 'PUT',
      data: serialized_form,
      dataType: 'json',
      headers: Session.auth_headers(),
      success: function (data) {
        callback();
      },
      error: function (error) {
        // error
      }
    });
  },

  createColor: function (serialized_form , callback) {
    $.ajax({
      url: '/colores' ,
      method: 'POST',
      data: serialized_form,
      dataType: 'json',
      headers: Session.auth_headers(),
      success: function (data) {
        callback();
      },
      error: function (error) {
        // error
      }
    });
  }

};
