import React from 'react'
import axios from 'axios'
import ActivityIndicator from 'react-activity-indicator'

<ActivityIndicator
    number={5}
    diameter={40}
    borderWidth={1}
    duration={300}
    activeColor="#66D9EF"
    borderColor="white"
    borderWidth={5}
    borderRadius="50%" 
/>


const useWeather = (city) => {
const [refreshing, setRefreshing] = React.useState(false);
const [data, setData] = React.useState( localStorage.getItem('weather') || 'Kiev');

setRefreshing(true);

React.useEffect(() => {
    
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER}&units=metric`)
.then(response => {
     const weatherData = response.data;
    if (!response.ok) {
       
  console.error(`Error retrieving weather data: ${weatherData.message}`);
}
 else {
  
  setData(weatherData);
  localStorage.setItem('weather', JSON.stringify(data));
}
    


}
    )//const weatherData = response.data;


setRefreshing(false);
}, [data])
return [data, setData]
//     
//        
//       
//       

//       React.useEffect(() => {
//          try {
//           const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER}&units=metric`)
//             const weatherData = await response.data.json();

//             if(!response.ok){
//                 console.error(`Error retrieving weather data: ${data.message}`)
//             }
//             else{
//    setData({ weatherData });
//       localStorage.setItem('weather', JSON.stringify(data));
  
//             }
      

//         } catch (error) {
//           console.error(error)
//       }   
//       }, [data])
      
//       return [data, setData];
//     };

};
export default useWeather



// useEffect(() => {
// if (!forecast) {
//   loadForecast();
// }
// });

// if (!forecast) {
// return (
//   <SafeAreaView>
//     <ActivityIndicator size="large" />
//   </SafeAreaView>
// );