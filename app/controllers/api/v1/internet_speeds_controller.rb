class Api::V1::InternetSpeedsController < ApplicationController
  
    def create


      place = Place.create!(
        name: params[:place_name],
        city: params[:place_city],
        address: params[:place_address]
        )
      speed = InternetSpeed.create!(
        place_id: place.id,
        download_units: params[:place_download_units],
        download_speed: params[:place_download_speed],
        average: params[:place_average]


        )

        render(json: { }, status: :created)  
    end


end
