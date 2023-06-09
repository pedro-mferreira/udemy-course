<template>
  <h1>Calculadora</h1>
  <CalculatorComponent/>
</template>

<script>
import CalculatorComponent from './main/CalculatorComponent.vue';

export default {
  name: 'App',
  components: {
    CalculatorComponent
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #FFF;
  background: linear-gradient(to right, rgb(83, 105, 118),rgb(41,46, 73));
}
@font-face {
  font-family: 'RobotoMono';
  src: url("./assets/fonts/RobotoMono-Thin.ttf");
}

* {
  font-family: "RobotoMono", monospace;
}
</style>
