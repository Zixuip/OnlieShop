<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@font-face {font-family: "iconfont";
	  src: url('~@/static/font/iconfont.eot?t=1593506823515'); /* IE9 */
	  src: url('~@/static/font/iconfont.eot?t=1593506823515#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAUEAAsAAAAACmgAAAS1AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqHfIY8ATYCJAMUCwwABCAFhG0HUhvSCMgekkRxgAJYFDgAgBHnP+VM358ZyVppEcBBYDnU1g4Am4oQADCUvCU+pqeF+5/TK7KLugrTAaECVv8llx/8lyIIuwlNwlRPrwAC/udY6uXzA8sPdC6VQRENcgJVtojy1n6+gUxkSlMQz6bT7wm+GgiAikT5yNjz9gGSEBB3IgA0f44UkPQoIBJwBEUsRxwpQHsgQWFvsccAdhs/T/+gtAIwSBzitQbPPDPg8Hf6/TLXu3WM5zr06nQA+OMADiAfIABaGmmYj4gVyMehftaPohkAFQoYWFWrcn4f+/vl7m4czoBEqhQEBFg1/zySIQr8gW0OCuB3UhiOMAcyMAjHQgYO4WWwlkUgaUeoAKKBhgBoL0RRuJHsBwMEhH8weEJZW6WQYCog/+BELcAff5tpo35NmSN/bNHsqH1V8MfP48XJFxUhn71Kkk69XK3bVNXsIDI5Nc1iB3n7uSJQCpqQ/cXn6Vcs10xXzZdBSwLvelKl895eQXfcKeKMy7jyyxYtjtq1IIszTjrmyAycYI48dCzquHfUxU8yLt7JOvxe0nlHZrGX9xpvX08+4Sr/2JN56dNM9WNX/IELKq0LskDoaqCZJNMCf7MNTLdrARYncZNj8mGn9aL96JHwk26LN+nQsdPWT+wnbeHvu1ye0kvvzvA3HzueznZQPzCtmwhO4+/EdNtY/ehFi/U4mRxm2wSPZ6TXO8rtHuFyrZV5w02aO9Hj2bmre5OWHqvuG/+AQB+kpjXPRhqa/EboxvpKkzKieN/pgNDA5oAUhYlurnvns2kSzHBtUoEkUGKscc24yqyjoVfnfi0toTCVDxYOKr/a5+XBPilM9kXuj/TJYZJv8P7cBqn41qf1GH1inLLnYU9rzq8/Be/9oMfU93BgSFxI4OTPXu7PbPs/2Kp9ntF7kX5tmPqRo6mA/yt95pMn8ia/eh9G+CJeRz6ONKjKXW9vHHA4PyblHT5yv6Vk1PHS/e82PX+WvmrZ/39tQq8RkDtpVYZdB1cH/vVn4GqtPaId3bJkLPUvGqvGYn/mTPv/Bnw8Pmb8PCDcnmUvdFwRHR1C5V7maKA7VHCvYC3tldHKfT5+iVs1npWjURqoMCKbmMSv8USg+88QNVysv4Od8pxvJwXVv1Y0AQD4LiXBgLTumQDXgStOiMzMS5OZsUF82aJSEu9ihfGOlKDDDzjMrKuw4IK0hGqvRh2hyhBBQYQDDAYkAIeCdKTA5oMEDeUgQ0ETqMjT63gNYZYiAhJ+AHJtI0AI9h4wBOIacAR7ghRYH0iI9B/ICM5BxUgKO6OGzHPUtqUkWmTg1D7O0VmZsrqVNmPvSLY90XCzDfwTNZq2G0sKi/3hC1LUqGKfZR25vLxl4swG+9iTXI88j3Fxgx3SW7XZrVawXVQ0M+qeatPYhzTa0ABBoAWCATQVfaA50MFQMLXeLaQD338HgkQbHgQaCSU/lE8gNNCEPT4qUag4A/JCoDKV7EryMnQgsWw59ZlAM/lohg/Uk+oInhRgoMXRmzkg6GihZnYBX4BtRbTVzKyCWvMifx0zb4yy4hklYsRJkEQy5GWz7cBW8eUrNK1QSQ9V5cnvAZlZK4Tqt7vskwIAAAAA') format('woff2'),
	  url('~@/static/font/iconfont.woff?t=1593506823515') format('woff'),
	  url('~@/static/font/iconfont.ttf?t=1593506823515') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	  url('~@/static/font/iconfont.svg?t=1593506823515#iconfont') format('svg'); /* iOS 4.1- */
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-shipin:before {
	  content: "\e6bc";
	}
	
	.icon-tupian:before {
	  content: "\e629";
	}
	
	.icon-shangpin:before {
	  content: "\e65a";
	}
	
	.icon-guanyuwomen:before {
	  content: "\e601";
	}
	/* 商品详情img样式 */
	.gomeImgLoad{
		width: 750rpx;
		height: auto;
	}
</style>
