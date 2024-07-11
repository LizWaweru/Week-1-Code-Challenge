Getting Started;
Create a repository on your GitHub account. To do this:
create a new GitHub repository, go to https://github.com/Links to an external site. and sign in (if you aren't already signed in). Then, click the + icon in the upper-right corner of the screen, and choose 'New repository' in the drop-down menu.

This will bring you to a page where you can give the new repository a name. There will be some other settings as well, which we'll leave as they are. Copy the URL and then use the git remote add origin command to connect the local repo to the remote repo.

In your terminal run the git clone https://github.com/yourusername/toy-problems.git
cd toy-problems

 STUDENT GRADE CALCULATOR:

 DESCRIPTION

 The studentGradeCalculator function is a simple Javascript program that calculates a stuident's grade based on their inputted score. It utilizes basic conditional statements to determine the grade and handles input validation for score within the range of 0 - 100.

 To use the student calculator:
 Input when prompted, enter a numeric score between 0 and 100.
 Output; The function will output the corresponding grade based on the score entered.
 Example
 node studentcalculatorgrade.js
    output;
    Enter student's score; 75
    Student Grade: B
    In this example, the score entered was 75, which corresponds to a grade of 'A'.

Error handling.
If the input score is not a valid number or falls outside the range of 0 to 100, the function will display an message indicating the correct range and type of input required.

SPEED DETECTOR:
The tellspeedvfunction is a Javascript program designed to determine demerit points based on the speed limit. It calculates demerit points and provides feedback based on the number of demerit points earned.

To use the tellSpeed function.
Input:
Enter the vehicle's speed when prompted.

If the speed is within the speed limit:
Display"ok"
If the speed exceeds the speed limit based on the difference.
Displays the number of demerit points.
if the demerit exceed 12, displays "License suspended".

NET SALARY CALCULATOR
The net salary calculator calculates an individual’s Net Salary by getting the inputs of basic salary and benefits. It calculate's the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 
To use the calculator:
Run the node netSalaryCalculator.js in the terminal. When prompted;
Enter the Basic salary that is greater than or equal to 0.
Then key in the benefits when prompted.
Output will give the 
 Paye(Tax)
 Housing Levy
 NHIF Deduction
 NSSF Deduction
 Gross Salary
 Net Salary

Note:
The function uses the prompt-sync module for synchronous user input. 
Install it using npm install prompt-sync if not already installed.
Adjust tax brackets (paye), NHIIF rates, NSSF deductions and other constants as per current regulations and requirements.

Authored By: Elizabeth Waweru
# Week-1-Code-Challenge
