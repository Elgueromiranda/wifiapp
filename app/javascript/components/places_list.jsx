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
			<div className="inline-block w-full rounded-lg overflow-hidden text-sm sm:shadow-lg"> 
		  <table className="w-full">
        <thead>
          <tr >
          <th className="text-[6px] whitespace-nowrap border-b-2 border-gray-200 bg-gray-100 text-left font-semibold text-gray-600 uppercase sm:px-6 sm:py-2 sm:whitespace-normal sm:text-sm sm:font-medium sm:text-gray-900 sm:border-r">Place</th>
          <th className="text-[6px] whitespace-nowrap border-b-2 border-gray-200 bg-gray-100 text-left font-semibold text-gray-600 uppercase sm:px-6 sm:py-2 sm:whitespace-normal sm:text-sm sm:font-medium sm:text-gray-900 sm:border-r">City</th>
          <th className="text-[6px] whitespace-nowrap border-b-2 border-gray-200 bg-gray-100 text-left font-semibold text-gray-600 uppercase sm:px-6 sm:py-2 sm:whitespace-normal sm:text-sm sm:font-medium sm:text-gray-900 sm:border-r">Download Speed</th>
          <th className="text-[6px] whitespace-nowrap border-b-2 border-gray-200 bg-gray-100 text-left font-semibold text-gray-600 uppercase sm:px-6 sm:py-2 sm:whitespace-normal sm:text-sm sm:font-medium sm:text-gray-900 sm:border-r">Average</th>
          <th className="text-[6px] whitespace-nowrap border-b-2 border-gray-200 bg-gray-100 text-left font-semibold text-gray-600 uppercase sm:px-6 sm:py-2 sm:whitespace-normal sm:text-sm sm:font-medium sm:text-gray-900 sm:border-r">Download Units </th>

          </tr>
        </thead>
        <tbody>
        {places.map((place, index) => {

	function buttonMessage(){
		alert(place.address)
		
	}
          return (
            <tr key={index}>
              <td> <button className="bg-blue-500 text-[6px] sm:text-[10px] hover:bg-blue-700 text-white font-bold px-2 sm:py-2 sm:border-r  sm:px-4 rounded-full border-gray-200 border-b" onClick={buttonMessage}>{place.name} </button></td>
              <td className="hover:bg-gray-100 sm:px-6 sm:py-2 sm:whitespace-normal sm:text-sm sm:font-medium sm:text-gray-900 sm:border-r whitespace-nowrap text-[6px] sm:text-[12px] px-5 py-5 border-b border-gray-200 bg-white sm:text-14px">{place.city}</td>
              <td className="hover:bg-gray-100 sm:px-6 sm:py-2 sm:whitespace-normal sm:text-sm sm:font-medium sm:text-gray-900 sm:border-r whitespace-nowrap text-[6px] sm:text-[12px] px-5 py-5 border-b border-gray-200 bg-white sm:text-14px">{place.download_speed}</td>
              <td className="hover:bg-gray-100 sm:px-6 sm:py-2 sm:whitespace-normal sm:text-sm sm:font-medium sm:text-gray-900 sm:border-r whitespace-nowrap text-[6px] sm:text-[12px] px-5 py-5 border-b border-gray-200 bg-white sm:text-14px">{place.average}</td>
              <td className="hover:bg-gray-100 sm:px-6 sm:py-2 sm:whitespace-normal sm:text-sm sm:font-medium sm:text-gray-900 sm:border-r whitespace-nowrap text-[6px] sm:text-[12px] px-5 py-5 border-b border-gray-200 bg-white sm:text-14px">{place.download_units}</td>
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
			<h2 style={{ fontSize: "3vw" }} className="text-gray-600 font-semibold">Wi-Fi Test</h2>
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
				<input className="bg-gray-50 outline-none w-24 sm:w-64 ml-1 " 
						type="text" 
						name="" 
						id="" 
						placeholder="search..."
						onChange={onSearchTextChange}
						/>
          

          </div>
				<div className="ml-1">
				<Link to="/new-internet-speed" className="btn bg-indigo-600 rounded-md text-white font-semibold cursor-pointer sm:text-[14px] text-[6px] sm:ml-2 sm:p-3 ml-1 p-1">New Log
					</Link>
				</div>
			</div>
		</div>
		
		{section}
		
		</div>
	
	)
}
}