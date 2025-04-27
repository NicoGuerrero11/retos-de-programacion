



class QuizBrain:
    def __init__(self, question_list):
        self.question_number = 0
        self.question_list = question_list
        self.score = 0

    def total_question(self):
        return self.question_number < len(self.question_list)
            
        
    #TODO asking the questions
    def next_question(self):
        current_question = self.question_list[self.question_number]
        self.question_number += 1
        answer = input(f"Q.{self.question_number}: {current_question} (true or false): ")
        self.check_answer(answer=answer, correct_answer=current_question.answer)
    
    
    #TODO checking if the answer was correct
    def check_answer(self, answer, correct_answer):
        if answer.lower() == correct_answer.lower():
            self.score += 1
            print("correct")
        else:
            print("incorrect")
        print(correct_answer)
        print(f"Score: {self.score}/{self.question_number}\n")

    def final_score(self):
        print("You've complete the quiz!!")
        print(f"Final Score: {self.score}")
        
    #TODO checking if end the quiz






