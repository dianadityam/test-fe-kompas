<template>
  <div>
    <!-- HEADER SECTION  -->
    <div class="header mb-4 mt-4">
      <h1>Diari Jajan {{ $store.getters.getCurrentMonth }} {{ $store.getters.getCurrentYear }}</h1>
      <h5>Pengeluaran Bulan Ini Rp. {{ numberFormat(totalSpend) }}</h5>
      <b-button variant="primary" @click="initForm()">Tambah Item</b-button>
    </div>

      <!-- CARD SECTION  -->
      <card-notes 
      v-if="dataList && dataList.length > 0"
      v-bind:dataList="dataList" 
      @totalSpend="countTotalSpend($event)">
      </card-notes>

      <!-- MODAL SECTION  -->
    <b-modal id="modal-form" title="Tambah Entri" hide-footer centered no-close-on-backdrop>
      <div><h1>yanzz</h1></div>
    </b-modal>
</div>
</template>

<script>
import CardNotes from '../components/CardNotes.vue'
export default {
  name: 'HomeView',
  components: {
    CardNotes
  }, 
  data() {
    return {
      dataList: [],
      totalSpend: 0,
      form: {
        nama: '',
        pengeluaraan: ''
      }
    }
  },
  methods: {
    getData() {
      this.$store.dispatch('getItemList').then(res => {
        this.dataList = this.$store.getters.itemListData
      })
    },

    numberFormat(data) {
      return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },

    getMonthIdn(month) {
      this.$store.dispatch('convertMonthIdn', month).then(res => {
        return res
      })
    },
    
    countTotalSpend(data) {
      if (data && data.length > 0) {
        data.forEach(el => {
          this.totalSpend += el.totalExpense
        })
      }
    },

    initForm() {
      this.form.nama = '';
      this.form.pengeluaraan = '';
      this.$bvModal.show('modal-form')
    }
  },
  mounted() {
    this.getMonthIdn()
    this.getData()
  }

}
 
</script>

<style lang="scss">
.card-note-list {
  .list-content {
    font-size: 14px;
    > div {
      border-bottom: 1px solid lightgray;
    }
  }

.card-footer {
  text-align: right;
  background-color: white;
}

.card-header {
  background-color: white;
}
}

.header {
  text-align: center;
}

</style>
