const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
  
let lastChecked;

function handleCheck(e) {
    // check if they had the shift key down
    // And check that they are checking it
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
        console.log("checkbox === lastChecked ? " + (checkbox === lastChecked));
        if (checkbox === this || checkbox === lastChecked) {
            inBetween = !inBetween;
        }

        if(inBetween) {
            checkbox.checked = true;
        }
        });
    }

    console.log(e);
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));