import { createStore } from "vuex";
import workers from "@/store/pages/workers";
import candidates from "@/store/pages/candidates";
import position from "@/store/pages/position";
import appointment from "@/store/pages/appointment";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    workers,
    candidates,
    position,
    appointment
  },
});
