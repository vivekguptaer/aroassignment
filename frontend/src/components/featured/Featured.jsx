import "./featured.css";
import React,{useState, useEffect} from 'react';
import axios from 'axios';
const Featured = () => {
const [data, setdata] = useState([])
const [item, setitem] = useState([])
const [item2, setitem2] = useState([])
useEffect(()=>{
  axios.get('http://localhost:8080/hotels')
  .then(response => {
  console.log(response);
  setdata([response.data.data[0]])
  setitem([response.data.data[1]])
  setitem2([response.data.data[2]])
});
})
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTa6ORRXBL_czrlcdrfhLuudk9WWuZONejg_G2wf3NpaGPuYOjrvV4B_otZDCPXS4Lhe8&usqp=CAU"
          alt=""
          className="featuredImg"
        />
        {data.map((item, index)=>{
          return(<div className = "featuredTitles" key = {index}>
            <a href={"http://localhost:3000/hotels/"+item.hotel_id}><h1><b>{item.hotel_name}</b></h1></a>
            <h3>{item.city}</h3><br></br>
            <h3>{item.price}</h3>
          </div>)
        })}
      </div>
      
      <div className="featuredItem">
        <img
          src="https://media-cdn.tripadvisor.com/media/video-t/12/38/c6/51/rambagh-palace-1.jpg"
          alt=""
          className="featuredImg"
        />
        {item.map((item, index)=>{
          return(<div className = "featuredTitles" key = {index}>
            <a href={"#"}><h1><b>{item.hotel_name}</b></h1></a>
            <h3>{item.city}</h3><br></br>
            <h3>{item.price}</h3>
          </div>)
        })}
      </div>
      <div className="featuredItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d3/City_Palace_Udaipur.jpg"
          alt=""
          className="featuredImg"
        />
       {item2.map((item, index)=>{
          return(<div className = "featuredTitles" key = {index}>
            <a href={"#"}><h1><b>{item.hotel_name}</b></h1></a>
            <h3>{item.city}</h3><br></br>
            <h3>{item.price}</h3>
          </div>)
        })}
      </div>
    </div>
  );
};

export default Featured;
