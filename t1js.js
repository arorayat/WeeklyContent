function getReport(){

           

            //read the marks
            var engMarks = document.getElementById('txtEnglish').value;
            var hindiMarks = document.getElementById('txtHindi').value;
            var mathsMarks = document.getElementById('txtMaths').value;
            var scienceMarks = document.getElementById('txtScience').value;
            
            //calculate the total marks (using double notation technique)
             var totalMarks = engMarks - (- hindiMarks) - (- mathsMarks) - (- scienceMarks);
            
            //get the average marks
            var averageMarks = totalMarks / 4;                  
            
                
            //display the results   
         
            document.getElementById('txtTotalMarks').value = totalMarks;
            document.getElementById('txtAvgMarks').value = averageMarks;
           

} //end of function getReport
          
function myFunction() {
  alert("I am an alert box!");
}