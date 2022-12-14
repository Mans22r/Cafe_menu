const createContactPage = () => {
  const contactPage = document.createElement('section');
  contactPage.setAttribute('id', 'contact-page');
  contactPage.innerHTML = `<div id="slogan"><h2>Fresh Cuisine</h2>
  <p>Fresh food. Fresh ideas.</p></div>
  <div id="opening-hours">
    <h2>Open Hours</h2>
    <ul>
      <li>Mon - Fri: 9 AM - 6 PM</li>
      <li>Saturday: 9 AM - 4 PM</li>
      <li>Sunday : 9 AM - 2 PM</li>
    </ul>
  </div>
  <div id="contact-us">
    <h2>Contact Us</h2>
    <ul>
      <li>ABCD Sample street <br>Ernakulam, Kerala, 683585</li>
      <li>Email: <span>ashique@example.com</span></li>
      <li>Telephone: <span>+91 79945 45350</span></li>
    </ul>
  </div>
  <div id="subscribe">
    <h2>Subscribe</h2>
    <h2>Newsletter</h2>
    <input type="email" placeholder="Email">
    <button id="submit">Subscribe</button>
  </div>
  <footer>
    <p>2022 <i class="fa fa-copyright"></i> Mans22r | Developed by <a href="https://www.linkedin.com/in/mansoor-majeed/">Mans22r</a></p>
    <ul id="social-icons">
      <li><a href="#"><i class="fa fa-facebook"></a></i></li>
      <li><a href="#"><i class="fa fa-twitter"></a></i></li>
      <li><a href="#"><i class="fa fa-linkedin"></a></i></li>
      <li><a href="#"><i class="fa fa-instagram"></a></i></li>
    </ul>
  </footer>
  `;
  document.getElementById('content').appendChild(contactPage);
};

export default createContactPage;
