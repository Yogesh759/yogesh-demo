const music = new Audio('mu/h1.mp3');
// music.play();

const songs = [
    {
        id:"1",
        songName:`  Lil Mama See <br>
        <div class="subtitle"> Road Runner</div>`,
        poster: "photo/e1.jpg",
    },
    {
        id:"2",
        songName:`  Goli <br>
        <div class="subtitle"> Husan</div>`,
        poster: "photo/p1.jpg",
    },
    {
        id:"3",
        songName:`    Teri GYPSY <br>
        <div class="subtitle"> Ruchika Jangid</div>`,
        poster: "photo/h1.jpg",
    },
    {
        id:"4",
        songName:`   Barat  <br>
        <div class="subtitle"> Ruchika Jangid</div>`,
        poster: "photo/h4.jpg",
    },
    {
        id:"5",
        songName:`   Ghost <br>
        <div class="subtitle"> Justin Bieber</div>`,
        poster: "photo/e5.jpg",
    },
    {
        id:"6",
        songName:` On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "photo/im2.webp",
    },
    {
        id:"7",
        songName:`  Power  <br>
        <div class="subtitle"> Justin Bieber</div>`,
        poster: "photo/im3.jpg",
    },
    {
        id:"8",
        songName:`  1 Hour <br>
        <div class="subtitle"> Robert Walke</div>`,
        poster: "photo/im4.webp",
    },
    {
        id:"9",
        songName:` Lifestyle <br>
        <div class="subtitle"> Adam</div>`,
        poster: "photo/e4.jpg",
    },
    {
        id:"10",
        songName:`  Hania <br>
        <div class="subtitle"> Roshan</div>`,
        poster: "photo/p4.jpg",
    },
    {
        id:"11",
        songName:` Strange <br>
        <div class="subtitle"> Alan roy</div>`,
        poster: "photo/im5.webp",
    },
    {
        id:"12",
        songName:`  Attention <br>
        <div class="subtitle"> Justin Bieber</div>`,
        poster: "photo/e6.jpg",
    },
    {
        id:"13",
        songName:`  Been <br>
        <div class="subtitle"> Renuka Panwar</div>`,
        poster: "photo/h3.jpg",
    },
    {
        id:"14",
        songName:`  Jale <br>
        <div class="subtitle"> Shiv Yadav</div>`,
        poster: "photo/h6.jpg",
    },
    {
        id:"15",
        songName:`   Don't Call <br>
        <div class="subtitle"> Jot Sindhu</div>`,
        poster: "photo/p2.jpg",
    },
    {
        id:"16",
        songName:`  Start <br>
        <div class="subtitle"> Justin</div>`,
        poster: "photo/im6.webp",
    },
    {
        id:"17",
        songName:` Kaala maal  <br>
        <div class="subtitle"> Amit Saini Rohtakiya</div>`,
        poster: "photo/h2.jpg",
    },
    {
        id:"18",
        songName:`  Future <br>
        <div class="subtitle"> Lakhi Singh</div>`,
        poster: "photo/p3.jpg",
    },
    {
        id:"19",
        songName:` Fifty <br>
        <div class="subtitle"> cein</div>`,
        poster: "photo/im8.webp",
    },
    {
        id:"20",
        songName:`  Up  <br>
        <div class="subtitle"> Cardi B</div>`,
        poster: "photo/e3.jpg",
    },
    {
        id:"21",
        songName:`  Your Power <br>
        <div class="subtitle"> Billie Eilish</div>`,
        poster: "photo/e2.jpg",
    },
    {
        id:"22",
        songName:` Kuku <br>
        <div class="subtitle">SB Haryanvi</div>`,
        poster: "photo/h5.jpg",
    },
    
]


Array.from(document.getElementsByClassName('songItem')).forEach((e,i) =>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});



let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime<=0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');

    }else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-circle-fill');
        masterPlay.classList.remove('bi-pause-circle-fill');
        

    }
});



const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) =>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el) =>{
        el.style.background = 'rgb(105, 105,  105, .0)';
         
    })
}



 

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click',(el) => {
        index = el.target.id;
       // console.log(index);
       music.src = `mu/${index}.mp3`;
       poster_master_play.src = `photo/${index}.jpg`;
       music.play();
       masterPlay.classList.remove('bi-play-fill');
       masterPlay.classList.add('bi-pause-fill');

       let songTitles = songs.filter((els) =>{
            return els.id == index;;

       });

       songTitles.forEach(elss => {
            let { songName, poster } = elss;
            title.innerHTML = songName;
            poster_master_play.src = poster;
       });

       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105,  105, .1)";
       makeAllplays();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');
    });


})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

// music.addEventListener('timeupdate', () => {
//     let music_curr = music.currentTime;
//     let music_dur = music.duration;
//     //console.log(music_dur);

//     let min1 = math.floor(music_dur / 60);
//     let sec1 = math.floor(music_dur % 60);
//     //console.log(music_dur);

//     if(sec1 < 10){
//         sec1 = `0${sec1}`

//     }
//     //currentStart.innerText = `$`
//     currentEnd.innerText = `${min1}:${sec1}`;

//     let min2 = Math.floor(music_curr / 60);
//     let sec2 = Math.floor(music_curr % 60);

//     if(sec2 < 10){
//         sec2 = `0${sec2}`;

//     }

//     currentStart.innerText = `${min2}:${sec2}`;

//     let progressBar = parseInt((music_curr / music_dur) * 100);
//     // console.log(seek.value);
//     seek.value = progressBar;
//     let seekbar = seek.value;
//     bar2.style.width = `${seekbar}%`;
//     dot.style.left = `${seekbar}%`;



// });
// ...

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }

    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }

    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = (seek.value * music.duration) / 100;
});

vol.addEventListener('change', () => {
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;

    if (vol_a == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    } else if (vol_a > 0 && vol_a <= 50) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    } else {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
});


// seek.addEventListener('change', ()=> {
//     music.currentTime = seek.value * music.duration / 100;
// });

// let vol_icon = document.getElementById('vol_icon');
// let vol = document.getElementById('vol');
// let vol_bar = document.getElementById('vol_bar')[0];
// let vol_dot = document.getElementById('vol_dot');

// vol.addEventListener('change',()=>{
//     if(vol.value == 0) {
//         vol_icon.classList.remove('bi-volume-up-fill');
//         vol_icon.classList.remove('bi-volume-down-fill');
//         vol_icon.classList.add('bi-volume-off-fill');

//     }
//     if(vol.value > 0){
//         vol_icon.classList.remove('bi-volume-up-fill');
//         vol_icon.classList.add('bi-volume-down-fill');
//         vol_icon.classList.remove('bi-volume-off-fill');

//     }
//     if(vol.value > 50){
//         vol_icon.classList.add('bi-volume-up-fill');
//         vol_icon.classList.remove('bi-volume-down-fill');
//         vol_icon.classList.remove('bi-volume-off-fill');
//     }
//     let vol_a = vol.value;
//     vol_bar.style.width = `${vol_a}%`;
//     vol_dot.style.left = `${vol_a}%`;
//     music.volume = vol_a / 100;
// });

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -=1;
     
    

})












let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft +=330;
})

pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -=330;
})

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click',()=>{
    item.scrollLeft +=330;
})

pop_art_left.addEventListener('click',()=>{
    item.scrollLeft -=330;
})