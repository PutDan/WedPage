<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" style="height: 400px; width:auto">
    <HelloWorld msg="SAVE THE DATE!"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
