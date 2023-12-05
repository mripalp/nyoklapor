import { createAccountTemplate } from '../templates/template-creator';

// let lastView = 'dashboard';

const AccountPage = {
  // updateHorizontalBarChart(laporanPerBulan) {
  //   const ctx = document.getElementById('horizontalBarChart').getContext('2d');
  //   const existingChart = Chart.getChart(ctx);
  //   if (existingChart) {
  //     existingChart.destroy();
  //   }

  //   // eslint-disable-next-line no-unused-vars
  //   const myChart = new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //       labels: laporanPerBulan.map((item) => item.bulan),
  //       datasets: [{
  //         label: 'Total Laporan',
  //         data: laporanPerBulan.map((item) => item.jumlah),
  //         backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //         borderColor: 'rgba(75, 192, 192, 1)',
  //         borderWidth: 1,
  //       }],
  //     },
  //     options: {
  //       maintainAspectRatio: true, // Menonaktifkan aspek rasio
  //       scales: {
  //         x: {
  //           beginAtZero: true,
  //         },
  //         y: {
  //           beginAtZero: true,
  //         },
  //       },
  //     },
  //   });
  // },

  // updateChart(chartData) {
  // // Hancurkan grafik sebelumnya jika sudah ada
  //   const existingChart = Chart.getChart('waveChart');
  //   if (existingChart) {
  //     existingChart.destroy();
  //   }

  //   const ctx = document.getElementById('waveChart').getContext('2d');
  //   // eslint-disable-next-line no-unused-vars
  //   const myChart = new Chart(ctx, {
  //     type: 'line',
  //     data: {
  //       labels: chartData.labels,
  //       datasets: [{
  //         label: 'Total Pengguna',
  //         borderColor: 'rgba(75, 192, 192, 1)',
  //         backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //         data: chartData.values,
  //       }],
  //     },
  //     options: {
  //       maintainAspectRatio: true, // Menonaktifkan aspek rasio
  //       scales: {
  //         x: {
  //           type: 'category',
  //           labels: chartData.labels,
  //         },
  //         y: {
  //           beginAtZero: true,
  //         },
  //       },
  //       plugins: {
  //         legend: {
  //           display: true,
  //           position: 'top',
  //         },
  //       },
  //     },
  //   });
  // },

  // loadDashboardData() {
  // // Contoh penggunaan fetch untuk mendapatkan data dari API
  // // Misalnya, menggunakan data statis untuk daftar bulan dan total laporan
  //   const laporanPerBulan = [
  //     { bulan: 'Januari', jumlah: 20 },
  //     { bulan: 'Februari', jumlah: 35 },
  //     { bulan: 'Maret', jumlah: 15 },
  //   // ... tambahkan bulan dan total laporan lainnya
  //   ];

  //   // Contoh data untuk grafik total pengguna
  //   const chartData = {
  //     labels: ['Januari', 'Februari', 'Maret'],
  //     values: [50, 75, 30],
  //   };

  //   // Memperbarui konten di Card 1 dan Card 2 sesuai dengan respons API
  //   document.getElementById('jumlahLaporan').textContent = '100'; // Isi dengan data sesuai kebutuhan
  //   document.getElementById('rataLaporan').textContent = '25'; // Isi dengan data sesuai kebutuhan

  //   // Memperbarui chart di Card 3 sesuai dengan respons API
  //   this.updateHorizontalBarChart(laporanPerBulan);

  //   // Memperbarui konten di Card 4 (grafik) sesuai dengan respons API
  //   this.updateChart(chartData);
  // },

  changeView(view) {
    // document.getElementById('dashboardView').style.display = 'none';
    // document.getElementById('akunView').style.display = 'none';
    // document.getElementById('totalLaporanView').style.display = 'none';

    document.querySelectorAll('#sidebar button').forEach((btn) => {
      btn.classList.remove('active');
    });

    const button = document.querySelector(`#sidebar button[data-view="${view}"]`);
    if (button) {
      button.classList.add('active');
    }

    // if (view === 'dashboard') {
    //   this.loadDashboardData();
    // } else if (view === 'akun') {
    // // Load data untuk tampilan Akun jika diperlukan
    // } else if (view === 'totalLaporan') {
    // // Load data untuk tampilan Total Laporan jika diperlukan
    // }

    // const selectedView = document.getElementById(`${view}View`);
    // if (selectedView) {
    //   selectedView.style.display = view === 'dashboard' ? 'grid' : 'flex';
    // }

    // if (lastView !== view) {
    //   window.scrollTo(0, 0);
    // }

    // lastView = view;
  },

  async render() {
    return `
  <section>
    <div id="admin-container" class=" bg-gray-200 font-sans flex flex-col lg:flex-row lg:h-full">
        <div id="sidebar" class="hidden lg:flex flex-col bg-white text-white p-4">
            <img src="./assets/icons/nyoklapor-icon.png" alt="Logo" class="ml-10 mb-6 w-20 h-10">

            <img src="./assets/images/Ripal.jpg" alt="Admin" class="ml-10 mb-4 w-16 h-16 rounded-full">
            <p class="text-sm text-black mb-4 ml-14 uppercase font-black">ripal</p>
            <ul>
                <li class="mb-2">
                    <button id="dashboard-button" class="flex items-center text-white rounded-full" data-view="dashboard">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16m-7 6h7">
                            </path>
                        </svg>
                        <a href="#/admin" id="home" class="flex items-center text-black rounded-full">Dashboard</a>
                        <!-- <img class="mr-3" src="./assets/icons/icon-dashboard.png" alt=""> -->
                    </button>
                </li>
                <li class="mb-2">
                    <button id="account-button" class="flex items-center text-white rounded-full" data-view="akun">
                        <a href="#/account" id="home"></a>    
                    <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" height="16" width="14"
                            viewBox="0 0 448 512">
                            <path
                                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                        </svg>
                        <!-- <img class="mr-3" src="./assets/icons/Icon user settings.png"> -->
                        <a href="#/account" id="home" class="flex items-center text-black rounded-full">Akun</a>
                    </button>
                </li>
                <li class="mb-2">
                    <button id="total-laporan-button" class="flex items-center text-white rounded-full"
                        data-view="totalLaporan">
                        <!-- <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 6s2-4 5.5-4 5.5 4 5.5 4S21 9 21 12s-2.5 10-9 10-9-2-9-5 2-5 5.5-5zm-1 0h2"></path>
            </svg> -->
                        <img class="mr-3 w-5" src="./assets/icons/icon-total-black.png">
                        <a href="#/report" id="home" class="flex items-center text-black rounded-full">Total Laporan</a>
                    </button>
                </li>
            </ul>
        </div>

        <div id="content" class="lg:w-3/4 w-full p-8">
            <!-- Navbar -->
            <div class="flex justify-between items-center flex-col lg:flex-row mb-8">
                <!-- Pindahkan kotak pencarian ke sini -->
                <input type="text" class="p-2 border rounded-md mr-4 lg:w-1/2 w-full" placeholder="Cari...">

                <div class="flex items-center">
                    <button class="bg-white text-black font-bold p-2 rounded-md hover:bg-blue-900">Keluar</button>
                </div>
            </div>

            <!-- Tampilan Dashboard -->
            <div id="akunView">
            </div>
        </div>
    </div>
</section>
    `;
  },

  async afterRender() {
    const AccountPageContainer = document.querySelector('#akunView');
    AccountPageContainer.innerHTML = createAccountTemplate();

    const dashboardButton = document.getElementById('dashboard-button');
    const accountButton = document.getElementById('account-button');
    const totalLaporanButton = document.getElementById('total-laporan-button');
    const buttonAccount = document.querySelector('#sidebar button[data-view="akun"]');
    const buttonDashboard = document.querySelector('#sidebar button[data-view="dashboard"]');
    const buttonTotalLaporan = document.querySelector('#sidebar button[data-view="totalLaporan"]');
    dashboardButton.addEventListener('click', () => {
      buttonDashboard.classList.add('active');
      buttonAccount.classList.remove('active');
      buttonTotalLaporan.classList.remove('active');
    });
    accountButton.addEventListener('click', () => {
      buttonAccount.classList.add('active');
      buttonDashboard.classList.remove('active');
      buttonTotalLaporan.classList.remove('active');
    });
    totalLaporanButton.addEventListener('click', () => {
      buttonTotalLaporan.classList.add('active');
      buttonAccount.classList.remove('active');
      buttonDashboard.classList.remove('active');
    });
  },
};

export default AccountPage;
