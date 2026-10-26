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
let showContact = function(contacts, i) {
    if (contacts instanceof Array && contacts[i]) {
        console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    }
};

let showAllContacts = function(contacts) {
    if (contacts instanceof Array) {
        for (contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    }
};

let addNewContact = function(contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
    }
};

let sortContacts = function (contacts, property) {
    if (contacts instanceof Array && ["name", "phone", "email"].includes(property)) {
        contacts.sort((a, b) => {
            if (a[property] < b[property]) return -1;
            if (a[property] > b[property]) return 1;
            return 0;
        });

        console.log(`Contacts sorted by ${property}:`);
        showAllContacts(contacts);
    } else {
        console.log("Error: Invalid contacts array or property for sorting.");
    }
};

let command = "sort";
let sortCriteria = "name";

switch (command) {
    case "showAll":
        showAllContacts(contacts);
        break;
    case "showOne":
        showContact(contacts, 0);
        break;
    case "addNew":
        addNewContact(contacts, "Maisie Haley", "0913 531 3030", "risus.Quisque@urna.ca");
        showAllContacts(contacts);
        break;
    case "sort":
        sortContacts(contacts, sortCriteria);
        break;
    default:
        console.log("Unknown command.");
        break;
}