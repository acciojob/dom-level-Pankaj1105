//your JS code here. If required.
//your JS code here. If required.
let level = document.querySelectorAll("ul>li")
level.addEventListner("click",()=>{
	for(let i=0;i<level.length;i++) {
		if(level[i].id=="level"){
			window.alert('the level of the element is: '+(i+1))
		
		 return;
		}
	}
})