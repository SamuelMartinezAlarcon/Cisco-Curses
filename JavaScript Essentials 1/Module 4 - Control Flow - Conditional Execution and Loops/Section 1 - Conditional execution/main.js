let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

console.log("1. Show first contact");
console.log("2. Show last contact");
console.log("3. Add new contact");

let userChoice = Number(prompt("Please choose an option (1, 2, or 3):"));

if (userChoice === null) {
    console.log("User cancelled the prompt.");
} else {
    if (!isNaN(userChoice)) {
    switch (userChoice) {
        case 1:
            console.log(contacts[0]);
            break;
        case 2:
            console.log(contacts[contacts.length - 1]);
            break;
        case 3:
            let newName = prompt("Enter the new contact's name:");
                if (newName === null) {
                    console.log("Operación cancelada.");
                    break;
                }

                let newPhone = prompt("Enter the new contact's phone number:");
                if (newPhone === null) {
                    console.log("Operación cancelada.");
                    break;
                }

                let newEmail = prompt("Enter the new contact's email address:");
                if (newEmail === null) {
                    console.log("Operación cancelada.");
                    break;
                }

                if (newName.trim() && newPhone.trim() && newEmail.trim()) {
                    contacts.push({
                        name: newName.trim(),
                        phone: newPhone.trim(),
                        email: newEmail.trim()
                    });
                    console.log("¡Nuevo contacto añadido!");
                } else {
                    console.log("Error: Por favor, proporciona toda la información requerida.");
                }
                break;
        default:
            console.log("Invalid option. Please choose 1, 2, or 3.");
    }
}
}
