<template>
  <div>
    <ol>
      <li v-for="worker in getFillWorkersList" :key="worker.id">
        {{ worker.name }} - {{ worker.position }}
      </li>
    </ol>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "WorkersList",
  computed: {
    ...mapGetters("workers", ["getFillWorkersList"]),
  },
};
</script>

<style lang="scss" scoped>
</style>