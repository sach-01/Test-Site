menu_status = new Array();

function showHide(theid) {
	if (document.getElementById) {
		var switchId = document.getElementById(theid);
		if (menu_status[theid] != 'show') {
			switchId.className = 'show';
			menu_status[theid] = 'show';
		} else {
			switchId.className = 'hide';
			menu_status[theid] = 'hide';
		}
	}
}