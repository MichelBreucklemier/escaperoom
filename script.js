document.getElementById('answerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var username = document.getElementById('username').value;
    var answer = document.getElementById('answer').value;

    // Here, you can add your logic to handle the form submission, such as sending the data to a server
    console.log('Username: ', username);
    console.log('Answer: ', answer);

    // Displaying a message to the user
    var responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = 'Thank you for your submission, ' + username + '!';

    // Optionally, clear the form
    document.getElementById('answerForm').reset();
});
