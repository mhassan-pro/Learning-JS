// "this" keyword.
// refers to an object that is executing the current piece of code. 
const student = {
    name: "Hassan",
    age: 23,
    eng:90,
    math:80,
    phy:85,
    get avg(){
        let avg = (this.eng + this.math + this.phy) / 3 ;
        console.log("The average marks are :",avg) ;
    }
}

student.avg;

/* Try and Catch
   the Try statement allows you to define a block of code to be tested for error while it is being executed.
    the Catch statement allows you to define a block of code to be execued if an error occurs in a block.
 */

