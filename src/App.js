import logo from './logo.svg';
import './App.css';
import Location from "./components/Location";
import { useState,useEffect } from "react";
import Videos from "./components/videos";
import VideoPlayer from "./components/Videoplayer";

function App() {
  const [item, setItem] = useState({ isLoading:false, repos:"",success:false });
  const [search, setSearch] = useState("");
  const [videoPlaying, setVideoPlaying] = useState("https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1")
  useEffect(()=> {
      console.log(videoPlaying)
  },[setVideoPlaying])
  useEffect(() => {
    setItem({ isLoading:true });
    const youtube = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyC5ESJtFjW5noagVC8i6T4j7iKmzCkPDi0"
    console.log(search)
    fetch(youtube)
      .then(res=>res.json())
      .then(repos => {
        console.log(repos);
        
        setItem({ isLoading:false, repos, success:true })
        console.log(item)})
        
      .catch((error) => {
        setItem({success:false})
        console.log(error)})
  },[]); 

  return (
    <div className="container">
      <Location className="searchBar" setSearch={setSearch} search={search} setItem={setItem}/>
      <p>hi</p>
      <VideoPlayer url={videoPlaying} className="videoPlayer"/>
      {item.isLoading ? <div>Please wait</div> : <Videos className="videoList" repos={item.repos} success={item.success} setVideoPlaying={setVideoPlaying}/>} 
    </div>
  );
}

export default App;
