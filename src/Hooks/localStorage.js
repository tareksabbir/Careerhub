const getDataFromLocalStorage = () => {
    const data = localStorage.getItem("job")
    if (data) {
        return JSON.parse(data)
    }

    return []
}


const addDataToLs = (id) => {
    const data = getDataFromLocalStorage()
    data.find(idx => {
        if (idx != id) {
            data.push(id)
        }
    })
    localStorage.setItem("job", JSON.stringify(data))

}

export {
    getDataFromLocalStorage, addDataToLs
}