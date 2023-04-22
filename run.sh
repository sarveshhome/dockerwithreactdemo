docker container stop $(docker container ls --all --quiet --filter "name=dockerwithreactdemo")

docker container rm $(docker container ls --all --quiet --filter "name=dockerwithreactdemo")

docker build -t dockerwithreactdemo .

docker run -it --rm -d -p 85:80 --name dockerwithreactdemo dockerwithreactdemo
