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

let exit = "";

while (exit !== "quit") {
    let input = prompt(
        "Display the firs contact (first)\n" +
        "Display the last contact (last)\n" +
        "Display all contacts (all)\n" +
        "Add a new contact (new)\n" +
        "Exit the program (quit)"
    )

    switch (input) {
        case "first": alert(contacts[0]); break;
        case "last": alert(contacts[contacts.length - 1]); break;
        case "all": alert(contacts); break;
        case "new":
            let name = prompt("Enter the contact's name");
            let phone = prompt("Enter the contact's phone number");
            let email = prompt("Enter the contact's email address");
            contacts.push({ name: name, phone: phone, email: email });
            break;
        case "quit": exit = "quit"; break;
        default: alert("Invalid input. Please try again.");
    }
}