function renderData(timeframe) {
    // variable declaration
    const current = document.querySelectorAll('.current');
    const previous = document.querySelectorAll('.previous');
    // delete data/value and add new data/value
    current.forEach((element, index) => {
        //delete old data/value
        element.textContent = ''
        // add new data/value
        element.textContent = `${data[index].timeframes[timeframe].current}hrs`
    });
    previous.forEach((element, index) => {
        //delete old data/value
        element.textContent = ''
        // add new data/value   
        element.textContent = `Last Week - ${data[index].timeframes[timeframe].previous}hrs`
    });
}

// add new object
let data = [];
// fetch data from json file
fetch('data.json') 
    .then(response => response.json())
    .then(jsonData => {
        data = jsonData;
        renderData('weekly'); // render weekly data by default
        buttonWeekly.style.color = 'white'; // set weekly button to active by default
    });
// get buttons 
const buttonDaily = document.querySelector('#daily');
const buttonWeekly = document.querySelector('#weekly');
const buttonMonthly = document.querySelector('#monthly');
// add event listener to buttons
buttonDaily.addEventListener('click', () => {
    buttonDaily.style.color = 'white';
    buttonWeekly.style.color = 'hsl(236, 100%, 87%)';
    buttonMonthly.style.color = 'hsl(236, 100%, 87%)';
    renderData('daily');
});
buttonWeekly.addEventListener('click', () => {
    buttonWeekly.style.color = 'white';
    buttonDaily.style.color = 'hsl(236, 100%, 87%)';
    buttonMonthly.style.color = 'hsl(236, 100%, 87%)';
    renderData('weekly')
});
buttonMonthly.addEventListener('click', () =>  {
    buttonMonthly.style.color = 'white';
    buttonDaily.style.color = 'hsl(236, 100%, 87%)';
    buttonWeekly.style.color = 'hsl(236, 100%, 87%)';
    renderData('monthly')
});