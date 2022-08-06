<template>
  <div>
    <!-- HEADER SECTION  -->
    <div class="header mb-4 mt-4">
      <h1>Diari Jajan {{ $store.getters.convertMonthIdn($store.state.currentDate) }} {{ $store.getters.getCurrentYear }}</h1>
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
    <b-modal id="modal-form" size="sm" title="Tambah Entri" hide-header-close hide-footer centered no-close-on-backdrop>
      <div class="modal-body-content">
        <div class="mb-2">
          <b-form-group
            id="fieldset-1"
            label="Nama"
            label-for="input-1"
          >
            <b-form-input id="input-1" v-model="form.nama" trim></b-form-input>
          </b-form-group>
        </div>
        <div class="mb-2">
          <b-form-group
            id="fieldset-2"
            label="Harga"
            label-for="input-2"
          >
            <b-form-input id="input-2" v-model="form.pengeluaraan" type="number" trim></b-form-input>
          </b-form-group>
        </div>
        <div class="d-flex justify-content-end">
          <div class="d-flex">
            <b-button variant="secondary" @click="$bvModal.hide('modal-form')">BATAL</b-button>
            <b-button variant="primary ms-2" @click="submitForm()">KIRIM</b-button>
          </div>
        </div>
      </div>
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
      this.dataList = [];
      this.$store.dispatch('getItemList').then(res => {
        this.dataList = this.$store.getters.itemListData
      })
    },

    numberFormat(data) {
      return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    
    countTotalSpend(data) {
      this.totalSpend = 0;
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
    },

    padTo2Digits(num) {
      return String(num).padStart(2, '0');
    },

    submitForm() {
        const payload = {
            jam: this.$store.state.currentDate.toLocaleTimeString('en-GB', {
              hour: '2-digit',
              minute: '2-digit',
            }),
            tanggal:`${this.$store.getters.getCurrentDay} ${this.$store.getters.convertMonthIdn(new Date())} ${this.$store.getters.getCurrentYear}`,
            nama: this.form.nama,
            pengeluaraan: Number(this.form.pengeluaraan)
        }
        this.$store.dispatch('addItems', payload).then(res => {
          this.$bvModal.hide('modal-form')
          this.getData();
        })
    }
  },
  mounted() {
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
