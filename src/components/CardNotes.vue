<template>
<div class="card-note-list row" v-if="itemList && itemList.length > 0">
    <div class="col-3 mb-3" v-for="(each, idx) in itemList" :key="idx">
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
            <strong>Total Rp {{ numberFormat(each.totalExpense) }}</strong>
        </div>
        </b-card>
    </div>
</div>
</template>

<script>
export default {
  name: 'CardNotes',
  data() {
    return {
        itemList: []
    }
  },
  props: {
    dataList: {
        default: [],
        type: Array,
        required: true
    }
  },
  methods: {
    numberFormat(data) {
      return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },

    refactoringData(data) {
      let tempData = [];
      for (var key of Object.keys(data)) {
          tempData.push({
            tanggal: key,
            monthNumber: key.split(" ", 1),
            items: data[key],
            totalExpense: this.countTotalExpenseByMonth(data[key])
          })
      }
      tempData.sort(function(a,b){
        return b.tanggal.split(" ", 1) - a.tanggal.split(" ", 1);
      });
      this.itemList = tempData;
      this.$emit("totalSpend", tempData);
    },

    groupingListByDate(xs, key) {
      return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    },
    
    countTotalExpenseByMonth(items) {
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
    if (this.dataList && this.dataList.length > 0) {
        this.refactoringData(this.groupingListByDate(this.dataList, 'tanggal'))
    }
  }
}
</script>