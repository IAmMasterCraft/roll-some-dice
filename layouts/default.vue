<template>
  <v-app dark>
    <v-app-bar
      absolute
      dark
      color="#255561"
      shrink-on-scroll
      prominent
      src="https://raw.githubusercontent.com/bedimcode/responsive-christmas-website/main/assets/img/gift3.png"
      fade-img-on-scroll
      scroll-target="#page-body"
      scroll-threshold="500"
      app
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-switch 
        v-model="isDark" 
        :append-icon="
          `mdi-${ isDark ? 'weather-night' : 'white-balance-sunny' }`
        "
        @change="$vuetify.theme.dark = isDark"
      >
      </v-switch>
    </v-app-bar>
    <v-main>
      <v-sheet
        id="page-body"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 1500px;">
          <Nuxt />
        </v-container>
      </v-sheet>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      isDark: true,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Roll Some Dice'
    }
  },
}
</script>