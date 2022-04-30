/* Tic-Tac-Toe built with Matthew Sanabria, Vicky, Derek, & Kennedy of 100Devs */
    class GameBoard {
        constructor() {
          this.idToCoordinate = {
            "A1": [0, 0],
            "A2": [0, 1],
            "A3": [0, 2],
            "B1": [1, 0],
            "B2": [1, 1],
            "B3": [1, 2],
            "C1": [2, 0],
            "C2": [2, 1],
            "C3": [2, 2]
          }
          
          this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
          ]
          
          this.isX = true
          this.gameOver = false
          // this.moveCount = 9;
        }
        
        move(e) {
          if(!this.gameOver) {
            let t = this.idToCoordinate[e.target.id]
      
            // The position was already selected.
            if (this.board[t[0]][t[1]] != null){
              return
            }
      
            e.target.textContent = this.symbol()
            this.board[t[0]][t[1]] = this.symbol()
            if (this.isX) {
              e.target.classList.add('addX');
            }
            else if (!this.isX) {
              e.target.classList.add('addO')
            }
            this.isX = !this.isX
            this.updateStatus(statusElem)
            this.winner()
          }
        }
        
        symbol() {
          return (this.isX) ? "X" : "O"
        }
        
        updateStatus(e) {
          e.textContent = `Your move, player ${this.symbol()}`
        }
        
        winner() {
          if (this.checkWinner("X")) {
            statusElem.textContent = "WINNER X"
            // End the game
            this.gameOver = true
          }
          if (this.checkWinner("O")) {
            statusElem.textContent = "WINNER O"
            
            // End the game
            this.gameOver = true
          }
        }
        
        checkWinner(ch) {
          let seq = ch.repeat(3)
          
          // Horizontal.
          if (this.board[0].join`` == seq || this.board[1].join`` == seq || this.board[2].join`` == seq ) {
            return true
          }
          
          // Vertical
          let col1 = [this.board[0][0], this.board[1][0], this.board[2][0]]
          let col2 = [this.board[0][1], this.board[1][1], this.board[2][1]]
          let col3 = [this.board[0][2], this.board[1][2], this.board[2][2]]
          if (col1.join`` == seq || col2.join`` == seq || col3.join`` == seq ) {
            return true
          }
          
          // Diagonal
          let diag1 = [this.board[0][0], this.board[1][1], this.board[2][2]]
          let diag2 = [this.board[2][0], this.board[1][1], this.board[0][2]]
          if (diag1.join`` == seq || diag2.join`` == seq) {
            return true
          }
          
          return false
        }
      }
      
      let game = new GameBoard()
      
      document.querySelectorAll(".cell").forEach(element => element.addEventListener('click', (e) => game.move(e)))
      const statusElem = document.querySelector("#status")
      game.updateStatus(statusElem)
      
      