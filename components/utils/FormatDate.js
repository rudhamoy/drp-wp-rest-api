const formatDate = (date) => {
    var d = new Date(date)
    var options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }
    return d.toLocaleDateString('en-us', options)
}

export default formatDate