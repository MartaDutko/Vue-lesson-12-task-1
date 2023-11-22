<template>
  <div>
    <table>
      <tr>
        <th>Працівник</th>
        <th>Кандидат</th>
        <th>День</th>
      </tr>
      <tr>
        <td>
          <select v-model="dataInterview.workerId">
            <option
              v-for="worker in getWorkersAppointmentsList"
              :key="worker.id"
              :value="worker.id"
            >
              {{ worker.name }} - {{ worker.position }}
            </option>
          </select>
        </td>
        <td>
          <select v-model="dataInterview.candidatesId">
            <option
              v-for="candidate in getCandidatesAppointmentsList(
                dataInterview.workerId
              )"
              :key="candidate.id"
              :value="candidate.id"
            >
              {{ candidate.name }}
            </option>
          </select>
        </td>
        <td>
          <select v-model="dataInterview.dayId">
            <option v-for="day in listDays" :key="day.id" :value="day.id">
              {{ day.day }}
            </option>
          </select>
        </td>
        <td><button @click="addInterview">add</button></td>
      </tr>
      <tr>
        {{
          message
        }}
      </tr>
    </table>
  </div>
</template>

<script>
import { listDays } from "@/store/days";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "InterviewsSelect",
  data() {
    return {
      dataInterview: {},
      message: null,
    };
  },
  computed: {
    ...mapGetters("workers", ["getWorkerById"]),
    ...mapGetters("appointment", ["getWorkersAppointmentsList",
    "getCandidatesAppointmentsList"]),
    ...mapGetters("candidates", ["getCandidatesByPositionId"]),
    listDays() {
      return listDays;
    },
  },
  methods: {
    ...mapActions("appointment", ["addListAppointments"]),
    addInterview() {
      if (
        !this.dataInterview.workerId ||
        !this.dataInterview.candidatesId ||
        !this.dataInterview.dayId
      )
        this.message = "Введіть всі поля";
      else {
        this.addListAppointments({
          ...this.dataInterview,
        });
        this.dataInterview = {};
        this.message = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
select {
  min-width: 100px;
}
</style>