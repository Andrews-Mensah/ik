let dayHolder = document.getElementById ("day");
        let monthHolder = document.getElementById ("month");
        let yearHolder = document.getElementById("year");

        let showAge = document.getElementById("show-age");

        const btn = document.getElementById("calc-btn");

        var dateNow= new Date();

        let dN = dateNow.getDay();
        let dM = dateNow.getMonth() + 1;
        let dY = dateNow.getFullYear();

        let maxDays = 0;
        let monthNum = 1;

        btn.addEventListener ("click", (days, month, year ) => {
            days = dayHolder.value;
            month = monthHolder.value;
            year = yearHolder.value;

            if (dayHolder.value == "" || monthHolder.value == "" || yearHolder.value =="") {
                return alert ("Kindly enter your correct date of birth!");
            }

            console.log (`Current Date : ${dN} ${dM} ${dY}`);

            if (dM==1){
                maxDays = 31;
                monthNum = 1;
            }

            else if (dM==2){
                maxDays = 28;
                monthNum = 2;
            }
            else if (dM==3){
                maxDays = 31;
                monthNum = 3;
            }
            else if (dM==4){
                maxDays = 30;
                monthNum = 4;
            }
            else if (dM==5){
                maxDays = 31;
                monthNum = 5;
            }

            else if (dM==6){
                maxDays = 30;
                monthNum = 6;
            }
            else if (dM==7){
                maxDays = 31;
                monthNum = 7;
            }
            else if (dM==8){
                maxDays = 31;
                monthNum = 8;
            }
            else if (dM==9){
                maxDays = 30;
                monthNum = 9;
            }
            else if (dM==10){
                maxDays = 31;
                monthNum = 10;
            }
            else if (dM==11){
                maxDays = 30;
                monthNum = 11;
            }
            else if (dM==12){
                maxDays = 31;
                monthNum = 12;
            }


            var ageYears = dY - year;

            if(dM <= month) {
                m = dM - 12;
            }

            var ageMonths = month - dN;

            var ageDays = (maxDays - dN) + parseInt(days);

            showAge.innerHTML = `Your current age is ${ageYears}y, ${ageMonths}m and ${ageDays}d`;
            







             
        })