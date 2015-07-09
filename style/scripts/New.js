
function hide(nodeId)
{
    var node = document.getElementById(nodeId);
	
    if (node)
    {
        node.style.display = 'none';
    } 
	return false;
}

function show(nodeId)
{
    var node = document.getElementById(nodeId);
    if (node)
    {
        node.style.display = 'block';
    } 
}

function check(nodeId)
{
	var x = document.getElementById(nodeId).style.display;
	if (x!="block")
	{
		document.getElementById(nodeId).style.display="block";
	}
	else
	{
		document.getElementById(nodeId).style.display="none";
	}
}


function sendform() {

if (document.forms[0].username.value == "") { 
alert('Пожалуйста, введите Ваше имя'); 
document.forms[0].username.focus();  
return false;
}

if (document.forms[0].usersurname.value == "") { 
alert('Пожалуйста, введите Вашу фамилию'); 
document.forms[0].usersurname.focus();  
return false;
}

if (document.forms[0].userotch.value == "") { 
alert('Пожалуйста, введите Ваше отчество'); 
document.forms[0].userotch.focus();  
return false;
}

if (document.forms[0].email.value == "") {
alert('Пожалуйста, введите электронный адрес');
document.forms[0].email.focus();
return false
}

if (!(/^[\w\.-]+@[\w\.-]+\.\w+$/i).test(document.forms[0].email.value)) {
alert('Введите реальный электронный адрес!'); 
return false; 
}

if (document.forms[0].phone.value == "") {
alert('Пожалуйста, введите телефонный номер');
document.forms[0].phone.focus();
return false
}

if (document.forms[0].message.value == "") {
alert('Пожалуйста, введите текст сообщения');
document.forms[0].message.focus();
return false
}

if (document.forms[0].q.value != 4) { 
alert('Неверный ответ на контрольный вопрос!');
document.forms[0].q.focus();
return false
}
alert("Отправка сообщения");
return true;
}

