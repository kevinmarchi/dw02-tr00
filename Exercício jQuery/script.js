$( document ).ready(function() {

    var divContainer = $("<div></div>");
    divContainer.attr("class", "container");    

    var titulo = $("<h1></h1>").text("Negociações");
    
    var form = $("<form></form>");
    form.attr("id", "cadastro");

    var div1 = $("<div></div>");
    div1.attr("class", "form-group");

    var div2 = $("<div></div>");
    div1.attr("class", "form-group");

    var div3 = $("<div></div>");
    div1.attr("class", "form-group");    

    var label1 = $("<label></label>").text("Data: ");
    label1.attr("for", "data");
    div1.append(label1);

    var input1 = $("<input>");
    input1.attr("type", "date");
    input1.attr("id", "data");
    input1.attr("class", "form-control");
    div1.append(input1);
    

    var label2 = $("<labe></label>").text("Quantidade: ");
    label2.attr("for", "quantidade");
    div2.append(label2);

    var input2 = $("<input>");
    input2.attr("type", "number");
    input2.attr("id", "quantidade");
    input2.attr("autocomplete","off");
    input2.attr("class", "form-control");
    div2.append(input2);

    var label3 = $("<label></labe>").text("Valor: ");
    label3.attr("for", "valor");
    div3.append(label3);

    var input3 = $("<input>");
    input3.attr("type", "number");
    input3.attr("id", "valor");
    input3.attr("autocomplete", "off")
    input3.attr("class", "form-control");
    div3.append(input3);

    var button = $("<button></button>").text("Enviar");
    button.attr("id","enviar");
    button.attr("class", "btn btn-lg btn-primary mt-2");    

    form.append(div1);
    form.append(div2);
    form.append(div3);
    form.append(button);
    divContainer.append(titulo);
    divContainer.append(form);

    var table = $("<table></table>");
    table.attr("class", "table table-bordered mt-2");

    var tr1 = $("<tr></tr");
    var th1 =$("<th></th>").text("Data");
    tr1.append(th1);
    var th2 =$("<th></th>").text("Quantidade");
    tr1.append(th2);
    var th3 =$("<th></th>").text("Valor");
    tr1.append(th3);

    table.append(tr1);    

    divContainer.append(table);
    $("body").append(divContainer);

    $("#enviar").click(function (event) { 
        event.preventDefault();   
        var data = $("#data").val();
        var quantidade = $("#quantidade").val();
        var valor = $("#valor").val();
        
        var tr2 = $("<tr></tr>");
        var td1 = $("<td></td>").text(data);
        tr2.append(td1);
        var td2 = $("<td></td>").text(quantidade);
        tr2.append(td2);
        var td3 = $("<td></td>").text(valor);
        tr2.append(td3);

        table.append(tr2);
    });
});