FROM golang:1.13.8   

#/go/srcで活動することを宣言
WORKDIR /go/src

#go.modとgo.sumをWORKDIRにコピー
COPY go.mod go.sum ./
#go.modとgo.sumにしたがって正確にパッケージをダウンロードしてくれる
RUN go mod download

#go-api.goをイメージ内のWORKDIRにコピー
COPY ./go-api.go  ./
EXPOSE 8080
CMD [ "go", "run", "go-api.go" ]
