const createAdminTemplate = () => `
        <!-- Card 1: Jumlah Laporan per Hari -->
        <div id="card1" class="bg-gray-800 text-white p-4 rounded-md shadow-md dashboard-card">
            <h2 class="text-xl font-semibold mb-4">Jumlah Laporan per Hari</h2>
            <p class="text-4xl font-bold" id="jumlahLaporan">Loading...</p>
        </div>

        <!-- Card 2: Rata-rata Laporan Berhasil -->
        <div id="card2" class="bg-blue-900 p-4 text-white rounded-md shadow-md dashboard-card">
            <h2 class="text-xl font-semibold mb-4">Rata-rata Laporan Berhasil</h2>
            <p class="text-4xl font-bold" id="rataLaporan">Loading...</p>
        </div>

        <!-- Card 3: Tabel Total Laporan per Bulan -->
        <div id="card3" class="bg-white p-4 rounded-md shadow-md dashboard-card">
            <h2 class="text-xl font-semibold mb-4">Total Laporan per Bulan (Tahun Ini)</h2>
            <div style="max-height: 300px; overflow-y: auto;">
                <!-- Dummy Horizontal Bar Chart Goes Here -->
                <canvas id="horizontalBarChart" style="height: 200px;"></canvas>
            </div>
        </div>

        <!-- Card 4: Bagan Ombak Total Pengguna per Bulan -->
        <div id="card4" class="bg-white p-4 rounded-md shadow-md dashboard-card">
            <h2 class="text-xl font-semibold mb-4">Total Pengguna per Bulan</h2>
            <!-- Chart Goes Here -->
            <canvas id="waveChart" style="height: 150px;"></canvas>
        </div>
        `;

const createAccountTemplate = () => `
    <!-- Tampilan Akun -->
        <h2 class="text-xl font-semibold mb-4">Daftar User</h2>
        <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 border">
                <!-- Tambahkan kelas "border" pada tabel untuk menambahkan batas keseluruhan -->
                <thead class="bg-gray-800 text-white">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border">
                            No
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border">
                            Profil
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border">
                            Nomor Laporan
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 text-center">
                    <!-- Contoh baris data (gantilah dengan data sebenarnya) -->
                    <!-- Tambahkan baris data lainnya sesuai kebutuhan -->
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap border">1</td>
                        <td class="px-6 py-4 whitespace-nowrap border w-8"><img src="./assets/images/TONNY .jpg"
                                alt="foto tonny">
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap border">S621YB444@dicoding.org</td>
                        <td class="px-6 py-4 whitespace-nowrap border">11</td>
                        <td class="px-6 py-4 whitespace-nowrap border">
                            <button class="bg-green-500 text-white px-4 py-2 rounded-md mr-2">Setuju</button>
                            <button class="bg-red-500 text-white px-4 py-2 rounded-md">Tolak</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap border">2</td>
                        <td class="px-6 py-4 whitespace-nowrap border w-8"><img src="./assets/images/hazron.png"
                                alt="foto hazron">
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap border">F226YB373@dicoding.org</td>
                        <td class="px-6 py-4 whitespace-nowrap border">12</td>
                        <td class="px-6 py-4 whitespace-nowrap border">
                            <button class="bg-green-500 text-white px-4 py-2 rounded-md mr-2">Setuju</button>
                            <button class="bg-red-500 text-white px-4 py-2 rounded-md">Tolak</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap border">3</td>
                        <td class="px-6 py-4 whitespace-nowrap border w-8"><img src="./assets/images/Yova.jpg" alt="foto Yova">
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap border">F226YB208@dicoding.org</td>
                        <td class="px-6 py-4 whitespace-nowrap border">13</td>
                        <td class="px-6 py-4 whitespace-nowrap border">
                            <button class="bg-green-500 text-white px-4 py-2 rounded-md mr-2">Setuju</button>
                            <button class="bg-red-500 text-white px-4 py-2 rounded-md">Tolak</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
const createTotalReportTemplate = () => `
    <!-- Tampilan Total Laporan -->
        <h2 class="text-xl font-semibold mb-4">Total Laporan</h2>
        <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 border">
                <!-- Tambahkan kelas "border" pada tabel untuk menambahkan batas keseluruhan -->
                <thead class="bg-gray-800 text-white">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border">
                            No
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border">
                            Lampiran
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border">
                            Judul Lampiran
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border">
                            Rincian Laporan
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border">
                            Tanggal Lokasi
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 text-center">
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap border">1</td>
                        <td class="px-2 py-2 whitespace-nowrap border w-8"><img src="./tawuran.webp" alt="tawuran"></td>
                        <td class="px-6 py-4 whitespace-nowrap border">Judul Laporan 1</td>
                        <td class="px-6 py-4 whitespace-nowrap border">Judul Laporan 1</td>
                        <td class="px-6 py-4 whitespace-nowrap border">2023-11-25</td>
                        <td class="px-6 py-4 whitespace-nowrap border">Diproses</td>
                    </tr>
                </tbody>
            </table>
        </div>
`;

export { createAdminTemplate, createAccountTemplate, createTotalReportTemplate };
