function onClick(f_id) {

    switch (f_id) {
        case 'getStarted':
            im = document.getElementById('inpImg')
            desc = document.getElementById('desc')

            normName = "Placeholder Stuff"
            scName = "placeholderitus stuffitus"
            imToReplace = "cov2.jpg" // call the file func here

            im.src = imToReplace
            desc.innerHTML = `${normName}<br><i>${scName}</i>`

            break;
        default:
            break;
    }
}