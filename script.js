//your JS code here. If required.
let output=document.getElementById("output");

let startPromise=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve([1,2,3,4]);
	},3000)
});
startPromise.then((arr)=>{
	return new Promise((resolve,reject)=>{
		let evenArr=arr.filter(x=>x%2==0);
		setTimeout(()=>{
			output.textContent=evenArr.toString();
			resolve(evenArr);
		},1000);
	});
})
.then((evenArr)=>{
	return new Promise((resolve,reject)=>{
		let double=evenArr.map(x=>x*2);
		setTimeout(()=>{
			output.textContent=double.toString();
			resolve(double);
		},2000)
	})
})
.catch((err)=>console.log(err))
.catch((err)=>console.log(err));