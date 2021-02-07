class Color < ApplicationRecord
  self.per_page = 9

  validates :name , length: { minimum: 3, maximum: 255} , presence: true
  validates :color , format: { with: /\A#[a-fA-F\d]+\z/ , message: "Invalid color format"} , length: { minimum: 4, maximum: 7},  presence: true
  validates :pantone, format: { with: /\A[\d-]+\z/ , message: "Invalid Pantone color format"} , presence: true
  validates :year , numericality: { only_integer: true, greater_than: 0} , presence: true

end
