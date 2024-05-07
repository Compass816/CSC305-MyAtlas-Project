// Get the sun, moon, and hero elements
let sun = document.getElementById("sun");
let moon = document.getElementById("moon");
let hero = document.getElementById("hero");
let stars = document.getElementById("stars");
let clouds = document.getElementById("clouds");
let backgroundSunrise = document.getElementById("background-sunrise");
let backgroundDay = document.getElementById("background-day");
let backgroundSunset = document.getElementById("background-sunset");
let backgroundNightrise = document.getElementById("background-nightrise");
let backgroundNight = document.getElementById("background-night");
let backgroundNightset = document.getElementById("background-nightset");


// Create the stars
for (let i = 0; i < 100; i++) {
    let star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    stars.appendChild(star);

    setInterval(function() {
        star.style.opacity = Math.random() * 0.5 + 0.5; // Random opacity between 0.5 and 1
    }, Math.random() * 1500 + 500); // Random interval between 0.5 and 2 seconds
}


// Create the clouds
// Iterate over the grid cells to contain clouds 
let gridColumns = 4;
let gridRows = 2;
for (let i = 0; i < gridColumns; i++) {
    for (let j = 0; j < gridRows; j++) {
        // There's a 40% chance a cloud to be placed in this cell
        if (Math.random() < 0.4) {
            let cloud = document.createElement("div");
            cloud.className = "cloud cloud" + (Math.floor(Math.random() * 5) + 1); // Randomly assign a class from cloud1 to cloud5

            // Calculate the boundaries of the cell
            let cellWidth = 100 / gridColumns;
            let cellHeight = 50 / gridRows; // Only the top 50% of the container is used
            let minLeft = cellWidth * i;
            let maxLeft = cellWidth * (i + 1);
            let minTop = cellHeight * j;
            let maxTop = cellHeight * (j + 1);

            // Randomly position the cloud within the cell
            cloud.style.left = Math.random() * (maxLeft - minLeft) + minLeft + "%";
            cloud.style.top = Math.random() * (maxTop - minTop) + minTop + "%";

            clouds.appendChild(cloud);
        }
    }
}


// Define the arc parameters
// The radius is 1.1 times the hero's width and height to slightly overflow the screen at the 
// animation transition points.
const radiusX = (hero.offsetWidth / 2) * 1.1;
const radiusY = (hero.offsetHeight / 2) * 1.1;
const centerX = hero.offsetWidth / 2;
const centerY = hero.offsetHeight / 2;
console.log(hero.offsetWidth, hero.offsetHeight, radiusX, radiusY);

let angle = Math.PI; // Start at the bottom
const speed = 0.001; // In radians per frame

// Animate the sun and moon
function animate() {
    // Calculate the new position for the sun
    let xSun = centerX + radiusX * Math.cos(angle);
    let ySun = centerY + radiusY * Math.sin(angle);

    // Calculate the new position for the moon
    let xMoon = centerX + radiusX * Math.cos(angle + Math.PI);
    let yMoon = centerY + radiusY * Math.sin(angle + Math.PI);

    // Update the sun's and moon's position
    sun.style.left = xSun + 'px';
    sun.style.top = ySun + 'px';
    moon.style.left = xMoon + 'px';
    moon.style.top = yMoon + 'px';

    // Update the angle
    angle = (angle + speed) % (2 * Math.PI);

    // Set all backgrounds to opacity 0
    backgroundSunrise.style.opacity = 1;
    backgroundDay.style.opacity = 0;
    backgroundSunset.style.opacity = 0;
    backgroundNightrise.style.opacity = 0;
    backgroundNight.style.opacity = 0;
    backgroundNightset.style.opacity = 0;


    // 0 to 1/6PI is nightrise
    // 1/6PI to 5/6PI is night
    // 5/6PI to PI is nightset
    // PI to 7/6PI is sunrise
    // 7/6PI to 11/6PI is day
    // 11/6PI to 2PI is sunset

    // Change the opacity of the backgrounds based on the angle
    if ((angle >= 0) && (angle < Math.PI / 6)) {
        stars.style.opacity = 1;
        backgroundNightrise.style.opacity = 1;
        sun.style.opacity = 0;
        moon.style.opacity = 1;
    } else if ((angle >= Math.PI / 6) && (angle < 5 * Math.PI / 6)) {
        backgroundNight.style.opacity = 1;
    } else if ((angle >= 5 * Math.PI / 6) && (angle < Math.PI)) {
        backgroundNightset.style.opacity = 1;
    } else if ((angle >= Math.PI) && (angle < 7 * Math.PI / 6)) {
        stars.style.opacity = 0;
        backgroundSunrise.style.opacity = 1;
        moon.style.opacity = 0;
        sun.style.opacity = 1;
    } else if ((angle >= 7 * Math.PI / 6) && (angle < 11 * Math.PI / 6)) {
        backgroundDay.style.opacity = 1;
    } else if ((angle >= 11 * Math.PI / 6) && (angle < 2 * Math.PI)) {
        backgroundSunset.style.opacity = 1;
    }

    // Request the next frame
    requestAnimationFrame(animate);
}

// Start the animation
animate();