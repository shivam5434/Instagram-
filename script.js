let isliked = false;
function toggleliked() {
  let likenum = document.querySelector(".like>:last-child").innerHTML;
  likenum = Number(likenum);
  if(isliked == false) {
    document.querySelector("#likebtn>:first-child").style.display = "none";
    document.querySelector("#likebtn>:last-child").style.display = "block";
    likenum++;
    isliked = true;
  }
  else {
    document.querySelector("#likebtn>:first-child").style.display = "block";
    document.querySelector("#likebtn>:last-child").style.display = "none";
    likenum--;
    isliked = false;
  }
  document.querySelector(".like>:last-child").innerHTML = likenum;
}

let video = document.getElementById("MyVideo");
const audioBtn = document.getElementById("MyAudio");

// initial setting
video.muted = true;
video.play();

// video play pause
video.addEventListener("click", () => {
  if (video.paused) video.play();
  else video.pause();
});

// audio mute unmute 
audioBtn.addEventListener("click", (e) => {
  if(video.muted){
    document.querySelector("#MyAudio>:first-child").style.display = "none";
    document.querySelector("#MyAudio>:last-child").style.display = "block";
  }
  else{
    document.querySelector("#MyAudio>:last-child").style.display = "none";
    document.querySelector("#MyAudio>:first-child").style.display = "block";
  }
  e.stopPropagation();
  video.muted = !video.muted;
});
