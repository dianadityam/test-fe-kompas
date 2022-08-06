<template>
  <div>
    <div class="header mb-4 mt-4">
      <h1>Diari Jajan Februari 2021</h1>
      <h5>Pengeluaran Bulan Ini Rp. 5.000.000</h5>
      <b-button variant="primary">Tambah Item</b-button>
    </div>

    <div class="container">
    <div class="card-note-list row">
      <div class="col-3 mb-3" v-for="(item, idx) in detail" :key="idx">
        <b-card
          header="18 Februari 2022"
          header-tag="header">
          <div class="list-content">
            <div class="d-flex justify-content-between">
              <div>
                <span class="me-3">{{ item.jam }}</span>
                <span>Ayam Tangkap</span>
              </div>
              <p>Rp 32.154</p>
            </div>
            <div class="d-flex justify-content-between">
              <div>
                <span class="me-3">03:15</span>
                <span>Ayam Tangkap</span>
              </div>
              <p>Rp 32.154</p>
            </div>
            <div class="d-flex justify-content-between">
              <div>
                <span class="me-3">03:15</span>
                <span>Ayam Tangkap</span>
              </div>
              <p>Rp 32.154</p>
            </div>
            <div class="d-flex justify-content-between">
              <div>
                <span class="me-3">03:15</span>
                <span>Ayam Tangkap</span>
              </div>
              <p>Rp 32.154</p>
            </div>
            <div class="d-flex justify-content-between">
              <div>
                <span class="me-3">03:15</span>
                <span>Ayam Tangkap</span>
              </div>
              <p>Rp 32.154</p>
            </div>
            <div class="d-flex justify-content-between">
              <div>
                <span class="me-3">03:15</span>
                <span>Ayam Tangkap</span>
              </div>
              <p>Rp 32.154</p>
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
      detail: [
        {
            "jam": "03:15",
            "tanggal":"18 Februari 2021",
            "nama":"Ayam Tangkap",
            "pengeluaraan":77249
        },
        {
            "jam": "03:15",
            "tanggal":"18 Februari 2021",
            "nama":"Mie Rebus",
            "pengeluaraan":32154
        },
        {
            "jam": "00:20",
            "tanggal":"17 Februari 2021",
            "nama":"Soto Kuning",
            "pengeluaraan":34992
        },
        {
            "jam": "05:59",
            "tanggal":"17 Februari 2021",
            "nama":"Ayam Geprek",
            "pengeluaraan":37674
        },
        {
            "jam": "05:45",
            "tanggal":"16 Februari 2021",
            "nama":"Otak-otak",
            "pengeluaraan":11971
        }
    ]
    }
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
