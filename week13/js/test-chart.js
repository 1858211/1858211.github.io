var labels = ['January','February','March','April','May','june'];

var date ={
    labels: labels,
    datasets:[
        {
            label:'初めてのグラフ',
            borderColor: 'rgb(255,100,130)',
            backgroundColor:'rgb(150,50,60)',
            data: [0,10,15,3,60,10],
        }]
};

var confing = {
    type: 'line',
    data,
    options:{}
};

var lineChart = new Chart(
    document.getElementById('lineChart'),
    config,
);