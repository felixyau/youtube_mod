const VideoPlayer = ({ url }) => {
    console.log("url",url)
    return ( 
    <iframe width="700" height="400" src={url} />
     );
}
 
export default VideoPlayer;