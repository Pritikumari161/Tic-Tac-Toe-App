
let currentPlayer = "X"
const arr = Array(9).fill(null)


const allBoxes = document.querySelectorAll(".box")
const myH3 = document.querySelector("h3")
const myButton = document.querySelector("button")
const myH2 = document.querySelector("h2")

myH2.textContent = `${currentPlayer}'s turn`

allBoxes.forEach(function(i)
{
    i.addEventListener("click", function(event)
    {
       // get id  
       const boxId = Number(event.target.id)// boxId = 1
       arr[boxId] = currentPlayer
       i.textContent = currentPlayer
       checkWinner()
       swapPlayers()     
    })
})



// arr = ['O', 'X', 'X', 'X', 'O', 'X', 'O', 'O', 'X']

// rows = 3 rows(0, 1, 2 |||| 3, 4, 5 |||| 6, 7, 8)
// columns = 3 columns(0, 3, 6 |||| 1, 4, 7 |||| 2, 5, 8)
// diagonals = 2 diagonals(0, 4, 8 |||| 2, 4, 6)

// some(), every()

let winnerStatus = false

function checkWinner()
{
    if( 
    (arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) || 
    (arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) || 
    (arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6])
    )
    {
        myH3.textContent = `${currentPlayer} is the Winner!`
        winnerStatus = true
        disabled ()
    }
    else
    {
        winnerStatus = false

        const output = arr.every(function(i)
        {
            if(i != null)  
            {
                return i
            }      
        })
    
        if(output == true)
        {
            myH3.textContent = "Game is Drawn!"
        }
    }

    
}


function swapPlayers()
{
    if(currentPlayer == "X")
        {
            currentPlayer = "O"
        }
       else if(currentPlayer == "O")
        {
            currentPlayer = "X"
        }
    if(winnerStatus == false)
        {
            myH2.textContent = `${currentPlayer}'s turn`
        }
    else
    {
        myH2.textContent = ""
    }
}


myButton.addEventListener("click", function()
{
    allBoxes.forEach(function(i)
    {
        i.textContent = ""
    })
    myH3.textContent = ""
    arr.fill(null)
    console.log(arr)
})
function disabled (){
    // allBoxes.disabled;
    allBoxes.disabled = true ; 
   
}