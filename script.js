

function calc(){
    let total=0;
    let totalhealth=0;
    let totalfood=0;
    let totalclothing=0;
    let totalrent=0;
    let counter=0;
    let counterhealth=0;
    let counterfood=0;
    let counterclothing=0;
    let counterrent=0;
    for (let i=1;i<=20;i++){
        let input = document.getElementById("price"+i).value;
        let type = document.getElementById("selectname"+i).value;
        let price = parseFloat(input);
        if(!isNaN(price)){
            total+=price;
            counter+=1;
        }
        if(type === "health"){
            counterhealth+=1;
            totalhealth+=price;
        }
        if(type === "food"){
            counterfood+=1;
            totalfood+=price;
        }
        if(type === "clothing"){
            counterclothing+=1;
            totalclothing+=price;
        }
        if(type === "rent"){
            counterrent+=1;
            totalrent+=price;
        }


    }
    
    document.getElementById("pricetotal").value = total+" $";
    document.getElementById("pricetotal2").value = total+" $";
    document.getElementById("countertotal").value = counter;
    document.getElementById("counterhealth").value = counterhealth;
    document.getElementById("counterfood").value = counterfood;
    document.getElementById("counterclothing").value = counterclothing;
    document.getElementById("counterrent").value = counterrent;
    document.getElementById("totalhealth").value = totalhealth+" $";
    document.getElementById("totalfood").value = totalfood+" $";
    document.getElementById("totalclothing").value = totalclothing+" $";
    document.getElementById("totalrent").value = totalrent+" $";
}