const datos = {
  nombreCongregacion: 'Miramar',
  territorio: {
    zonas: [
      {
        nombre: 'A',
        color: '#F11B1B',
        numManzanas: 0,
        tamano: 0,
        tarjetas: [
          {
            codigo: 'A-01',
            tamano: 0,
          },
          {
            codigo: 'A-02',
            tamano: 0,
          },
          {
            codigo: 'A-03',
            tamano: 0,
          },
          {
            codigo: 'A-04',
            tamano: 0,
          },
        ]
      },
      {
        nombre: 'B',
        color: '#FFD600',
        numManzanas: 0,
        tamano: 0,
        tarjetas: [
          {
            codigo: 'B-01',
            tamano: 0,
          }
        ]
      },
      {
        nombre: 'C',
        color: '#F57C00',
        numManzanas: 0,
        tamano: 0,
        tarjetas: [
          {
            codigo: 'C-01',
            tamano: 0,
          }
        ]
      },
      {
        nombre: 'D',
        color: '#795548',
        numManzanas: 0,
        tamano: 0,
        tarjetas: [
          {
            codigo: 'D-01',
            tamano: 0,
          }
        ]
      },
      {
        nombre: 'E',
        color: '#9C27B0',
        numManzanas: 0,
        tamano: 0,
        tarjetas: [
          {
            codigo: 'E-01',
            tamano: 0,
          }
        ]
      },
      {
        nombre: 'F',
        color: '#0288D1',
        numManzanas: 0,
        tamano: 0,
        tarjetas: [
          {
            codigo: 'F-01',
            tamano: 0,
          },
          {
            codigo: 'F-02',
            tamano: 0,
          },
          {
            codigo: 'F-03',
            tamano: 0,
          },
          {
            codigo: 'F-04',
            tamano: 0,
          },
          {
            codigo: 'F-05',
            tamano: 0,
          },
          {
            codigo: 'F-06',
            tamano: 0,
          },
        ]
      },
    ]
  }
}
const app = Vue.createApp({
  data () {
    return {
      datos: datos,
      zonaActiva: null,
      tarjetaActiva: null
    }
  },
  methods: {
    activarZona(zona){
      this.tarjetaActiva = null
      this.zonaActiva = zona
    }
  }
})

app.use(Quasar)
Quasar.lang.set(Quasar.lang.es)
Quasar.iconSet.set(Quasar.iconSet.materialIconsRound)
app.mount('#q-app')