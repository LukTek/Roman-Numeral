const letterAt = [['I', 'V', 'X', 'L', 'C', 'D', 'M'], [1, 5, 10, 50, 100, 500, 1000], [true, false, true, false, true, false, false]]
function setup(){
  createCanvas(windowWidth, windowHeight)
  textSize(100)
  fill(60)
  textAlign(CENTER)
  input = ''
  output = ''
}
function draw(){
  background(255)
  if(!input){
    text("ENTER NUMERAL", width/2, height/3)
  }else{
  text(input, width/2, height/3)
  }
    text(output, width/2, height/2)
  }
function convert(inp){
  input = inp
  let inputCon = []
  let termAr = []
  output = 0
  if(input.length<1){
    output = ''
  } else{
    for(let i = 0; i<input.length; i++){
      inputCon[i] = [letterAt[1][letterAt[0].indexOf(input[i])], letterAt[2][letterAt[0].indexOf(input[i])]]
    }
    for(let i = 0; i<input.length; i++){
      if(i>0&&inputCon[i-1][0]<inputCon[i][0]&&inputCon[i-1][1]){
        output+=inputCon[i][0]-inputCon[i-1][0]*2
        termAr.pop()
        termAr.push(inputCon[i][0]-inputCon[i-1][0])
        if(inputCon[i+1]<inputCon[i]){
          output = 'ERROR3'
          break
        }


      } else{
        output+=inputCon[i][0]
        termAr.push(inputCon[i][0])
    }
    }
  }
  for(let i = 0; i<termAr.length; i++){
    if (termAr[i]>termAr[i-1]){
      output = 'ERROR2'
    }
  }
  console.log(termAr)
  return output
}
function keyPressed(){
  if(key=="Backspace"){
    input = input.slice(0, -1)
    convert(input)
  } else if(letterAt[0].includes(key.toUpperCase())){
    input=input+key.toUpperCase()
    convert(input)
}
}
