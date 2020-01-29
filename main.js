window.onload = function () {
    get_month_abb();
};

function get_month_abb() {
    let select_mon = document.getElementById("mon");

    // 選択されているインデックス
    let select_index = select_mon.selectedIndex;

    let select_value = select_mon.options[select_index].value;
    select_value = Number(select_value);

    let abb_value = "";

    switch (select_value) {
        case 1:
            abb_value = "Jan";
            break;
        case 2:
            abb_value = "Feb";    
            break;
        case 3:
            abb_value = "Mar"; 
            break;
        case 4:
            abb_value = "Apr";
            break;
        case 5:
            abb_value = "May";
            break;
        case 6:
            abb_value = "Jun";
            break;
        case 7:
            abb_value = "Jul";
            break;
        case 8:
            abb_value = "Aug";
            break;
        case 9:
            abb_value = "Sep";
            break;
        case 10:
            abb_value = "Oct";
            break;
        case 11:
            abb_value = "Nov";
            break;
        case 12:
            abb_value = "Dec";
            break;
    }

    document.getElementById("abb").value = abb_value;
        

}