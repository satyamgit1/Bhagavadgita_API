
# Gita Learn Api

This is and api project made with express js. It contains API of all the chapters, verses, shloaks, audios, youtube video timestamp etc





## Installation

Install my-project with npm

```bash
  npm install
  node app.js
```
    
    
## API Reference

#### Fetch all the chapters

```http
  http://localhost:4000/api/chapters
```
This will display all the chapters of Gita

#### Fetch all the chapters

```http
  http://localhost:4000/api/verses/${chapterNumber}
```
This will display all the verses of specific chapter

#### Fetch all the chapters

```http
  http://localhost:4000/api/verse/${chapterVerse}
```
This will display all the details of a specific verse of chapter

#### Fetch all the chapters

```http
  http://localhost:4000/api/audio/${chapterVerse}
```
This will display the audio of a specific verse of chapter

#### Fetch all the chapters

```http
  http://localhost:4000/api/links/${chapterVerse}
```
This will display the audio lecture links for specific verse of a chapter

#### Fetch all the chapters


```http
  http://localhost:4000/api/timestamp/${chapterVerse}
```
This will display all the time stamp of youtube video lecture

#### Fetch all the chapters

```http
  http://localhost:4000/api/questions/${verseId}
```
This will display all the questions of a specific verse
### to run the Redis on terminal = docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
### Stop and Remove All Containers
Stop all running containers:

#### docker stop $(docker ps -q)
Remove all containers:

docker rm $(docker ps -a -q)
Remove All Images
Remove all images:

docker rmi $(docker images -q)
#### Redis

```http
  http://localhost:4000/calculate-data
```


