function assine() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
    else {

    }
}

function valida_digitos(Ncampo)
{
		 //caracteres permitidos
		 if(Ncampo=="nome")
		 er=/[0-9]/;
		 
		 digito=document.getElementById(Ncampo).value;
		 var tempor;
		 
		  for (var i=0;i<digito.length; i++) {
			tempor = digito.substring(i,i+1); 
			
			  if (er.test(digito)) {
			  document.getElementById(Ncampo).value=digito.substring(0,digito.length-1);
			 
			 return false;
			  break;
    		}
   		}
 }

 function valida_enviar(campo){
	
	d=document.getElementById('uf').value;
	a=document.getElementById(campo);
	b=document.getElementById;
	var conta=0;
	campos=new Array('nome','sobrenome','email','senha');
	for(i=0;i<campos.length;i++)
	{	
		
		if(campos[i]=='email')
		{
			var er=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
			if(!er.test(document.getElementById(campos[i]).value))
			{
				document.getElementById('resposta'+campos[i]).innerHTML="informe o e-mail correto";
				conta++;
			}
		}

		if(document.getElementById(campos[i]).value=="")
		{
			document.getElementById('resposta'+campos[i]).innerHTML="informe "+campos[i];
			conta++;
		}
	}			
 }
