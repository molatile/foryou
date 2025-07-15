let w=['ALINA','OLD','ALYA','CUTE'];
let el=document.querySelector('#type');
function sleep(ms){
  return new Promise(resolve=>setTimeout(resolve,ms));
}
let t=100;
let write=async()=>{
  while(true){
    for(let i=0;i<w.length;i++){
     
      let word=w[i];
      for(let j=0;j<word.length;j++){
      el.innerHTML+=word[j];
      await sleep(t*5);
    }
    for(let k=word.length;k>-1;k--){
      el.innerHTML=word.substring(0,k-1);
      await sleep(t*3);
    }    
      
     await sleep(t*5); 
    }
    

  }
};
write();

const img=["s1","s2","s3","s4","s5","s6","s7"];
let i=0;
let slide=document.querySelector(".slide");

function next(){
  i++;
  if(i>=img.length){
    i=0;
  }
  slide.src=`${img[i]}.jpg`;
}

setInterval(next, 3000);








    // Canvas & Particle Explosion
    const canvas = document.querySelector('#bgCanvas');
    const c = canvas.getContext('2d');
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    const mouse = {
      x: innerWidth / 2,
      y: innerHeight / 2
    };

    const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];
    let grav = 0.07;
    let fric = 0.99999;
    const exp1=new Audio('e1.mp3');
    const exp2=new Audio('e2.mp3');
    const exp3=new Audio('e3.mp3');
    const sound=[exp1, exp2, exp3];
    window.addEventListener('mousemove', (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });

    window.addEventListener('resize', () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      init();
    });

    class Particle {
      constructor(x, y, radius, color, v) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.v = v;
        this.alpha = 1;
      }

      draw() {
        c.save();
        c.globalAlpha = this.alpha;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
        c.restore();
      }

      update() {
        this.draw();
        this.v.x *= fric;
        this.v.y *= fric;
        this.v.y += grav;
        this.x += this.v.x;
        this.y += this.v.y;
        this.alpha -= 0.004;
      }
    }

    let particles = [];

    function init() {
      particles = [];
    }

    function animate() {
      requestAnimationFrame(animate);
      c.fillStyle = 'rgba(0, 0, 0, 0.05)';
      c.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        if (p.alpha > 0) {
          p.update();
        } else {
          particles.splice(i, 1);
        }
      });
    }

    init();
    animate();

    addEventListener('click', (event) => {
      const exp = sound[Math.floor(Math.random() * sound.length)];
      exp.currentTime = 0; // Reset audio to start
      exp.play();
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      const num = 220;
      const q = 30;
      const ai = (Math.PI * 2) / num;
      for (let i = 0; i < 200; i++) {
        const speed = Math.random() * 5 + 2;
        particles.push(new Particle(
          mouse.x,
          mouse.y,
          7,
          `hsl(${Math.random() * 360}, 50%, 50%)`,
          {
            x: Math.cos(ai * i) * Math.random() * q,
            y: Math.sin(ai * i) * Math.random() * q
          }
        ));
      }
    });

    // Background music
const bgMusic = new Audio('p1.mp3'); // replace with your music file
bgMusic.loop = true; // so it plays continuously

const glitchBtn = document.getElementById('glitchBtn');
let isPlaying = false;

glitchBtn.addEventListener('click', () => {
  if (!isPlaying) {
    bgMusic.play();
    glitchBtn.innerText = "Pause";
  } else {
    bgMusic.pause();
    glitchBtn.innerText = "Play";
  }
  isPlaying = !isPlaying;
});

