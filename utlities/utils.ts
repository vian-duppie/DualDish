export const emailCheck = ( email ) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if( email.match(regex)) {
        return true
    } else {
        return false
    }
}