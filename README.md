# アプリの説明

- [ui の READEME 参照](https://github.com/akakiyo/typing-game/tree/master/ui)

# 使用技術

フロントエンド：React(テスト：jest)
バックエンド：Go  
インフラ:Docker,kubernetes

# docker image

kiyo0328/typing-game:v2

##

kiyo0328/go-api:v1

##

kiyo0328/apigateway:v1

# ubuntu 環境での実行方法

```
sudo minikkube start --driver=kvm2
sudo minikube addons enable ingress
kubectl apply -f client-deployment.yaml
kubectl apply -f api-deployment.yaml
kubectl apply -f gateway-deployment.yaml
kubectl apply -f ingress.yaml

sudo minikube ip
=>192.168.39.106
sudo vim /etc/hosts
192.168.39.106   kiyo.com
```

# Mac 環境での実行方法

```
minikkube start
minikube addons enable ingress
kubectl apply -f client-deployment.yaml
kubectl apply -f api-deployment.yaml
kubectl apply -f gateway-deployment.yaml
kubectl apply -f ingress.yaml

sudo minikube ip
=>192.168.99.100
sudo vim /etc/hosts
192.168.99.100   kiyo.com
```

# 下記に各ホスト先を示す

# typing-game

http://kiyo.com

# APIGateway

http://kiyo.com/apigateway/graphql

# API

## question

http://kiyo.com/go-api/getQuestion

## result

http://kiyo.com/go-api/getResult

参考にした資料

##

https://kubernetes.io/ja/docs/concepts/services-networking/ingress/

##

https://qiita.com/Esfahan/items/f7d13d7e80848e9b6963
