const alldata = [
    {
        language:'US',

        navbar1:'Home',
        navbar2:'About',
        navbar3:'Projects',
        navbar4:'Resume',

        footer1:'Developed with ❤️ by Pablo Ítalo',
        footer2:`Copyright © ${new Date().getFullYear()} Pablo Italo`,

        home1:'Hi There!',
        home2:"I'M",
        home3:"Senior Full Stack Developer",
        home4:"LET ME",
        home5:"INTRODUCE",
        home6:"MYSELF",
        home7:"I fell in love with programming and I have learned a great deal.",
        home8:"I am proficient in modern languages and frameworks such as",
        home9:"JavaScript, React, MongoDB, Express, and Node.",
        home10:"Additionally, I have experience with Python, PHP, WordPress, and other technologies.",
        home11:"My field of interest lies in developing innovative",
        home12:"Web and Mobile Technologies and varied solutions.",
        home13:"FIND ME ON",
        home14:"Feel free to",
        home15:"connect",
        home16:"with me",

        about1:"Know Who",
        about2:"I Am",
        about3:"Hello everyone, I'm",
        about4:"Pablo Ítalo",
        about5:", a",
        about6:"Senior Full Stack Developer",
        about7:"I work with various technologies, including",
        about8:"React, React Native, Node, and more.",
        about9:"With my knowledge, I create diverse features such as",
        about10:"Web Pages, Panels, and APIs.",
        about11:"Besides coding, there are a few other activities that I love to engage in!",
        about12:"Playing Games",
        about13:"Travelling",
        about14:"Watching Anime",
        about15:'"Always do your best!"',
        about16:"Professional",
        about17:"Skillset",
        about18:"Tools",
        about19:"I use",
        about20:"Days I",
        about21:"Code",

        projects1:'My Recent',
        projects2:"Works",
        projects3:"Here are a few projects I've worked on recently.",
        projects_show1:"Docs-Tree",
        projects_show1_1:"international platform for searching documents and freelance jobs.",
        projects_show2:"Rebouças University",
        projects_show2_2:"Institutional platform for presenting courses, sales, etc...",
        projects_show3:"He Wants Barber",
        projects_show3_3:"Complete dashboard to sales, registration, set service dates, etc...",
        
        resume1:'Download CV',
    },
    {
        language:'BR',

        navbar1:'Home',
        navbar2:'Sobre mim',
        navbar3:'Projetos',
        navbar4:'Currículo',

        footer1:'Desenvolvido com ❤️ por Pablo Ítalo',
        footer2:`Copyright © ${new Date().getFullYear()} Pablo Italo`,

        home1:'Olá!',
        home2:"Meu nome é",
        home3:"Sênior - Desenvolvedor Full Stack",
        home4:"Breve",
        home5:"INTRODUÇÃO",
        home6:"sobre mim",
        home7:"Sou apaixonado por programação e aprendi muito.",
        home8:"Tenho proficiência em linguagens e framworks modernos, como",
        home9:"Node, JavaScript, React, MongoDB, Express, etc.",
        home10:"Além disso, também tenho experiência com python, Python, PHP, WordPress, e outras tecnologias.",
        home11:"Meu principal interesse é inovar e desenvolver",
        home12:"aplicações Web, Mobile, APIs, e etc.",
        home13:"ME ENCONTRE EM",
        home14:"Fique à vontade para se",
        home15:"conectar",
        home16:"comigo",

        about1:"Quem",
        about2:"eu seu",
        about3:"Olá, meu nome é",
        about4:"Pablo Ítalo",
        about5:", ",
        about6:"Sênior desenvolvedor Full Stack",
        about7:"Trabalho com muitas tecnologias, incluindo",
        about8:"Node, React, React Native, e mais.",
        about9:"Com meu conhecimento, crio diversas soluções, como",
        about10:"Páginas web, Paineis e APIs.",
        about11:"Além de codar, essas são outras atividades que eu amo fazer!",
        about12:"Jogar games",
        about13:"Viajar",
        about14:"Assistir animes",
        about15:'"Sempre dê o seu melhor!"',
        about16:"principais",
        about17:"Habilidades profissionais",
        about18:"Ferramentas",
        about19:"que utilizo",
        about20:"Dias que",
        about21:"Codo",

        projects1:'Meus recentes',
        projects2:'Trabalhos',
        projects3:"Esses são alguns dos projetos que desenvolvi recentemente.",
        projects_show1:"Docs-Tree",
        projects_show1_1:"Plataforma internacional para buscar documentos e freelancers.",
        projects_show2:"Universidade Rebouças",
        projects_show2_2:"Plataforma institucional com cursos, vendas, matrículas, etc.",
        projects_show3:"He Wants Barber",
        projects_show3_3:"Dashboard completa para vendas, registros, agendamentos e etc.",

        resume1:'Baixar currículo',

    }
]

function translation(){
    const country = localStorage.getItem('country')
    const countryData = alldata.find(single=>single.language===country)
    if (countryData) {
        return countryData
    }
    return alldata[0]
}

module.exports = {translation}