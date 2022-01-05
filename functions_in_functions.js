const uppercaseMessage = (message) => {
    return message.toUpperCase();
}

const transform = (message, transformFunction) => {
    return transformFunction(message);
}

console.log(transform("hello", uppercaseMessage))

const notifyByEmail = (email_address) => {
    return `Email sent to: ${email_address}`;
}

const notifyByText = (phone_number) => {
    return `Text sent to: ${phone_number}`;
}

function notify(address, platform) {
    return platform(address);
}

console.log(notify('email-hotmail.com', notifyByEmail))

console.log(notify('07984611234', notifyByText))