<template>
  <div class="bg-mobile md:bg-desktop bg-no-repeat bg-contain flex justify-center items-center h-screen w-screen p-5 bg-primary-pale">
    <OrderSummary price="59.99"/>
  </div>
  
</template>

<script>
import OrderSummary from './components/OrderSummary.vue'

export default {
  name: 'App',
  components: {
    OrderSummary
  }
}
</script>

<style>
</style>
