import { getDayById } from "@/store/days";
export default ({
    namespaced: true,
    state: {
        listAppointments: [
            // {
            //     id: 1,
            //     workerId:1,
            //     positionId: 1,
            //     candidatesId:4,
            //     dayId:1
            // },
        ]
    },
    getters: {
        // отримання всього listAppointments
        getListAppointments: ({ listAppointments }) => listAppointments,

        // отримання відфільтрованих об"єктів з гетера  'workers'
        getWorkersAppointmentsList: (state, getters, rootState, rootGetters) =>
            rootGetters['workers/getFillWorkersListActive'](state.listAppointments),

        // отримання відфільтрованих об"єктів кандидатів відносно позиції працівника
        getCandidatesAppointmentsList: (state, getters, rootState, rootGetters) => (workerId) => {
            const worker = rootGetters['workers/getWorkerById'](workerId)
            const positionId = worker ? worker.positionId : null;
            console.log(positionId);
                return rootGetters['candidates/getFillCandidatesListActive'](state.listAppointments, positionId)
        },

        // отримання заповненого listAppointments
        getFillAppointmentsList: (state, getters, rootState, rootGetters) =>
            state.listAppointments.map(item => ({
                id: item.id,
                worker: rootGetters['workers/getWorkerById'](item.workerId).name,
                candidates: rootGetters['candidates/getCandidatesById'](item.candidatesId).name,
                day: getDayById(item.dayId).day
            }))
    },
    mutations: {
        deleteAppointmentById(state, id) {
            state.listAppointments = state.listAppointments.filter(item =>
                item.id !== id)
        },
        addListAppointments(state, newInterview) {
            state.listAppointments.push({ ...newInterview })
        }
    },
    actions: {
        deleteAppointmentById({ commit }, id) {
            commit('deleteAppointmentById', id)
        },
        addListAppointments({ commit }, newInterview) {
            commit('addListAppointments', {
                id: new Date().getMilliseconds(),
                ...newInterview
            })
        }
    },
    modules: {},
});
