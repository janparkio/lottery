# Lottery Program

Lottery program for annual meeting, 3D ball lottery, supports prize information configuration, participants information `Excel` import, lottery results `Excel` export

> Experience now: [https://janparkio.github.io/lottery/](https://janparkio.github.io/lottery/)

## Technology

Technology: Node + Express + Three.js

Implemented in the backend with `Express`

The frontend lottery interface is implemented with `Three.js` for 3D lottery ball, using the official 3D example of `Three.js`

## Function Description:

1. The lottery result can be saved and downloaded to excel in real time 🎉
2. People who have already been drawn are not allowed to participate in the draw again. If the drawn person is not present, they can draw again 🎁
3. If the server is refreshed or closed, the currently drawn data will be saved, and the data will not be reset. Only by clicking the reset button on the interface can the lottery data be reset 🧧
4. The number of prizes drawn each time can be configured 🎈
5. After all the prizes have been drawn, you can continue to draw special prizes (for example: red envelopes, additional prizes, etc.). At this time, only one prize is drawn by default 🧨

## Preview

![lottery.gif](https://raw.githubusercontent.com/moshang-xc/blog/master/share/lottery.gif)

![index.jpg](https://raw.githubusercontent.com/moshang-xc/blog/master/share/index.jpg)

![start.jpg](https://raw.githubusercontent.com/moshang-xc/blog/master/share/start.jpg)

![end.jpg](https://raw.githubusercontent.com/moshang-xc/blog/master/share/end.jpg)

## Installation

```
git clone https://github.com/janparkio/lottery.git

cd lottery

# Server-side plug-in installation
cd server
npm install

# Front-end plug-in installation
cd ../product
npm install

# Packaging
npm run build

# Running
npm run serve

# Development debugging
npm run dev

```

## Directory structure

```
Lottery
├── product
│   ├── src
│   │   ├── lottery
│   │   │   └── index.js
│   │   ├── lib
│   │   ├── img
│   │   ├── css
│   │   └── data
│   ├── package.json
│   └── webpack.config.js
├── server
│   ├── config.js
│   ├── server.js
│   └── package.js
```

> 1. product is the frontend page directory
> 2. package.josn web project configuration file
> 3. webpack.config.js packaging configuration file
> 4. server is the server directory
> 5. config is the configuration file for prize information

## Configuration information

### Configuration of lottery user information

The lottery user information is in the **`server/data/user.xlsx`** file, which should be filled in according to the file format, and the file name and column header cannot be modified.

### Configuration of prize information

The configuration information of the prize is filled in the **server/config.js** file, and the file name cannot be modified.

**The configuration description of the prize "prizes" is as follows:**

| Parameter | Value type | Description                                                  |
| --------- | --------- | ------------------------------------------------------------ |
| type      | Number    | Prize type, unique identifier, 0 is the placeholder for the default special prize, other prizes cannot be used |
| count     | Number    | Number of prizes                                             |
| text      | String    | Prize name                                                   |
| title     | String    | Prize description                                            |
| img       | String    | Prize image address, image in the **img** directory          |

```js
// Prize information, the first item is reserved and cannot be modified, other items can be modified as needed
let prizes = [{
        type: 0,
        count: 1000,
        title: "",
        text: "Special prize"
    },
    {
        type: 1,
        count: 2,
        text: "Grand prize",
        title: "Mystery gift",
        img: "../img/secrit.jpg"
    },
    {
        type: 2,
        count: 5,
        text: "First prize",
        title: "Mac Pro",
        img: "../img/mbp.jpg"
    }
    ...
];
```

### Configuration of the number of prizes drawn each time

**EACH_COUNT** is used to configure the number of prizes drawn each time, corresponding to the prizes one by one. For example, the prize configuration above corresponds to the following prize draw configuration:

```js
const EACH_COUNT = [1, 1, 5];
```

As configured above, the order of the number of prizes drawn each time is: the special prize is drawn once, the grand prize is drawn once, and five first prizes are drawn each time.

### Enterprise identity configuration

This identity is used to display on the lottery card.

```js
const COMPANY = "Eleve";
```
## License
MIT
