const $links = document.getElementById('links');
const $name = document.querySelector('h1');
const $userName = document.querySelector('h2');
const $avatar = document.getElementById('avatar');
const $description = document.getElementById('description');
const setSocialMediaContainer = document.getElementById('social-media-container');

const data = {
  name: "Kamilo Alomías",
  nickname: "kastalco",
  description: "Senior Product Designer with +7 years of experience and Design Engineer with knowledge in HTML, CSS and JavaScript",
  avatar: "https://media.licdn.com/dms/image/v2/D4E03AQGrNkOqyrIshw/profile-displayphoto-shrink_800_800/B4EZWH9ggQHMAc-/0/1741742803420?e=1790812800&v=beta&t=z2S6iYwkqOllWx-vPKIB232uABygJT_FIXEl6mj2CKk",
  social: [
    {
      name: "linkedId",
      url: "http://linkedin.com/in/kastalco",
      username: "kastalco",
      icon: `<svg class="w-6 h-6 cursor-pointer text-gray-400 hover:text-blue-500 fill-current"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path
                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                    </path>
            </svg>`
    },
    {
      name: "github",
      url: "https://github.com/Kastalco97",
      username: "Kastalco97",
      icon: `<svg class="w-6 h-6 cursor-pointer text-gray-400 hover:text-[#6e5494] fill-current"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>`
    },
    {
      name: "platzi",
      url: "https://platzi.com/p/kastalco/",
      username: "@kastalco",
      icon:`<svg class="w-6 h-6 cursor-pointer text-gray-400 hover:text-[#98CA3F] fill-current"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.6392 1.127L2.486 9.282a3.842 3.842 0 000 5.4361l8.1552 8.1552a3.842 3.842 0 005.4361 0l2.719-2.718-2.719-2.7181-2.718 2.718-8.1562-8.1551 8.1552-8.1552 5.437 5.4371-5.437 5.4361 2.718 2.719 5.4371-5.437a3.842 3.842 0 000-5.4372l-5.448-5.436a3.828 3.828 0 00-5.4252 0z" />
            </svg>`
    },
    {
      name: "website",
      url: "https://kastalco.framer.website/",
      username: "@kastalco",
      icon:`<svg class="w-6 h-6 cursor-pointer text-gray-400 hover:text-blue-500 fill-current xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><script xmlns="" id="nimlmejbmnecnaghgmbahmbaddhjbecg"/><script xmlns=""/><script xmlns=""/>
<g>
	<path d="M256,512C114.6,512,0,397.4,0,256S114.6,0,256,0s256,114.6,256,256S397.4,512,256,512z M454.4,307.2   c8.7-33.6,8.7-68.8,0-102.4h-97.8c2.4,34.1,2.4,68.3,0,102.4H454.4z M433.4,358.4H351c-4.3,30.9-12.5,61.1-24.3,89.9   C371.6,431.7,409.4,399.9,433.4,358.4z M206.9,307.2h98.3c2.8-34.1,2.8-68.3,0-102.4h-98.3C204.1,238.9,204.1,273.1,206.9,307.2z    M213.3,358.4c10.5,61.4,28.9,102.4,42.8,102.4c13.8,0,32.3-41,42.8-102.4H213.3z M57.6,307.2h97.8c-2.4-34.1-2.4-68.3,0-102.4   H57.6C48.9,238.4,48.9,273.6,57.6,307.2z M78.6,358.4c24,41.5,61.8,73.3,106.8,89.9c-10.8-24.6-19-55.3-24.3-89.9H78.6z    M433.4,153.6c-24-41.5-61.8-73.3-106.8-89.9c10.8,24.6,19,55.3,24.3,89.9H433.4z M213.3,153.6h85.5   C288.3,92.2,269.8,51.2,256,51.2C242.2,51.2,223.8,92.2,213.3,153.6z M78.6,153.6H161c5.1-34.6,13.6-65.3,24.3-89.9   C140.4,80.3,102.6,112.1,78.6,153.6z"/>
</g>
<style xmlns="" lang="en" type="text/css" id="dark-mode-native-style"/><script xmlns=""/></svg>`
    }
  ],
  links: [{
      name: "ECMAScript",
      url: "https://platzi.com/p/kastalco/curso/3504-course/diploma/detalle/",
      color: "yellow",
      emoji: "https://static.platzi.com/media/achievements/badge-escmascript-historia-92707485-a3f2-4946-91f0-fb0291f5887d.png",
    },{
      name: "JavaScript: DOM Manipulation",
      url: "https://platzi.com/p/kastalco/curso/10135-course/diploma/detalle/",
      color: "orange",
      emoji: "https://static.platzi.com/media/achievements/badge-1-49b4ca10-ea84-48d4-ab6e-7ffa1475b68d.png",
    },{
      name: "CSS Architectures",
      url: "https://platzi.com/p/kastalco/curso/7991-course/diploma/detalle/",
      color: "sky",
      emoji: "https://static.platzi.com/media/achievements/piezas-arquitecturas-css_badge-ebf283e7-d6da-4f7f-8d69-f2b7a37a146c.png",
    },
    {
      name: "Git & Github",
      url: "https://platzi.com/p/kastalco/curso/11059-course/diploma/detalle/",
      color: "pink",
      emoji: "https://static.platzi.com/media/achievements/badge-8-738d990a-87e0-488a-b069-6ac164a2790c.png",
    },
    {
      name: "Basic Programming Course",
      url: "https://platzi.com/p/kastalco/curso/13100-course/diploma/detalle/",
      color: "slate",
      emoji: "https://static.platzi.com/media/achievements/f7e396e6-942c-440c-8f1d-4e010739d363-4d13ac16-fe84-4d34-a2f9-a812cbba051d.png",
    },
  ],
  footer: "Made with Love in Colombia",
};

const main = ()=>{/* 
    let name = document.createTextNode(data?.name); */
    let links = data?.links?.map((link)=>{
        return `<li class="bg-${link.color}-200 px-4 py-5 w-full flex items-center gap-2">
                    <img class="w-8" src='${link.emoji}'>
                    <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
                        href="${link.url}" target="_blank">
                        ${link.name}
                    </a>
                </li>`
    }).join('');

    let newItem = document.createElement("ul");
    newItem.innerHTML = links;
    $links.appendChild(newItem);

    $name.textContent = data.name;

    $userName.textContent = data.nickname;

    $avatar.src = data.avatar;

    $description.textContent = data.description;

    setSocialMediaLinks();

}

function setSocialMediaLinks(){
    const socialLinks = data?.social?.map((social)=>{
        return `<li>
                <a href="${social.url}" target="_blank">
                    ${social.icon}
                </a>
                </li>`
                
    }).join('');


    setSocialMediaContainer.innerHTML = socialLinks;

}

main();