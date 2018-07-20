$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

    // Add footer content

    $("#footer-block").html(
        `<footer class="footer">
        <div class="content is-small has-text-centered">
            <p>
                Copyright &copy; 2018 <strong>Ashva Digital Healthcare</strong>. All Rights Reserved.
            </p>
            <p>    
                Website designed and developed by <a target="_blank" href="http://muthuct.com">Muthu Annamalai</a>.
            </p>
            <br>
            <p class="footer-small-text">This website is suitable to be viewed on devices of all screen sizes</p>
        </div>
        <!--Website designed and developed by Muthu Annamalai Chidambaram(http://muthuct.com)-->
    </footer>
    `);
});


/* var navInfo = document.getElementById("nav-template").innerHTML;
        console.log(navInfo);
        var navtemplate = Handlebars.compile(navInfo);
        console.log(navtemplate);
    */
var navtemplate = Handlebars.templates['navbar'];
Handlebars.registerHelper("ifeq", function (num1, num2, options) {
    if (num1 === num2) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});



function fullImage(imagePath) {
    document.getElementById("modalImage").innerHTML = "<img src='" + imagePath + "'>";
    $("#templateModal").toggleClass("is-active");
    console.log(imagePath);
}

function closeImage() {
    $("#templateModal").toggleClass("is-active");
    console.log("Closed Image Modal");
}