
export const getRandomeNum = () =>{
    const type_num = Math.floor(Math.random() * 100)+10;
    const elapsed_time = Math.floor(Math.random()*100000)+1000;
    return {type_num,elapsed_time};//1.タイピング数,2.経過時間
}