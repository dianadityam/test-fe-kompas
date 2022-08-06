<template>
  <div>
    <div class="header mb-4 mt-4">
      <h1>Diari Jajan Februari 2021</h1>
      <h5>Pengeluaran Bulan Ini Rp. 5.000.000</h5>
      <b-button variant="primary">Tambah Item</b-button>
    </div>

    <div class="container">
    <div class="card-note-list row" v-if="dataList && dataList.length > 0">
      <div class="col-3 mb-3" v-for="(each, idx) in dataList" :key="idx">
        <b-card
          :header="each.tanggal"
          header-tag="header">
          <div class="list-content">
            <div class="d-flex justify-content-between"
            v-for="(item, j) in each.items" :key="j">
              <div>
                <span class="me-3">{{ item.jam }}</span>
                <span>{{ item.nama }}</span>
              </div>
              <p>Rp {{ numberFormat(item.pengeluaraan)  }}</p>
            </div>
          </div>
          <div class="card-footer">
            <strong>Total Rp {{ numberFormat(countTotalExpense(each.items)) }}</strong>
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
        const resData = this.$store.getters.itemListData
        this.refactoringData(this.groupingListByDate(resData, 'tanggal'))
      })
    },
    numberFormat(data) {
      return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    groupingListByDate(xs, key) {
      return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    },
    refactoringData(data) {
      const tempData = [];
      for (var key of Object.keys(data)) {
          tempData.push({
            tanggal: key,
            items: data[key]
          })
      }
      this.dataList = tempData;
    },
    countTotalExpense(items) {
      let total = 0;
      if (items && items.length > 0) {
        items.forEach(element => {
          total += element.pengeluaraan
        });
      }
      return total;
    }
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
