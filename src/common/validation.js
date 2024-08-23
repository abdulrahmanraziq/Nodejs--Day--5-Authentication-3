export const validtionEmail = function(email){
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}

export const validationMobile = function(mobile){
    let phone = /\d{10}/
    return phone.test(mobile)
}