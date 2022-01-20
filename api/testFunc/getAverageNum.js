export const getAverageNum = (question_num,elapsed_time) => {
    console.log(question_num);
    console.log(elapsed_time);
    const ans = (question_num/(elapsed_time /1000))
    console.log(ans)
    return ans;
}