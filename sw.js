//importScripts('./src/utils/utils.js');
import {getIndexedDB} from '@/utils/utils'

self.addEventListener('install', event=>{

    caches.open('appShell2').then(cache=>{

        cache.addAll([
            '/src/main.js',
            '/src/assets/boton.css',
            '/src/assets/style.css',
            '/src/App.vue',
            '/src/router/index.js',
            '/src/views/HomeView.vue',
            'src/assets/img/mishito.jpg',
        ])
    })

    self.skipWaiting();//activar el SW
});

self.addEventListener('activate', event=>{
    //eliminar cache viejita
    caches.delete('appShell1');
});

self.addEventListener('sync', event=>{
    //insertar lo que esta en la indexedDB y borrarla
    let db=indexedDB.open('database');
    db.onsuccess=event=>{
        let result=event.target.result;
    
        let transaccion=result.transaction('usuarios','readwrite');
        let obj=transaccion.objectStore('usuarios');
        const cursor = obj.openCursor(null, 'prev'); 

        
        cursor.onsuccess=event2=>{
            let lastIndex=event2.target.result.key;
            //let currentIndex=lastIndex;
            getIndexedDB(obj, lastIndex);
            
        }
    }
})

self.addEventListener('fetch', event=>{
    if(event.request.method!='POST'){
        /* const resp = fetch( event.request )
        .then( respuesta => {
            if ( !respuesta ) {
                return caches.match( event.request ); //validar si el cache existe
            }else{
                caches.open( 'dinamico' )
                    .then( cache => {
                        cache.put( event.request, respuesta );
                    });
                return respuesta.clone();
            }

        }).catch( err =>{
            return caches.match( event.request );
        });

        event.respondWith(resp); */
    }else{
        if(event.request.url.includes('reqres.in/api')){
            console.log(event.request.url);
            fetch(event.request)
            .catch(error=>{
                self.registration.sync.register('insertar');
                console.log("error:",error);
            })
        }
    }
});