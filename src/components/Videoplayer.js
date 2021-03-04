const VideoPlayer = ({ url }) => {
    return ( 
    <iframe width="700" height="400" src={url}>
    </iframe>
     );
}
 
export default VideoPlayer;