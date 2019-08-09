function sentence(words, birthyear){
  this.paragraph = words;
  //this.test = test1;
  var currentyear = new Date();
  var age = currentyear - birthyear;
  this.getfullyear = birthyear;
}
