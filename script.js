let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{

                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            })
        }
    })
}


/*const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    emailjs.sendForm('service_id', 'template_id', form, 'public_key')
    .then(() => {
        alert('Message sent successfully!');
        form.reset();
    }, (error) => {
        alert('Failed to send message! Try again later.');
    });
});




(function () {
    emailjs.init("4BsZZFpyYDEiOSdNE"); // Your Public Key
  })();
  
  /*function sendEmail() {
    let name = document.querySelector("input[placeholder='Full Name']").value;
    let email = document.querySelector("input[placeholder='Email']").value;
    let phone = document.querySelector("input[placeholder='Phone Number']").value;
    let subject = document.querySelector("input[placeholder='Subject']").value;
    let message = document.querySelector("textarea").value;
  
    if (name === "" || email === "" || message === "") {
      alert("Please fill all required fields!");
      return;
    }
  
    let params = {
      user_name: name,
      user_email: email,
      user_phone: phone,
      user_subject: subject,
      user_message: message,
    };
  
    emailjs.send("service_u5dorh7", "template_u3j0b7f", params)
      .then(function (response) {
        alert("✅ Message Sent Successfully!");
        document.querySelector("form").reset(); // Clears form
      })
      .catch(function (error) {
        alert("❌ Failed to Send Message! Try again.");
      });
  }*/

      (function () {
        emailjs.init("4BsZZFpyYDEiOSdNE"); // Your Public Key
      })();
      
      const form = document.querySelector('form');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
      
        let params = {
          user_name: form.querySelector("input[placeholder='Full Name']").value,
          user_email: form.querySelector("input[placeholder='Email']").value,
          user_subject: form.querySelector("input[placeholder='Subject']").value,
          user_message: form.querySelector("textarea").value,
        };
      
        if (params.user_name === "" || params.user_email === "" || params.user_message === "") {
          alert("Please fill all required fields!");
          return;
        }
      
        emailjs.send("service_u5dorh7", "template_u3j0b7f", params)
          .then(() => {
            alert("✅ Message Sent Successfully!");
            form.reset();
          })
          .catch(() => {
            alert("❌ Failed to Send Message! Try again.");
          });
      });
      