const AGE_15 = 5475;

let form=document.getElementById("myForm");
form.addEventListener('submit',DOBsubmit)

function DOBsubmit(event){
    event?.preventDefault();
    let date,month,year,cdate,cmonth,cyear;
    
   

    date=document.getElementById("date").value;
    month=document.getElementById("month").value;
    year=document.getElementById("year").value;


    console.log("user input date: => " + date + month + year);

  
    const date1=new Date(`${month}/${date}/${year}`);
    const date2=new Date();

    console.log("date1 =>" + date1);
    console.log("date2 => "+ date2);

    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    console.log(diffTime + " milliseconds");
    console.log(diffDays + " days");
    if(diffDays < AGE_15){
        alert("your age is restricted");
    }
    else{

        window.location.href = "http://www.Google.com";

    }
    

}