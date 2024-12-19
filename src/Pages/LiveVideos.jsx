import Wrapper from "../assets/Wrapper/VideoContainer";
import { Video } from "../Components";


const LiveVideos = () => {
    return (
        <Wrapper>
            <Video videoSource={"https://tv4.massstream.net/Muthamiltv-web/index.m3u8"}/>
            
       </Wrapper>
    )
}

export default LiveVideos;