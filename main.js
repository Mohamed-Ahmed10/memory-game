// Start game & enter the name
document.querySelector(".control-buttons span").onclick = function()
{
    let yourName = prompt("Whats your name");
    
    if(yourName == null || yourName == "")
    {
        document.querySelector('.name span').innerHTML = "Unkown"
    }
    else
    {
        document.querySelector('.name span').innerHTML = yourName
    }
    document.querySelector('.control-buttons').remove(); 
};


//varialbles
let duration = 1000;

let blocksContainer = document.querySelector('.memory-game-blocks');

let blocks = Array.from(blocksContainer.children);

let orderRange = Array.from(Array(blocks.length).keys());

// start functions
function stopClicking()
{
    blocksContainer.classList.add('no-clicking');

    setTimeout(()=>
    {
        blocksContainer.classList.remove('no-clicking');
    },duration) ;
}

function checkMathedBlockes(firstBlock , secondBlock)
{
    let triesElement = document.querySelector('.tries span');

    if(firstBlock.dataset.shape === secondBlock.dataset.shape)
    {
        firstBlock.classList.remove('fliped');
        secondBlock.classList.remove('fliped');

        firstBlock.classList.add('matched');
        secondBlock.classList.add('matched');

        document.getElementById('correct').play();
    }
    else
    {
        triesElement.innerHTML = parseInt(triesElement.innerHTML)+1;
        
        setTimeout(()=>
        {
            firstBlock.classList.remove('fliped');
            secondBlock.classList.remove('fliped');

            
        },duration);
        // document.getElementById('wrong').play();
    }
}

function flipBlock(selectedBlock)
{
    selectedBlock.classList.add('fliped');


    let allFlipedBlockes = blocks.filter(flipedBlock => flipedBlock.classList.contains('fliped'));

    if (allFlipedBlockes.length ==2)
       { 
            stopClicking();
            checkMathedBlockes(allFlipedBlockes[0],allFlipedBlockes[1]);
        }
    else {}
}
//end functions
Math.ceil(Math.random()*19)

console.log(orderRange)

blocks.forEach((block , index)=>{
    block.style.order= orderRange[index];

    block.addEventListener('click',function()
        {
            flipBlock(block);
        });
});

