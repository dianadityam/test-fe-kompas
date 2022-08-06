<template>
  <div>
    <h1>
      Diari Jajan Februari 2021
    </h1>
    <h4>
      Pengeluaran Bulan Ini Rp. 5.000.000
    </h4>
    <b-button variant="primary">Tambah Item</b-button>
    <b-card
      header="featured"
      header-tag="header"
      footer="Card Footer"
      footer-tag="footer"
      title="Title"
    >
      <b-card-text>Header and footers using props.</b-card-text>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">

</style>
