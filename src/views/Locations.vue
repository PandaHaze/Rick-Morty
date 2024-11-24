<template>
  <div class="table-container">

    <v-btn-toggle>
      <button @click="toggleView">
        <v-tooltip bottom>
          <template #activator="{ on }">
            <v-icon class="ml-4" color="#263238" v-on="on">
              {{ tableView ? 'mdi-table' : 'mdi-view-grid' }}
            </v-icon>
          </template>
          <span>Cambiar Estilo de Visión</span>
        </v-tooltip>
      </button>
    </v-btn-toggle>

    <v-text-field
      v-model="search"
      label="Search"
      class="mx-4 mt-5 custom-input input"
      outlined
      color="#00C853"
    ></v-text-field>

    <table v-if="tableView" class="table-container mb-9">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Dimensión</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="location in filteredLocations" :key="location.id">
          <td>{{ location.name }}</td>
          <td>{{ location.type }}</td>
          <td>{{ location.dimension }}</td>
        </tr>
      </tbody>
    </table>

    <div v-else class="content">
      <div class="v-card" v-for="location in filteredLocations" :key="location.id">
        <h3>{{ location.name }}</h3>
        <p><strong>Type:</strong> {{ location.type }}</p>
        <p><strong>Dimension:</strong> {{ location.dimension }}</p>
      </div>
    </div>
  </div>
</template>

  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        locations: [],
        tableView: true,
        search: '',
      };
    },
    created() {
      this.fetchLocations();
    },
    computed: {
      filteredLocations() {
        return this.locations.filter(location => {
          const locationName = location.name.toUpperCase();
          const searchValue = this.search.toUpperCase();
          return locationName.includes(searchValue);
        });
      },
    },
    methods: {
      fetchLocations() {
        axios.get('https://rickandmortyapi.com/api/location')
          .then(response => {
            this.locations = response.data.results;
          })
          .catch(error => {
            console.error(error);
          });
      },
      toggleView() {
        this.tableView = !this.tableView;
      },
    },
  };
  </script>

<style scoped>

.table-container {
  padding: 20px;
  align-items: center;
   overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 15px;
  text-align: center;
  border-bottom: 5px solid #ddd;
  border-top: 5px solid #ddd;
  border-left: 5px solid #ddd;
  border-right: 5px solid #ddd;
  vertical-align: middle;
}

th {
  background-color: #82fe0f;
}

tr:nth-child(even) {
  background-color: whitesmoke;
}

tr:hover {
  background-color: #A5D6A7;
}
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.v-card {
  width: 300px;
  margin: 10px;
  padding: 10px;
  border: 3.5px #00c853 solid;
  background-color: #E8F5E9;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 20px;
  margin-bottom: 5px;
}

h4 {
  font-size: 16px;
  margin-bottom: 5px;
}
h3{
  font-size: 30px;
  color: #00C853;
  font-weight: bold;
}

@media (max-width: 600px) {
  table {
    font-size: 14px; 
  }
  th, td {
    padding: 10px;
  }
  .table-container {
    padding: 10px;
  }
}
</style>