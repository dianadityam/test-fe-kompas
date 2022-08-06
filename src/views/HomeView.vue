<template>
  <div>
    <div class="header mb-4 mt-4">
      <h1>Diari Jajan Februari 2021</h1>
      <h5>Pengeluaran Bulan Ini Rp. 5.000.000</h5>
      <b-button variant="primary">Tambah Item</b-button>
    </div>

    <div class="container">
    <div class="card-note-list row" v-if="dataList && dataList.length > 0">
      <div class="col-3 mb-3" v-for="(item, idx) in dataList" :key="idx">
        <b-card
          :header="item.tanggal"
          header-tag="header">
          <div class="list-content">
            <div class="d-flex justify-content-between">
              <div>
                <span class="me-3">{{ item.jam }}</span>
                <span>{{ item.nama }}</span>
              </div>
              <p>Rp {{ numberFormat(item.pengeluaraan)  }}</p>
            </div>
          </div>
          <div class="card-footer">
            <strong>Total Rp 350.000</strong>
          </div>
      </b-card>
      </div>
    </div>

    </div>
</div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      dataList: []
    }
  },
  methods: {
    getData() {
      this.$store.dispatch('getItemList').then(res => {
        this.dataList = this.$store.getters.itemListData
        console.log(this.dataList, 'dian babs')
      })
    },
     numberFormat(data) {
            return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
  },
  mounted() {
    this.getData()
  }

}
 
</script>

<style lang="scss">
.card-note-list .list-content > div {

}
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

.table-stripped {
  color: white;
}

.table {
  margin-bottom: 0%;
}

.card-header {
  background-color: white;
}
}

.header {
  text-align: center;
}

</style>
