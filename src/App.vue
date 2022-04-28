<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        color="rgb(244,117,34)"
        temporary
        dark
        width="350px"
        app
        class="drawer-style"
        
      >
        <v-list flat>
          <v-subheader class="my-5">
            <v-icon>mdi-book-account</v-icon>
            <h2 class="mx-2 white--text">My Resume</h2>
          </v-subheader>
          <v-divider class="mb-5"></v-divider>
          <v-list-item-group
            v-model="selectedItem"
            active-class="box-setcolor"
            class="mx-4"
            light
          >
            <v-list-item class="box-section my-1" to="/">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="">
                <v-list-item-title>Home</v-list-item-title>
                <small>Halaman Profil</small>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-for="(item, index) in sections" :key="index" class="box-section my-1" @click="redirectTo(index)">
              <v-list-item-icon>
                <v-icon>mdi-format-section</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="">
                <small>Section {{item.id}}</small>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

    <v-app-bar
        color="rgb(25,52,94)"
        dark
        app
        absolute
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>My Weekly Website</v-toolbar-title>
      </v-app-bar>

      
      <v-main>
        <router-view/>
      </v-main>    
      <v-footer
        dark
        absolute
        class="footer-page"
      >
        <span class="white--text ma-auto pa-1">
          {{ new Date().getFullYear() }} — <strong>Andri irawan</strong>
        </span>
      </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
    drawer: false,
    selectedItem: 1,
    group: null,
  }),
  methods: {
    redirectTo(myId) {
      this.$router.push({name: 'section', params: {id: myId}});
      console.log(myId);
    }
  },
  computed: {
    sections() {
      return this.$store.state.allSection;
    }
  },
  watch: {
      group () {
        this.drawer = false
      },
    },
};
</script>

<style scoped>
.box-section {
  background-color: #fff;
}

.box-section:hover {
  background-color: rgb(101, 255, 247);
  font-weight: bold;
  color: #fff;
}

.box-setcolor {
  background-color: rgb(25,52,94);
  font-weight: bold;
}

</style>
