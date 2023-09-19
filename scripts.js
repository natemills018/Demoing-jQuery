$(document).ready(function () {

    function alerted() {
        alert('Clicked');
    }


    $("#btnSubmit").on("click", alerted);

    let colors = ['blue', 'green', 'red', 'purple', 'yellow', 'orange', 'gray', 'brown'];
    // let randomColor = colors[Math.floor(Math.random() * colors.length)];

    let jQueryDiv = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.id = 'hoverColor';

    $("#formSubmitted").click(function (event) {
        event.preventDefault();
        let yourName = $('#yourFirstName').val();


        let h2text = document.createTextNode(yourName);

        h2.appendChild(h2text);
        jQueryDiv.appendChild(h2);
        document.body.appendChild(jQueryDiv);

    })

    $('#hoverColor').click(function () {
        console.log("clicked");
    })

    $('#yourFirstName').on('keyup', (e) => {
        let value = e.currentTarget.value;
        $('#formSubmitted').disabled = false;

        if (value === "") {
            $('#formSubmitted').disabled = true;
        }
    })

    $("#formSubmitted").click(function () {
        let jQueryDiv = document.createElement('div');
    })

    function addDivElement() {
        let jQueryDiv = document.createElement('div');
        let h2 = document.createElement('h2');
        let h2text = document.createTextNode()
    }

})
