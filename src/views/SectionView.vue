<template>
  <v-container fluid class="pa-0">
    <div class="col-12 col-md-9 mx-auto py-5">
      <h2 class="font-weight-light">{{sections[currentId].title}} - Kelas D</h2>
      <div class="py-2">
        <router-link to="/" class=" text-decoration-none primary--text font-weight-light">
          <v-icon>mdi-arrow-left</v-icon>
          <span class="mx-1">Kembali ke halaman profile</span>
        </router-link>
      </div>
    </div>
    <v-divider></v-divider>
    <v-layout class="set-background">
      <v-flex>
        <v-card
          class="mx-auto my-5 px-5"
          max-width="1000"
        >
          <v-card-text class="line-height">
            <v-card-title class="text-h4 text--primary pa-0 mb-4">
              <h5>{{sections[currentId].title}}</h5>
            </v-card-title> 
            <v-divider></v-divider>       
            <v-card-subtitle class="text-h4 text--primary mt-5 pa-0">
              <h6>Resume - {{sections[currentId].title}}</h6>
            </v-card-subtitle>
            <div class="black--text text-justify line line-height">
              <span>Hal yang dipelajari pada section ini :</span>
              <ol>
                <li v-for="itemStudy in sections[currentId].study" :key="itemStudy.materi">{{itemStudy.materi}}</li>
              </ol>
            </div>
            <v-card-text class="px-0 my-5 text-justify">
              <ul class="text--primary list-bab pa-0">
                <li v-for="itemBab in sections[currentId].babSection" :key="itemBab.judul">
                  <v-icon color="rgb(25,52,94)">mdi-book-open-variant</v-icon>
                  <span class="ma-3 font-weight-bold">{{itemBab.judul}}</span>
                  <ul class="ms-0 ms-md-10 line-height">
                    <li v-for="itemSubbab in itemBab.subBab" :key="itemSubbab.judul">
                      <span>{{itemSubbab.judul}}</span>
                      <p>{{itemSubbab.descripsi}}</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </v-card-text>
            <v-card-subtitle class="text-h4 text--primary pa-0 mt-5">
              <h6>Task - {{sections[currentId].title}}</h6>
            </v-card-subtitle>
            <div class="black--text text-justify line-height">
              <ol class="line-height">
                <li v-for="itemTask in sections[currentId].task.instruksi" :key="itemTask.task"> {{itemTask.task}}</li>
              </ol>
            </div>
            <div class="text-center my-4 mt-10">
              <span class="text-h6 text-uppercase font-weight-light">Hasil Praktikum</span>
            </div>
            <div v-for="itemImg in sections[currentId].task.image" :key="itemImg.urlToImg" class="my-5 bingkai">
              <v-sheet
                :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                class="pa-2"
              >
                <v-skeleton-loader
                  class="mx-auto"
                  width="100%"
                  height="700px"
                  type="card"
                >
                  <v-img
                    class="pa-0 ma-0"
                    :src="itemImg.urlToImg"
                    max-width="100%"
                  >
                  </v-img>
                </v-skeleton-loader>
              </v-sheet>
            </div>
            <v-card-actions class="pa-0 my-10">
              <ul class="list-bab pa-0 pb-10">
                <li>
                  <a :href="sections[currentId].task.linkRepoTask" class="text-decoration-none font-weight-bold">
                    <v-icon color="black">mdi-link-variant </v-icon> Link repository Github untuk pengerjaan task</a>
                </li>
              </ul>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'SectionView',
  inject: {
      theme: {
        default: { isDark: false },
      },
    },
  methods: {
    fetchSection(){
      this.$store.dispatch('getDataSection');
    }
  },
  computed: {
    sections(){
      return this.$store.state.allSection;
    },
    currentId() {
      return this.$route.params.id;
    }
  },
  mounted() {
    this.fetchSection();
  }
}
</script>

<style scoped>
.set-background {
  background: url('../assets/background.jpg');
}

.line-height {
  line-height: 1.9rem;
}

.list-bab {
  list-style: none;
}

.bingkai {
  box-shadow: 0 0 1px 1px rgb(8, 8, 8);
  border-radius: 5px;
  overflow: hidden;
}
</style>
