var setOperation = new Set();

function relativeComplementAtoB() {

	var listA = new Array();
	var listB = new Array();
	
	var elementA = document.getElementsByName("listA");
	var elementB = document.getElementsByName("listB");
	for (var i = 0; i < elementA.length; i++)
	{		
		if (elementA[i].checked)
		{
			listA.push(elementA[i]);
		}
	}

	for (var i = 0; i < elementB.length; i++)
	{
		if (elementB[i].checked)
		{
			listB.push(elementB[i]);
		}
	}
	
	var resultList = setOperation.relativeComplement(listA, listB);
	var commaOrPeriod = "";
	
	for(var i = 0; i < resultList.length; i++)
	{
		if(i == resultList.length - 1)
		{
			commaOrPeriod = ".";
		}
		else
		{
			commaOrPeriod = ", ";
		}
		
		document.getElementById('relativeComplementAtoB').innerHTML += resultList[i].value + commaOrPeriod;
	}
	
	if(resultList.length <= 0)
	{
		document.getElementById('relativeComplementAtoB').innerHTML = "There's nothing to be filtered.";
	}
}

function relativeComplementBtoA() {

	var listA = new Array();
	var listB = new Array();
	
	var elementA = document.getElementsByName("listA");
	var elementB = document.getElementsByName("listB");
	for (var i = 0; i < elementA.length; i++)
	{		
		if (elementA[i].checked)
		{
			listA.push(elementA[i]);
		}
	}

	for (var i = 0; i < elementB.length; i++)
	{
		if (elementB[i].checked)
		{
			listB.push(elementB[i]);
		}
	}
	
	var resultList = setOperation.relativeComplement(listB, listA);
	var commaOrPeriod = "";
	
	for(var i = 0; i < resultList.length; i++)
	{
		if(i == resultList.length - 1)
		{
			commaOrPeriod = ".";
		}
		else
		{
			commaOrPeriod = ", ";
		}
		
		document.getElementById('relativeComplementBtoA').innerHTML += resultList[i].value + commaOrPeriod;
	}
	
	if(resultList.length <= 0)
	{
		document.getElementById('relativeComplementBtoA').innerHTML = "There's nothing to be filtered.";
	}
}

function symmetricDifference() {
	var listA = new Array();
	var listB = new Array();
	
	var elementA = document.getElementsByName("listA");
	var elementB = document.getElementsByName("listB");
	for (var i = 0; i < elementA.length; i++)
	{		
		if (elementA[i].checked)
		{
			listA.push(elementA[i]);
		}
	}

	for (var i = 0; i < elementB.length; i++)
	{
		if (elementB[i].checked)
		{
			listB.push(elementB[i]);
		}
	}
	
	var resultList = setOperation.symmetricDifference(listA, listB);
	var commaOrPeriod = "";
	
	for(var i = 0; i < resultList.length; i++)
	{
		if(i == resultList.length - 1)
		{
			commaOrPeriod = ".";
		}
		else
		{
			commaOrPeriod = ", ";
		}
		
		document.getElementById('symmetricDifference').innerHTML += resultList[i].value + commaOrPeriod;
	}
	
	if(resultList.length <= 0)
	{
		document.getElementById('symmetricDifference').innerHTML = "There's nothing to be filtered.";
	}
}

function intersection() {
	var listA = new Array();
	var listB = new Array();
	
	var elementA = document.getElementsByName("listA");
	var elementB = document.getElementsByName("listB");
	for (var i = 0; i < elementA.length; i++)
	{		
		if (elementA[i].checked)
		{
			listA.push(elementA[i]);
		}
	}

	for (var i = 0; i < elementB.length; i++)
	{
		if (elementB[i].checked)
		{
			listB.push(elementB[i]);
		}
	}
	
	var resultList = setOperation.intersection(listA, listB);
	var commaOrPeriod = "";
	
	for(var i = 0; i < resultList.length; i++)
	{
		if(i == resultList.length - 1)
		{
			commaOrPeriod = ".";
		}
		else
		{
			commaOrPeriod = ", ";
		}
		
		document.getElementById('intersection').innerHTML += resultList[i].value + commaOrPeriod;
	}
	
	if(resultList.length <= 0)
	{
		document.getElementById('intersection').innerHTML = "There's nothing to be filtered.";
	}
}

function union() {
	var listA = new Array();
	var listB = new Array();
	
	var elementA = document.getElementsByName("listA");
	var elementB = document.getElementsByName("listB");
	for (var i = 0; i < elementA.length; i++)
	{		
		if (elementA[i].checked)
		{
			listA.push(elementA[i]);
		}
	}

	for (var i = 0; i < elementB.length; i++)
	{
		if (elementB[i].checked)
		{
			listB.push(elementB[i]);
		}
	}
	
	var resultList = setOperation.union(listA, listB);
	var commaOrPeriod = "";
	
	for(var i = 0; i < resultList.length; i++)
	{
		if(i == resultList.length - 1)
		{
			commaOrPeriod = ".";
		}
		else
		{
			commaOrPeriod = ", ";
		}
		
		document.getElementById('union').innerHTML += resultList[i].value + commaOrPeriod;
	}
	
	if(resultList.length <= 0)
	{
		document.getElementById('union').innerHTML = "There's nothing to be filtered.";
	}
}

function resetElements() {
	document.getElementById('relativeComplementAtoB').innerHTML = "";
	document.getElementById('relativeComplementBtoA').innerHTML = "";
	document.getElementById('symmetricDifference').innerHTML = "";
	document.getElementById('intersection').innerHTML = "";
	document.getElementById('union').innerHTML = "";
	
	var elementA = document.getElementsByName("listA");
	var elementB = document.getElementsByName("listB");
	for (var i = 0; i < elementA.length; i++)
	{		
		document.getElementsByName("listA")[i].checked = false;
	}

	for (var i = 0; i < elementB.length; i++)
	{
		document.getElementsByName("listB")[i].checked = false;
	}
}
		