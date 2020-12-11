const imageArray = [
    "https://www.w3schools.com/html/img_chania.jpg",
    "https://www.w3schools.com/html/img_girl.jpg",
    "https://www.w3schools.com/html/pic_trulli.jpg"
];

let imageElement = document.getElementById('sliderImage'), currentImgNum = 0;

const changeImage = (context) => {
    
    if (context.id == "previous") {
        
        currentImgNum--;
        if (currentImgNum < 0) currentImgNum = imageArray.length - 1;
        
        imageElement.src = imageArray[currentImgNum];
    }
    else {
        currentImgNum = (currentImgNum + 1) % imageArray.length;
        imageElement.src = imageArray[currentImgNum];
    }
}