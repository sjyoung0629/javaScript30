// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(function(inventor) {
    const born_year = inventor.year;
    if(born_year >= 1500 && born_year < 1600) {
        return true;  // keep it!
    }
});
console.table(fifteen);

//example2
const numbers = [1,2,3,4,5];
const oddNumber = numbers.filter(val => val % 2 !== 0);
console.log("홀수 = " + oddNumber);

// every, some
const isAllOdd = numbers.every(val => val % 2 != 0);
console.log("isAllOdd = " + isAllOdd);

const isSomeOdd = numbers.some(val => val % 2 != 0);
console.log("isSomeOdd = " + isSomeOdd);

// ES6
const fifteen2 = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.table(fifteen2);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

// Array.prototype.forEach()
// forEach 는 리턴값이 없다 !
let namesArr = [];
const fullNames2 = inventors.forEach(inventor => namesArr.push(`${inventor.first} ${inventor.last}`));
console.log(namesArr);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort((firstPerson, secondPerson) => {
    if (firstPerson.year > secondPerson.year) {
        return 1;

    } else {
        return -1;
    }
});
// console.table(ordered);

const ordered2 = inventors.sort((a, b) => (a.year > b.year) ? 1 : -1);
console.table(ordered2);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const years = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
console.log(years);

// 5. Sort the inventors by years lived
const lives = inventors.sort((a, b) => {
    const lives_a = a.passed - a.year;
    const lives_b = b.passed - b.year;

    return lives_a > lives_b ? -1 : 1;
});
console.table(lives);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
const alphabet = people.sort((last, next) => {
    const [aLast, aFirst] = last.split(", ");
    const [bLast, bFirst] = next.split(", ");
    return aLast > bLast ? 1 : -1;
});
console.log(alphabet);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const sum = data.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 0;
    }

    obj[item]++;
    return obj;
}, {});
console.log(sum);

// hasOwnProperty 사용
const sum2 = data.reduce((obj, item) => {
    if(obj.hasOwnProperty(item)) {
        obj[item]++;

    } else {
        obj[item] = 1;
    }
    return obj;
}, {});
console.log(sum2);

// reduce vs filter+map
let initialValue = [];
const reducer = (accumulator, value) => {
    if (value % 2 != 0) {
        accumulator.push(value * 2);
    }
    return accumulator;
}
/**
 * reduce 는 배열을 한 번만 순회하면 되지만
 * filter + map 은 배열을 두 번 순회해야 한다
 * 
 * filter + map 이 직관적이긴 하지만,
 * reduce 는 reducer 함수를 선언함으로서 재사용성이 더 높다
 */
let reduce_result = numbers.reduce(reducer, []);
console.log("reduce = " + reduce_result);

let filter_map_result = numbers.filter(x => x % 2 != 0).map(x => x * 2);
console.log("filter + map = " + filter_map_result);

// reduce로 평균 구하기
const data_arr = [1, 2, 3, 4, 5, 6, 1];
const mean_reducer = (accumulator, value, index, array) => {
    let sum = accumulator + value;
    const arr_len = array.length
    if (index === arr_len - 1) {
        return sum / arr_len;
    }
    return sum;
};
// initializer 값을 생략하면, 배열의 첫번째 인자인 1(data_arr[0])이 accumulator로 넘어간다
const mean_value = data_arr.reduce(mean_reducer);
console.log("mean = ", mean_value);

/**
 * flatten (배열 납작하게 만들기)
 * 깊이가 있는 배열들을 flatten 할 때, 배열을 순회하면서 concat하는 로직을 reduce 활용해서 구현
 */
const depth_data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flatArrayReducer = (accumulator, value, index, array) => {
    return accumulator.concat(value);
};
const flattenData = depth_data.reduce(flatArrayReducer);
console.log(flattenData);

/**
 * flattenMap
 * 배열을 순회하면서 배열의 값으로 들어있는 object의 key 존재여부를 확인하고,
 * unique한 "cast"를 key로 갖는 배열의 값들을 최종적으로 return
 */
const input = [
    {
        "title": "슈퍼맨",
        "year": "2005",
        "cast": ["장동건", "권상우", "이동욱", "차승원"]
    },
    {
        "title": "스타워즈",
        "year": "2013",
        "cast": ["장동건", "신하균", "차승원", "김수현"]
    },
    {
        "title": "고질라",
        "year": "1997",
        "cast": []
    }
];
const flatMapReducer = (accumulator, value, index, array) => {
    const key = "cast";
    if(value.hasOwnProperty(key) && Array.isArray(value[key])) {
        value[key].forEach(val => {
            if(accumulator.indexOf(val) === -1) {
                accumulator.push(val);
            }
        });
    }
    return accumulator;
};

const flattenCastArr = input.reduce(flatMapReducer, []);
console.log(flattenCastArr);

// reduce: 배열 첫번째(왼쪽)부터 순회 시작
// reduceRight: 배열의 끝(오른쪽)부터 순회 시작
const iter_data = [1, 2, 3, 4, "5"];
const sumData1 = iter_data.reduce((accumulator, value) => {
    return accumulator + value;
});
console.log(sumData1);  // "105"

const sumData2 = iter_data.reduceRight((accumulator, value) => {
    return accumulator + value;
});
console.log(sumData2);  // "054321"

// reduce를 활용한 함수형 프로그래밍
const initial_value = 1;
const increment = (input) => { return input + 1; };
const decrement = (input) => { return input - 1; };
const double = (input) => { return input * 2; };
const halve = (input) => { return input / 2; };

const pipeline = [
    increment,
    double,
    decrement,
    decrement,
    decrement,
    halve,
    double
];
// 함수들의 이름이 적힌 배열에 reduce 적용
const final_value = pipeline.reduce((accumulator, fn) => {
    return fn(accumulator);
}, initial_value);
console.log(final_value);

// concat: 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새로운 배열을 return
var a = [1,2,3];
var b = [4,5,{name: 'Kevin'}];
var c = a.concat(b);
console.log(c);     // [1, 2, 3, 4, 5, {name: 'Kevin'}]

/**
 * 새로운 배열을 생성할 때, (값이 아닌) 객체 참조를 복사한다
 * 즉, 원본 배열과 새 배열이 같은 객체를 가리키고,
 * 참조된 객체가 수정되면 둘 다 수정된다 => 아래 예제에서 name = 'Bob'으로 변경됨
 * 
 * 객체가 아닌 문자열/숫자일 경우, 값이 복사된다
 * => 아래 예제에서 원본 배열 값을 'power'로 변경했지만 새 배열에 적용 안됨
 */
b[1] = 'power';
b[2].name = 'Bob';
console.log(c);     // [1, 2, 3, 4, 5, {name: 'Bob'}]
console.log(b);     // [4, 'power', {name: 'Bob'}]

// join: 배열의 모든 요소를 연결해 하나의 문자열로 만든다
// 인자로 특정 문자열을 전달하면 구분자로 사용된다
const names = ['Shane', 'Alan', 'Osbourne'];

console.log(names.join(' '));   // Shane Alan Osbourne
console.log(names.join('-'));   // Shane-Alan-Osbourne
console.log(names.join(''));    // ShaneAlanOsbourne
console.log(names.join());      // Shane,Alan,Osbourne (default: comma(,))

let name = 'shane osbourne';
let upper = name.split(' ')
                .map(x => x.charAt(0).toUpperCase() + x.slice(1))
                .join(' ');
console.log(upper);     // Shane Osbourne

// indexOf: 배열에서 지정된 요소를 찾을 수 있는 첫번째 인덱스를 반환하고
// 존재하지 않으면 -1 을 반환
let family = ['Shane', 'Sally', 'Isaac'];
console.log(family.indexOf('Isaac'));   // 2
console.log(family.indexOf('Kittie'));  // -1

const kittieExists = family.indexOf('Kittie') > -1;
if (!kittieExists) {
    family.push('Kittie');
}
console.log(family);    // ['Shane', 'Sally', 'Isaac', 'Kittie']

// 두번째 인자는 검색을 시작할 인덱스 default: 0 (전체검색)
console.log(family.indexOf('Sally', 2));    // -1
console.log(family.indexOf('Sally', 1));    // 1

// object 검사도 가능
let shane = {name: 'Shane'};
let sally = {name: 'Sally'};
let kittie = {name: 'Kittie'};

family = [shane, sally, kittie];
console.log(family.indexOf(kittie));    // 2

// 요소의 모든 항목 찾기
let indices = [];
const array = ['a', 'b', 'a', 'c', 'a', 'd'];
const element = 'a';

// 방법 1
let idx = array.indexOf(element);
while(idx != -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
}

// 방법 2
array.forEach((v, i) => {
    if (v === element) {
        indices.push(i);
    }
});

// slice: 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환
// 원본은 수정되지 않음
let items = [1,2,3,4,5];
let copy = items.slice();

copy[0] = 100;
console.log(items);     // [1, 2, 3, 4, 5]
console.log(copy);      // [100, 2, 3, 4, 5]

let copy2 = items.slice(2, 3);  // [3]
let copy3 = items.slice(2);     // [3,4,5]
let copy4 = items.slice(-2);    // [4,5]
let copy5 = items.slice(1, -1); // [2,3,4]

/**
 * 얕은 복사 vs 깊은 복사
 * shallow copy vs deep copy
 * 
 * - shallow copy(얕은 복사)
 * 변수에 객체를 저장하면, 실제 값이 아니라 객체의 참조값을 저장하게 된다
 * 따라서 객체를 = 을 이용해 복사하면 참조값만 복사되어 원본 객체값이 변경되면 둘 다 영향을 받는다
 * 
 * - deep copy(깊은 복사)
 * 기본 자료형(숫자, 문자열, boolean)을 복사할 때는 값을 완전히 복사한다
 */

// 배열의 깊은 복사 -> slice() 활용
let copyArray = ['a', 'b', 'c'];
var deepCopyArr = Array.prototype.slice.call(copyArray);
copyArray[0] = 'd';
console.log(copyArray);     // ['d', 'b', 'c']
console.log(deepCopyArr);   // ['a', 'b', 'c']

// 그러나, 배열 안 요소가 객체라면 또다시 얕은 복사 발생
let person = {name: 'Shane'};
let personArray = [1, person];
let personCopy = personArray.slice();

personCopy[1].name = 'Sally';
console.log(personArray);     // [1, {name: 'Sally'}]
console.log(personCopy);      // [1, {name: 'Sally'}]

// 객체의 깊은 복사 -> deepCopy() 메소드 구현
const deepCopy = (obj) => {
    let copyObj = {};
    for (let attr in obj) {
        if (obj.hasOwnProperty(attr)) {
            copyObj[attr] = obj[attr];
        }
    }
    return copyObj;
}

