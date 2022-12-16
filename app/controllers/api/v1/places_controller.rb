class Api::V1::PlacesController < ApplicationController

  def index
    places = search_filter(params["search_term"]).map do |place|
        {
        name: place.name,
        city: place.city,
        address: place.address,
        average: place.internet_speeds.first.average,
        download_speed: place.internet_speeds.first.download_speed,
        download_units: place.internet_speeds.first.download_units




     }
   end
      render json: places


  end

  def search_filter(search_term)
      query = search_term
      if(search_term.empty?)
        Place.all
      else
      Place.where("name ILIKE :search OR city ILIKE :search", search:"%#{query}%")
      end

  end
end
