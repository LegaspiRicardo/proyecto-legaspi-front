export function checkConnectionStatus(){
    return navigator.onLine;
}
export function listenForReconnection(callback: () => void){
    window.addEventListener('online', callback);
}