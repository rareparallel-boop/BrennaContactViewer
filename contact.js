"use strict";

const contacts = [
    "1|Scott|scott@murach.com|1-559-555-5555",
    "2|Joel|joel@murach.com|1-409-555-5555",
    "3|Mike|mike@murach.com|1-363-555-5555"
];

const menuString = "COMMAND MENU\n" +
    "list - List all contacts\n" +
    "get # - Get contact with the specified number\n" +
    "exit - Exit program";

let command = prompt(menuString);

while (command !== null && command !== "exit") {

    if (command === "list") {
        
        let list = "";

        for (let i = 0; i < contacts.length; i++) { 
            let contact = contacts[i].split("|");
            list += contact [0] + " - " + 
            contact[1] + "\n";
        }

        alert (list);
    }
    else if (command.startsWith("get")) {

    let parts = command.split(" ");
    let number = parts[1];

    let found = false;

    for (let i = 0; i < contacts.length; i++) {

        let contact = contacts[i].split("|");

        if (contact[0] === number) {

            alert(
                "Name: " + contact[1] +
                "\nEmail: " + contact[2] +
                "\nPhone: " + contact[3]
            );

            found = true;
            break;
        }
    }

    if (!found) {
        alert("Contact not found.");
    }

}
else {
    alert("Invalid command");
}

    command = prompt(menuString);
}

alert("Goodbye!");