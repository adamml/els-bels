function allHrefsAddTargetBlank(){
	Array.from(document.getElementsByTagName('a')).map(x => x.target = '_blank');
}

function onloadhandler(){
	allHrefsAddTargetBlank();
}