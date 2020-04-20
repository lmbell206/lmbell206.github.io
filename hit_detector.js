function hitCheck(a_x,a_y,a_size,b_x,b_y,b_size) {
	if (a_x < b_x + b_size && 
		b_x < a_x + a_size && 
		a_x < b_x + b_size && 
		b_x < a_x + a_size && 
		a_y < b_y + b_size && 
		a_y < b_y + b_size && 
		b_y < a_y + a_size && 
		b_y < a_y + a_size) {
		
		return ("True");
		
	}
}	