const getBlog =()=>{
    const data = localStorage.getItem("blog")
    if(data) return JSON.parse(data)
    return []    
}

const addBlogToLocalStore =(id)=>{
    const data = getBlog()
    data.push(id)
    localStorage.setItem("blog",JSON.stringify(data))

}

export{
    getBlog,
    addBlogToLocalStore
}