const about = document.querySelector('#about')
const contact = document.querySelector('#contact')

const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

const workexp = document.querySelector('#experience')
const workexpContent = document.querySelector('#workexp-content')

const skills = document.querySelector('#skills')
const skillsContent = document.querySelector('#skills-content')



about.addEventListener('click', () =>{
    const aboutBox = new WinBox({
        title: 'Sobre mí',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: aboutContent,
        onfocus: function () {
            this.setBackground('#00aa00')
        },
        onblur: function () {
            this.setBackground('#777')
        }
    })
})

contact.addEventListener('click', () =>{
    const contactBox = new WinBox({
        title: 'Contactame',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        top: 150,
        right: 50,
        bottom: 50,
        left: 250,
        mount: contactContent,
        onfocus: function () {
            this.setBackground('#00aa00')
        },
        onblur: function () {
            this.setBackground('#777')
        }
    })
})

workexp.addEventListener('click', () =>{
    const workexpBox = new WinBox({
        title: 'Experiencia',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        top: 180,
        right: 50,
        bottom: 50,
        left: 30,
        mount: workexpContent,
        onfocus: function () {
            this.setBackground('#00aa00')
        },
        onblur: function () {
            this.setBackground('#777')
        }
    })
})

skills.addEventListener('click', () =>{
    const workexpBox = new WinBox({
        title: 'Skills',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        top: 250,
        right: 50,
        bottom: 50,
        left: 450,
        mount: skillsContent,
        onfocus: function () {
            this.setBackground('#00aa00')
        },
        onblur: function () {
            this.setBackground('#777')
        }
    })
})