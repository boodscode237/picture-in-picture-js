const videoElement = document.getElementById('video')
const button = document.getElementById('button')


// Prompt the user to select a media stream

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.scrObject = mediaStream
        videoElement.onloadedmetadata = () => {
            video.play()
        }
    } catch (e) {
        // catch error here
        console.log("error async", e)
    }
}

button.addEventListener('click', async() => {
    // Disable button
    button.disabled = true
        // start Picture in picture
    await videoElement.requestPictureInPicture()
        // reset the button
    button.disabled = false
});

// onload
selectMediaStream()