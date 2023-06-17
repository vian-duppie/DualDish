import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { storage } from "../firebase"

export const uploadToStorage = async ( fileUri, refName ) => {
    const blob = await new Promise( ( resolve, reject ) => {
        const xhr  = new XMLHttpRequest()
        xhr.onload = function () {
            resolve( xhr.response )
        }

        xhr.onerror = function ( e ) {
            reject( new TypeError( 'Network request failed' ) )
        }

        xhr.responseType = 'blob'
        xhr.open( 'GET', fileUri, true )
        xhr.send( null )
    })

    const uploadRef = ref( storage, refName )
    const uploadResult = await uploadBytes( uploadRef, blob )
    // console.log(uploadResult)

    blob.close()

    return getDownloadURL( uploadRef )
}