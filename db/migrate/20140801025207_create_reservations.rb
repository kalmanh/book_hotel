class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.string :city
      t.date :arrival_date

      t.timestamps
    end
  end
end
