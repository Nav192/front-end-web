// arrow function
const message = () => {
    const h1 = "Personal Information";
    const name = "Navys Gosal";
    const age = 21;
    const status = "Single";
    const major = "Information Systems";
    const faculty = "Computer Science";
    const address = "Tumaluntung";
    const interests = "Programmer, Machine Learning, AI";
    
    return `<b>${h1}</b><br>
            <hr>
            <b>Name:</b> ${name}<br>
            <b>Age:</b> ${age}<br>
            <b>Status:</b> ${status}<br>
            <b>Major:</b> ${major}<br>
            <b>Faculty:</b> ${faculty}<br>
            <b>Address:</b> ${address}<br>
            <b>Interests:</b> ${interests}`;
};

// export
export default message;