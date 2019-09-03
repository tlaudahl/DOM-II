// Your code goes here



const anchorTags = document.querySelectorAll('a');
console.log(anchorTags);
anchorTags.forEach(item => {
    item.addEventListener('click', e => {
        // stop links from working
        e.preventDefault();
        // Random RGB Colors
        let red = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        item.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
        console.log(red, blue, green);
    });
});

// Fun Bus Image
const funBusImg = document.querySelector('#funBus');
busImages = {
    0: 'https://upload.wikimedia.org/wikipedia/commons/6/63/LT_471_%28LTZ_1471%29_Arriva_London_New_Routemaster_%2819522859218%29.jpg',
    1: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Lothian_Buses_Envrio400XLB_1071.jpg',
    2: 'https://transportation.columbia.edu/sites/default/files/styles/cu_crop/public/content/img/IMG_0075.JPG?itok=U6yh46oX',
    3: 'https://nwbus.com/wp-content/uploads/2018/12/IMG_1940-1-600x450.jpg',
    4: 'http://www.acrta.com/wp-content/uploads/2017/03/ACRTA-2017-bus-design.jpg',
    5: 'https://thepromcompany.files.wordpress.com/2012/03/diamond-limos-6.jpg',
    6: 'https://gunaxin.com/wp-content/uploads/gallery/awesome-school-bus/school-bus-pimped-10.jpg',
    7: 'https://i.pinimg.com/originals/d6/e2/d2/d6e2d25cdb9e1c70ab27c66c63e2b06c.jpg',
    8: 'https://1222aj2xrykt3vfxyv1mfknf-wpengine.netdna-ssl.com/wp-content/uploads/rent-party-bus-or-limo.jpg',
    9: 'https://www.dallaspartybusrental.com/wp-content/uploads/2015/11/party-buses-for-rent-garland.jpg',
}

// Mouse enter event on Fun Bus Image
funBusImg.addEventListener('mouseenter', e => {
    // Random number between 0 and 9
    let randomImg = Math.floor(Math.random() * 10);
    // Change the image src to whatever index is generated from randomImg
    funBusImg.src = busImages[randomImg];
    funBusImg.alt = 'Random Image';
})


// Content Section
const contentSection = document.querySelector('.content-section');

// Random gradient backgrounds
const randomBackgrounds = {
    0: '290deg, #6a5d6a, #2e902a',
    1: '355deg, #7858a4, #1cbc44',
    2: '254deg, #4da851, #59ba98',
    3: '21deg, #415420, #4b1971',
    4: '55deg, #c7a85c, #493522',
    5: '313deg, #5778c0, #495b72',
    6: '302deg, #21d9b6, #b69246',
    7: '268deg, #bcec3a, #7b12a7',
    8: '239deg, #3bc74b, #be29ab',
    9: '215deg, #bca579, #cae130',
    10: '144deg, #8dec57, #e7c786',
    11: '95deg, #265867, #9caacb',
    12: '72deg, #0ddc40, #8ac6c9',
    13: '327deg, #66219b, #4d09db',
    14: '270deg, #a63d6e, #a33258',
    15: '10deg, #1c572e, #38a67e',
    16: '221deg, #157ec9, #8078bd',
    17: '86deg, #99a338, #967551',
    18: '79deg, #c5c8be, #eb1ab1',
    19: '345deg, #31d381, #170b15',
    20: '177deg, #e33a3d, #b21ea3',
}


// Scroll Event
window.addEventListener('scroll', e => {
    let randomBackNumber = Math.floor(Math.random() * 21);
    contentSection.style.background = `linear-gradient(${randomBackgrounds[randomBackNumber]})`;
});

// Grab images with class of image
let imgContainer = document.querySelectorAll('.image');
console.log(imgContainer);

// Loop through NodeList and add eventlistener to each item
imgContainer.forEach(item => {
    // Mousemove event
    item.addEventListener('mousemove', e => {
        item.setAttribute('width', Math.floor(Math.random() * 1001) + 100);
        item.setAttribute('height', Math.floor(Math.random() * 1001) + 100);
        item.style.maxWidth = 'none';
    })
})

let pTags = document.querySelectorAll('p');

pTags.forEach(item => {
    item.addEventListener('dblclick', e => {
        item.style.fontSize = `${Math.floor(Math.random() * 76) + 16}px`;
    })
})

// Load event
window.addEventListener('load', e => {
    alert("Window has loaded");
});

// 8 - keyup event
window.addEventListener('keyup', e => {
    alert(`The background color will stop changing now, ${e.code}`);
})

// keypress event
let bodyTag = document.querySelector('body');

window.addEventListener('keypress', e => {
    let randomBackNumber = Math.floor(Math.random() * 21);
    bodyTag.style.background = `linear-gradient(${randomBackgrounds[randomBackNumber]})`;
})


// 10 - Mouse over

const h4 = document.querySelectorAll('h4');
h4.forEach(item => {
    item.addEventListener('mouseover', e => {
        let randomBackNumber = Math.floor(Math.random() * 21);
        item.style.background = `linear-gradient(${randomBackgrounds[randomBackNumber]})`;
        item.style.webkitBackgroundClip = 'text';
        item.style.webkitTextFillColor = 'transparent';
        item.style.fontSize = '50px'
    })
})



const buttons = document.querySelectorAll('.btn');

buttons.forEach(item => {
    item.addEventListener('click', e => {
        console.log(e.target);
        TweenMax.to(item, 0.5, {
            rotationY: Math.floor(Math.random() * 1001),
            rotationX: Math.floor(Math.random() * 1001),
            ease: Power1.easeInOut,
        })
    })
})

