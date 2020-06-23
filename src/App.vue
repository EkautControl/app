<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');

* {
  font-family: 'Open Sans', Avenir, Helvetica, Arial, sans-serif;
}

html {
  background-color: #e5e5e5c9;
}

ins {
  text-decoration: none;
  font-weight: normal;
}

#app {
  font-family: 'Open Sans', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}

.submit-button {
  font-weight: bold;
  background-color: #345087;
  color: white;
}

.cancel-button {
  font-weight: bold;
  color: #345087;
  background-color: white;
  border: none;
}
</style>
