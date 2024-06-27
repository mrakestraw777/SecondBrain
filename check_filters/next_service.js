function get_previous_service()
{
    const my_services = document.querySelectorAll("input")
    // console.log(my_services[0].value)
    // console.log(my_services[3].value)
    return my_services;
}

const my_services = get_previous_service();

function next_service()
{   
    const previous_mileage = parseInt(my_services[3].value);
    const next_mileage = 12_500;
    const next_air = document.getElementById('next_air');
    next_air.appendChild(document.createTextNode(`Check ${my_services[0].value} after ${previous_mileage + next_mileage}`));
}



