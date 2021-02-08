<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <div v-if="isLoading">
        <h1>Loading!</h1>
      </div>
      <div v-else-if="!isLoading && (!results || results.length === 0)">
        <h1>No data</h1>
      </div>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult
  },
  data() {
    return {
      results: [],
      isLoading: false
    };
  },
  methods: {
    loadExperiences() {
      fetch(
        'https://vue-http-demo-347de-default-rtdb.firebaseio.com/surveys.json',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
        .then(response => {
          this.isLoading = true;
          if (response.ok) {
            return response.json();
          }
        })
        .then(jsonData => {
          this.isLoading = false;
          const results = [];
          for (const id in jsonData) {
            results.push({
              id: id,
              name: jsonData[id].name,
              rating: jsonData[id].rating
            });
          }
          console.log(results.length);
          this.results = results;
        })
        .catch(error => {
          console.error(error);
          alert(error);
        });
    }
  },
  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
