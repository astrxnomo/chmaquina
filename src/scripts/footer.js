function updateDateTime() {
    const currentDateTimeElement = document.getElementById('currentDateTime');
    const now = new Date();
    const formattedDateTime = now.toLocaleString(); // You can adjust the format as needed

    currentDateTimeElement.textContent = formattedDateTime;
}

// Update the date and time initially
updateDateTime();

// Update the date and time every second (1000 milliseconds)
setInterval(updateDateTime, 1000);
