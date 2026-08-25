

let ambilSeksi1=document.getElementById("konten2");
let konten=ambilSeksi1.getElementsByTagName("section");
let deskripsi=[];
let gambar=[];

deskripsi[0]="pada bagian ini anda diharapkan untuk melihat harga barang terlebih dahulu, pembeli wajib memerhatikan harga barang apakah sesuai dengan fisik barang yang sesuai di pasaran jepang";

deskripsi[1]="pembeli diharapkan mengecek deskripsi barang guna untuk menyesuaikan apak sudah cocok untuk di beli atau belum";

deskripsi[2]="pembeli diharapkan untuk mengecek kondisi barang apakah sesuai dengan yang diharapkan untuk dibeli, cek kondisi apakah masih baru atau bekas";

deskripsi[3]="setelah pembeli melakukan cek harga, pembeli diharapkan untuk mengecek pajak (tax) dan juga ongkir lokal yang tertera di pada deskripsi web";

deskripsi[4]="setelah melakukan pengecekan harga dan kondisi barang jika melewati tahap itu semua, pembeli dapat langsung melakukan order ke kami dengan rate barang di angka 180 yang dimana sudah termasuk shipping dan masuk indonesia, dan masih diluar ongkir lokal indonesia";

gambar[0]="gambar/tut1.jpeg";
gambar[1]="gambar/tut2.jpeg";
gambar[2]="gambar/tut3.jpeg";
gambar[3]="gambar/tut4.jpeg";
gambar[4]="gambar/jadi.jpeg";

for(let i=0;i<konten.length;i++){
	konten[i].getElementsByTagName("p")[0].innerHTML=deskripsi[i];
	
	konten[i].getElementsByTagName("img")[0].setAttribute("src",gambar[i]);
}

let ambilkonten0=document.getElementById("konten1");
ambilkonten0.getElementsByTagName("p")[0].innerHTML="Jasa titip bakul jepun adalah jasa titip barang atau yang biasa kita kenal dengan impor. Kami membantu anda untuk mempermudah order barang dari luar negeri khususnya di negara Jepang. Jasa titip kami sudah ada sejak tahun 2019 dan kami sudah melayani ratusan customer kami. Anda bisa menghubungi kami jika ada yang masih belum paham tentang dunia jastip ini, khususnya bagi kalian yang baru terjun di dunia jastip ini. Admin bisa membatu kalian untuk menggunakan jasa ini.";

let konten1isi=document.getElementById("konten0").getElementsByTagName("p")[0];
konten1isi.innerHTML="selamat datang di web resmi jasa titip bakul jepun, di web ini kalian akan dipandu cara langkah langkah order barang dari luar negeri melalui kami sehingga kalian dapat order barang dengan mudah dan nyaman";

let konten4=document.getElementById("konten4");
konten4.getElementsByClassName("konten4p")[0].innerHTML="untuk estimasi kedatangan barang tiba di tangan customer yakni maksimal di 3 bulan, karena barang melakukan proses seperti pemenuhan cargo bagasi, jadwal penerbangan serta pengecekan masuk barang ke Indonesia selanjutnya barang akan dibongkar dan dipilah sesuai alamat tujuan pembeli";

let konten5=document.getElementById("konten5");
konten5.getElementsByClassName("gabungGrup")[0].innerHTML="grup kami dibagi menjadi 2 yakni online order saja dan juga [online dan live order]. Grup kami yang live order berisi barang barang live order yang dimana admin 1 akan berkeliling toko toko di jepang dan memotret barang barang untuk ditawarkan kepada kalian, bagi kalian yang suka dan cocok dengan barang hasil tawaran live order bisa langsung di take tanpa ada biaya tambahan ongkir lokal maupun tax (pajak). Jadi tunggu apalagi segera gabung grup kami meski hanya iseng iseng gabung saja tidak masalah dan diperkenankan juga membahas diluar jastip kami walau hanya sekedar ingin tau sekedar nimbrung juga tidak masalah, grup di bebaskan.";

let konten2a=document.getElementById("konten2a");
konten2a.getElementsByTagName("p")[0].innerHTML="ketentuan bagi untuk free pajak dan bebas ongkir lokal japan adalah barang live order dan barang online order yang tertera label bebas pajak dan bebas ongkir lokal jepang, dan biasanya tertulis di halaman web tersebut harap diperhatikan sebelum membeli barang melalui online order";

let konten6=document.getElementById("konten6");
konten6.getElementsByTagName("p")[0].innerHTML="jika ada kendala terkait barang atau seputar jasa kami bisa langsung hubungi kami";

function peringatan(){
	alert("sementara admin 1 sibuk");
}
