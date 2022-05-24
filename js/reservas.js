document.addEventListener('DOMContentLoaded', function() {
    const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    const tableDias = document.querySelector('#dias');
    function getDaysCalendar(month,year){
        document.querySelector('#mes').innerHTML = meses[month];
        document.querySelector('#ano').innerHTML = year;

        let firstDayOfWeek = new Date(year,month,1).getDay()-1;
        let getLastDayThisMonth = new Date(year,month+1,0).getDate()+1;

        for(var i = -firstDayOfWeek,index = 0; i < (42-firstDayOfWeek); i++,index++){
            let dt = new Date(year,month,i);
            let dtNow = new Date();
            let dayTable = tableDias.getElementsByTagName('td')[index];
            dayTable.classList.remove('mes-ant');
            dayTable.classList.remove('mes-post');
            dayTable.classList.remove('dia-actual');
            dayTable.innerHTML = dt.getDate();

            if(dt.getFullYear() == dtNow.getFullYear() && dt.getMonth() == dtNow.getMonth() && dt.getDate() == dtNow.getDate()){
                dayTable.classList.toggle('dia-actual');
            }
            if(i < 1){
                dayTable.classList.toggle('mes-ant');
            }
            if(i > getLastDayThisMonth-1){
                dayTable.classList.toggle('mes-post');
            }
        }
    }
    let now = new Date();
    let month = now.getMonth();
    let year = now.getFullYear();
    getDaysCalendar(month,year);

    document.querySelector('#btn-next').addEventListener('click', function(){
        month++;
        
        if(month > 11){
            month = 0;
            year++;
        }
        getDaysCalendar(month,year)
    });
    document.querySelector('#btn-prev').addEventListener('click', function(){
        month--;
        console.log(month);
        if(month < 0){
            month = 11;
            year--;
        }
        getDaysCalendar(month,year)
    });
})