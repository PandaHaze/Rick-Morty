<template>
  <v-app>
    <Loading v-if="isLoading"></Loading>
    <div v-else>
      <v-btn-toggle v-model="viewMode" mandatory>
        <v-btn :value="'cards'" color="lime mt-3 ml-4" @click="toggleViewMode('cards')">Vista Cards</v-btn>
        <v-btn :value="'table'" color="lime mt-3" @click="toggleViewMode('table')">Vista Tabla</v-btn>
      </v-btn-toggle>
      <v-text-field
        v-model="search"
        label="Search"
        class="mx-4 mt-5"
        outlined
        color="#00C853"
        @input="filterCharacters"
      ></v-text-field>

      <div v-if="viewMode === 'cards'">
        <div class="content">
          <v-card v-for="character in filterSearch" :key="character.id" :class="getCharacterStatusClass(character)">
            <v-img :src="character.image" class="character-image" alt=""></v-img>
            <div class="info-character">
              <h2>{{ character.name }}</h2>
              <h4>{{ character.species }}</h4>
              <h4>{{ character.status }}</h4>
            </div>
          </v-card>
        </div>
      </div>

      <v-data-table v-else :items="filterSearch" 
      :headers="headers" 
      class="data"
      @pagination="scrollToTop">
        <template v-slot:item="{ item }">
          <tr class="tr">
            <td>
              <v-img :src="item.image" alt="" class="character-imagee"></v-img>
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.species }}</td>
            <td :class="getCharacterStatusClass(item)">{{ item.status }}</td>
          </tr>
        </template>
      </v-data-table>
    </div>
  </v-app>
</template>
<script>
import Loading from '../components/Loading.vue';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    Loading,
  },
  data() {
    return {
      characters: [],
      filterSearch: [],
      isLoading: true,
      headers: [
        {
          text: 'Imagen',
          value: 'image',
        },
        {
          text: 'Nombre',
          value: 'name',
        },
        {
          text: 'Especie',
          value: 'species',
        },
        {
          text: 'Status',
          value: 'status',
        },
      ],
      viewMode: 'cards',
      tableView: true,
    };
  },
  mounted() {
    this.loadCharacters();
  },
  methods: {
    loadCharacters() {
      axios
        .get('https://rickandmortyapi.com/api/character')
        .then(response => {
          this.characters = response.data.results;
          this.filterSearch = this.characters;
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
        })
        .catch(error => {
          console.error(error);
          this.isLoading = false;
        });
    },
    scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
    filterCharacters() {
    this.filterSearch = this.characters.filter(character =>
      character.name.toLowerCase().includes(this.search.toLowerCase())
    );
  },
    getCharacterStatusClass(character) {
      if (character.status === 'Alive') {
        return 'character-green';
      } else if (character.status === 'Dead') {
        return 'character-red';
      } else {
        return 'character-gray';
      }
    },
    toggleViewMode() {
      this.viewMode = this.viewMode === 'cards' ? 'table' : 'cards';
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.v-card {
  width: 300px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.info-character {
  margin-left: 10px;
  padding: 10px;
}

h2 {
  font-size: 20px;
  margin-bottom: 5px;
}

h4 {
  font-size: 16px;
  margin-bottom: 5px;
}

.character-green {
  background-color: #00C853 !important;
  color: #ffffff;
}

.character-red {
  background-color: red !important;
  color: #ffffff;
}

.character-gray {
  background-color: #9E9E9E !important;
  color: #ffffff;
}
.character-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}
.character-imagee {
  width: 40%;
  height: auto;
}
.data {
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
  width: 90%;
  margin: 50px;
}
.tr{
  background-color: whitesmoke;
}

</style>







