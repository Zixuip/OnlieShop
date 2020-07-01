// 日期时间格式化过滤器（2019-12-17 15:31）
export const dateFormat = (value)=>{
	var date = new Date(value);
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	if (month < 10) {
	  month = "0" + month;
	}
	if (day < 10) {
	  day = "0" + day;
	}
	return year + "-" + month + "-" + day + " " + hours + ":" + minutes;
}

// 日期格式化过滤器（2019-12-17）
export const dateFormat2 = (value)=>{
	var date = new Date(value);
	var year = date.getFullYear();
	var month = date.getMonth()+ 1;
	var day = date.getDate();
	if (month < 10) {
	  month = "0" + month;
	}
	if (day < 10) {
	  day = "0" + day;
	}
	return year + "-" + month + "-" + day;
}

export const priceFormat = (value)=>{
	return "￥" + value
}