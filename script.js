// const input = document.querySelectorAll('input');

// input.forEach((element) => {
//   element.addEventListener('focus', () => {
//     document.getElementById('stop1').setAttribute('stop-color', 'blue');
//     document.getElementById('stop2').setAttribute('stop-opacity', '0');
//   });

//   element.addEventListener('blur', () => {
//     document.getElementById('stop1').setAttribute('stop-color', 'cyan');
//     document.getElementById('stop2').setAttribute('stop-opacity', '0');
//   });
// });

document.getElementById('storage')
document.getElementById('greetings')
 const openWork = () => {
  greetings.style.display = 'none'
  storage.style.display = 'block'
 }


 document.addEventListener("DOMContentLoaded", function() {
  var impo = document.getElementById('impo');
  
  setTimeout(function() {
    impo.style.display = 'none';
  }, 10000); 
});

document.getElementById('images')
document.getElementById('showings')
 const showTodo = () => {
    images.style.display = 'none'
    showings.style.display = 'block'
    charter.style.display = 'none'
    searchInput.style.display = 'block'
 }
 const showImage = () => {
    showings.style.display = 'none'
    images.style.display = 'block'
    charter.style.display = 'none'
    searchInput.style.display = 'none'
 }

 const showStatistics = () => {
   showings.style.display = 'none'
    images.style.display = 'none'
    charter.style.display = 'block'
    searchInput.style.display = 'none'
 }

let fileStatistics = {
   "Images": 0,
   "Videos": 0,
   "Audio": 0,
   "Documents": 0,
   "Others": 0
 };

 const updateFileStatistics = (fileType) => {
   fileStatistics[fileType]++;
   
   updateChart();
 };
 

 const updateChart = () => {
   // Extract labels and values from fileStatistics object
   const labels = Object.keys(fileStatistics);
   const values = Object.values(fileStatistics);
   const colors = ["gold", "black", "silver", "purple", "blue"];
   
   // Update the chart data
   myChart.data.labels = labels;
   myChart.data.datasets[0].data = values;
   myChart.data.datasets[0].backgroundColor = colors;
   
   // Update the chart
   myChart.update();
 };
 
 // Create a new Chart instance
 const ctx = document.getElementById('myChart').getContext('2d');
 const myChart = new Chart(ctx, {
   type: 'pie',
   data: {
     labels: Object.keys(fileStatistics),
     datasets: [{
       backgroundColor: ["gold", "black", "silver", "purple", "blue"],
       data: Object.values(fileStatistics)
     }]
   },
   options: {
     title: {
       display: true,
       text: "File Upload Statistics",
       fontFamily: "Arial", 
      fontSize: 20,         
      fontColor: "cyan",   
      fontStyle: "bold",  
      padding: 20  
     }
   }
 });
 
 // Example of updating file statistics when an image is uploaded
 // This function should be called whenever a file is uploaded
 const handleFileUpload = (fileType) => {
   updateFileStatistics(fileType);
 };
 
 // Example usage:
 // Call handleFileUpload with the type of the uploaded file
 handleFileUpload("Images");


function filterTodos(searchQuery) {
  const todos = document.querySelectorAll('.picture');

  todos.forEach(todo => {
    const todoContent = todo.querySelector('.text-info').textContent.toLowerCase();
    const todoDescription = todo.querySelector('p').textContent.toLowerCase();

    if (todoContent.includes(searchQuery) || todoDescription.includes(searchQuery)) {
      // Show todo if it matches the search query
      todo.style.display = 'block';
    } else {
      todo.style.display = 'none';
    }
  });
}

document.getElementById('searchInput').addEventListener('input', (event) => {
  const searchQuery = event.target.value.trim().toLowerCase();
  filterTodos(searchQuery);
});

 