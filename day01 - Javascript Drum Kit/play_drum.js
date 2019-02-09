const key_arr = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];

function removeTransition (e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove('playing');
}

function playSound (key_code) {
    const audio = document.querySelector(`audio[data-key="${key_code}"]`);
    const key = document.querySelector(`.key[data-key="${key_code}"]`);
    if(!audio) return; // stop the function from running all together

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

// get random array (0 ~ 8)
let getRandomArr = function () {
    const count = 8;
    let random_arr = [], ran_num;
    for (let i = 0; i < count; i++) {
        ran_num = Math.floor(Math.random() * count) + 1;
        random_arr[i] = key_arr[ran_num];
    }

    return random_arr;
}

function randomPlay () {
    const random_arr = getRandomArr();
    let idx = 0;

    // replay every 0.5 seconds
    const replay = setInterval(function() {
        let cur_key = random_arr[idx];
        if (cur_key) {
            playSound(cur_key.charCodeAt(0));
            idx++;

        } else {
            // stop the interval play
            clearInterval(replay);
        }
    }, 500);
}

let random_btn = document.querySelector('.random_btn');
random_btn.addEventListener('click', randomPlay);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', function (e) {
    playSound(e.keyCode);
});