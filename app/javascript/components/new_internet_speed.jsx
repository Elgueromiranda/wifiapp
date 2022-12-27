import { useState, useEffect } from 'react'
import { Link }  from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import React from 'react'


import { ReactInternetSpeedMeter } from 'react-internet-meter'

export default function AddSpeed() {

		const [testInProgress, setTestInProgress] = useState(false)
		const [downloadSpeeds, setDownloadSpeeds] = useState([])
		const [latestDownloadSpeed, setLatestDownloadSpeed] = useState(null)
		const [placeName, setPlaceName] = useState("")
		const [placeCity, setPlaceCity] = useState("")
		const [placeAddress, setPlaceAddress] = useState("")
		const [zip, setZip] = useState("")
		const [state, setState] = useState("")
		const navigate = useNavigate()
		const [objCreated, setObjcreated] = useState(false)


			const apiEndpoint = `/api/internet_speeds`
			const average =   downloadSpeeds.reduce((a, b) => a + b, 0)

			const data = {
				'place_download_units': 'Mbps',
				'place_download_speed': latestDownloadSpeed,
				'place_name': placeName,
				'place_address': (placeAddress + ' ' + placeCity + ', ' + state + ' ' + zip),
				'place_city': placeCity,
				'place_average': (average / 5.0).toFixed(2)

			}
		
useEffect(() => {

		const newDownloadSpeed = [...downloadSpeeds, latestDownloadSpeed]
	if(latestDownloadSpeed){
		setDownloadSpeeds(newDownloadSpeed)
		if(downloadSpeeds.length === 5 && !objCreated){


			// fetching the data from
			fetch(apiEndpoint, {
				  method: 'POST', // or 'PUT'
				  headers: {
				    'Content-Type': 'application/json',
				  },
				  body: JSON.stringify(data),
				})
				  .then((response) => {
				  	if(response.ok){
				    console.log('Success');
				    }else{
				    console.log('Server Error');
					}

				  })
				  .catch((error) => {
				    console.error('Network Error:', error);
				  });
				setObjcreated(true)
				//need to give enough time for the server to respond before next
				//action or POST doesnt get created

		}else if(downloadSpeeds.length > 8){
		
			setTestInProgress(false)
			navigate("/")
			window.location.reload()
		}
	}
 // eslint-disable-next-line
},[latestDownloadSpeed])


		const placeInfoValidator = placeCity == 0 || placeAddress == 0 || placeName == 0 || zip == 0
let buttonControl = " w-full px-6 py-2.5 bg-blue-600 text-white font-medium bg-green-500 text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
if(placeInfoValidator){
	 buttonControl = " w-full px-6 py-2.5 bg-blue-600 text-white font-medium bg-green-500 text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out opacity-25"
}

	return (
	<div className="bg-white p-8 rounded-md w-full ">
		<div className=" flex items-center justify-between pb-6">
		<div>
			<h2 className="text-gray-600 font-semibold text-4xl">New Speed Test</h2>
		</div>
		<div className="flex items-center justify-between">
			<div className="flex bg-gray-50 items-center p-2 rounded-md">
	

          </div>
				<div className="lg:ml-40 ml-10 space-x-8">

							<Link to="/places_list ">

					<button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Back</button>
					</Link>
				</div>
			</div>
		</div>
		
			<div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
  <form>
    <div className="form-group mb-6 ">
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-600">Place</label>

      <input type="name" onChange={(e) => setPlaceName(e.target.value) }
       className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
        placeholder="Starbucks"/>
    </div>
    <div className="form-group mb-6">
        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-600">Address</label>

      <textarea
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea13"
      rows="3"
      placeholder="123 Maple Ave"
      onChange={(e) => setPlaceAddress(e.target.value)}
    ></textarea>
    </div>
        <div className="form-group mb-6">
        <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-600">City</label>

      <input type="city" onChange={(e) => setPlaceCity(e.target.value)} className="form-control block
        w-1/3
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
        placeholder="Chicago"/>
    </div>
    <div className="form-group mb-6">
        <label htmlFor="zip" className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-600">Zip</label>

      <input type="zip" onChange={(e) => setZip(e.target.value)} className="form-control block
        w-1/3
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
        placeholder="123456"/>
    </div>
    <div className="form-group mb-6">
<select id="states" onChange={(e) => setState(e.target.value)} className="bg-gray-50 border border-slate-500 text-gray-900 text-sm rounded-lg focus:ring-stone-400 focus:border-stone-400 block w-full p-2.5 dark:bg-zinc-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-400 dark:focus:border-stone-400">
	<option value="">Select State--</option>
	<option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
</select>

</div>
    {testInProgress && <div><div>TEST IN PROGRESS</div>
     <ReactInternetSpeedMeter  
            txtSubHeading="Internet is too slow"
            outputType="alert"
            customClassName={null}
            txtMainHeading="Opps..." 
            pingInterval={4000} // milliseconds 
            thresholdUnit='megabyte' // "byte" , "kilobyte", "megabyte" 
            threshold={0}
            imageUrl="https://www.proximus.be/dam/jcr:0cdb69d3-55b8-49e6-bf77-fa6ba29502d2/cdn/sites/iportal/images/blogs/articles/res/fiber-speedtest-blog~2019-09-02-16-36-33~cache.jpg"
            downloadSize="68000"  //bytes
            callbackFunctionOnNetworkTest={(speed)=>setLatestDownloadSpeed(speed * 8)}
          />
          </div>


}

	

    <button 
    disabled={placeInfoValidator}
    onClick={() => setTestInProgress(true)}
	type="submit" 
    className={buttonControl}>Start Test</button>
	
      
	  </form>
	</div>

	</div>
	)
}