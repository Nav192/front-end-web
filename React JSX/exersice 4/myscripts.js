// Komponen Header
const Header = () => {
    return (
        <header className="header">
            <h1>Buat Header Menggunakan JSX</h1>
            <p>Tutorial JSX Sederhana</p>
        </header>
    );
};

// Komponen Tabel
const Table = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Gender</th>
                    <th>Jurusan</th>
                    <th>No. WA</th>
                    <th>Alamat</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Gosal, Navys</td>
                    <td>Laki-Laki</td>
                    <td>Sistem Informasi</td>
                    <td>085288223322</td>
                    <td>Tumaluntung</td>
                </tr>
            </tbody>
        </table>
    );
};

// Komponen utama (App)
const App = () => {
    return (
        <div>
            <Header />
            <Table />
        </div>
    );
};

// Render komponen utama ke DOM
ReactDOM.render(<App />, document.getElementById('app'));