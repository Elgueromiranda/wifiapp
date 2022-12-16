import React from 'react'
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


export default function Placeslist(){
	const [search_term, setSearch_term] = useState("")
	const [loading, setLoading] = useState(true)
	const loadingSection = <div> Loading . . .</div>
	const [places, setPlaces] = useState([])



	useEffect(() => {

		const url = `/api/places?search_term=${search_term}`

		fetch(url)

      .then(response => response.json())

      .then((data) => {
          console.log(data);
          setLoading(false);
          setPlaces(data);
        })
	}, [search_term])

	
	const onSearchTextChange = (e) => {
		setLoading(true)
		setSearch_term(e.target.value)
	
	}
	

	const dataSection = (
			<div className="inline-block min-w-full shadow rounded-lg overflow-hidden"> 
		  <table  className="min-w-full leading-normal">
        <thead>
          <tr >
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Place</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">City</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Download Speed</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Average</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Download Units </th>

          </tr>
        </thead>
        <tbody>
        {places.map((place, index) => {

	function buttonMessage(){
		alert(place.address)
		
	}
          return (
            <tr key={index}>
              <td> <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={buttonMessage}>{place.name} </button></td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{place.city}</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{place.download_speed}</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{place.average}</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{place.download_units}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
		</div>

		)

	

	if(loading){
		return renderPlaces(loadingSection, search_term)
	}
	else{
		return renderPlaces(dataSection, search_term)
	}
	




 function renderPlaces(section, search_term) {
	return (
<div className="bg-white p-8 rounded-md w-full ">
	<div className=" flex items-center justify-between pb-6">
		<div>
			<h2 className="text-gray-600 font-semibold text-4xl">Wi-Fi Speed Test</h2>
		</div>
		<div className="flex items-center justify-between">
			<div className="flex bg-gray-50 items-center p-2 rounded-md">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fillRule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clipRule="evenodd" />
				</svg>
				{//implement on change for search imput
				}
				<input className="bg-gray-50 outline-none ml-1 block " 
						type="text" 
						name="" 
						id="" 
						placeholder="search..."
						onChange={onSearchTextChange}
						/>
          

          </div>
				<div className="lg:ml-40 ml-10 space-x-8">
				<Link to="/new-internet-speed" className="btn bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">New Log
					</Link>
				</div>
			</div>
		</div>
		
		{section}
		
		</div>
	
	)
}
}