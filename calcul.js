function allonger(signe)
		{
		window.document.Calculatrice.affiche.value=window.document.Calculatrice.affiche.value
		+signe;
		}
		function evaluer()
		{
		  var x =0;
		  x = eval(window.document.Calculatrice.affiche.value);
		  window.document.Calculatrice.affiche.value = x;
		}
		 function fonctpartic(lafonct)
		 {
		  if (lafonct=="sqrt")
		  {
		     x = eval(window.document.Calculatrice.affiche.value);
		  window.document.Calculatrice.affiche.value = Math.sqrt(x);
		  }
		  if (lafonct=="car")
		  {
		    x = eval(window.document.Calculatrice.affiche.value);
		  window.document.Calculatrice.affiche.value = x*x;
		  }
		   if (lafonct=="log")
		   {
		       x = eval(window.document.Calculatrice.affiche.value);
		  window.document.Calculatrice.affiche.value = Math.log(x);
		  }
		  if (lafonct=="sin")
		  {
		    x = eval(window.document.Calculatrice.affiche.value);
		  window.document.Calculatrice.affiche.value = Math.sin(x);
		  }
		   if (lafonct=="cos")
		  {
		    x = eval(window.document.Calculatrice.affiche.value);
		  window.document.Calculatrice.affiche.value = Math.cos(x);
		  }
		  if(lafonct=="tan")
		  {
		    x = eval(window.document.Calculatrice.affiche.value);
		  window.document.Calculatrice.affiche.value = Math.tan(x);
		  }
		  if(lafonct=="Exp")
		  {
		     x = eval(window.document.Calculatrice.affiche.value);
		  window.document.Calculatrice.affiche.value = Math.exp(x);
		  }
		  if(lafonct=="Pi")
		  {
			 var y=3.14;
		     x = eval(window.document.Calculatrice.affiche.value);
		  window.document.Calculatrice.affiche.value = x*y;
		  }
		  }
		  