json.array!(@reservations) do |reservation|
  json.extract! reservation, :id, :city, :arrival_date
  json.url reservation_url(reservation, format: :json)
end
