import './App.css';
import Location from "./components/Location";
import { useState,useEffect } from "react";
import Videos from "./components/videos";
import VideoPlayer from "./components/Videoplayer";
import config from "./config";

function App() {
  const [item, setItem] = useState({ isLoading:false, repos:"",success:false });
  const [videoPlaying, setVideoPlaying] = useState("https://www.youtube.com/embed/0YF8vecQWYs")
  useEffect(()=> {
      console.log(videoPlaying)
  },[setVideoPlaying])
  useEffect(() => {
    setItem({ isLoading:true });
    const youtube = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=minami&key=${config.apiKey}`
    fetch(youtube)
      .then(res=>res.json())
      .then(repos => {
        console.log(repos);
        console.log(repos.items[0].id.videoId)
        
        setItem({ isLoading:false, repos, success:true })
        console.log(item)})
        
      .catch((error) => {
        setItem({success:false})
        console.log(error)})
  },[]); 

  return (
    <div className="container">
      <Location className="searchBar" setItem={setItem} setVideoPlaying={setVideoPlaying}/>
      <p className="hi">hi</p>
      <VideoPlayer url={videoPlaying} className="videoPlayer"/>
      {item.isLoading ? <div>Please wait</div> : <Videos className="videoList" repos={item.repos} success={item.success} setVideoPlaying={setVideoPlaying}/>} 
    </div>
  );
}

export default App;
