package main

import (
	"net/http"
	"strconv"

	"github.com/labstack/echo"
)

type MyEvent struct {
	CorrectNum   string `json:"CorrectNum"`
	TypeNum      string `json:"TypeNum"`
	ElappsedTime string `json:"ElappsedTime"`
}

type MyResponse struct {
	AverageNum  float64 `json:"AverageNum"`
	CorrectRate float64 `json:"CorrectRate"`
	MissNum     int     `json:"MissNum"`
}

type MyQuestion struct {
	Question []string `json:"question"`
}




func getAverage(eTime float64, correct int) (float64, error) {
	if eTime == 0 && correct == 0 {
		return 1, nil
	}
	var ans float64 = (float64(correct) / (eTime / 1000))
	return ans, nil
}

func getMissNum(typeNum, correct int) (int, error) {
	if typeNum == 0 && correct == 0 {
		return 1, nil
	}
	var ans int = typeNum - correct
	return ans, nil
}
func getCorrectRate(correct, typenum int) (float64, error) {
	if correct == 0 && typenum == 0 {
		return 1.0, nil
	}
	var ans float64 = (float64(correct) / float64(typenum)) * 100
	return ans, nil
}

func getQuestion(request echo.Context) error {
	questionlist :=  []string{"a", "b", "c", "d", "e", "f", "g", "h", "i",
	"j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
	"t", "u", "v", "w", "x", "y", "z",
	"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
	"!", "#", "$", "%", "&", "\"", "(", ")", "-",
	"=", "^", "~", "|", "`", "[", "{", ":",
	"*", "]", "}", ",", "<", ".", ">", "/", "_"}
	return request.JSON(http.StatusOK,MyQuestion{
		Question: questionlist,
	})
}

func getResult(request echo.Context) error {
	var correct_num, _ = strconv.Atoi(request.QueryParam("CorrectNum"))
	var type_num, _ = strconv.Atoi(request.QueryParam("TypeNum"))
	var elappsed_time, _ = strconv.ParseFloat(request.QueryParam("ElappsedTime"), 64)
	var average, _ = getAverage(elappsed_time, correct_num)
	var miss, _ = getMissNum(type_num, correct_num)
	var correct, _ = getCorrectRate(correct_num, type_num)

	

	return request.JSON(http.StatusOK, MyResponse{
		AverageNum:  average,
		MissNum:     miss,
		CorrectRate: correct,
	})
}

func main() {
	e := echo.New()
	e.GET("/getQuestion", getQuestion)
	e.GET("/getResult", getResult)

	e.Logger.Fatal(e.Start(":8080"))
}
