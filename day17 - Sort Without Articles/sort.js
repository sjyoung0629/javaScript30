const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
  return bandName.replace(/^(a |the |an |)/i, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
console.log(sortedBands);

document.querySelector('#bands').innerHTML = 
  sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');

/*
when you try to set something to innerHTML that is not a string, like an array,
then it will just call .toString on it
and by default it's going to put a comma in between each one.

innerHTML에 들어가는 요소가 string이 아니면 자동으로 .toString() 이 호출되어
기본적으로 배열 요소 사이사이에 콤마(,)가 추가됨
따라서, join('')을 이용해 하나의 string으로 변경해줘야 함
*/