class Question < ApplicationRecord
  has_and_belongs_to_many :surveys

  has_many :answers, dependent: :destroy
  accepts_nested_attributes_for :answers

  validates :text, presence: true
end
