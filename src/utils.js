const pagination = (items) => {
    const itemsPerPage = 10
    const pages = Math.ceil(items.length / itemsPerPage)
    const newPages = Array.from({length:pages},(_,index)=> {
        const start = index * itemsPerPage;
        return items.slice(start,start + itemsPerPage)

    })
    return newPages
}

export default pagination