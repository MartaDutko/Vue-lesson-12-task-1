<template>
    <div>
        <ol>
        <li v-for="candidate in getFillListCandidates" :key="candidate.id">
            {{candidate.name}} - {{candidate.position}}
        </li>
        </ol>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

    export default {
        name:'CandidatesList',
    computed: {
        ...mapGetters('candidates',['getFillListCandidates'])
    },
    }
</script>

<style lang="scss" scoped>

</style>