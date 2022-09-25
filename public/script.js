const { create } = require("domain");
const { Stream } = require("stream");
const videoGrid=document.getElementById('video-grid');
const myvideo =document.createElement('video');
myvideo.muted=true;
let myvideoStream
navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true
}).then(Stream=>{
 myvideoStream=Stream;
 addVideoStream(myvideo,Stream)
})


const addVideoStream=(video,stream)=>{
    video.srcObject=stream;
    video.addEventListener('loadedmetadata',()=>{
        video.play();

    })
    videoGrid.append(video);
}