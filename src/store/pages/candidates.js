export default ({
    namespaced: true,
    state: {
        listCandidates: [
            {
                id: 1,
                name: 'Шевченко Ш.Ш.',
                positionId: 1
            },
            {
                id: 2,
                name: 'Олійник О.І.',
                positionId: 2
            },
            {
                id: 3,
                name: 'Сидоров С.С.',
                positionId: 3
            },
            {
                id: 4,
                name: 'Мельник К.М.',
                positionId: 4
            },
            {
                id: 5,
                name: 'Петров М.О.',
                positionId: 2
            },
        ]
    },
    getters: {
        getListCandidates: ({ listCandidates }) => listCandidates,
        getFillListCandidates: (state, getters, rootState, rootGetters) =>
            state.listCandidates.map(item => ({
                id: item.id,
                name: item.name,
                position: rootGetters['position/getListPositionById'](item.positionId).name
            })),
        getCandidatesById: state => id => state.listCandidates.find(item =>
            item.id === id),
        getCandidatesByPositionId: state => id => state.listCandidates.filter(item =>
            item.positionId === id),

        // фільтрування  listCandidates відносно отриманої категорії (positionId) і фільтрування на наявність вибраних candidate
        getFillCandidatesListActive: (state, getters, rootState, rootGetters) => (listAppointment, positionId) => {
            return state.listCandidates
                .filter(candidate => {
                    return (!listAppointment.some(item => item.candidatesId === candidate.id)) && candidate.positionId === positionId;
                })
                .map(item => ({
                    id: item.id,
                    name: item.name,
                    position: rootGetters['position/getListPositionById'](item.positionId).name
                }));
        }
    },
    mutations: {},
    actions: {},
    modules: {},
});
