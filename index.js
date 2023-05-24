function onClick(f_id) {

    switch (f_id) {
        case 'getStarted':
            object = document.getElementsByClassName('section-one')[0]
            console.log(object.offsetWidth)
            object.style.height = "70%"
            object.style.transform = "translate(0%, -50%)"
            console.log(object.offsetWidth)
            break;
    
        default:
            break;
    }
}