function fibonacci(num) {
// your code here
	num=Number(num);
	let a=0,b=1,c=1;
	if(num==1)
		return 0;
	else if(num==2)
		return 1;
	else if(num==3)
		return 1
	else if(n>3){
		for(let i=4;i<=4;i++){
			c=a+b;
			a=b;
			b=c;
		}
		return c;
	}
}

module.exports = fibonacci;
