let searchform = document.getElementById("search-form")
let searchbox = document.getElementById("search-box")
let searchresult = document.getElementById("search-result")
let searchbtn = document.getElementById("show-more-btn")
let keyword = ""
let page = 1 


async function searchImages(){
    keyword = searchbox.value
    let url = `https://api.unsplash.com/search/photos?page=${page}1&query=${keyword}&client_id=NbNk8FHtNClb3_QOSThOjmnwrAEeVQwIoc11EmD8XOg&per_page=12`

    let response = await fetch(url)
    let data = await response.json()


    if(page===1){
        searchresult.innerHTML=""
    }
    

    // console.log(data)
    let results = data.results

    results.map((result)=>{
        let  img_element = document.createElement('img')
        img_element.src = result.urls.small

        let imagelink = document.createElement('a')
        imagelink.href=result.links.html

        imagelink.target = "_blank"
        imagelink.appendChild(img_element)

        searchresult.appendChild(imagelink)
    })

    searchbtn.style.display = "block"
}

searchform.addEventListener( "submit", function(event){
    event.preventDefault()
    page = 1
    searchImages()

})


searchbtn.addEventListener( 'click', function(){
    page=page+1
    searchImages()

})


