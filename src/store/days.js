export function getDayById(id){
    return listDays.find(item=>item.id===id)
}

export const listDays =[
    {
        id:1,
        day:'Monday'
    },
    {
        id:2,
        day:'Tuesday'
    },
    {
        id:3,
        day:'Wednesday'
    },
    {
        id:4,
        day:'Thursday'
    },
    {
        id:5,
        day:'Friday'
    },
]

