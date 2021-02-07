require 'test_helper'

class ColoresControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get colores_index_url
    assert_response :success
  end

  test "should get new" do
    get colores_new_url
    assert_response :success
  end

  test "should get create" do
    get colores_create_url
    assert_response :success
  end

  test "should get show" do
    get colores_show_url
    assert_response :success
  end

  test "should get edit" do
    get colores_edit_url
    assert_response :success
  end

  test "should get update" do
    get colores_update_url
    assert_response :success
  end

  test "should get destroy" do
    get colores_destroy_url
    assert_response :success
  end

end
