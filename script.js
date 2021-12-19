// Check whether the avatar is touching the coin
function isConnecting(a, b){
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();
    return !(
        aRect.top + aRect.height < bRect.top || 
        aRect.top > bRect.top + bRect.height || 
        aRect.left + aRect.width < bRect.left || 
        aRect.left > bRect.left + bRect.width
    );
}

// Initial Method
const init = () => {
    const avatar = document.querySelector('#player');
    const coin = document.querySelector('#coin');
    // Moved the coin at start at random place
    moveCoin();
    // KeyUp event listener for moving the avatar
    // Down, Up, Right, Left
    window.addEventListener('keyup', function(e){
        if(e.key === 'ArrowDown' || e.key === 'Down'){
            moveVertical(avatar, 50);
        }
        else if(e.key === 'ArrowUp' || e.key === 'Up'){
            moveVertical(avatar, -50);
        }
        else if (e.key === 'ArrowRight' || e.key === 'Right') {
			moveHorizontal(avatar, 50);
            // Change the direction of avatar face
			avatar.style.transform = 'scale(1,1)';
		}
		else if (e.key === 'ArrowLeft' || e.key === 'Left') {
			moveHorizontal(avatar, -50);
			avatar.style.transform = 'scale(-1,1)';
		}
		if (isConnecting(avatar, coin)) moveCoin();
    });
}

// Move the avatar in vertical direction
const moveVertical = (element, amount) => {
	const currTop = extractPos(element.style.top);
	element.style.top = `${currTop + amount}px`;
};

// Move the avatar in horizontal direction
const moveHorizontal = (element, amount) => {
	const currLeft = extractPos(element.style.left);
	element.style.left = `${currLeft + amount}px`;
};

// return the postion by removing px from end
const extractPos = (pos) => {
	if (!pos) return 100;
	return parseInt(pos.slice(0, -2));
};

// move the coin at random position
const moveCoin = () => {
	const x = Math.floor(Math.random() * window.innerWidth);
	const y = Math.floor(Math.random() * window.innerHeight);
	coin.style.top = `${y}px`;
	coin.style.left = `${x}px`;
};

init();