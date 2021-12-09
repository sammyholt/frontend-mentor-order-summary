<template>
  <div class="max-w-md rounded-xl overflow-hidden shadow-lg bg-white">
    <img class="w-full" src="@/assets/images/illustration-hero.svg" alt="Music">

    <div class="flex flex-col items-center px-6 py-4">
        <div class="font-black text-3xl text-neutral-dark my-6">Order Summary</div>
        <div class="max-w-xs text-center text-neutral-desaturated text-base">
          You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
        </div>
        <div class="w-11/12 flex justify-between items-center mt-6 p-3 rounded-md bg-neutral-pale">
          <div class="flex items-center space-x-5">
            <img src="@/assets/images/icon-music.svg" alt="Music" />
            <div class="flex flex-col items-center">
              <div class="font-black text-lg text-neutral-dark">Annual Plan</div>
              <div class="text-neutral-desaturated">${{price}}/year</div>
            </div>
          </div>
          <div class="underline text-primary-bright hover:text-purple-400 cursor-pointer">Change</div>
        </div>
        <button class="w-11/12 mt-10 bg-primary-bright hover:bg-purple-400 text-neutral-pale font-bold py-4 px-4 rounded-xl shadow-lg">
          Proceed to Payment
        </button>
        <div class="mt-6 font-black text-neutral-desaturated hover:text-neutral-dark cursor-pointer">
          Cancel Order
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderSummary',
  props: {
    price: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
