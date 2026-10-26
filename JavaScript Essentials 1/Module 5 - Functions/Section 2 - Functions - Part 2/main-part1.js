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

function showContact (contacts, index) {
    if (contacts instanceof Array && typeof contacts[index] === "object" && contacts[index] !== null) {
        console.log(`${contacts[index].name} / ${contacts[index].phone} / ${contacts[index].email}`);
    } else {
        console.log("Error: Invalid contact index or contacts array.");
    }
}

function showAllContacts (contacts) {
    if (contacts instanceof Array) {
        contacts.forEach((contact, index) => {
            showContact(contacts, index);
        });
    } else {
        console.log("Error: Invalid contacts array.");
    }
}

function addNewContact (contacts, name, phone, email) {
    if (contacts instanceof Array && typeof name === "string" && typeof phone === "string" && typeof email === "string") {
        contacts.push({ name, phone, email });
    } else {
        console.log("Error: Invalid input for adding a new contact.");
    }
}

let command = "showAll";
let targetIndex = 0;

switch (command) {
    case "showAll":
        showAllContacts(contacts);
        break;
        
    case "showOne":
        showContact(contacts, targetIndex);
        break;
        
    case "addNew":
        addNewContact(contacts, "Maisie Haley", "0913 531 3030", "risus.Quisque@urna.ca");
        showAllContacts(contacts);
        break;
        
    default:
        console.log("Unknown command.");
        break;
}