
// POPULATE VARIABLES WITH HTML ELEMENTS

let titleHolder = document.querySelector('#titleholder');
let summaryHolder = document.querySelector('#summaryholder');
let tabpageHolder = document.querySelector('#tabpageholder');
let projectTitleHolder = document.querySelector('#projecttitleholder');
let projectTitleHolder2 = document.querySelector('#projecttitleholder2');
let linkUrlHolder = document.querySelector('#linkurlholder');
let githubUrlHolder = document.querySelector('#githuburlholder');


// ADD EVENTLISTENER TO EACH BUTTON

document.querySelectorAll('#menubar li').forEach( thisButton => {
    
    thisButton.addEventListener('click', (pingReport) => {
        buttonActivate(pingReport.target);
    });

});


// CONTENT OF EVENTLISTENER FOR BUTTONS

function buttonActivate (thisButton) {        

    document.querySelectorAll('#menubar li').forEach(otherTab => {
        otherTab.classList.remove('active');                             //remove 'active' class from all tabs
    })

    thisButton.classList.add('active');                                  //add 'active' class to this button

    // link to the corresponding post in the content library        
    let thisPost = document.querySelector('.post' + thisButton.getAttribute('data-target'));
            
    //create links to all the content in thispost
    let titleToMove = thisPost.querySelector('.title');
    let summaryToMove = thisPost.querySelector('.summary');
    let tabPagesToMove = thisPost.querySelector('.tabpages');
    let projectTitle = titleToMove.innerText;
    let linkUrl = thisPost.getAttribute('data-linkurl');
    let githubUrl = thisPost.getAttribute('data-githuburl');

    //populate the HTML template with thispost        
    titleHolder.innerHTML = '';
    titleHolder.appendChild(titleToMove.cloneNode(true));
    summaryHolder.innerHTML = '';
    summaryHolder.appendChild(summaryToMove.cloneNode(true));
    tabpageHolder.innerHTML = '';
    tabpageHolder.appendChild(tabPagesToMove.cloneNode(true));
    projectTitleHolder.innerText = projectTitle;
    projectTitleHolder2.innerText = projectTitle;
    linkUrlHolder.setAttribute('href', linkUrl);
    githubUrlHolder.setAttribute('href', githubUrl);

    //activate tab1
    tabActivate(document.querySelector('[data-target="#tab1"]'));

    // On the WordPress project, make github link invisible, since the wordpress project has nothing on github
    githubUrlHolder.classList.remove('invisibility')    
    if (thisButton.getAttribute('data-target') == '#wordpress') {githubUrlHolder.classList.add('invisibility')}    
};


// ADD EVENTLISTENER TO EACH TAB
document.querySelectorAll('#tabsframe li').forEach( thisTab => {
    thisTab.addEventListener('click', (e) => {
        tabActivate(e.target);
    });
});


// CONTENT OF EVENTLISTENER FOR TABS

function tabActivate (thisTab) {

    // remove 'active' class from all tabs and all tabpages
    
    document.querySelectorAll('#tabsframe li').forEach(othertab => {
        othertab.classList.remove('active');
    });

    document.querySelectorAll('#tabpageholder .tabpage').forEach(thisdiv => {
        thisdiv.classList.remove('active');
    });

    // add 'active' class to the active tab and the active tabpage
    thisTab.classList.add('active');
    let targetString = thisTab.getAttribute('data-target');       
    document.querySelector('#tabpageholder ' + targetString).classList.add('active');
      
};


// make first button active on first load
buttonActivate(document.querySelector('#menubar :first-child'));