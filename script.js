const displayInfoBtn = document.getElementById('display-info-btn')
const locationBtn = document.getElementById('location-btn')
const displayInfo = document.getElementById('display-info')
const locationDetails = document.getElementById('location')



displayInfoBtn.addEventListener('click', getDisplayInfo)

function getDisplayInfo() {
    const display = window.screen
    displayInfo.textContent = `Screen Width : ${display.width}px, Screen Height: ${display.height}px`
    displayInfo.classList.add('show')                        
}


locationBtn.addEventListener('click', getLocation) 

function getLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)        
        locationDetails.classList.add('show')    
    }
    else{
        locationDetails.textContent = `Geolocation is not supported by this browser.`
        locationDetails.classList.add('show')
    }

}

function showPosition (position) {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        locationDetails.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`
}