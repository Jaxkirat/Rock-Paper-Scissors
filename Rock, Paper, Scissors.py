import random as rd

def get_choices():
    player_choice = input("Enter choice: Rock, Paper, Scissors")
    computer_choice = ["rock", "paper" , "scissors" ]
    player2 = rd.choice(computer_choice)
    choices = {"player": player_choice, "computer": player2}

    return choices





def check_win(player , computer):
    print(f"Your choice : {player} , Computer's choice : {computer} ")
    if (player == computer):
        print ("It's a tie!")
    elif (player == "rock"):
        if (computer== "paper"):
            print("Paper covers Rock. You lose :( ")
        else:
            print("Rock smashes Scissors. You win!! :) ")
    elif (player == "paper"):
        if (computer== "scissors"):
            print("Scissors cut through Paper. You lose :( ")
        else:
            print("Paper covers Rock. You win!! :) ")
    elif (player == "scissors"):
        if (computer== "rock"):
            print("Rock smashes Scissors. You lose :( ")
        else:
            print("Scissors cut through Paper. You win!! :) ")


choices = get_choices()
result = check_win(choices["player"], choices["computer"])