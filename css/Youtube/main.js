// Company 
// baseUrl/functionality?p1=v1&p2=v2?p3=v3
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyC8fyTtZzeTgSubNn7npyL7o765eCRHmvk&part=snippet&q=Hello
// www.company.com/functionality
// www.google.com/search
// www.amazon.in/cart
// www.facebook.com/profile

document.getElementById('search-btn').addEventListener( 'click', () => {
    const text = document.getElementById('search-text').value
    const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyC8fyTtZzeTgSubNn7npyL7o765eCRHmvk&part=snippet&q=${text}&maxResults=50`
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const response = JSON.parse(xhr.responseText)
            let output = ''
            for (let i = 0; i < response.items.length; i++) {
                output +=`
                    <div style = "width: 23%; margin: 10px;">
                        <a href="https://www.youtube.com/watch?v=${response.items[i].id.videoId}" target="_blank">
                            <div>
                            <img style="width:100%;" src="${response.items[i].snippet.thumbnails.high.url}" />
                            <h4>${response.items[i].snippet.title}</h4>
                            <p>${response.items[i].snippet.description}</p>
                            </div>
                        </a>
                    </div>
                `
                
            }
            document.getElementById('my-div').innerHTML = output
        }
    }
    xhr.send()
})