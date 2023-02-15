var express = require("express");

var usersRouter = require("./routes/users");
var registerRouter = require("./routes/register");
var loginRouter = require("./routes/login");
var editRouter = require("./routes/edit");
var writeRouter = require("./routes/write");
var diaryRouter = require("./routes/diary");

var app = express();

var request = require("request"); // 일기 내용 담는 변수

var result = "";

// // FLASK-NODEJS 연동
// app.post("/writetest", (req, res) => {
//   // console.log("text: ", req.body.text);

//   // REACT로부터 일기 내용 받아오기
//   let body = req.body;
//   const diarycontent = `여기 들어오고나서부터 하루하루가 지옥이다.. 내가 부족한 게 크지만, 강남인턴을 급하게 그만두고 나온게 정말 후회스럽다. 매일 아 그만두지않았더라면 하고 되뇌이는 복잡한 생각들이 날 더 고통스럽게 만든다. 잠도 새벽에 늦게자게되구.. ​ 강남인턴 사람들은 가족같이 잘 챙겨줬으며, 인턴언니는 내가 만난 사람중에 가장 재미있고 빠른 시간안에 친해진 사람이였다.그런데 난 그곳이 원하는 곳은 아니였다. 너무 소규모라 생각하여 급하게 더 큰 곳에 집어넣었고, 그렇게 면접에 붙어 일주일만에 인턴을 옮기게 됐다. ​ 면접을 붙어서 첫 출근을 기다리는 시간은 달콤했다 3년 내내 일만 했어서인지 평일 낮에 즐기는 자유시간이 너무 어색해서, 그냥 세상을 다 가진 것 같았다. 인턴을 7개월 내내 열망하고 있었기 때문이다 인턴 언니랑 술을 먹으며 마지막이라 미안하다고 했지만, 첫 출근이 기대됐다. ​ 이때까지만해도 난 이렇게 될 줄 몰랐다. ​ 뭐 어쩌겠나 되돌릴 수 없는걸이라고 마음을 다잡고싶은데 마음처럼 쉽게 되진 않는다.. ​ 퇴근 직후 앉아서 비빔국수먹는데 아빠의 일은어때? 하는 질문에 비빔국수 입에 문채로(....) 오열을 해버렸다 엄청 서럽게 울었다 첫 주 힘든거 내색도 안하고 괜찮은 척 했는데 갑자기 감정이 한번에 몰려왔다..ㅎㅎ ​ ​ 아빠가 밥은 먹었냐고 점심에 문자 보내시면 속으로는 '아니야. 아빠 나 일이 너무많고, 내가 업무에 따라가기가 벅차서 점심시간에 40분넘겨서 일했어. 여기 인턴분도 굉장히 우울해보여.'를 외쳤는데 문자로는 맛있는거 먹었다구 했다. ​ ​ 나는 엄청난 두께의 양의 인수인계를 이틀만에 몰아서 받았으며 실제로 내가 직접 연습하지 못했던 일들도 빽빽하다. 나는 첫주를 그렇게 하루를 제외한 모든 날을 지하철에서 울면서 집에왔다. ​ 내가 지금 너무 힘들고 미치겠는건 내가 원하는 일과 팀에 속해있지 않으며, 내가 이 인턴업무의 강도에 따라갈 역량을 가지고 있지 않으며, 회사 속 나뉘어진 인턴과 정직원들의 두껍고 큰 벽. 인턴나부랭이라는 말이 있듯이 정말 나는 나부랭이 그 자체다. 일은 겁나 시키는데, 나한테 관심은 없단 말이지..? ​ 나는 시청에서, 강남에서도 상사들의 챙김을 고맙게도 많이 받았었기에, 이런 분위기가 싫고 어색했다. ​ 또한 6시에 기상하며 8시에집에오는 살인적인스케쥴과 일을 따라가기 위해 밀려오는 매일의 스트레스.. ​ 내가 이 6개월을 끝나고 과연 어떤 성취감을 느낄것이며 추후에 내 스펙에 이 활동이 도움이될까? 의문이 들었다. ​ 난 마케터를 꿈꾸기 때문에 대외활동과 동아리도하며 sns도 운영해야하는 멀티플레이어 유망자인데, 그것들을 챙길 시간조차 없는 것도 너무 화났다. 이것도 정말 내 스펙에 관해서 중요한 것들인데? 원하지 않는 일때문에 내가 좋아하고, 원하는 일들을 하지 못한다는 논리가 성립이 되는걸까? ​ 아빠는 말없이 내얘기를 듣더니 너가 대기업 신입사원도아니고 절이 싫으면 중이 떠나야지! 하고 다시, 일주일만에 퇴사한 회사에 자존감 다 버리고 연락이라도 한 번 해보라고 했다. 신기하게도 아빠랑 면담을 하고나니 마음이 편안해졌다. ​ 근데도 그 뿐만이였다 내가 잠시괜찮은건 집에도착헤서 8시 ~10시반. 그 이후부터는 내일출근할생각에 고통스럽다. ​ 내가 너무 편히 살아온건 인정한다. 시청도 거의 독서실 알바 수준이라 매일 공부만 했고, 즐거웠다. 아 이런곳에서 맨날 일하고 싶다 생각했지 강남 인턴도 업무강도가 약했으며 재밌었다. 옥상에 올라가서 언니랑 수다떠는건 진짜 환상이었다. 근데 뭐가 그리 급했을까.... 왜 3개월 끝나고 다른곳에 지원할 생각은 안했는가..? 바보같다 그냥 내가 등신같아.. 강남인턴 실장님한테 취업사기 당했다고 거짓말이라도 치고 바짓 가랭이라도 잡아볼까 상상해봤는데, 음.. 그런 시선들을 견디기엔 또 자신이 없었다. ​ 나는 이 글을 월요일이시작될 답답한 마음에 10월 30일 일요일 새벽 2시에적다가 다시 월요일인 오늘 출근길에 이어서썼다 으악 충무로다..... 가기싫다 ​ ​ 한달이 지난 11월 28일에 다시글을써보겠다 사람이라는건 참으로 신기하다 적응이 되니까 바쁘지도 스트레스받지도 않지만 일이 끊임없이있는건 괴롭다 이제 눈물도 안나지만 진짜 가끔 개혼날때 너무 상처받는다 그치만 가볍게 넘기려고 한다 그리고 나도 업무를 못하는게사실이니까 ​ 다른것도하고싶다.....이걸 어떻게 5개월 더 하지? 빨리 자소서쓸래.. 제발 다른걸 더 채우고싶어 다른곳인턴가고싶다.`;

//   // FLASK로 일기 내용 보내기
//   const ModelResult = (callback) => {
//     const options = {
//       method: "POST",
//       uri: "http://127.0.0.1:4000/sendmodeltext",
//       qs: {
//         text: diarycontent,
//       },
//     };
//     request(options, function (err, res, body) {
//       callback(undefined, {
//         result: body,
//       });
//     });
//   };
//   console.log(result);
//   //FLASK로부터 변경 내용 받아서 REACT로 넘기기
//   ModelResult((err, { result } = {}) => {
//     if (err) {
//       console.log("error!!!!");
//       res.send({
//         message: "fail",
//         status: "fail",
//       });
//     }

//     let json = JSON.parse(result);
//     console.log(json);
//     res.send({
//       message: "from flask",
//       status: "success",
//       data: {
//         json,
//       },
//     });
//   });
// });

app.use("/users", usersRouter);
app.use("/members/new", registerRouter);
app.use("/members/login", loginRouter);
app.use("/members/edit", editRouter);
app.use("/members/test/write", writeRouter); //test 끼워넣기는 front팀과 일치시키기 위함
app.use("/members/diary", diaryRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
