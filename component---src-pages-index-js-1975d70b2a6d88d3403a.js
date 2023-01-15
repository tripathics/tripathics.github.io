"use strict";(self.webpackChunkhomepage_react=self.webpackChunkhomepage_react||[]).push([[678],{7979:function(e,t,a){a.d(t,{Z:function(){return s},t:function(){return l}});var r=a(7294),n=a(1883);const s=e=>{let{date:t,writeup:a,name:s,tags:l}=e;return r.createElement("article",{className:"card"},r.createElement("time",null,t),r.createElement("h3",null,r.createElement(n.Link,{to:a},s)),r.createElement("div",{className:"tags"},l.map(((e,t)=>r.createElement("span",{key:t,className:"tag"},e)))))},l=e=>{let{name:t,date:a,slug:s,tagline:l,url:i,src:c,writeup:m,highlight:o}=e;return r.createElement("article",{className:"project-card anchored card"},r.createElement("div",{className:"image-wrapper"},s&&r.createElement("img",{src:"/projects/"+s+".webp",width:"250",height:"250",alt:""}),!s&&r.createElement("img",{src:"/projects/filter.webp",width:"250",height:"250",alt:""})),r.createElement("div",{className:"proj-desc"},r.createElement("time",null,a),i?r.createElement("h3",null,r.createElement("a",{href:i,target:"_blank",rel:"noreferrer"},t)):r.createElement("h3",null,r.createElement("a",{href:c,target:"_blank",rel:"noreferrer"},t)),r.createElement("p",null,l)),r.createElement("div",{className:"anchored links"},r.createElement("a",{target:"_blank",rel:"noreferrer",href:c,className:"button"},"Source"),i&&r.createElement("a",{target:"_blank",rel:"noreferrer",href:i,className:"button"},"Demo"),m&&r.createElement(n.Link,{to:s,className:"button"},"Article")))}},6821:function(e,t,a){a.d(t,{V:function(){return l},X:function(){return s}});var r=a(7294),n=a(1883);const s=e=>{let{id:t,title:a,pageLink:s,extLink:l,extLinkText:i}=e;return r.createElement("div",{className:"section-heading"},r.createElement("h2",{id:t},r.createElement("a",{href:"#"+t},a)),l&&r.createElement("a",{className:"button",href:l,target:"_blank",rel:"noreferrer"},i),s&&r.createElement(n.Link,{className:"button",to:s},"View all"))},l=e=>{var t;let{id:a,title:n}=e;return a=null!==(t=a)&&void 0!==t?t:"",r.createElement("header",{className:"head-container"},r.createElement("h1",{id:a},a?r.createElement("a",{href:"#"+a},n):r.createElement(r.Fragment,null,n)))}},9226:function(e,t,a){a.d(t,{m:function(){return r}});const r=[{name:"Vehicle Management System",date:"2023",slug:"vms",tagline:"Track fleet of vehicles and get billing",src:"https://github.com/tripathics/iocl-tracker",highlight:!0},{name:"Airavat",date:"2022",slug:"airavat",tagline:"Bus tracking system",url:"",src:"https://github.com/tripathics/airavat",highlight:!0},{name:"Technodaya Website",date:"2022",slug:"technodaya-website",tagline:"My college newsletter website",url:"https://technodaya.netlify.app",src:"https://github.com/Pursottam6003/Designathon-for-one/",writeup:"",highlight:!0},{name:"tripathics.github.io",date:"2022",slug:"homepage",tagline:"This website",src:"https://github.com/tripathics/homepage"},{name:"Typing Game",date:"2022",slug:"typing-game",tagline:"A typing website for mobile and desktop made with VanillaJS",url:"https://tripathics.github.io/typing-game",src:"https://github.com/tripathics/typing-game",writeup:"",highlight:!0},{name:"Todo List",date:"2021",slug:"todo-list",tagline:"Todo list CLI app",url:"",src:"https://github.com/tripathics/todo-list",highlight:!1}]},468:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var r=a(7294),n=a(4593),s=a(3737),l=a(6821),i=a(7979);const c=[{url:"/square/1.jpg"},{url:"/square/2.jpg"},{url:"/square/3.jpg"},{url:"/square/4.jpg"},{url:"/square/5.jpg"},{url:"/square/6.jpg"},{url:"/square/7.jpg"},{url:"/square/8.jpg"},{url:"/square/9.jpg"},{url:"/square/10.jpg"},{url:"/square/11.jpg"},{url:"/square/12.jpg"},{url:"/square/13.jpg"},{url:"/square/14.jpg"},{url:"/square/15.jpg"},{url:"/square/16.jpg"}];var m=()=>r.createElement("div",{className:"images"},c.map(((e,t)=>r.createElement("div",{key:t,className:"image"},r.createElement("img",{src:e.url,alt:""})))));var o=()=>{const e={skills:{angular:{id:"angular",name:"Angular"},bash:{id:"bash",name:"Bash"},cpp:{id:"cpp",name:"C/C++"},django:{id:"django",name:"Django"},firebase:{id:"firebase",name:"Firebase"},flask:{id:"flask",name:"Flask"},git:{id:"git",name:"Git"},html:{id:"html",name:"HTML/CSS"},java:{id:"java",name:"Java"},javascript:{id:"javascript",name:"JavaScript"},linux:{id:"linux",name:"Linux"},markdown:{id:"markdown",name:"Markdown"},nodejs:{id:"nodejs",name:"NodeJS"},powershell:{id:"powershell",name:"Powershell"},python:{id:"python",name:"Python"},react:{id:"react",name:"ReactJS"},typescript:{id:"typescript",name:"TypeScript"},sql:{id:"cpp",name:"SQL"}},categories:{all:{id:"all",name:"All",skillsLs:["angular","bash","cpp","django","firebase","flask","git","html","java","javascript","linux","markdown","nodejs","powershell","python","react","typescript","sql"]},linux:{id:"linux",name:"Linux",skillsLs:["linux","bash"]},prog:{id:"prog",name:"Programming languages",skillsLs:["cpp","java"]},script:{id:"script",name:"Scripting languages",skillsLs:["python","javascript","powershell","typescript","bash"]},web:{id:"web",name:"Web",skillsLs:["html","javascript","typescript","markdown","django","nodejs","flask","angular","react"]},vcs:{id:"vcs",name:"Version Control",skillsLs:["git"]},db:{id:"db",name:"Database",skillsLs:["sql","firebase"]},framework:{id:"framework",name:"Web framework",skillsLs:["django","nodejs","flask"]},frontend:{id:"frontend",name:"Frontend framework",skillsLs:["react","angular"]}}},{0:t,1:a}=(0,r.useState)("all"),n=r.createElement("div",{className:"category-wrapper"},r.createElement("ul",{className:"category"},Object.keys(e.categories).map((n=>r.createElement("li",{id:n,key:n},r.createElement("button",{type:"button",className:n===t?"active":"",onClick:()=>{a(n)}},e.categories[n].name)))))),s=r.createElement("div",{className:"skills"},e.categories[t].skillsLs.map(((t,a)=>r.createElement("p",{key:a,className:"skill"},r.createElement("img",{src:"./skills/"+e.skills[t].id+".svg",alt:""}),e.skills[t].name))));return r.createElement("div",{className:"skills-section"},n,s)},p=a(1883),g=a(9226);var u=()=>r.createElement("div",{className:"home-component"},r.createElement(n.Z,{title:s.Z.siteTitle}),r.createElement("header",{className:"head-container hero"},r.createElement("h1",{className:"hero-heading",id:"hello"},r.createElement(p.Link,{to:"#hello"},"Hello!")),r.createElement("p",{className:"hero-description"},"I'm Chandrashekhar, a software developer and engineer who likes making projects from scratch and learning new technologies. I'm a computer science student pursuing B. Tech. from ",r.createElement(p.Link,{to:"https://www.nitap.ac.in/",target:"_blank",rel:"noreferrer"},"NIT Arunachal Pradesh"),". I like pop music, coding, sketching and shooting photos.",r.createElement("br",null),r.createElement("br",null),"This is the spot for finding my projects and articles I share with the world 😆")),r.createElement("section",{className:"container"},r.createElement(m,null)),r.createElement("section",{className:"container"},r.createElement(l.X,{id:"section-h1",title:"Skills"}),r.createElement(o,null)),r.createElement("section",{className:"container"},r.createElement(l.X,{id:"posts",title:"What's new",pageLink:"/posts"}),r.createElement("div",{className:"home-posts"},[{name:"Python for C programmers",date:"Jul 7, 2022",writeup:"/posts/python-for-c-programmers",tags:["Python","Beginner"]},{name:"My journey through Angular",date:"Jun 5, 2022",writeup:"/posts/TODO",tags:["Front-end","TypeScript","Walkthrough"]},{name:"Introduction to Linux Terminal",date:"February 20, 2022",writeup:"/posts/TODO",tags:["Command line","Terminal","Linux"]},{name:"Installing Arch Linux on a Virtualbox VM",date:"January 27, 2022",writeup:"/posts/TODO",tags:["Linux","OS","VM"]},{name:"Creating a simple typing game webapp",date:"December 18, 2021",writeup:"/posts/TODO",tags:["JavaScript","Event","API"]},{name:"Setting up your first coding environment",date:"August 17, 2020",writeup:"/posts/first-coding-environment-setup",tags:["IDE","C","VsCode"]}].map(((e,t)=>r.createElement(i.Z,Object.assign({},e,{key:t})))))),r.createElement("section",{className:"container"},r.createElement(l.X,{id:"featuredProjects",title:"Featured projects",pageLink:"/projects"}),r.createElement("div",{className:"home-projects"},g.m.filter((e=>e.highlight)).map(((e,t)=>r.createElement(i.t,Object.assign({},e,{key:t})))))),r.createElement("section",{className:"container resume"},r.createElement(l.X,{id:"resume",title:"Resume",extLinkText:"View PDF",extLink:"https://1drv.ms/b/s!AnLTSa_M6LzggsUl7fNYjBTZWzYRvQ?e=Eswnji"}),r.createElement("div",{className:"image-wrapper"},r.createElement("img",{src:a(2277).Z,alt:"resume",width:"925",height:"1196"}))))},2277:function(e,t,a){t.Z=a.p+"static/Chandrashekhar_Tripathi-resume-01373a294cd2834e4a0ce5d686dc5e00.webp"}}]);
//# sourceMappingURL=component---src-pages-index-js-1975d70b2a6d88d3403a.js.map