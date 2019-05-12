import React, { Component } from 'react';
import classes from './Buttons.module.css';
import getFourRndImages from './components/getFourRndImages';
import PlaySound from './components/PlaySound';

class App extends Component {
  state = {
    imgList: [
      { id: 0, img: require('./assets/images/0.jpg'), sound: require('./assets/sounds/0.mp3'), name: 'almond' },
      { id: 1, img: require('./assets/images/1.jpg'), sound: require('./assets/sounds/1.mp3'), name: 'almond' },
      { id: 2, img: require('./assets/images/2.jpg'), sound: require('./assets/sounds/2.mp3'), name: 'apple' },
      { id: 3, img: require('./assets/images/3.jpg'), sound: require('./assets/sounds/3.mp3'), name: 'apricot' },
      { id: 4, img: require('./assets/images/4.jpg'), sound: require('./assets/sounds/4.mp3'), name: 'avocado' },
      { id: 5, img: require('./assets/images/5.jpg'), sound: require('./assets/sounds/5.mp3'), name: 'banana' },
      { id: 6, img: require('./assets/images/6.jpg'), sound: require('./assets/sounds/6.mp3'), name: 'blackcurrant' },
      { id: 7, img: require('./assets/images/7.jpg'), sound: require('./assets/sounds/7.mp3'), name: 'blueberry' },
      { id: 8, img: require('./assets/images/8.jpg'), sound: require('./assets/sounds/8.mp3'), name: 'brazil nut' },
      { id: 9, img: require('./assets/images/9.jpg'), sound: require('./assets/sounds/9.mp3'), name: 'cape-gooseberry' },
      { id: 10, img: require('./assets/images/10.jpg'), sound: require('./assets/sounds/10.mp3'), name: 'cashew nut' },
      { id: 11, img: require('./assets/images/11.jpg'), sound: require('./assets/sounds/11.mp3'), name: 'cashew nut' },
      { id: 12, img: require('./assets/images/12.jpg'), sound: require('./assets/sounds/12.mp3'), name: 'cherry' },
      { id: 13, img: require('./assets/images/13.jpg'), sound: require('./assets/sounds/13.mp3'), name: 'chest nut' },
      { id: 14, img: require('./assets/images/14.jpg'), sound: require('./assets/sounds/14.mp3'), name: 'clementine' },
      { id: 15, img: require('./assets/images/15.jpg'), sound: require('./assets/sounds/15.mp3'), name: 'coco nut' },
      { id: 16, img: require('./assets/images/16.jpg'), sound: require('./assets/sounds/16.mp3'), name: 'coco nut' },
      { id: 17, img: require('./assets/images/17.jpg'), sound: require('./assets/sounds/17.mp3'), name: 'cornelian' },
      { id: 18, img: require('./assets/images/18.jpg'), sound: require('./assets/sounds/18.mp3'), name: 'cranberry' },
      { id: 19, img: require('./assets/images/19.jpg'), sound: require('./assets/sounds/19.mp3'), name: 'dewberry' },
      { id: 20, img: require('./assets/images/20.jpg'), sound: require('./assets/sounds/20.mp3'), name: 'elderberry' },
      { id: 21, img: require('./assets/images/21.jpg'), sound: require('./assets/sounds/21.mp3'), name: 'gooseberry' },
      { id: 22, img: require('./assets/images/22.jpg'), sound: require('./assets/sounds/22.mp3'), name: 'gooseberry' },
      { id: 23, img: require('./assets/images/23.jpg'), sound: require('./assets/sounds/23.mp3'), name: 'grape' },
      { id: 24, img: require('./assets/images/24.jpg'), sound: require('./assets/sounds/24.mp3'), name: 'grapefruit' },
      { id: 25, img: require('./assets/images/25.jpg'), sound: require('./assets/sounds/25.mp3'), name: 'guava' },
      { id: 26, img: require('./assets/images/26.jpg'), sound: require('./assets/sounds/26.mp3'), name: 'hazelnut' },
      { id: 27, img: require('./assets/images/27.jpg'), sound: require('./assets/sounds/27.mp3'), name: 'honeydew-melon' },
      { id: 28, img: require('./assets/images/28.jpg'), sound: require('./assets/sounds/28.mp3'), name: 'huckleberry' },
      { id: 29, img: require('./assets/images/29.jpg'), sound: require('./assets/sounds/29.mp3'), name: 'kiwi' },
      { id: 30, img: require('./assets/images/30.jpg'), sound: require('./assets/sounds/30.mp3'), name: 'kumquat' },
      { id: 31, img: require('./assets/images/31.jpg'), sound: require('./assets/sounds/31.mp3'), name: 'lemon' },
      { id: 32, img: require('./assets/images/32.jpg'), sound: require('./assets/sounds/32.mp3'), name: 'lime' },
      { id: 33, img: require('./assets/images/33.jpg'), sound: require('./assets/sounds/33.mp3'), name: 'lychee' },
      { id: 34, img: require('./assets/images/34.jpg'), sound: require('./assets/sounds/34.mp3'), name: 'macadamia nut' },
      { id: 35, img: require('./assets/images/35.jpg'), sound: require('./assets/sounds/35.mp3'), name: 'mango' },
      { id: 36, img: require('./assets/images/36.jpg'), sound: require('./assets/sounds/36.mp3'), name: 'melon' },
      { id: 37, img: require('./assets/images/37.jpg'), sound: require('./assets/sounds/37.mp3'), name: 'mulberry' },
      { id: 38, img: require('./assets/images/38.jpg'), sound: require('./assets/sounds/38.mp3'), name: 'nectarine' },
      { id: 39, img: require('./assets/images/39.jpg'), sound: require('./assets/sounds/39.mp3'), name: 'olive' },
      { id: 40, img: require('./assets/images/40.jpg'), sound: require('./assets/sounds/40.mp3'), name: 'orange' },
      { id: 41, img: require('./assets/images/41.jpg'), sound: require('./assets/sounds/41.mp3'), name: 'papaya' },
      { id: 42, img: require('./assets/images/42.jpg'), sound: require('./assets/sounds/42.mp3'), name: 'passion-fruit' },
      { id: 43, img: require('./assets/images/43.jpg'), sound: require('./assets/sounds/43.mp3'), name: 'peach' },
      { id: 44, img: require('./assets/images/44.jpg'), sound: require('./assets/sounds/44.mp3'), name: 'pean nut' },
      { id: 45, img: require('./assets/images/45.jpg'), sound: require('./assets/sounds/45.mp3'), name: 'pean nut' },
      { id: 46, img: require('./assets/images/46.jpg'), sound: require('./assets/sounds/46.mp3'), name: 'pear' },
      { id: 47, img: require('./assets/images/47.jpg'), sound: require('./assets/sounds/47.mp3'), name: 'pecan' },
      { id: 48, img: require('./assets/images/48.jpg'), sound: require('./assets/sounds/48.mp3'), name: 'persimmon' },
      { id: 49, img: require('./assets/images/49.jpg'), sound: require('./assets/sounds/49.mp3'), name: 'pine nut' },
      { id: 50, img: require('./assets/images/50.jpg'), sound: require('./assets/sounds/50.mp3'), name: 'pineapple' },
      { id: 51, img: require('./assets/images/51.jpg'), sound: require('./assets/sounds/51.mp3'), name: 'pistachio' },
      { id: 52, img: require('./assets/images/52.jpg'), sound: require('./assets/sounds/52.mp3'), name: 'plum' },
      { id: 53, img: require('./assets/images/53.jpg'), sound: require('./assets/sounds/53.mp3'), name: 'pomegranate' },
      { id: 54, img: require('./assets/images/54.jpg'), sound: require('./assets/sounds/54.mp3'), name: 'pomelo' },
      { id: 55, img: require('./assets/images/55.jpg'), sound: require('./assets/sounds/55.mp3'), name: 'quince' },
      { id: 56, img: require('./assets/images/56.jpg'), sound: require('./assets/sounds/56.mp3'), name: 'quince' },
      { id: 57, img: require('./assets/images/57.jpg'), sound: require('./assets/sounds/57.mp3'), name: 'raspberry' },
      { id: 58, img: require('./assets/images/58.jpg'), sound: require('./assets/sounds/58.mp3'), name: 'red-currant' },
      { id: 59, img: require('./assets/images/59.jpg'), sound: require('./assets/sounds/59.mp3'), name: 'starfruit' },
      { id: 60, img: require('./assets/images/60.jpg'), sound: require('./assets/sounds/60.mp3'), name: 'strawberry' },
      { id: 61, img: require('./assets/images/61.jpg'), sound: require('./assets/sounds/61.mp3'), name: 'tangerine' },
      { id: 62, img: require('./assets/images/62.jpg'), sound: require('./assets/sounds/62.mp3'), name: 'wal nut' },
      { id: 63, img: require('./assets/images/63.jpg'), sound: require('./assets/sounds/63.mp3'), name: 'whiteberry' },
      { id: 64, img: require('./assets/images/64.jpg'), sound: require('./assets/sounds/64.mp3'), name: 'watermelon' }
    ],
      rndImages: [0, 0, 0, 0], //Хранятся индексы imgList 4-х картинок
      questionIndex: 0,
      maxArray: 64,
      correctAnswer: false,
      playResultAnswer: false,
      playError: true,
      playQuestion: true,
      gameOver: false,    
      countCorrectAnswer: 0,
      countWrongAnswer: 0
  };

  componentDidMount() {
    this.initialState(this.state.maxArray);    
  }

  initialState = (maxArray) => {
    const rndIndexes = getFourRndImages(maxArray); //Получить 4 случайных индекса из массива imgList         
    const questionIndex = Math.floor(Math.random() * 4 ); //Индекс озвученной картинки 
    
    this.setState( { rndImages: rndIndexes, questionIndex: questionIndex } ); //Запомнить 4 картинки и индекс озвученной картинки 
  }
  
  changeImgList = (buttonIndex) => {
    let tmpArray = this.state.imgList;  //imgList записываю во временный массив 
    const rndImages = this.state.rndImages; //ХРАНЯТСЯ ИНДЕКСЫ!
    const maxArray = this.state.maxArray;
    const idImage = tmpArray[rndImages[buttonIndex]].id; //Нахожу картинку по индексу кнопки

    const imageIndex = tmpArray.findIndex(idImg => idImg.id === idImage); //Нахожу индекс картинки в imgList по картинке
    tmpArray.splice(imageIndex, 1);  //Удаляю эту картинку из imgList
  
    const rndIndexes = getFourRndImages(maxArray-1); //Получить 4 случайных индекса из массива imgList
         
    const questionIndex = Math.floor(Math.random() * 4 ); //Индекс озвученной картинки 

    this.setState({ imgList: tmpArray, maxArray: (maxArray-1), rndImages: rndIndexes, questionIndex: questionIndex, 
      correctAnswer: false, playResultAnswer: false }); 

    console.log("Размер массива: " + this.state.imgList.length);
  };
  
  checkAnswer = (buttonIndex) => {    
    if (buttonIndex === this.state.questionIndex) {
      if (this.state.imgList.length > 4) {
        this.setState( {questionIndex: buttonIndex, correctAnswer: true, playResultAnswer: true, playError: false, countCorrectAnswer: this.state.countCorrectAnswer + 1}); 
      } 
      else {
        this.setState({gameOver: true}); 
//        alert("УРА! ФАНФАРЫ!");
      } 
    } 
    else {
      this.setState( (state) => ({ correctAnswer: false, playResultAnswer: true, playError: !state.playError, countWrongAnswer: this.state.countWrongAnswer + 1 }) ); 
    }    
  };
 
  repeatAnswer = () => {
   this.setState( (state) => ({ playQuestion: !state.playQuestion }) ); 
  };

  render() {  
  
    let nextButton, playQuestion, playSound, playGameOver;

    if (this.state.playResultAnswer === true) {
      if (this.state.correctAnswer === false ) {
        nextButton = null; //Прячем кнопку
        if (this.state.playError === true) {
          playSound = (
            <PlaySound urlStr= { require('./assets/sounds/e1.mp3') } />    
          );
        }      
        else {
          playSound = (
            <PlaySound urlStr= { require('./assets/sounds/e3.mp3') } />    
          );
        }
      }
      else {
        playSound = (
          <PlaySound urlStr= { require('./assets/sounds/s1.mp3') } />    
        );
    
        nextButton = (
          <div className={classes.column}>
             <img 
               onClick={() =>  {this.changeImgList(this.state.questionIndex)} }
               src= {require('./assets/arrows/arrow2.png')} 
               alt ="ButtonNext" className={classes.OrderBtnNext}/>
          </div>
        );
      };    
    }

    if (this.state.playQuestion === true) {
      playQuestion = (
        <PlaySound urlStr= { this.state.imgList[this.state.rndImages[this.state.questionIndex]].sound} />    
      );
    }
    else {
      playQuestion = ( //Включил <div>, чтобы был рендеринг 
        <PlaySound urlStr= { this.state.imgList[this.state.rndImages[this.state.questionIndex]].sound} />    
      );
    }

    if (this.state.gameOver === true) {
      playGameOver = (
        <PlaySound urlStr= { require('./assets/sounds/s1.wav') } />    
      );
    }

    return (
      <div>

        {playQuestion}
        {playSound}
        {playGameOver}
        <div className={classes.row}>
            <div className={classes.column}> 
              <img className={classes.OrderButton}
                onClick={() => { this.checkAnswer(0); } }
                src= {this.state.imgList[this.state.rndImages[0]].img} 
                alt ="Button1"/>
                <p>{this.state.imgList[this.state.rndImages[0]].name}</p>
            </div>
            
            <div className={classes.column}> 
             <img className={classes.OrderButton}
               onClick={() => { this.checkAnswer(1); } }
               src= {this.state.imgList[this.state.rndImages[1]].img} 
               alt="Button2"/>
              <p>{this.state.imgList[this.state.rndImages[1]].name}</p>
            </div>

            <div className={classes.column}>
             <img className={classes.OrderBtnRepeat}
               onClick={() =>  {this.repeatAnswer()} }
               src= {require('./assets/arrows/speaker1.png')} 
               alt ="ButtonNext" />
              <p><font size="4"> {this.state.countCorrectAnswer} : {this.state.countWrongAnswer} </font></p>
            </div>
        </div>
        <div className={classes.row}>
            <div className={classes.column}> 
             <img className={classes.OrderButton}
               onClick={() => { this.checkAnswer(2); } }
               src= {this.state.imgList[this.state.rndImages[2]].img} 
               alt="Button3" />
              <p>{this.state.imgList[this.state.rndImages[2]].name}</p>
            </div>
            <div className={classes.column}> 
             <img className={classes.OrderButton}
               onClick={() => { this.checkAnswer(3); }  }
               src= {this.state.imgList[this.state.rndImages[3]].img} 
               alt="Button4" />
              <p>{this.state.imgList[this.state.rndImages[3]].name}</p>
            </div>
          
            {nextButton}
        </div>
      </div>
    );
  }
}

export default App;


