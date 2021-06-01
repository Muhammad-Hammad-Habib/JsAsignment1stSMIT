// Chapter 1

// Q1

alert("Hello dear");

// Q2

alert("Error! Please enter a valid Password.");

// Q3

alert("Welcome to JS Land  \nHappy coding!");

// Q4

alert("Welocome to Js land...");
alert("Prevnt this page from creating addtional dialogs");


// Q5
// Generate the following message through browser’s
// developer console:   ==>GENERATED<==

// Q6
// Done in HTML code





//  Chapter 2 

// Q1

var username;

// Q2

var myName;


// Q3

var titled ;
    
    titled = "Hello World"

    alert(titled);


// Q4

var stdName = "Ali"
var age = "15 year old"
var degree = "cretified mobile application development"

alert(stdName)
alert(age)
alert(degree)



// Q5

var p5 = "PIZZA"
var p4 = "PIZZ"
var p3 = "PIZ"
var p2 = "PI"
var p1 = "P"

alert(p5 + "\n" + p4 + "\n" + p3 + "\n" + p2 + "\n" + p1)


// Q6
var email = "example@example.com"
alert("My email address is " + email)


// Q7 

var book = "Asmarter way to learn JavaScript"

alert("I am trying to learn from the Book " + book)



// Q8

document.write(" <h1>Yah! I can  write HTML content throught javaScript </h1>")

//Q9

alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")
document.write("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")







// Chapter 3

// Q1
var age = "21"
alert("I am " + age + " years old")


// Q2
var visited = 0;
++visited;
alert ("You have visited this site " + visited + " times")


// Q3
 var birthYear = 1999;
 document.write("My birth year is " + birthYear + " <br> Data type of my deceard variable is", typeof(birthYear))



// Q4
var Name = prompt("Enter Your name")
var prdtName = prompt("Enter Your product name")
var quantity = prompt("Enter Your product quantity")

document.write("<br>")
document.write(Name + " Ordered " + quantity + " " + prdtName + " t(s) on XYZ Clothing store ")








// chapter 4
// Q1

var num1, srt2, tf3;

// Q2
// legal
var _Name , Fname , Sname , Num , Contact;
// illegal
// var 1Name , @Fname , #Sname , )Num , /Contact;

// Q3
document.write("<h1> Rules For naming JS variables </h1>")
document.write("a) A heading stating “Rules for naming JS variablesd    ")
document.write("<br>b) Variable names can only contain ______ , ______ , ______ and ______. For example $my_1stVariable ")
document.write("<br>c) Variables must begin with a ______, ______ or _____. For example $name, _name or name")
document.write("<br> d) Variable names are case _________")
document.write("<br> e) Variable names should not be JS _________")



// chapter 5

// Q1
var num1 = 3;
var num2 = 5;

document.write("Sum of " + num1 + " and " + num2 + "  is " , num1+num2 )




// Q2
document.write("<br> Sub. of " + num1 + " and " + num2 + "  is " , num1-num2 )
document.write("<br> Multi. of " + num1 + " and " + num2 + "  is " , num1*num2 )
document.write("<br> Div. of " + num1 + " and " + num2 + "  is " , num1/num2 )
document.write("<br> Mod. of " + num1 + " and " + num2 + "  is " , num1%num2)



// Q3

var mathExp;

document.write("<br> Value after variable declaration is: " , mathExp)

mathExp = 5;

document.write("<br> Initial value: " , mathExp)

mathExp++;

document.write("<br>Value after increment is:" , mathExp)

mathExp += 7;

document.write("<br> Value after addition is: ",mathExp )

mathExp--;

document.write("<br>Value after decrement is:" , mathExp)

document.write("After the value dividing by 3 reminder is : " , mathExp%3)





// Q4

var qnt = Number(prompt("Enterr the Number of ticket(s)"))

document.write("<br>Total cost to buy " + qnt + " ticket(s) to a movie is " , qnt*600 , "PKR <br>" )


// Q5

var table = Number(prompt("enter the table number"))
var time = 0;
time++
document.write( table , " x " , time , " = " , table*time ,"<br>" )
time++
document.write( table , " x " , time , " = " , table*time ,"<br>" )
time++
document.write( table , " x " , time , " = " , table*time ,"<br>" )
time++
document.write( table , " x " , time , " = " , table*time ,"<br>" )
time++
document.write( table , " x " , time , " = " , table*time ,"<br>" )
time++
document.write( table , " x " , time , " = " , table*time ,"<br>" )
time++
document.write( table , " x " , time , " = " , table*time ,"<br>" )
time++
document.write( table , " x " , time , " = " , table*time ,"<br>" )
time++
document.write( table , " x " , time , " = " , table*time ,"<br>" )
time++
document.write( table , " x " , time , " = " , table*time ,"<br>" )



// Q6






var FtoC = +prompt("Enter the value of fahrenheit (Fohrenheit to celious) ")
var cal = (FtoC * 9 / 5) +32
document.write("<br>", FtoC , "^C is " , cal)

var CtoF = +prompt("Enter the value of fahrenheit (Fohrenheit to celious) ")
cal =  (CtoF - 32) * (5/9)
document.write("<br>", CtoF , "^F is " , cal)




// Q7

var Pitem1 = Number(prompt("enter the price of item one "))
var Pitem2 = Number(prompt("enter the price of item two "))

var Qitem1 = Number(prompt("enter the quantity opf item one "))
var Qitem2 = Number(prompt("enter the quantity opf item two "))
var Scharges = Number(prompt("Enter the Shippng charges"))

var Total = (Pitem1 * Qitem1) + (Pitem2 * Qitem2) + Scharges;


document.write("<br>Price of Item 1 is :" , Pitem1)
document.write("<br>Quantity of Item 1 is :" , Qitem1)
document.write("<br>Price of Item 2 is : " , Pitem2)
document.write("<br>Quantity of Item 2 is : " , Qitem2)
document.write("<br>Shipping Charges is  " , Scharges)

document.write("<br>Total cost of your order is " , Total)






// Q8
var TM = Number(prompt("Enter th total marks"))
var OM = Number(prompt("Enter th Obtained marks"))
var per = (OM/TM)*100



document.write("<br>Total marks is : " , TM)
document.write("<br>btained marks is : " , OM)
document.write("<br>Percentage is : " , per)






// Q9

var totalPKR = (10 * 104.80) + (25 * 28)
document.write("<br> Total Currency in PKR: ", totalPKR)


// Q10
var mathArth = 10;
mathArth = mathArth + 5 * 10 / 2

// Q11
var crtY = Number(prompt("Enter the current year"))
var btY = Number(prompt("Enter THe birth year "))
var cal = crtY - btY

document.write("<br>Current Year : " , crtY)
document.write("<br>Birth Year : " , btY)
document.write("<br>Your age is  : " , cal , " or " , cal - 1 )



// Q12 and Q13
// out of mind but working on it









// chapters 6 to 9

// Q1

var a = 10;

document.write("the Value of a is : " , a)
document.write("<br>--------------------------------")

++a;
document.write("<br>the Value of ++a is : " , a)
document.write("<br>now the Value of ++a is : " , a)

a++;
document.write("<br>the Value of a++ is : " , a)
document.write("<br>now the Value of a++ is : " , a)


--a;
document.write("<br>the Value of --a is : " , a)
document.write("<br>now the Value of --a is : " , a)




// Q2

var a = 2, b = 1
var result = --a - --b + ++b + b--
         
// --a   > pre-decrement here value of a became 1 <
//  1
// --a - --b  > pre-decrement here value of "a" became 1  and "b" is 0<
//  1  -  0 
// --a - --b + ++b > pre-decrement here value of "a" became 1 , "b" is 0  also pre-increment with "b" so the became 1 <
// --a - --b + ++b + b-- > post-decrement here value of "b" became 0  but asgined value 1 in the result becouse of post< 
//  1  -  0   +  1 + 1 


document.write("<br>a is " , a )
document.write("<br>b is " , b )
document.write("<br>result is " , result )


// Q3

var greet =  prompt("Enter Your Name ")
document.write("<br>Hello! how are you " , greet)




// Q4

var table = 5;

table = Number(prompt("enter the table number",table))
var time = 0;
time++
document.write( table , " x " , time , " = " , table*time ,"<br>" )
time++
document.write( table , " x " , time , " = " , table*time ,"<br>" )
time++
document.write( table , " x " , time , " = " , table*time ,"<br>" )
time++
document.write( table , " x " , time , " = " , table*time ,"<br>" )
time++
document.write( table , " x " , time , " = " , table*time ,"<br>" )
time++
document.write( table , " x " , time , " = " , table*time ,"<br>" )
time++
document.write( table , " x " , time , " = " , table*time ,"<br>" )
time++
document.write( table , " x " , time , " = " , table*time ,"<br>" )
time++
document.write( table , " x " , time , " = " , table*time ,"<br>" )
time++
document.write( table , " x " , time , " = " , table*time ,"<br>" )






// Q5 

var sub1name, sub2name, sub3name , total, sub1ObtMrk , sub2ObtMrk , sub3ObtMrk;
sub1name = prompt("Enter yuor first subject name")
sub2name = prompt("Enter yuor second subject name")
sub3name = prompt("Enter yuor third subject name")
total = 100;

sub1ObtMrk = Number(prompt("Enter your obtained marks of subject one"))
sub2ObtMrk = Number(prompt("Enter your obtained marks of subject two"))
sub3ObtMrk = Number(prompt("Enter your obtained marks of subject third"))



document.write("<table> <tr> <th> Subject </th> <th> Total Marks </th> <th> Obtained Marks </th> <th> Percentage </th> </tr>")
document.write("<tr> <td> " + sub1name + "</td> <td> " + total + "</td> <td> " + sub1ObtMrk + "</td> <td> " + (sub1ObtMrk/total)*100 + "% </td>   </tr> " )
document.write("<tr> <td> " + sub2name + "</td> <td> " + total + "</td> <td> " + sub2ObtMrk + "</td> <td> " + (sub2ObtMrk/total)*100 + "%</td>   </tr> " )
document.write("<tr> <td> " + sub3name + "</td> <td> " + total + "</td> <td> " + sub3ObtMrk + "</td> <td> " + (sub3ObtMrk/total)*100 + "%</td>   </tr> " )
document.write("<tr> <td> </td> <td> " + total*3+ "</td> <td> " , sub1ObtMrk+sub2ObtMrk+sub3ObtMrk , "</td> <td> " + ((sub1ObtMrk+sub2ObtMrk+sub3ObtMrk)/(total*3))*100 + "% </td>   </tr> " )
document.write ("</table>")












// Chapter 9 tp 11

// Q1

var city = prompt("Enter the city name :")
if (city =="karachi"){
    alert("Welcome to Karachi")
}


// Q2
var gender = prompt("Enter the Gender :")
if (gender =="male"){
    alert("Good Morning Sir.")
}
if (gender =="female"){
    alert("Good Morning Ma'am.")
}

// Q3

var color  = prompt("Enter the color for trafic :")
if (color =="red"){
    alert("Must stop")
}
if (color =="yellow"){
    alert("ready to move")
}
if (color =="green"){
    alert("Move now")
}


// Q4

var fuel  = Number(prompt("Enter Your feul qauntity iin litre :"))
if (fuel < 0.25){
    alert("Please refill the fuel in your car")
}


// Q5      ==> Done  And Recorded <==





//Q6

var otdMrk = Number(prompt("Enterr the Obtained maarks"))
var total = Number(prompt("Enterr the total maarks"))
var percent = (otdMrk/total)*100;

if(percent >= 80 &&  percent <= 100){
    document.write("<br>Total" , total)
    document.write("<br>Otainded Marks " , otdMrk)
    document.write("<br>Grade A1")
    document.write("<br>Percentage " , percent)
}
if(percent >= 70 &&  percent <= 80){
    document.write("<br>Total" , total)
    document.write("<br>Otainded Marks " , otdMrk)
    document.write("<br>Grade A")
    document.write("<br>Percentage " , percent)
}
if(percent >= 60 &&  percent <= 70){
    document.write("<br>Total" , total)
    document.write("<br>Otainded Marks " , otdMrk)
    document.write("<br>Grade B")
    document.write("<br>Percentage " , percent)
}
if(percent < 60){
    document.write("<br>Total" , total)
    document.write("<br>Otainded Marks " , otdMrk)
    document.write("<br>Grade Fail")
    document.write("<br>Percentage " , percent)
}


// Q7

var secNum = 5;
var given = Number(prompt("enter the Number which you guess"))
if (secNum == given){
    alert("Bingo! Correct answer")
}
if (secNum == given + 1){
    alert("Close enough to the correct answer")
}




// Q8

var odd = Number(prompt("enter the number to check that is this divisiable by 3 or not"))
if (odd%3 == 0){
    alert("This number is diviable by 3")
}




// Q9

var EvnOdd = Number(prompt("enter the number to ckeck the enev or odd"))
if(EvnOdd % 2 == 0){
    alert("this number you tgave us is Even")
}
if(EvnOdd % 2 == 1){
    alert("this number you tgave us is Odd")
}


// Q10

var temp = Number(prompt("<br>Enter the Outside temperature"))
if(temp >= 40){
    document.write("<br>It is too hot outside")
}
if(temp >=30 && temp < 40){
    document.write("<br>The Weather today is Normal")
}
if(temp >=20 && temp < 30){
    document.write("<br>Today’s Weather is cool")
}
if(temp >=10 && temp < 20){
    document.write("<br>OMG! Today’s weather is so Cool")
}

// Q11

var firstNum = Number(prompt("enter the number "))
var secNum = Number(prompt("enter the number "))
var opt = prompt("enter the Operater")

if( opt == "+"){
    document.write("<br>Addition of you given number is :" , firstNum+secNum )
}
if( opt == "-"){
    document.write("<br>Substraction of you given number is :" , firstNum-secNum )
}
if( opt == "*"){
    document.write("<br>multiplication of you given number is :" , firstNum*secNum )
}
if( opt == "/"){
    document.write("<br>division of you given number is :" , firstNum/secNum )
}

 









// chapter 12-13
// Q1








// Q2

var frtNum = Number(prompt("enter the first value "))
var secNum = Number(prompt("enter the Second value "))
if (frtNum > secNum) {
    document.write(frtNum)
}
else if (secNum > frtNum) {
    document.write(secNum)
}
else if (frtNum == secNum) {
    document.write("both are equal")
}
else { }


// Q3

var state = Number(prompt("enter the number to check the state  is positive, negative or zero"))
if (state > 0) {
    document.write("<br>positive")
}
else if (state < 0) {
    document.write("<br>Negaive")
}
else if (state == 0) {
    document.write("<br>Zerro!")
}
else { }

// Q4


var vowel = prompt("Enter the single CHARACTER to check the vowels")
if (vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u") {
    document.write("<br>this is a vowel ", vowel)
}


// Q5 

var password = "Hammad1032@"
var enterPass = prompt("Enter the password")
var valid = 0;
if ((password == enterPass) == true) {
    alert("“Correct! The password you entered matches the original password")
}
else if ((password == enterPass) == false) {
    valid++;
    alert("incorrect password")
    if ((password == enterPass) == false) {
        enterPass = prompt("Enter the password")
        if ((password == enterPass) == true) {
            alert("“Correct! The password you entered matches the original password")
        }
        else if ((password == enterPass) == false) {
            valid++;
            alert("incorrect password")
        }

    }
}
if (valid == 2) {
    alert("the correct password password is " + password)
}


// Q6

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} 
else {
    greeting = "Good evening";
}




// Q7

var time = +prompt("enter the time ")

if( time >= 0000 && time <= 1200 ){
    document.write("Good Morning!")
}
else if( time >= 1200 && time <= 1700 ){
    document.write("Good Afternoor!")
}
else if( time >= 1700 && time <= 2100 ){
    document.write("Good Evening!")
}
else if( time >= 1200 && time <= 1700 ){
    document.write("Good Afternoor!")
}
else if( time>= 2100 && time <=2359 ){
    document.write("Good Night")
}











// Chapter 14 to 16


// Q1
var student = [];


// Q2 
var ara = new Array()

// Q3
var text = ['hel', 'loo', 'wor', 'old']

// Q4
var text = ['1', '2', '3', '4']

// Q5
var bol = [true, false]

// Q6
var mix = [1, 'hello', 1.5, true, {}, []]

// Q7

var edu = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"]
document.write("<br>Qualifications ")
document.write("<br>1, ", edu[0])
document.write("<br>2, ", edu[1])
document.write("<br>3, ", edu[2])
document.write("<br>4, ", edu[3])
document.write("<br>5, ", edu[4])
document.write("<br>6, ", edu[5])
document.write("<br>7, ", edu[6])
document.write("<br>8, ", edu[7])


// Q8

var stdName = ["ali", "shah", "noor"]
var score = [324, 234, 110]
document.write("<br>Score of " + stdName[0] + "is " + score[0] + ". percentage: " + (score[0] / 500) * 100)
document.write("<br>Score of " + stdName[1] + "is " + score[1] + ". percentage: " + (score[1] / 500) * 100)
document.write("<br>Score of " + stdName[2] + "is " + score[2] + ". percentage: " + (score[2] / 500) * 100)


// Q9

var color = ["red", "green", "blue"]
var addColor;
var a = prompt("do you want to add color to the beginning  'y/n'", "n")

// a
if (a == "y") {
    addColor = prompt("Enter the color name")
    color.unshift(addColor)
    document.write("<br>", color)
}

// b

a = prompt("do you want to add color to the End  'y/n'", "n")

if (a == "y") {
    addColor = prompt("Enter the color name")
    color.push(addColor)
    document.write("<br>", color)
}


// c

color = ["red", "green", "blue"]
color.unshift("Orange", "black")
document.write("<br>", color)

// d
color.shift()
document.write("<br>", color)

// e
color.pop()
document.write("<br>", color)

// f
color = ["red", "green", "blue"]
color.splice(2, 0, ["pink", "white"],)
document.write("<br>", color)

// e
color = ["red", "green", "blue"]
var index = +prompt("Enter the Index number where you want to add", "n")
a = prompt("do you want to add color to the End ")

if (index >= 0) {
    color.splice(index - 1, 0, a)
    document.write("<br>", color)

}

// g
color = ["red", "green", "blue"]
index = +prompt("Enter the Index number where you want to delete", "n")

if (index >= 0) {
    color.slice(index, 1)
    document.write("<br>", color)

}




// Q10

var stdSourc = [320, 230, 480, 120]
document.write("<br>sorted ", stdSourc.sort())


// Q11

var city = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
var selected = city.splice(2, 2)

document.write("<br>Cities list :", city)
document.write("<br>Selected cities list :", selected)

// Q12
var arr = ["This", "is", "my", "cat"];
document.write("<br>Array :", arr)
document.write("<br>String :", arr.join("  "))


// Q13

var FIFO = []
FIFO.unshift("aLi")
document.write("<br>FIFO in :", FIFO)
FIFO.unshift("hunza", "shah")
document.write("<br>FIFO in :", FIFO)
FIFO.pop()
document.write("<br>FIFO out :", FIFO)
FIFO.pop()
document.write("<br>FIFO out :", FIFO)

// Q14

var LIFO = []
LIFO.push("gul")
document.write("<br>LIFO in :", LIFO)
LIFO.push("Khan", "zada")
document.write("<br>LIFO in :", LIFO)
LIFO.pop()
document.write("<br>LIFO out :", LIFO)
LIFO.pop()
document.write("<br>LIFO out :", LIFO)


// Q15
var list = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

document.write("<br><select>")
document.write("<option>" + list[0] + "</option>")
document.write("<option>" + list[1] + "</option>")
document.write("<option>" + list[2] + "</option>")
document.write("<option>" + list[3] + "</option>")
document.write("<option>" + list[4] + "</option>")
document.write("<option>" + list[5] + "</option>")







