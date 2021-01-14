String getUserName(String firstName, String lastName) {
    return firstName.substring(0, 1).toLowerCase() + lastName.toLowerCase();
} 

assert getUserName("Jai", "Salas") == "jsalas" : "getUserName is not working";