<template>
  <div>
    <interviews-list />
    <hr>
    <interviews-select/>
  </div>
</template>

<script>
import InterviewsList from "@/components/InterviewsList.vue";
import InterviewsSelect from '@/components/InterviewsSelect.vue';
export default {
  name: "InterviewsView",
  components: { InterviewsList, InterviewsSelect },
};
</script>

<style lang="scss" scoped>
</style>