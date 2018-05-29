

Page({
  data: {
  	rank:["30","21"],
  	base:""
  },
  onLoad: function(options) {
  	
  	this.salsDataRanking();
  },
  //销售排行
  salsDataRanking(){
  	let arr = ["15","67","27"]
  	let rank=this.data.rank
  	arr.forEach(item=>{
  		rank.push(item)
  	})
  	let MaxNum = rank.sort(this.numberSort()).reverse()[0]
  	//获取销售数据中最大值向上取整作为柱状图基数
  	if (MaxNum<=1000&&MaxNum>=100) {
  		this.setData({
  			rank:rank,
  			base:Math.ceil(MaxNum/100)*100
  		})
  	}else if(MaxNum<100){
  		this.setData({
  			rank:rank,
  			base:Math.ceil(MaxNum/10)*10
  		})
  	}else{
  		this.setData({
  			rank:rank,
  			base:Math.ceil(MaxNum/1000)*1000
  		})
  	}
  },
  numberSort(a,b){
  	return a - b
  }

})