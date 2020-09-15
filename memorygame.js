document.querySelector(".control-buttons span").onclick=function(){
    
    let yourname=prompt("Whats Your name");
    
    if(yourname == null || yourname==""){
        
        document.querySelector(".name span").innerHTML='unknown';
    }
    else{
     document.querySelector(".name span").innerHTML=yourname;
    }
    document.querySelector(".control-buttons").remove();
};

let duration = 1000;

let blockscontainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blockscontainer.children);

let orderRange = [...Array(blocks.length).keys()];

console.log(orderRange);
shuffle(orderRange);
console.log(orderRange);
        blocks.forEach((block,index) => {
            
            block.style.order = orderRange[index];
            
            block.addEventListener('click',function(){
                
                flipBlock(block);
                
            });
            
        });
    

function flipBlock(selectedblock){
    
 selectedblock.classList.add('is-flipped');
    
    let allflippedBlocks = blocks.filter(flipBlock => flipBlock.classList.contains('is-flipped'));
    
    if(allflippedBlocks.length === 2){
        
        stopclicking();
        
        checkMatchedBlocks(allflippedBlocks[0],allflippedBlocks[1])
    }
  
}

//check Matched Block
function checkMatchedBlocks(firstBlock,secondBlock){
    
    let triesElement = document.querySelector('.tries span');
    
    if(firstBlock.dataset.technology === secondBlock.dataset.technology){
         
        
        firstBlock.classList.remove('is-flipped');
        
        secondBlock.classList.remove('is-flipped');
        
          firstBlock.classList.remove('has-match');
        
        secondBlock.classList.remove('has-match');
        
        document.getElementById('succes').play();
        
    }
    else{
        
        triesElement.innerHTML = parseInt(triesElement.innerHTML)+1;
         
        setTimeout(() => {
            
              firstBlock.classList.remove('is-flipped');
        
             secondBlock.classList.remove('is-flipped');
        
        },duration);
        
        document.getElementById('fail').play();
    }
}







function stopclicking(){
    
    blockscontainer.classList.add('no-clicking');
    
    setTimeout(() =>{
        
      blockscontainer.classList.remove('no-clicking');  
    },duration);
}




  function shuffle(array){
      
    let current = array.length,
        temp,
      random;
          while(current > 0){
              random = Math.floor(Math.random() * current);
              current--;
              temp = array[current];
              array[current] = array[random];
              array[random] = temp;
          }
      return array;
      
      
      
  }