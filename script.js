var arr = [
  {
    img:"https://i0.wp.com/www.pianomint.com/wp-content/uploads/Ajj-Din-Chadheya-Love-Aaj-Kal.jpg?fit=760%2C350&ssl=1",
    Song: "Kuch To Hai",
    path: "1.mp3",
  },
  {
    Song: "Humari adhuri khan",
     pic:"humari.jpg",
    path: "2.mp3",
  },
  {
    Song: "Itani si baat hai",
    pic:"itani.jpg",
    path: "3.mp3",
  },
  {
    Song: "Jeena Jeena",
    pic:"jeena.jpg",
    path: "4.mp3",
  },
  {
    Song: "Isqa wala love",
    pic:"isha.jpg",
    path: "5.mp3",
  },
  {
    Song: "Kuch To Hai",
    pic:"kuch.jpg",
    path: "6.mp3",
  },
  {
    Song: "Aaj din chadhiya",
    pic:"https://i0.wp.com/www.pianomint.com/wp-content/uploads/Ajj-Din-Chadheya-Love-Aaj-Kal.jpg?fit=760%2C350&ssl=1",
    path: "7.mp3",
  },
];
var toggle = false;
var count = 0;
var audio = new Audio(arr[count].path);



document.querySelector(".playpause").addEventListener("click", function () {
 document.querySelector(".track-name").textContent=arr[count].Song;
 document.querySelector(".track-art").textContent=arr[count].img;
    if (toggle === false) {
    toggle = true;
    document.querySelector(
      ".playpause"
    ).innerHTML = `<i class="ri-pause-circle-fill"></i>`;
    audio.play();
  } else {
    toggle = false;
    document.querySelector(
      ".playpause"
    ).innerHTML = `<i class="ri-play-circle-fill"></i>`;
    audio.pause();
  }
});
document.querySelector(".prev").addEventListener("click", function () {


    if (count === 0) {
        count = 6;
    document.querySelector(".track-name").textContent=arr[count].Song

      } else{
          count--;
    document.querySelector(".track-name").textContent=arr[count].Song

          audio.src=arr[count].path
          audio.play();
      }
   
});
document.querySelector(".next").addEventListener("click", function () {
  if (count===7) {
      count = 0;
    document.querySelector(".track-name").textContent=arr[count].Song
    audio.src=arr[count].path
    audio.play();
  } else {
      count++;
    document.querySelector(".track-name").textContent=arr[count].Song;
    audio.src=arr[count].path

    audio.play();
  }
});

