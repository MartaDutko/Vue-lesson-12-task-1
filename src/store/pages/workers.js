export default ({
    namespaced: true,
    state: {
        listWorkers: [
            {
                id: 1,
                name: 'Іванов O.O.',
                positionId: 1
            },
            {
                id: 2,
                name: 'Петров П.П.',
                positionId: 2
            },
            {
                id: 3,
                name: 'Сидоров С.С.',
                positionId: 3
            },
            {
                id: 4,
                name: 'Коваленко К.М.',
                positionId: 2
            },
            {
                id: 5,
                name: 'Мельник М.О.',
                positionId: 3
            },
            {
                id: 6,
                name: 'Григоренко Г.Г.',
                positionId: 4
            },
        ]
    },
    getters: {
        getWorkersList: ({ listWorkers }) => listWorkers,
        getFillWorkersList: (state, getters, rootState, rootGetters) =>
            state.listWorkers.map(item => ({
                id: item.id,
                name: item.name,
                position: rootGetters['position/getListPositionById'](item.positionId).name
            })),
        // фільтрування listWorkers відносно наявності  вибраних worker
        getFillWorkersListActive: (state, getters, rootState, rootGetters) => (listAppointments) => {
            return state.listWorkers.filter(worker => {
                return !listAppointments.some(item => item.workerId === worker.id)
            }).map(item =>
            ({
                id: item.id,
                name: item.name,
                position: rootGetters['position/getListPositionById'](item.positionId).name
            }))
        },
        getWorkerById: (state) => id => state.listWorkers.find(item =>
            item.id === id),
    },
    mutations: {},
    actions: {},
    modules: {},
});
