(function()
{
	'use strict'


	function reverse()
	{
		;[].forEach.call(document.body.querySelectorAll('ul[reverse]'),function(elem)
		{
			var $myLi = elem.children

			for (var i = 0; i < $myLi.length-1; i++) 
				elem.insertBefore($myElem[0], $myElem[$myElem.length-i])	
		})
	}


	function shuffle()
	{

		;[].forEach.call(document.body.querySelectorAll('ul[shuffle]'),function(elem)
		{
			var $liMy = elem.children

			for(var i = 0; i < $liMy.length; i++)
			{
				var $firstRandNumber = parseInt(Math.random()*$liMy.length)
				var $firstChild = elem.children[$firstRandNumber]

				var $secondRandNumber = parseInt(Math.random()*$liMy.length)
				var $secondChild = elem.children[$secondRandNumber]

				if($firstRandNumber != $secondRandNumber)

					var clone = $firstChild.cloneNode(true)
				elem.insertBefore(clone, $secondChild)
				elem.replaceChild($secondChild, $firstChild)

			}
		})		
	}

	var $rev = document.querySelector('#reverse')
	var $shuf = document.querySelector('#shuffle')

	$rev.addEventListener('click', reverse)
	$shuf.addEventListener('click', shuffle)
})