<template>
  <div class="table-container">

<v-btn-toggle>
  <button @click="toggleView">
    <v-tooltip bottom>
      <template #activator="{ on }">
        <v-icon class="ml-8" color="#263238" v-on="on">{{ isTableView ? 'mdi-table' : 'mdi-view-grid' }}</v-icon>
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

    <div v-if="isTableView" class="table-container">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fecha de emisión</th>
            <th>Episodio</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="episode in filteredEpisodes" :key="episode.id">
            <td>{{ episode.name }}</td>
            <td>{{ episode.air_date }}</td>
            <td>{{ episode.episode }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="content">
      <div class="v-card" v-for="episode in filteredEpisodes" :key="episode.id">
        <h3>{{ episode.name }}</h3>
        <p><strong>Fecha de emisión:</strong> {{ episode.air_date }}</p>
        <p><strong>Episodio:</strong> {{ episode.episode }}</p>
      </div>
    </div>
  </div>
</template> 

<script>
import axios from 'axios';

export default {
  data() {
    return {
      episodes: [],
      isTableView: true,
      search: '',
      filteredEpisodes: [],
    };
  },
  mounted() {
    this.fetchEpisodes();
  },
  methods: {
    fetchEpisodes() {
      axios.get('https://rickandmortyapi.com/api/episode')
        .then(response => {
          this.episodes = response.data.results;
          this.filteredEpisodes = response.data.results;
        })
        .catch(error => {
          console.error(error);
        });
    },
    toggleView() {
      this.isTableView = !this.isTableView;
    },
  },
  watch: {
    search() {
      if (this.isTableView) {
        this.filteredEpisodes = this.episodes.filter(episode =>
          episode.name.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        this.filteredEpisodes = this.episodes.filter(episode =>
          episode.name.toLowerCase().includes(this.search.toLowerCase())
        );
      }
    }
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
  border: 3.5px solid #00c853;
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
.custom-input input {
  color: red;
}
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; 
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  width: 120px;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
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