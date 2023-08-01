//type animation
var str = 'Aspiring Full Stack Developer & Data Scientist';

var spans = '<span>' + str.split('').join('</span><span>') + '</span>';
$(spans).hide().appendTo('.css-typing').each(function (i) {
    $(this).delay(100 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});

//scroll sections

window.onscroll= () => {
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)
}

function setActiveSection() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            // Add 'active' class to the corresponding link in the navbar
            const targetLink = document.querySelector(`a[href="#${section.id}"]`);
            if (targetLink) {
                document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
                targetLink.classList.add('active');
            }
        }
    });
}

// Select all links with hash (#) in href attribute
const links = document.querySelectorAll('a[href^="#"]');

// Function to scroll smoothly to the target section
function smoothScroll(targetSection, duration) {
    const targetPosition = targetSection.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const startTime = performance.now();

    function scrollAnimation(currentTime) {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeOutCubic(progress);
        window.scrollTo(0, startPosition + targetPosition * ease);

        if (timeElapsed < duration) {
            requestAnimationFrame(scrollAnimation);
        }
    }

    requestAnimationFrame(scrollAnimation);
}

// Easing function to create a smooth scroll animation
function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

// Add click event listener to each link
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Get the target section's id from the href attribute
        const targetId = link.getAttribute('href').slice(1);

        // Find the target section by its id
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section smoothly with a slower duration (e.g., 1000ms)
        smoothScroll(targetSection, 1000);
    });
});

window.addEventListener('load', setActiveSection);
window.addEventListener('scroll', setActiveSection);


function sendEmail() {
    console.log('working')
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "websitesent1@gmail.com",
        Password : "C0C3CBFDF61E4C16BB684FEE9CEE3EE2C143",
        To : 'websitesent1@gmail.com',
        From : "websitesent1@gmail.com",
        Subject : "Website Message",
        Body : "Name: " + document.getElementById("name").value 
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}




