class Request {
   
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    }

    post(url, data){

        return new Promise((resolve, reject) => {
            fetch(url,{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                })
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch(err=> reject(err));
        })
        
    }

    put(url, data){

        return new Promise((resolve, reject) => {
            fetch(url,{
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                })
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch(err=>reject(err));
        })
       
    }

    delete(url){ 
        return new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/albums/1', { method: 'DELETE',}).then((response) => resolve("Veri Islemi Basarili")).catch(err => reject("Islem basarisiz"))
        })
    }
}

const request = new Request();

// request.get('https://jsonplaceholder.typicode.com/albums').then(albums =>{console.log(albums);}).catch(err =>{console.log(err);});

//request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Grasp Of The Undying"}).then(newAlbum => console.log(newAlbum)).catch(err => console.log(err));

//request.put('https://jsonplaceholder.typicode.com/albums/1',{userId:2,title:"Grasp Of The Undying"}).then(albums =>{console.log(albums);}).catch(err =>{console.log(err);});

request.delete('https://jsonplaceholder.typicode.com/albums/1').then( messages => {console.log(messages);}).catch(err => {console.log(err);});