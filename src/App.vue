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

.horizontal-divider {
  border: 1px solid rgba(197, 197, 197, 0.7);
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

.submission-form .modal-card-head,
.production-form .modal-card-head {
  background-color: white;
  padding: 50px 40px 0;
}

.submission-form .modal-card-foot,
.production-form .modal-card-foot {
  background-color: white;
  padding: 0px 40px 30px;
  justify-content: flex-end;
}

.submission-form .modal-card-body {
  padding: 40px;
}

.submission-form .modal-card-title,
.production-form .modal-card-body {
  padding: 40px;
}

.production-form .modal-card-title {
  color: #475198;
  text-transform: uppercase;
  font-weight: bold;
  text-align: left;
  font-size: 20px;
}

.submission-form .modal-card-head,
.submission-form .modal-card-body,
.submission-form .modal-card-foot,
.production-form .modal-card-head,
.production-form .modal-card-foot {
  border: none;
}
</style>
