<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card
            class="d-flex flex-column align-center col-12 col-md-6 ma-1 mx-auto"
            flat            
          >
          <v-card-title class="mb-5">
            <h3>PROFILE</h3>
          </v-card-title>
            <v-avatar size="150">
              <img
                src="http://drive.google.com/uc?export=view&id=1-FBhBHosd12Q5Wdlnb5nruNG8SZ-GO0R"
                alt="John"
              >
            </v-avatar>
            <v-card-text>
              <table class="ma-auto mt-7 font-weight-bold black--text">
                <tr>
                  <td>Nama</td>
                  <td>:</td>
                  <td>Andri Irawan</td>
                </tr>
                <tr>
                  <td>Program</td>
                  <td>:</td>
                  <td>Understand Everything about Vue JS Front-End Engineer</td>
                </tr>
                <tr>
                  <td>Kelas</td>
                  <td>:</td>
                  <td>D</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>iandri647@gmail.com</td>
                </tr>
                <tr>
                  <td>Github</td>
                  <td>:</td>
                  <td><a href="https://github.com/andri-irawan79">andri-irawan79</a></td>
                </tr>
              </table>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-title>Weekly Task 2</v-card-title>
            <v-card-actions>
              <v-btn to="/section/1" text class="py-3 px-10 ma-auto btn-action">Go To Resume</v-btn>
            </v-card-actions>
        </v-card>
      </v-col>    
    </v-row>
    <v-row>
      <v-col cols="12" class="task">
        <v-card
          class="d-flex flex-column my-10"
          width="100%"
          color="blue lighten-3"    
          rounded="0"      
        >
          <v-card-title class="mx-auto">
            <h4>TASK</h4>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="col-12 col-lg-7 mx-auto">
            <ol class="text--primary task-list pb-15">
              <li>Lakukan installation framework/library javascript yang kalian pelajari.</li>
              <li>Lakukan installation framework css (terserah kalian menggunakan apa. Jenis framework tidak dibatasi).</li>
              <li>Buatlah sebuah halaman yang berisikan rangkungan dan link maupun file yang telah kalian kerjakan sebelumnya.</li>
              <li>Pasanglah rooting pada aplikasi kalian dan gunakan sidebar untuk melakukan perpindahan rooting.</li>
              <li>Harus ada title yang menggambarkan setiap maten yang kalian pelajari pada framework tersebut. Letakkan title pada sidebar.</li>
              <li>Masukkan deskripsi untuk setiap title. Deskripsi akan ada di body halaman kalian.</li>
              <li>Masukkan screenshot untuk hasil pengerjaan tugas kalian. Lewat screenshot setelah deskripsi.</li>
              <li>Laku kan deploy untuk halaman yang telah kalian buat.</li>
              <li>Penggunaan global state merupakan filai tambah</li>
              <li>Kalau kalian dapat memasukkan project kalian dalam setiap root juga akan menjadi nilai tambah.</li>
            </ol>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({

    })
  }
</script>

<style scoped>
* {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

a {
  text-decoration: none;
}
.task-list {
  line-height: 40px;
  text-align: justify;
  font-size: 1rem;
}

.btn-action {
  border: 1px solid rgb(244,117,34);
  color:rgb(244,117,34);
}

.btn-action:active {
  background: rgb(25,52,94);
  color: white;
}

.task {
  padding: 0;
}

table tr td {
  margin: 0 auto;
  padding: 0.7rem 0.5rem;
}

.footer-page {
  position: relative;
  padding: 10px;
  bottom: 0;
}

</style>
