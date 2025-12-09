// Sales Line Chart
const salesChart = new Chart(document.getElementById('salesChart'), {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [{
      label: 'Sales',
      data: [10, 20, 15, 25],
      borderColor: '#4b6cb7',
      fill: false,
      tension: 0.3
    }]
  }
});

// Users Bar Chart
const usersChart = new Chart(document.getElementById('usersChart'), {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu'],
    datasets: [{
      label: 'Users',
      data: [5, 10, 8, 12],
      backgroundColor: '#ff6b6b'
    }]
  }
});

// Revenue Pie Chart
const revenueChart = new Chart(document.getElementById('revenueChart'), {
  type: 'pie',
  data: {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [{
      label: 'Revenue',
      data: [30, 50, 20],
      backgroundColor: ['#4b6cb7', '#ff6b6b', '#f7b32b']
    }]
  }
});
