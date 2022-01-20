export const getTime = (elapsed_time) =>{
    let m, s, ms, second, minute;
    s = Math.floor(elapsed_time / 1000);
    m = Math.floor(s / 60);
    ms = (('00' + (elapsed_time % 6000)).slice(-3)).slice(0, 2);
    second = ('00' + s).slice(-2);
    minute = ('00' + m).slice(-2);
    
    return {ms,second,minute};
}