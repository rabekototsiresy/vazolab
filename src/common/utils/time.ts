export function secondsToTime(e){
    var h = Math.floor(e / 3600).toString().padStart(2,'0'),
        m = Math.floor(e % 3600 / 60).toString().padStart(2,'0'),
        s = Math.floor(e % 60).toString().padStart(2,'0');
        
    if(h && m && s){
        return h + ':' + m + ':' + s;
    }
    return 0+ ':' + 0 + ':' + 0;
}

export const setTimeNow = ()=>{
    let date:any = new Date();
    date.setHours(date.getHours()+1);
    localStorage.setItem('loggedTime',Date.parse(date).toString());
}