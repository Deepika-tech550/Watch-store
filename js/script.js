document.getElementById('menu').onclick=function()
{
	document.getElementById('hide_ham').style.display='block'
	document.getElementById('ham').style.right='0';
	document.getElementById('menu').style.display='none';
	document.getElementById('close').onclick=function()
	{
			document.getElementById('hide_ham').style.display='none';

	}
	
}