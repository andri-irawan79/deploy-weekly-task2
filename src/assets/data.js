export const dataSection = {
    status: 'ok',
    totalResult: 8,
    section: [
        // section 1
        {
            id: 1,
            title: 'Vue Fundamental',
            study: [
                {
                    materi: 'Pengenalan Vue'
                },
                {
                    materi: 'Dasar-dasar Vue'
                },
                {
                    materi: 'Computed properties dan Watchers'
                }
            ],
            babSection: [
                {   
                    judul: 'Pengenalan Vue',
                    materi: 'Vue adalah framework dari javascript untuk mengembangkan tampilan website yang lebih interaktif dan dinamis. Untuk menggunakan Vue terdapat dua cara yaitu dengan menggunkan CDN dan Vue CLI.',
                    subBab: [
                        {   
                            judul: 'Alasan menggunkan vue',
                            descripsi: 'Mudah membuat aplikasi frondend dan website, Mudah dipelajari dan menyenangkan, Mempunyai dokumentasi yang lengkap dan rapi, Ramping dan cepat dan Poluler (Banyak di pakai perusahaan-perusahaan besar).'
                            
                        },
                    ]
                },
                {   
                    judul: 'Dasar-dasar Vue',
                    materi: 'Vue Instance, Vue data Binding dan Vue Reactivity.',
                    subBab: [
                        {
                            judul: 'Vue instance',
                            descripsi: 'Setiap aplikasi vue dimulai dengan membuat instance Vue baru dengan fungsi vue. Contoh "var vm = new Vue ({ //option })".'
                        },
                        {
                            judul: 'Vue Data Binding',
                            descripsi: 'Vue menggunkan sintaks template berbasis HTML yang memungkinkan kita untuk secara deklaratif mengikat DOM yang dirender ke data intance vue yang mendasarinya.'
                        },
                    ]
                },
                {   
                    judul: 'Vue Reactive',
                    materi: 'Directive adalah atribut khusus yang diawali dengan " v- ". Directive berfungsi untuk menjalankan satu perintah atau ekspresi javascript didalam atribut.',
                    subBab: [
                        {
                            judul: 'V-Bind',
                            descripsi: 'v-bind adalah directive untuk memberitahu vue kalau kita ingin melakuakan one way data binding.'
                        },
                        {
                            judul: 'V-Model',
                            descripsi: 'v-model adalah directive untuk memberi tahu vue kita ingin melakukan two way data binding.'
                        },
                        {
                            judul: 'V-If, V-Else-If dan V-Else',
                            descripsi: 'v-if, v-else, dan v-else-if directif adalah directive untuk melakukan rendering secara kondisional.'
                        },
                        {
                            judul: 'V-On ',
                            descripsi: 'v-on directive adalah directive untuk memberitahu vue kalau kita ingin memenggil fungsi. Kita dapat menggunakan dective v-on untuk mendengarkan peristiwa DOM dan menjalankan beberapa javascript saat di picu.'
                        },
                        {
                            judul: 'V-For',
                            descripsi: 'v-for adalah directive untuk memberitahu vue kita ingin melakukan pengulangan.'
                        },
                    ]
                },
                {   
                    judul: 'Computed propeties dan watchers ',
                    materi: '',
                    subBab: [
                        {
                            judul: 'Computed propeties',
                            descripsi: 'Memberikan terlalau banyak logika secara langsung di template dapat menyebabkan menjadi berat dan susah untuk dipelihara. Sehingga ada yang namanya computed properties untuk lagika yang kompleks.'
                        },
                        {
                            judul: 'Watchers',
                            descripsi: 'Watchers adalah fitur khusus yang memungkinkan kita untuk memantau sebuah variabel dan melakukan tindakan tertentu ketika nilai tersebut berubah.'
                        },
                        {
                            judul: 'Component',
                            descripsi: 'Component adalah vue instance yang dapat digunakan kembali dengan nama yang kita definisikan. Kita bisa menggunakan komponen ini sebagai kustom elemen di dalam instance root vue yang dibuat dengan new Vue.'
                        },
                    ]
                }
            ],
            task: {
                instruksi: [
                    {
                        task: 'Buatlah sebuah todo list'
                    },
                    {
                        task: 'Dengan kondisi visual memiliki sebuah input dan sebuah tombol. Menampilkan list todo yang sudah di tambahkan dan reset (kosongkan input setelah tombol diklik).'
                    },
                    {
                        task: 'Jika list sudah dimasukkan sama dengan atau lebih besar, maka akan menampilkan kata (hebat!) dibawah input.'
                    }, 
                ],
                image: [
                    {
                        urlToImg: 'http://drive.google.com/uc?export=view&id=1XiJrwHHj0_4dgRJ5d5q9SP7492qQZgXW'
                    },
                    {
                        urlToImg: 'http://drive.google.com/uc?export=view&id=1sreamkgBuusL7UBM-nWFtvUW2UNTGz3M'
                    },
                    {
                        urlToImg: 'http://drive.google.com/uc?export=view&id=1zTAS4hSCk0uymvwth2lZTOLKf5dRnyEI'
                    },
                ],
                linkRepoTask: 'https://github.com/andri-irawan79/vue_andri-irawan/blob/task/11_Vue%20Fundamental/praktikum/index.html',
            },
        },
        // section 1 selesai

        // section 2
        {
            id: 2,
            title: 'Vue CLI',
            study: [
                {
                    materi: 'Vue CLI'
                },
                {
                    materi: 'Vue komponen file tunggal'
                },
                {
                    materi: 'Vue Structure Folder'
                }
            ],
            babSection: [
                {   
                    judul: 'Vue CLI (Command Line Interface)',
                    materi: 'Vue CLI adalah perkakas standar untuk memudahkan penyetelan/pembuatan aplikasi Vue baru. Vue CLI menggunakan webpack (sebuah module bundler, digunakan untuk menggabungkan seluruh modul projek aplikasi berupa file Javascript, HTML, CSS, gambar dan lain-lain menjadi satu file atau file bertipe sama).',
                    subBab: [
                        {   
                            judul: 'Mamasang Vue CLI',
                            descripsi: 'Untuk memasang Vue CLI pada perangkat kita jalankan perintah : <strong> $ npm install -g @vue/cli </strong>.'
                            
                        },
                        {   
                            judul: 'Inisasi aplikasi',
                            descripsi: 'untuk membuat aplikasi baru, jalankan perintah : <strong> $ vue create <nama aplikasi> atau $ vue create </br>.'
                            
                        },
                        {   
                            judul: 'Jalankan Aplikasi',
                            descripsi: 'Menjalankan aplikasi dengan perintah : <strong> $ npm run serve </strong>. Jika proses kompilasi tidak ada error, akan ada log informasi alamat aplikasi yang dapat kita akses kita dapat akses. Seperti : <strong> Local: http://localhost:8080/ dan - Network: http://192.168.43.76:8080/ </strong>.'
                            
                        },
                    ]
                },
                {   
                    judul: 'Vue Komponen File Tunggal',
                    materi: 'Komponen File Tunggal adalah komponen file yang memungkinkan kita mebangun seluruh komponen (structur, gaya dan fungsi) dalam satu file. Dan, sebagian besar editor kode menyediakan penyorotan sintaks dan linting. Komponen file tunggal mempunyai ekstensi ".vue". Terdapat tiga tag utama pada komponen file tunggal :',
                    subBab: [
                        {
                            judul: '<template>',
                            descripsi: 'Fungsinya sama dengan HTML body, memuat dan merender HTML tag pada umumnya.'
                        },
                        {
                            judul: '<script>',
                            descripsi: 'Berfungsi memuat syntax javascript. Juga dapat menerima atribut lang yang biasanya untuk penggunaan Typscript.'
                        },
                        {
                            judul: '<style>',
                            descripsi: 'Berfungsi untuk memuat syntax CSS.juga dapat menerima atribut lang yang bisanya untuk penggunaan CSS preprosesor seperti Stylus, SCSS. Atribut tambahan lainnya adalah scoped, yang berarti CSS hanya akan diterapkan di komponene ini saja.'
                        },
                    ]
                },
                {   
                    judul: 'Vue Struktur Folder',
                    materi: 'Seiring berkembangnya aplikasi dan bertambah kompleksnya aplikasi maka susunan directori bisa berubah sesuai keinginan. Isi dari folder "src" biasanya terdapat :',
                    subBab: [
                        {
                            judul: 'Assets',
                            descripsi: 'Pada direktori ini kita menyimpan semua file aset. Seperti halnya menyimpan font, ikon, gambar, style dan lain-lain.'
                        },
                        {
                            judul: 'Components',
                            descripsi: 'Digunakan untuk menyimpan semua komponen file tungal Vue.'
                        },
                        {
                            judul: 'Router',
                            descripsi: 'Pada direktori ini akan menyimpan semua file yang ikut berkaitan dengan vue-router. Vue-router adalah library untuk mengatur routing alamat aplikasi Vue.'
                        },
                        {
                            judul: 'Store',
                            descripsi: 'Digunakan untuk penyimpanan vuex tempat kita dapat menyimpan semua file terkait vuex(library untuk mengatur penyimpanan state berbasi global pada aplikasi Vue).'
                        },
                        {
                            judul: 'View',
                            descripsi: 'Dialamnya mirip Components yaitu file tunggal namun yang membedakan adalah file tunggal namun yang membedakan adalah, pada directori ini dugunakan sebagai halaman, dimana file didalam directori ini berhubungan langsung dengan router. Sedangkan file di directori  components behubungan langsung dengan file di direktori view atau sesama file di folder components.'
                        },
                        {
                            judul: 'Test',
                            descripsi: 'Directori tests berada diluar "src", kerana directori ini tidak berhubungan langsung dengan file yang dibutuhkan untuk proses pengembangan. Berisi berkas untuk melakukan unit testing komponen atau fungsi yang dapat di dalam directori src.'
                        },
                    ]
                },
            ],
            task: {
                instruksi: [
                    {
                        task: 'Buatlah sebuah todo list dengan menggunakkankomponen file tunggal'
                    },
                    {
                        task: 'Dengan kondisi visual memiliki sebuah input dan sebuah tombol. Menampilkan list todo yang sudah di tambahkan dan reset (kosongkan input setelah tombol diklik).'
                    },
                    {
                        task: 'Jika list sudah dimasukkan sama dengan atau lebih besar, maka akan menampilkan kata (hebat!) dibawah input.'
                    }, 
                    {
                        task: 'Jangan tambahkan ke list jika tombol ditekan namun kolom input masih kosong.'
                    },
                ],
                image: [
                    {
                        urlToImg: 'http://drive.google.com/uc?export=view&id=1OBQqsHmqTqzDfXzdw3bRBBVodyXFoTYH'
                    },
                    {
                        urlToImg: 'http://drive.google.com/uc?export=view&id=1xFviOuRM2JgrYXLVeKJ3ShMICW14WIcg'
                    },
                    {
                        urlToImg: 'http://drive.google.com/uc?export=view&id=1dFrigOG4Uuv10D1ysbKnAimAG-wDFtaB'
                    },
                ],
                linkRepoTask: 'https://github.com/andri-irawan79/vue-cli',
            },
        },
        // section 2 selesai

        // section 3 
        {
            id: 3,
            title: 'Komponen Vue',
            study: [
                {
                    materi: 'Modul Export dan Import'
                },
                {
                    materi: 'Reusebility Component'
                },
                {
                    materi: 'Instance Lifecycle Hooks'
                }
            ],
            babSection: [
                {   
                    judul: 'Module Export dan Import',
                    materi: 'Modul dapat berisi kelas atau pustaka fungsi untuk tujuan tertentu. Modul hanya sebuah file, modul dapat diibaratkan sebagai sebua kontainer dan harusnya tidak boleh berganrung dengan isi yang ada pada modul yang lain. Satu kode script adalah satu modul.',
                    subBab: [
                        {   
                            judul: 'Perbedaan Modul dengan Reguler Script',
                            descripsi: 'Modul dapat memuat satu sama lain dan menggunakan pengarah khusus Export dan Import untuk fungsi pertukaran, memanggil fungsi dari satu modul ke modul yang lain.'
                            
                        },
                        {   
                            judul: 'Export',
                            descripsi: 'Digunakan untuk menyediakan fungsi, objek, atau nilai primitif dari modul sehingga dapat digunakan oleh modul lain dengan peryataan import. Ada 2 tipe export : - Named Export (Export nol atau lebih per modul) dan  - Default Export (Satu per modul).'
                            
                        },
                        {   
                            judul: 'Import',
                            descripsi: 'Digunakan untuk mengambil variabel, objek atau fungsi yang disediakan oleh modul lain.  - Importing defaults (import target), - Import multiple exports (import {target}), - Rename multiple exports (import {target as t}) dan - Import defaults + mutiple (import targetDefault, {target as t}).'
                            
                        },
                    ]
                },
                {   
                    judul: 'Komponen Dapat digunakan kembali (Reusebility component)',
                    materi: 'Sebuah komponen file tunggal vue yang bertujuan untuk dapat di gunakan lebih dari satu kali ditempat yang berbeda. Beberapa ke untungan menggunakan Reusebility component diantanya, Lebih rapih, lebih mudah dirawat dan lebih berkualitas.',
                    subBab: [
                        {
                            judul: 'Directori Komponen',
                            descripsi: 'Pada umumnya komponen dijadikan satu dengan komponen lain dan dipisah dengan komponen yang bertugas sebagai halaman. - Halaman dapat menggunakan komponen namun komponen tidak dapat menggunakan halaman dan - Komponen dapat menggunakan komponen lain.'
                        },
                        {
                            judul: 'Komunikasi anak dan induk komponen',
                            descripsi: 'Untuk mengekspos data induk ke anak dapat dilakukan dengan <strong> props </strong> dan untuk sebaliknya dapat menggunakan <strong> emit </strong>'
                        },
                    ]
                },
                {   
                    judul: 'Instance Lifecycle Hooks',  
                    materi: 'Setiap Vue instance melewati beberapa serangkaian tahapan pada saat dibuat, tahapan pada saat dibuat sebagai Lifecyle atau siklus hidup. Siklis hidup sebuah vue instance berawal ketika inisiasai dan berakhir ketika penghancuran. Setiap siklus mempunyai hooknya masing-masing yang berbentuk fungsi.',
                    subBab: [
                        {
                            judul: 'Created',
                            descripsi: 'Berlangsung setelah instance terbentuk dan sebelum DOM dirender. Contoh pengunaan menambhakan SEO meta dan memasang event listener scroll.'
                        },
                        {
                            judul: 'Mounted',
                            descripsi: 'Berlangsung setelah DOM dirender. Contih penggunaan handling leader.'
                        },
                        {
                            judul: 'Destroyed',
                            descripsi: 'Berlangsung sebelum instance dihancurkan. COntoh penggunaan, Mencopot event listener scroll.'
                        },
                    ]
                },
            ],
            task: {
                instruksi: [
                    {
                        task: 'Buatlah sebuah todo list dengan menggunakkankomponen file tunggal'
                    },
                    {
                        task: 'Dengan kondisi visual memiliki sebuah input yang lebarnya memenuhi layar dan sebuah tombol tambahkan. Masing-masing item memiliki tombol hapus dan edit dengan fungsionalnya.'
                    },
                    {
                        task: 'Jika tombol edit ditekan akan menmpilkan kolom input dan ketika ditekan kembali akan menyimpan perubahan.'
                    }, 
                    {
                        task: 'Jika tombol hapus ditekan, maka list dibawahnya akan naik ke atas menggantikan.'
                    },
                ],
                image: [
                    {
                        urlToImg: 'http://drive.google.com/uc?export=view&id=1IWxi8vQecvPKK2vko_aE8xMDNo7sx20c'
                    },
                    {
                        urlToImg: 'http://drive.google.com/uc?export=view&id=12cz0-c3N5bCDyIGaLj3mIEy3_YdYEoJa'
                    },
                    {
                        urlToImg: 'http://drive.google.com/uc?export=view&id=13HcIbX054n2YEy_pT3SkMKsoC7F-HXmK'
                    },
                    {
                        urlToImg: 'http://drive.google.com/uc?export=view&id=1erixpxbByESvGtqCDUBOLGTzCTc9eFh7'
                    },
                ],
                linkRepoTask: 'https://github.com/andri-irawan79/DEMO-1',
            },
        },
        // section 3 selesai

        // section 4
        {
            id: 4,
            title: 'Vue Helpers',
            study: [
                {
                    materi: 'Navigasi pada vue'
                },
                {
                    materi: 'Layout template vue'
                },
                {
                    materi: 'Penyimpanan Global dan penyimpanan permanen'
                }
            ],
            babSection: [
                {   
                    judul: 'Navigasi Vue',
                    materi: 'Navigasi adalah kegiatan berpindah dan satu halaman ke halaman lain. Poda dasarnya, Vue adalah *Single Page Application* yang berarti hanya ada satu entry halaman HTML saja namun konten dan halaman HTML tersebut dirender ulang (dengan bantuan javascript) sehingga seolah-olah berganti halaman.',
                    subBab: [
                        {   
                            judul: 'Cara vue malakukan Navigasi',
                            descripsi: 'Untuk dapat berpindah ke halaman yang diinginkan, pertama yang perlu dipastikan adalah halaman tersebut ada. Katakanlah kita ingin berpindah halaman dan halaman Home ke halaman About. Kemudian kita bisa membuka halaman About dengan mengetik manual di address bar: /about. Cara yang lebih layak sediakan opsi kontroler pengguna untuk mengakses halaman tersebut dengan link atau tombol.'
                            
                        },
                        {   
                            judul: 'Navigasi Beranak',
                            descripsi: 'Navigasi beranak adalah sub-path dan path yang ada. Ex: /user/setting/privacy.'
                             
                        },
                        {   
                            judul: 'Navigasi Dinamis',
                            descripsi: 'Navigasi dinamis adalah dimana path tersebut memiliki nilai sembarang dan kita tidak perlu mendefinisikan nilainya satu-persatu. Ex: /user/12345613 1237'
                            
                        },
                    ]
                },
                {   
                    judul: 'Layout template vue',
                    materi: 'Layout adalah susunan tata letak, sedangkan layout template pada Vue adalah komponen yang dapat dipakai sebagai susunan tata letak dasar yang membungkus masing-masing halaman. Layout juga dapat diterapkan untuk mengisolasi logika tampilan viewport supaya kode di setiap halaman tetap bersih dan efisien.',
                    subBab: [
                        {
                            judul: 'Layout',
                            descripsi: 'Memuat susunan tata letak yang sama untuk setiap halaman, seperti halnya navbar atau footer.'
                        },
                        {
                            judul: 'Halaman',
                            descripsi: 'Memuat komponen yang berubah ubah sesuai konten halaman, namun sudah tidak perlu lagi menyertakan navbar di setiap komponen view halaman.'
                        },
                        {
                            judul: 'Cara kerja layout template',
                            descripsi: 'Pada dasarnya layout hanyalah komponen biasa, yang membedakan adalah layout dapat meneruskan konten dan anak komponennya.'
                        },
                        {
                            judul: 'Direktori Layout',
                            descripsi: 'Umumnya layout memiliki direktori terpisah sejajar dengan direktori router atau sejajar dengan direktori view.'
                        },
                    ]
                },
                {   
                    judul: 'Penyimpanan Global',  
                    materi: 'Penyimpanan Global adalah sebuah metode untuk menyimpan variabel yang dapat diakses dengan mudah di seluruh bagian aplikasi. State Komponen, hanya tersimpan dan valid pada satu komponen saja. Props, Hanya tersimpan dan valid di induk atau anak komponen saja. Dan Store Tersimpan dan valid di bagian manapun dan aplikasi.',
                    subBab: [
                        {
                            judul: 'Penyimpanan Global dengan Vuex',
                            descripsi: 'Vuex adalah pola manajemen penyimpanan atau store yang berbentuk pustaka untuk aplikasi Vue.js. Cara kerjanya adalah penyimpanan terpusat untuk semua komponen dalam aplikasi. dengan aturan yang memastikan bahwa variabel yang tersimpan hanya dapat dimutasi dengan cara yang terstruktur dan terprediksi.'
                        },
                        {
                            judul: 'Direktori Vuex Store',
                            descripsi: 'Umumnya Vuex store memiliki direktori sendiri bernama store yang sejajar dengan direktori main.js. Selain index.js biasanya di dalam direktori store jugo tersimpan modul-modul store untuk pengelompokan state supaya Iebih rapi dan terstruktur.'
                        },
                        {
                            judul: 'Vuex Action',
                            descripsi: 'Vuex Action bertugas sebagai pintu masuk perintah yang menghubungkan komponen dengan store, Actions perlu memanggil fungsi di Mutations untuk memodifikasi nilai state yang ada di Store. Selain itu, Actions juga tempat untuk melakukan komunikasi dengan API.'
                        },
                        {
                            judul: 'Penyimpanan Global Permanen',
                            descripsi: 'Pada kasus pemakaian tertentu kita perlu mem-permanen-kan state yang ada di store supaya tidak hilang jika halaman dimuat ulang, konsep ¡ni disebut dengan Penyimpanan Global Permanen.'
                        },
                        {
                            judul: 'Vuex-persistedstate',
                            descripsi: 'Vuex-persistedstate dapat mempertahankan dan rehidrasi Vuex state kita di antara pemuatan ulang halaman, dengan menyimpannya di local storage atau bahkan di dalam cookies.'
                        },
                    ]
                },
            ],
            task: {
                instruksi: [
                    {
                        task: 'Buatlah sebuah todo list dengan menggunakkankomponen file tunggal'
                    },
                    {
                        task: 'Dengan kondisi visual memiliki sebuah input yang lebarnya memenuhi layar dan sebuah tombol tambahkan. Masing-masing item memiliki tombol hapus dan edit dengan fungsionalnya.'
                    },
                    {
                        task: 'Jika tombol edit ditekan akan menmpilkan kolom input dan ketika ditekan kembali akan menyimpan perubahan.'
                    }, 
                    {
                        task: 'Jika tombol hapus ditekan, maka list dibawahnya akan naik ke atas menggantikan.'
                    },
                    {
                        task: 'List tidak boleh hilang meskipun halaman dimuat ulang.'
                    },
                    {
                        task: 'Jika judul salah satu list diklik, maka navigasi ke halaman detail.'
                    },
                    {
                        task: 'Desktipsi dapat diubah'
                    },
                    {
                        task: 'Setelah diubah deskripsi tidak boleh hilang jika dimuat ulang.'
                    },
                    {
                        task: 'Tampilan tdak harus sama persis namun usahakan rapi'
                    },
                    {
                        task: 'Fungsionalitas data tidak hilang ketika refresh dan halaman detail harus ada.'
                    },
                ],
                image: [
                    {
                        urlToImg: 'http://drive.google.com/uc?export=view&id=17SOGqZ_0_3UPmZhTNenEf-u-xluS8ui3'
                    },
                    {
                        urlToImg: 'http://drive.google.com/uc?export=view&id=1RTPOSw9QjAQ2aM7ogrrWy6V8lnP2AYPi'
                    },
                    {
                        urlToImg: 'http://drive.google.com/uc?export=view&id=1ZaxFor8I6SXpx2DCFq-DA23axoqeZKys'
                    },
                    {
                        urlToImg: 'http://drive.google.com/uc?export=view&id=1Jtrv7ktiJXuZoUlT7dYLdq9l-zrnlaRC'
                    },
                    {
                        urlToImg: 'http://drive.google.com/uc?export=view&id=1KaQt-LBMhVRwTsfCXV513lmR0GRELUc7'
                    },
                    {
                        urlToImg: 'http://drive.google.com/uc?export=view&id=1d8Bmxm5XyhEEynbYbCJ2Mxw2QKv2APYN'
                    }
                ],
                linkRepoTask: 'https://github.com/andri-irawan79/vue-helpers-todo',
            },
        },
        // section 4 selesai

        //  section 5
        {
            id: 5,
            title: 'Vue Data',
            study: [
                {
                    materi: 'Data Fetching.'
                },
                {
                    materi: 'Penanganan Data Error'
                },
                {
                    materi: 'Validasi dan Authentikasi.'
                }
            ],
            babSection: [
                {   
                    judul: 'Data Fetching',
                    materi: 'Data Fetching adalah pengambilan data oleh program perangkat lunak atau skrip. Setelah diambil, data dipindahkan ke lokasi alternatif atau ditampilkan di layar. Singkatan dan Application Programming Interface yaitu sebuah protokol pada dasarnya menyediakan bahasa dan kontrak untuk bagaimana dua sistem berinteraksi.',
                    subBab: [
                        {   
                            judul: 'API Endpoint',
                            descripsi: 'Saat API berinteraksi dengan sistem lain, titik kontak dan komunikasi ini dianggap sebagai Endpoint, yang berbentuk Link.'
                            
                        },
                        {   
                            judul: 'Axios',
                            descripsi: 'Axios adalah sebuah pustaka yang dipakai front-end untuk melakukan HTTP Request kepada link API Endpoint.'
                             
                        },
                        {   
                            judul: 'Request Queries',
                            descripsi: 'Jika Request adalah permohonan pengambilan data maka Request Queries adalah syarat yang menyatakan data seperti apa yang ingin diambil. Ex: <i> https://pokeapi.co/api/v2/pokemon?Iimit=20&offset=O</i>.'
                            
                        },
                    ]
                },
                {   
                    judul: 'Penanganan Data Error',
                    materi: 'JavaScript adalah bahasa yang memiliki tipe data dinamis. Tidak memberikan kesalahan ketika kompilasi, jadi beberapa kali kita akan mendapatkan runtime-error untuk mengakses variabel atau fungsi yang undefined. Penanganan data error adalah konsep untuk mencegah terjadinya runtime-error.',
                    subBab: [
                        {
                            judul: 'Try, Catch dan Finally',
                            descripsi: 'Try Catch Finally adalah metode penanganan error bawaan dan Javascript.'
                        },
                        {
                            judul: 'Promise',
                            descripsi: 'Objek Promise mewakili penyelesaian (atou kegagalan) akhirnya dan operasi asinkron dan nilai yang dihasilkannya. Aktivitas berkomunikasi dengan API pada umumnya berbentuk promise. Cara Cara Kerja promise:  fungsiPromise().then(res => {}).catch(err => {});'
                        },
                    ]
                },
                {   
                    judul: 'Validasi Data dan Autentikasi',  
                    materi: 'Validasi Data Adalah konsep untuk melakukan pengecekan terhadap data apakah sudah sesuai dengan kriteria atau belum, terutama pada input pengguna. Cara kerja validasi data, Fungsi validasi menerima nilal yang ingin dicek kemudian mengembalikan nilai keabsahan/validity berupa nilai boolean (true/false).',
                    subBab: [
                        {
                            judul: 'Validasi dengan Regex',
                            descripsi: 'Regex adalah singkatan dan Regular Expression. Regex merupakan sebuah teks (string) yang mendefinisikan sebuah pola pencarian sehingga dapat membantu kita untuk melakukan matching (pencocokan) dan locate (pencarian).'
                        },
                        {
                            judul: 'Autentikasi',
                            descripsi: 'Autentikasi adalah suatu proses yang menjadi tindakan atau pembuktian (validasi) terhadap identitas pengguna ketika ingin memasuki dan mengakses sistem tertentu.'
                        },
                        {
                            judul: 'Otorisasi',
                            descripsi: 'Otorisasi adalah mengatur perizinan terhadap tinda kan yang da pat dilaku kan pengguna.'
                        },
                    ]
                },
            ],
            task: {
                instruksi: [
                    {
                        task: 'Buatlah sebuah aplikasi berita https://newsapi.org/ .'
                    },
                    {
                        task: 'Dengan kondisi visual yang seperti pada gambar.'
                    },
                    {
                        task: 'Jenis kategori berita yang ditampilkan bebas.'
                    }, 
                    {
                        task: 'Usahakan untuk menggunakan ilmu yang telah dipelajari seperti, media queries, store, persited state dll.'
                    },
                    {
                        task: 'Jika salah satu berita ditekan, maka mengarah ke halaman detail berita, dimana terdapat konten.'
                    },
                    {
                        task: 'Data yang ditampilkan harus diambil dari API.'
                    },
                ],
                image: [
                    {
                        urlToImg: 'http://drive.google.com/uc?export=view&id=1mKdzF6L0qCkdVYzp9lkoUMIdgdMJbrZ3'
                    },
                ],
                linkRepoTask: 'https://github.com/andri-irawan79/task-vue-data',
            },
        },
        //  section 5 selesai

        // section 6
        {
            id: 6,
            title: 'Vue Quality Control',
            study: [
                {
                    materi: 'Debugging.'
                },
                {
                    materi: 'Unit Testing dan Jest.'
                },
                {
                    materi: 'Matriks Ukur Kinerja.'
                }
            ],
            babSection: [
                {   
                    judul: 'Debugging',
                    materi: 'Data Fetching adalah pengambilan data oleh program perangkat lunak atau skrip. Setelah diambil, data dipindahkan ke lokasi alternatif atau ditampilkan di layar. Singkatan dan Application Programming Interface yaitu sebuah protokol pada dasarnya menyediakan bahasa dan kontrak untuk bagaimana dua sistem berinteraksi. Cara kerja debugging yaitu Identifikasi kesalahan dan Identifikasi solusi',
                    subBab: [
                        {   
                            judul: 'Perkakas untuk identifikasi kesalahan',
                            descripsi: 'Devtools, Console, dan Logs'
                            
                        },
                        {   
                            judul: 'Tips identifikasi kesalahan',
                            descripsi: 'Tenang dan fokus.   Rasional kan kontekstual.   Perhatian yang detail untuk petunjuk sekecil apapun.  Tidak tergesa-gesa untuk bertanya.'
                        },
                        {   
                            judul: 'Sumber identifikasi solusi',
                            descripsi: 'Diri sendiri (Pengetahua dan pengalaman).   Rekan kerja (Peer, senior atau leader).   Google (Dokumentasi, Stackoverflow, Isu Repository, Blog/vlog tutorial, dll..).   Komunitas (Forum, telegram, discord, media sosial, dll..).'
                            
                        },
                    ]
                },
                {   
                    judul: 'Unit Testing',
                    materi: 'Unit Testing adalah Proses verifikasi bahwa kode kita benar-benar berperilaku seperti yang diharapkan dan validasi bahwa kode kita tetap benar sepanjang masa aplikasi. Cara kerja yaitu dengan memberikan kita kesempatan untuk menguji potongan kode secara individual dan terisolasi dalam bentuk Test Assertion. Test assertion adalah ekspresi boolean yang mengembalikan nilai true kecuali ada kesalahan atau perilaku yang tidak diharapkan di kode kita.',
                    subBab: [
                        {
                            judul: 'Perkakas Unit Testing',
                            descripsi: 'Unit Testing pada aplikasi Vue umumnya dilakukan oleh pustaka rangka kerja pendukung tersedia 2 pilihan library yaitu Jest dan Mocha.'
                        },
                        {
                            judul: 'Alasan menggunakan unit testing',
                            descripsi: 'Meningkatkan rasa percaya diri.   Meningkatkan standar kode. Mencegah kesalahan seblum benar-benar terjadi. Memberi batasan dan kriteria yang jelas jika melakukan refactor. '
                        },
                        {
                            judul: 'Jest',
                            descripsi: 'Jest adalah salah satu kerangka kerja untuk melakukan Unit Testing pada aplikasi yang berbasis Javascript.'
                        },
                    ]
                },
                {   
                    judul: 'Matriks ukur kinerja',  
                    materi: 'Matriks ukur kinerja adalah tolak ukur yang menunjukan informasi seberapa baik kinerja aplikasi kita. Dengan bantuan sebuah perkakas yang menjalankan serangkaian pemeriksaan sebelum menghasilkan laporan terperinci dan skortentang seberapa baik kinerja halaman. Lighthouse Audit Adalah perkakas yang membantu menentukan skor pada matriks ukur kinerja aplikasi web.',
                    subBab: [
                        {
                            judul: 'Mengukur Matriks dengan Lighthouse Audit',
                            descripsi: 'Jalankan aplikasi pada peramban Google Chrome, buka Devtools pada tab Lighthouse kemudian “Generate Report”.'
                        },
                        {
                            judul: 'Mengoptimalkan Kinerja adalah',
                            descripsi: 'Proses untuk meningkatkan kinerja aplikasi web berdasarkan informasi skor matriks ukur.'
                        },
                        {
                            judul: 'Core Web Vitals',
                            descripsi: 'Core Web Vitals adalag Kumpulan metrik website yang ditentukan oleh Google. Kumpulan metrik ini ditetapkan sebagai bagian dan indikator ranking pencarian terbaru Google, yaitu page experience. Ada tiga core web vitals yaitu :  LCP (Largest Contentful Paint), Berkaitan dengan kecepatan website.  FID (First Input Delay), Berkaitan dengan baik atau tidak respons elemen halaman website. CLS (Cumulative Layout Shift), berkaitan dengan kestabilan layout halaman website.'
                        },
                    ]
                },
            ],
            task: {
                instruksi: [
                    {
                        task: 'Buatlah sebuah file pembantu yang berisikan operasi aritmatika yang valid. Kemudian buatlah unit test yang meliputi 100% coverage dan file tersebut.'
                    },
                ],
                image: [
                    {
                        urlToImg: 'http://drive.google.com/uc?export=view&id=1qul_KrF2riq22dJAa2sXndi-EAZKmyzi'
                    },
                ],
                linkRepoTask: 'https://github.com/andri-irawan79/vue_andri-irawan/tree/task/16_Vue%20Quality%20Control/praktikum/vue-quality-control',
            },
        },
        // section 6 selesai

        // section 7
        {
            id: 7,
            title: 'Vue UI Framework',
            study: [
                {
                    materi: 'UI Framework.'
                },
                {
                    materi: 'Manajemen Warna Tema.'
                },
                {
                    materi: 'Reaktivitas Dengan Kerangka Kerja UI.'
                }
            ],
            babSection: [
                {   
                    judul: 'Pengenalan UI Framework',
                    materi: 'UI Framework adalah kumpulan elemen visual (seperti tombol, ikon dil) dan fungsionalitas yang bisa dipakai secara instan. UI Framework membantu untuk membuat aplikasi web dengan tampilan yang baik dan terlihat profesional. Cara Kerjanya UI Framework yaitu dengan menyediakan komponen siap pakai kemudian kita impor komponen yang dibutuhkan ke dalam aplikasi. Kerangka kerja UI diantaranya Vuetify, BootstrapVue, Buefy, Ant-Design Vue, Vuesex dll',
                    subBab: [
                        {   
                            judul: 'Vuetify',
                            descripsi: 'Vuetify Adalah library yang memungkinkan untuk membuat aplikasi dengan tampilan yang indah walaupun seseorang bukan seorang desainer. Vuetify memiliki lebih dan 80 komponen berbasis Material Design yang mana komponen tersebut dapat membantu kita lebih cepat dalam pengembangan aplikasi. Vuetify telah menyiapkan komponen siap pakai yang bisa digunakan di aplikasi. Contohnya, komponen tombol.'
                        },
                        {   
                            judul: 'Menerapkan Vuetify',
                            descripsi: 'Pasang Vuetify sebagai dependency. Daftarkan vuetify ke dalam berkas entry "main.js". Ubah "App.vue", Vuetify harus dibungkus dengan v-app untuk dapat berfungsi dengan baik. Tambahkam font ke dalam "public/index.html". Komponen Vuetify siap digunakon di mana saja tanpa perlu impor.'
                            
                        },
                    ]
                },
                {   
                    judul: 'Manajemen Warna Tema',
                    materi: 'Manajemen Warna Tema Adalah Pengaturan set warna yang dapat kita terapkan terhadap tampilan di aplikasi. Vuetify menyimpan warna tema bawaan yang bisa kita setel secara manual ketika aplikasi berjalan. Komponen Vuetify menggunakan warna primary sebagai warna dominannya. <strong>this.$vuetify.theme.themes.light</strong>. Untuk menerapkan manajemen warna tema buat fungsi untuk mengganti tema warna Vuetify kemudian tambahkan menu pilihan warna.',
                    subBab: [
                        {
                            judul: 'Gelap Terang',
                            descripsi: 'Tema Gelap Terang Adalah fitur peralihan warna latar belakang aplikasi dan terang ke gelap atau sebaliknya. Vuetify memiliki variabel boolean dark dan juga menyimpan warna tema bawaan mode gelap.'
                        },
                    ]
                },
                {   
                    judul: 'Reaktivitas Dengan Kerangka Kerja UI',  
                    materi: 'Reaktivitas viewport adalah Perubahan ukuran yang menyesuaikan dengan  lebar layar tampilan. Lebar layar dibagi menjadi beberapa golongan dan setiap komponen dapat ditentukan ukurannya berdasarkan golongan tersebut.',
                    subBab: [
                        {
                            judul: 'Tabel',
                            descripsi: 'Komponen Input memiliki props untuk validasi yang cukup canggih, menerima array of functions.'
                        },
                        {
                            judul: 'Skeleton Loader',
                            descripsi: 'Membuat loading seperti aplikasi bintang 5.'
                        },
                        {
                            judul: 'Dialog',
                            descripsi: 'Membuat pop-up dialog dengan bantuan rangka kerja UI.'
                        },
                    ]
                },
            ],
            task: {
                instruksi: [
                    {
                        task: 'Buatlah sebuah aplikasi berita https://newsapi.org/ .'
                    },
                    {
                        task: 'Dengan kondisi visual yang seperti pada gambar.'
                    },
                    {
                        task: 'Jenis kategori berita yang ditampilkan bebas.'
                    }, 
                    {
                        task: 'Usahakan untuk menggunakan ilmu yang telah dipelajari seperti, media queries, store, persited state dll.'
                    },
                    {
                        task: 'Jika salah satu berita ditekan, maka mengarah ke halaman detail berita, dimana terdapat konten.'
                    },
                    {
                        task: 'Buatlah sebuah file pembantu yang berisikan operasi aritmatika yang valid. Kemudian buatlah unit test yang meliputi 100% coverage dan file tersebut.'
                    },
                ],
                image: [
                    {
                        urlToImg: 'http://drive.google.com/uc?export=view&id=1nncMwLVtl5uG8IQTlGNSZaDHQtZvMAby'
                    },
                    {
                        urlToImg: 'http://drive.google.com/uc?export=view&id=1CLdxxghd6zITjyN0HfgfCYWJTEcMFkCp'
                    },
                    {
                        urlToImg: 'http://drive.google.com/uc?export=view&id=1DdHwJkGbNvVbsSMe9DNRGefYcVKIaVmA'
                    },
                ],
                linkRepoTask: 'https://github.com/andri-irawan79/vue_andri-irawan/tree/task/17_Vue%20UI%20Framework/praktikum/vue-ui-framework',
            },
        },
        // section 7 selesai

        // section 8
        {
            id: 8,
            title: 'Vue With Nuxt',
            study: [
                {
                    materi: 'Nuxt.'
                },
                {
                    materi: 'SEO.'
                },
                {
                    materi: 'PWA.'
                }
            ],
            babSection: [
                {   
                    judul: 'Nuxt',
                    materi: 'Nuxt adalah Kerangka kerja yang dibangun di atas Vue yang membuat pengembangan web menjadi sederhana dan ampuh. Cara kerja nuxt yaitu "Inisialisasi Aplikasi" -> "Jalankan Aplikasi".',
                    subBab: [
                        {   
                            judul: 'Inisialisasi aplikasi',
                            descripsi: 'Untuk membuat sebuah aplikasi baru, jalankan :  - $ npx create-nuxt-app <nama-project> - $ npx create-nuxt-app ./--overide-dir '
                        },
                        {   
                            judul: 'Jalankan Aplikasi',
                            descripsi: 'Untuk menjalankan aplikasi, terdapat beberapa perintah yang tertulis di script di dalam package.json : - "dev": "nuxt", atau $ npm run dev - "build": "nuxt build" - "start": "nuxt start" - "generate": "nuxt generate" '
                            
                        },
                        {   
                            judul: 'Struktur Direktori Nuxt',
                            descripsi: '- Pages  - Static  - Layouts'
                            
                        },
                        {   
                            judul: 'Pages',
                            descripsi: 'Router di Nuxt secara otomatis membaca direktori ini sehingga file yang ada di direktori /pages langsung terhubung menjadi path halaman.'
                            
                        },
                        {   
                            judul: 'Static',
                            descripsi: 'Setiap file di direktori /layouts akan membuat tata letak khusus yang dapat diakses dengan properti layout di komponen halaman.'
                            
                        },
                        {   
                            judul: 'Layouts',
                            descripsi: 'Router di Nuxt secara otomatis membaca direktori ini sehingga file yang ada di direktori /pages langsung terhubung menjadi path halaman.'
                            
                        },
                    ]
                },
                {   
                    judul: 'Nuxt SSR dan SSG',
                    materi: '',
                    subBab: [
                        {
                            judul: 'SSG',
                            descripsi: 'SSG adalah kepanjangan dari Static Site Generation, metode pengembangan ini Iebih cocok untuk situs web yang tidak memiliki halaman dinamis. Cara Kerja SSG ketika sebuah proyek dibangun untuk produksi, file HTML siap pakai akan dibuat di folder dist, kemudian disuguhkan oleh server dan dapat diakses per masing-masing file HTML.'
                        },
                        {
                            judul: 'SSR',
                            descripsi: 'SSR adalah kepanjangan dari Server Side Rendering, metode pengembangan ini adalah solusi terbaik untuk proyek di mana halaman dibuat secara real time, yaitu melalui panel admin, misalnya, halaman blog dan e-commerce. Cara kerja SSR, server yang dibangun ke dalam Nuxt akan berjalan dalam produksi, yang akan memastikan bahwa file HTML baru dihasilkan secara real time ketika data baru diterima, mis. melalui API.'
                        },
                    ]
                },
                {   
                    judul: 'SEO (Search Engine Optimization)',  
                    materi: 'SEO adalah kepanjangan dari Search Engine Optimization, yaitu proses meningkatkan kualitas dan kuantitas lalu untas situs web ke situs web atau halaman web dan mesin pencari. Sedangkan SEO Meta tag adalah tag tak terlihat di dalam <head> yang memberikan data tentang halaman ke mesin pencan dan pengunjung situs web.',
                    subBab: [
                        {
                            judul: 'Cara Kerja SEO Meta',
                            descripsi: 'SEO Meta Tag dapat diterapkan dan Nuxt config untuk pengaturan global, yaitu konten head akan sama di setiap halaman aplikasi.'
                        },
                        {
                            judul: 'SEO Meta Tag Penting',
                            descripsi: '- Informasi dasar: title dan description. - Identitas unik dengan link canonical - Informasi untuk media sosial, open graph: ogtitle, og:description, og:image,.'
                        },
                        {
                            judul: 'SEO di dalam Body Tag',
                            descripsi: '- judul: hi - Text alternatif untuk gambar: alt'
                        },
                    ]
                },
                {   
                    judul: 'PWA (Progressive Web Aplication)',  
                    materi: 'PWA adalah kepanjangan dari Progressive Web Apps, dibuat dan disempurnakan dengan API modern untuk menghadirkan peningkatan kemampuan, keandalan, dan kemudahan pemasangan sekaligus menjangkau siapa saja, di mana saja, di perangkat apa pun dengan basis kode tunggal.',
                    subBab: [
                        {
                            judul: 'Cara kerja PWA',
                            descripsi: '- Web App Manifest - Service Worker - Icon - Disajikan melalui protokol HTTPS '
                        },
                    ]
                },
            ],
            task: {
                instruksi: [
                    {
                        task: 'Buatlah sebuah aplikasi berita https://newsapi.org/ .'
                    },
                    {
                        task: 'Tambahkan fitur PWA'
                    },
                ],
                image: [
                    {
                        urlToImg: 'http://drive.google.com/uc?export=view&id=1z46bf1KqYoZF_b0swfNvmg07feRdqPPS'
                    },
                ],
                linkRepoTask: 'https://github.com/andri-irawan79/vue_andri-irawan/blob/task/19_Vue%20With%20Nuxt/praktikum/link.md',
            },
        },
        // section 8 selesai
    ]
};