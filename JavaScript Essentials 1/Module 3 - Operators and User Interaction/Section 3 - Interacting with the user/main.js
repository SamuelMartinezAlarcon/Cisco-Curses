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

// write your code here

let newContactName = prompt("Enter the name of the new contact:", "John Doe");
let newContactPhone = prompt("Enter the phone number of the new contact:", "(000) 000 0000");
let newContactEmail = prompt("Enter the email address of the new contact:", "john.doe@example.com");

contacts.push({
    name: newContactName,
    phone: newContactPhone,
    email: newContactEmail
});

let last = contacts.length - 1;

alert(`The first contact is: ${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
alert(`The last contact is: ${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);

console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);