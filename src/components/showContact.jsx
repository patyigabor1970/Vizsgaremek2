

function showContact() {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    document.body.appendChild(overlay);
  
   
    const contactInfo = document.createElement('div');
    contactInfo.style.backgroundColor = 'grey';
    contactInfo.style.padding = '100px';
    contactInfo.style.fontFamily = 'Arial, sans-serif';
    contactInfo.style.fontSize = '50px';
    contactInfo.style.textAlign = 'center';
    contactInfo.style.position = 'relative';
    overlay.appendChild(contactInfo);
  
    const closeButton = document.createElement('button');
    closeButton.innerText = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px';
    closeButton.style.right = '20px';
    closeButton.style.width = '40px';
    closeButton.style.height = '40px';
    closeButton.style.borderRadius = '50%';
    closeButton.style.backgroundColor = 'black';
    closeButton.style.color = '#fff';
    closeButton.style.fontSize = '24px';
    closeButton.style.border = 'none';
    closeButton.style.cursor = 'pointer';
    closeButton.addEventListener('click', () => {
      document.body.removeChild(overlay);
    });
    contactInfo.appendChild(closeButton);
  
    const heading = document.createElement('h1');
    heading.innerText = 'Contact Information';
    contactInfo.appendChild(heading);
    const phone = document.createElement('p');
    phone.innerText = 'Phone: 123-456-7890';
    contactInfo.appendChild(phone);
    const email = document.createElement('p');
    email.innerText = 'Email: info@example.com';
    contactInfo.appendChild(email);
}

export default showContact