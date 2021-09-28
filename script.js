

// POPULATE VARIABLES WITH HTML ELEMENTS

let titleholder = document.querySelector('#titleholder')
let summaryholder = document.querySelector('#summaryholder')
let tabpageholder = document.querySelector('#tabpageholder')
let projecttitleholder = document.querySelector('#projecttitleholder')
let linkurlholder = document.querySelector('#linkurlholder');
let githuburlholder = document.querySelector('#githuburlholder');




// ADD EVENTLISTENER TO EACH BUTTON

document.querySelectorAll('#menubar li').forEach( thisbutton => {

    thisbutton.addEventListener('click', (pingreport) => {
        buttonactivate(pingreport.target)
    })

})





// CONTENT OF EVENTLISTENER FOR BUTTONS

function buttonactivate (thisbutton) {

        document.querySelector('#lowerframe').classList.remove('invisibility')
        // document.querySelector('#placeholder').classList.add('invisibility')
        
        window.scrollTo(0,document.body.scrollHeight);                      //browser scrolls down

        document.querySelectorAll('#menubar li').forEach(othertab => {
            othertab.classList.remove('active')                             //remove 'active' class from all tabs
        })

        thisbutton.classList.add('active')                                  //add 'active' class to this button

        // link to the correct post in the content library        
        let thispost = document.querySelector('.post' + thisbutton.getAttribute('data-target'))
            
        console.log('.post' + thisbutton.getAttribute('data-target'))
        console.log(thispost)
        
        
        //create links to all the content in thispost
        let titletomove = thispost.querySelector('.title')        
        let summarytomove = thispost.querySelector('.summary')
        let tabpagestomove = thispost.querySelector('.tabpages')
        let projecttitle = titletomove.innerText
        let linkurl = thispost.getAttribute('data-linkurl')
        let githuburl = thispost.getAttribute('data-githuburl')

        //populate the template with thispost        
        titleholder.innerHTML = ''
        titleholder.appendChild(titletomove.cloneNode(true))        
        summaryholder.innerHTML = ''
        summaryholder.appendChild(summarytomove.cloneNode(true))        
        tabpageholder.innerHTML = ''
        tabpageholder.appendChild(tabpagestomove.cloneNode(true))
        projecttitleholder.innerText = projecttitle
        linkurlholder.setAttribute('href', linkurl)
        githuburlholder.setAttribute('href', githuburl)

        //activate tab1
        tabactivate(document.querySelector('[data-target="#tab1"]'))

}








// ADD EVENTLISTENER TO EACH TAB

document.querySelectorAll('#tabsframe li').forEach( thistab => {
    thistab.addEventListener('click', (e) => {
        tabactivate(e.target)
    } ) 
})









// CONTENT OF EVENTLISTENER FOR TABS


function tabactivate (thistab) {


    // remove 'active' class from all tabs and all tabpages
    
    document.querySelectorAll('#tabsframe li').forEach(othertab => {
        othertab.classList.remove('active')
    })

    document.querySelectorAll('#tabpageholder div').forEach(thisdiv => {
        thisdiv.classList.remove('active')
    })


    // add 'active' class to the active tab and the active tabpage

    thistab.classList.add('active')    
    let targetstring = thistab.getAttribute('data-target')        
    document.querySelector('#tabpageholder ' + targetstring).classList.add('active')
               

}



