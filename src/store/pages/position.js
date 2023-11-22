export default ({
    namespaced: true,
    state: {
        listPosition: [
            {
                id: 1,
                name: 'QA Manual'
            },
            {
                id: 2,
                name: 'Front-end developer'
            },
            {
                id: 3,
                name: 'Back-end developer'
            },
            {
                id: 4,
                name: 'QA Automation'
            },
        ]
    },
    getters: {
        getListPositionById: (state) => id => state.listPosition.find(item => item.id === id),
    },
    mutations: {
        
    },
    actions: {},
    modules: {},
});
