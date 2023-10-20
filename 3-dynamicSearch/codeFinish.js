

const api = 
`https://gist.githubusercontent.com/VasilyMur
/43ef6df83bba694f871f11a16ed7556d/raw/
b6edff674e35452d6c57ec64177a558f7adb432e/moscowSubway.json`;

const stations = [];


fetch(api).then(res => res.json()).then(data => {
  // metro = data;
  // metro.push(...data)

  data.forEach(line => {
    stations.push(...line.stations);
  })

});


function getOptions(word, metro) {
  return stations.filter(s => {
    // Определить совпадает ли то что мы вбили в input 
    // станциям внутри массива
    // return s.name.match(/арбат/i);
    const regex = new RegExp(word, 'gi');
    return s.name.match(regex);
  })
}

function displayStations() {
  console.log(this.value);
  const options = getOptions(this.value, stations);
  console.log('options >>>> ', options);

  const html = options.map(station => {
    const regex = new RegExp(this.value, 'gi');
    const stationName = 
      station.name.replace(regex, `<span class="hl">${this.value}</span>`)

    return `
      <li><span>${stationName}</span></li>
    `;
  }).slice(0, 10).join('');

  searchOptions.innerHTML = this.value ? html : null;
}

const searchInput = document.querySelector('.search');
const searchOptions = document.querySelector('.options');

searchInput.addEventListener('change', displayStations);
searchInput.addEventListener('keyup', displayStations);

console.log('stations >>> ', stations);