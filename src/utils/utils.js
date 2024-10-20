import axios from 'axios'

function deleteIndexedDB(obj, index){

    let resultado=obj.delete(index);

    resultado.onsuccess=event2=>{
        console.log('index eliminado:', index);
    }
}

export function getIndexedDB(obj, index){
    let resultado=obj.get(index);

    resultado.onsuccess=event=>{
        if(event.target.result!==undefined){
            insertFetch(event.target.result);
            deleteIndexedDB(obj, index);
            getIndexedDB(obj, index-1);
        }else{
            console.log('index no existe:', index);
        }
    }
}

function insertIndexedDB(data){
    let db=window.indexedDB.open('database');

    db.onsuccess=event=>{
        let result=event.target.result;
    
        let transaccion=result.transaction('usuarios','readwrite');
        let obj=transaccion.objectStore('usuarios');

        const resultado = obj.add(data);

        resultado.onsuccess=event2=>{
            console.log(event2.target.result);
        }
    }
}

export async function insertFetch(data){
    try{
        const options={
            url:'https://reqres.in/api/users',
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            data:data
        }
        const response = await axios.request(options)
        console.log('todo ok',response)
    }catch (error) {
        console.log("pedills", error);
        insertIndexedDB(data);
        alert("pedills");
    }
}

function sendNotification(){
    const options={
        body:"cuespo",
        icon: "public/img/mishi.jpg",
        image:"public/img/mishi.jpg",
        silent:null
    }
    const not= new Notification('holi', options);

    not.onclick=()=>{
        console.log('click en la notificacion');
    }
}