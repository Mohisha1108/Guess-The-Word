player1_name = localStorage.getItem("player1_name");
  player2_name = localStorage.getItem("player2_name");
  player1_score = 0;
  player2_score = 0;
document.getElementById("player1name").innerHTML = player1_name+" : ";
document.getElementById("player2name").innerHTML = player2_name+" : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn : "+player1_name;
document.getElementById("player_answer").innerHTML = "Answer Tun : "+player2_name;
function send()
{
      get_word = document.getElementById("word").value;
      word = get_word.toLowerCase();//coding//
    console.log("The word in lowercase = "+word);
      first = word.charAt(1);//o//
    console.log(first);
      length_divide_2 = Math.floor(word.length/2);//math.floor(6/2) = 3//
      second = word.charAt(length_divide_2);//i//
    console.log(second);
      length_minus_1 = word.length - 1;//6-1 = 5//
      third = word.charAt(length_minus_1);//g//
    console.log(third);
      remove_first = word.replace(first, "_");//c_ding//
      remove_second = remove_first.replace(second, "_");//c_d_ng//
      remove_third = remove_second.replace(third, "_");//c_d_n_//
    console.log(remove_third);
      question_word = "<h4 id='word_display'>Q. "+remove_third+"</h4>";
      input_box = "<br>anwer: <input type='text' id='input_check_box'>";
      check_button = "<br><br><button class='btn btn-primary' onclick='check()'>Check</button>";
      row = question_word+input_box+check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
question_turn = "player1";
answer_turn = "player2";
function check()
{
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();//converting the answer to lowercase//
    console.log("The answer in lowercase = "+answer);
    if (word==answer)
    {
     if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
     }
     else {
         player2_score = player2_score + 1;
         document.getElementById("player2_score").innerHTML = player2_score;
     }
    }
     if (question_turn == "player1")
     {
         question_turn = "player2";
         document.getElementById("player_question").innerHTML = "Question Turn : "+player2_name;
     }
     else{
         question_turn = "player1";
         document.getElementById("player_question").innerHTML = "Question Turn : "+player1_name;
     }
     if (answer_turn == "player1")
     {
         answer_turn = "player2";
         document.getElementById("player_answer").innerHTML = "Answer Turn : "+player2_name;
     }
     else{
         answer_turn = "player1";
         document.getElementById("player_answer").innerHTML = "Answer Turn : "+player1_name;
     }
     document.getElementById("output").innerHTML = "";
}