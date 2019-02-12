//모듈을 로드함
var cheerio = require('cheerio');

//샘플 XML 데이타
var xml = "<books>" +
	"<book><title>사과의산</title><author>송중기</author></book>" +
	"<book><title>귤의노래</title><author>김수현</author></book>" +
	"<book><title>바나나의연덕</title><author>배용준</author></book>" +
	"</books>";

//cheerio를 통해 xml 데이터 읽음
$ = cheerio.load(xml);

//책의제목을 알림으로 표시
$("title").each(function(i,e){
	var title = $(e).text();
	console.log(title);
});


