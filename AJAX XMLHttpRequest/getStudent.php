<?php
$xml = <<< XML
<?xml version="1.0" encoding="utf-8"?>
<student>
	<id>1</id>
	<name>DJ LIM</name>
	<major>SOFTWARE ENGINEERING</major>
	<class>SENIOR</class>
	<location>REXBURG</location>
	</student>
XML;

$xmlDoc = new DOMDocument();
$xmlDoc->loadXML($xml);

$name=$xmlDoc->getElementsByTagName('name');
if ($name->length==0) { 
   echo "no result";
} 
$id=$xmlDoc->getElementsByTagName('id');
$major=$xmlDoc->getElementsByTagName('major');
$class=$xmlDoc->getElementsByTagName('class');
$location=$xmlDoc->getElementsByTagName('location');

echo "<b>" . $name->nodeName . ":</b> ";
echo $name->nodeValue;
echo "<br>";

echo "<b>" . $id->nodeName . ":</b> ";
echo $id->nodeValue;
echo "<br>";

echo "<b>" . $major->nodeName . ":</b> ";
echo $major->nodeValue;
echo "<br>";

echo "<b>" . $class->nodeName . ":</b> ";
echo $class->nodeValue;
echo "<br>";

echo "<b>" . $location->nodeName . ":</b> ";
echo $location->nodeValue;
echo "<br>";

?>