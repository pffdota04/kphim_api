var fs = require("fs");

const http = require("https");

async function getdata(num, last) {
  let newurl =
    "https://api.themoviedb.org/3/movie/popular?api_key=04666c2ceaf6b0c4f5a62d06c2180577&language=vi&page=" +
    num.toString();
  http.get(newurl, function (response) {
    response.on("data", function (data) {
      console.log("\n --------------"+ num +"----------------- \n");
      if (num == 20) {
        return;
      }
      let finalData = "";
      finalData += data.toString();
      // console.log("..." + finalData);
      last.push(JSON.parse(finalData).results);
      save(last);
      getdata(num + 1, last);
    });
  });
}

let httpRs = new Object();
getdata(11, []);



// let rs = new Array();
// let rs_child = new Object();
// console.log("xx");
// a.map((e, i) => {
// rs_child = new Object();
// //   console.log(e[1]);
// //   console.log(e[2]);
// //   console.log(i)
//   rs_child["title_eng"] = e[1];
//   rs_child["title"] = e[2];
//   rs_child["img"] = e[3];
//   rs[i] = rs_child;
// });

function save(saveit) {
  fs.writeFile("hold.js", JSON.stringify(saveit), "utf8", function (err) {
    if (err) throw err;
    console.log("complete");
  });
}
