

function showAboutUs() {
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
    contactInfo.style.fontSize = '30px';
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
    heading.innerText = 'Rólunk';
    contactInfo.appendChild(heading);
    const info = document.createElement('p');
    info.innerText = 'A Fit World Fitness 2002. nyarán nyitotta meg kapuit a sportolni és kikapcsolódni vágyó vendégek számára. Szeged belvárosában mintegy 1 000 m2-en várjuk a sport szerelmeseit! Belvárosi edzőtermünk a Széchenyi tér szomszédságában konditeremmel, egyéni-páros-kiscsoportos, és csoportos edzésekkel várja Vendégeit, az év minden napján!';
    contactInfo.appendChild(info);
    
}
export default showAboutUs;