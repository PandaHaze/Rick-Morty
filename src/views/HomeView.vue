<template>
  <v-app>
    <Loading v-if="isLoading"></Loading>
    <div v-else>
      <v-text-field
        v-model="search"
        label="Search"
        class="mx-4 mt-5"
        outlined
        color="#00C853"
        @input="filterCharacters"
      ></v-text-field>

      <div>
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
  width: 100%;
}
</style>







