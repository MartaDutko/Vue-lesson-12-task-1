<template>
  <div>
    <table>
      <tr>
        <th>Працівник</th>
        <th>Кандидат</th>
        <th>День</th>
      </tr>
      <tr
        v-for="(interviews, index) in getFillAppointmentsList"
        :key="interviews.id"
      >
        <td>{{ index + 1 }} - {{ interviews.worker }}</td>
        <td>{{ interviews.candidates }}</td>
        <td>{{ interviews.day }}</td>
        <td>
          <button @click="deleteAppointmentById(interviews.id)">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "InterviewsList",
  computed: {
    ...mapGetters("appointment", ["getFillAppointmentsList"]),
  },
  methods: {
    ...mapActions("appointment", ["deleteAppointmentById"]),
  },
};
</script>

<style lang="scss" scoped>
table {
  width: 500px;

  tr{
padding: 0 10px;
  }
  th {
    color: rgb(0, 119, 255);
  }
  td {
padding: 0 5px;

  }
}
</style>