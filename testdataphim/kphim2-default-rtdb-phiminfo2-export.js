
var fs = require("fs");

let a = 
[ 
  {
  "actor" : "Leonardo Dicaprio",
  "country" : "us",
  "createDay" : "2021-07-24",
  "description" : "Bộ phim dựa trên câu chuyện có thật về con tàu xấu số Titanic và một trong những mối tình nổi tiếng nhất lịch sử điện ảnh.",
  "director" : "James cmaerum",
  "id" : 0,
  "img" : "https://www.usna.edu/Users/cs/wcbrown/courses/F02SI204/projects/P01/HW2.gif",
  "length" : "3h30p",
  "level" : "P",
  "priceVip" : "10",
  "recommend" : 5,
  "status" : 1,
  "title" : "phim này là phim đầu tiên luôn á!",
  "title_origin" : "FISRT FLIM IN KPHIM",
  "trending" : 0,
  "type" : {
    "action" : "action",
    "drama" : "drama",
    "history" : "history",
    "movie" : "movie",
    "romance" : "romance"
  },
  "year" : "1998",
  "yttrailer" : "pHlSE9j5FGY"
}, {
  "Editday" : "2021-08-18",
  "actor" : " Tom Hardy, Charlize Theron, Nicholas Hoult",
  "country" : "us",
  "createDay" : "2021-07-20",
  "description" : "Trong một thế giới hậu tận thế khắc nghiệt, một người phụ nữ nổi dậy chống lại kẻ thống trị độc tài và tìm kiếm sự trợ giúp từ một nhóm nữ tù nhân, một kẻ sùng bái điên rồ và một kẻ lang bạt tên Max.",
  "director" : " George Miller",
  "id" : 1,
  "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY9MNe0-g2gcLa_hL2Rm_3xYrvLR1u1KUbkc_zPxothuUPbJP4MI0RAqHOzwhjaPgZORg&usqp=CAU",
  "length" : "2h00",
  "level" : "R",
  "priceVip" : "7",
  "status" : 1,
  "title" : "Max Điên: Con đường cuồng nộ",
  "title_origin" : "Mad Max: Fury Road",
  "trending" : 1,
  "type" : {
    "action" : "action",
    "crime" : "crime",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2015",
  "yttrailer" : "hEJnMQG9ev8"
}, {
  "Editday" : "2021-07-27",
  "actor" : "Dave Bautista, Ella Purnell, Ana de la Reguera",
  "backimg" : "https://i.imgur.com/k9o1aOW.gif",
  "country" : "us",
  "createDay" : "2021-07-24",
  "description" : "Sau một đợt bùng phát zombie ở Las Vegas, một nhóm lính đánh thuê thực hiện canh bạc cuối cùng, mạo hiểm vào khu vực cách ly để thực hiện vụ trộm lớn nhất từng được thực hiện.",
  "director" : "Zack Snyder",
  "id" : 2,
  "img" : "https://image.tmdb.org/t/p/w300/7HdoUIMktAEyyJU8oUsB4IEl4Gc.jpg",
  "length" : "2h28p",
  "level" : "R",
  "priceVip" : "10",
  "status" : 1,
  "title" : "Đội quân xác sống",
  "title_origin" : "Army of the dead",
  "trending" : 6,
  "type" : {
    "action" : "action",
    "horror" : "horror",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2018",
  "yttrailer" : "tI1JGPhYBS8"
}, {
  "Editday" : "2021-07-27",
  "actor" : "Không rõ",
  "country" : "ja",
  "createDay" : "2021-07-24",
  "description" : "Thức tỉnh trong khi toàn bộ nhân loại đã bị hóa đá. Thiên tài khoa học Senku và người bạn lực lưỡng Taiju sử dụng các kỹ năng của họ để xây dựng lại nền văn minh.",
  "director" : "Không rõ",
  "id" : 3,
  "img" : "https://vuianime.net/upload/images/dr-stone-thumbnail.jpg",
  "length" : "24 tập",
  "level" : "P",
  "priceVip" : "10",
  "status" : 1,
  "title" : "Tiến sĩ Stone",
  "title_origin" : "Dr Stone",
  "trending" : 5,
  "type" : {
    "anime" : "anime",
    "family" : "family",
    "series" : "series"
  },
  "year" : "2019",
  "yttrailer" : "y07k0W8fnRc"
}, {
  "actor" : "John David Washington, Robert Pattinson, Elizabeth Debicki",
  "country" : "us",
  "createDay" : "2021-07-22",
  "description" : "Chiến đấu vì sự sống còn của toàn thế giới, Nhân vật chính hành trình qua một thế giới nơi nhiệm vụ sẽ diễn ra trong một thứ gì đó ngoài thời gian thực.",
  "director" : " Christopher Nolan",
  "id" : 4,
  "img" : "https://upload.wikimedia.org/wikipedia/vi/1/18/Tenet_poster_VN.jpeg",
  "length" : "2h30m",
  "level" : "PG13",
  "priceVip" : "7",
  "recommend" : 7,
  "status" : 1,
  "title" : "Tenet",
  "title_origin" : "Tenet",
  "trending" : 3,
  "type" : {
    "action" : "action",
    "drama" : "drama",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2020",
  "yttrailer" : "AZGcmvrTX9M"
}, {
  "actor" : " Ryan Reynolds, Samuel L. Jackson, Salma Hayek",
  "country" : "us",
  "createDay" : "2021-07-15",
  "description" : "Người vệ sĩ Michael Bryce (Ryan Reynolds) tiếp tục tình bạn của mình với sát thủ Darius Kincaid (Samuel L Jackson) khi họ cố gắng cứu vợ của Darius là Sonia.",
  "director" : "Patrick Hughes",
  "id" : 5,
  "img" : "https://res.cloudinary.com/kphim/image/upload/v1631928664/poster/ezgif-6-4ce385753c02_ehxrjl.webp",
  "length" : "1h40",
  "level" : "R",
  "priceVip" : "7",
  "recommend" : 6,
  "status" : 1,
  "title" : "Vệ sĩ vợ sát thủ",
  "title_origin" : "The Hitmans Wifes Bodyguard",
  "type" : {
    "action" : "action",
    "comedy" : "comedy",
    "crime" : "crime",
    "movie" : "movie"
  },
  "year" : "2021",
  "yttrailer" : "xJF4jXNIEIo"
}, {
  "actor" : "Không rõ",
  "country" : "ja",
  "createDay" : "2021-07-14",
  "description" : "Dr. Stone mùa 2 đã trở lại, với sức mạnh của khoa học, Senku và Vương quốc Khoa học chuẩn bị cho trận chiến sắp tới.",
  "director" : "Không rõ",
  "id" : 6,
  "img" : "https://cdn-4.ohay.tv/imgs/8b6b095b361c4d55b326/728.jpg",
  "length" : "11 tập",
  "level" : "P",
  "priceVip" : 10,
  "status" : 1,
  "title" : "Tiến sĩ Stone phần 2",
  "title_origin" : "Dr Stone Season 2",
  "type" : {
    "anime" : "anime",
    "family" : "family",
    "series" : "series"
  },
  "year" : "2021",
  "yttrailer" : "O08KzyL0ghA"
}, {
  "actor" : "Không rõ",
  "backimg" : "https://i.imgur.com/6F4UO1g.gif",
  "country" : "ja",
  "createDay" : "2021-07-15",
  "description" : "Hai người xa lạ nhận ra mình được liên kết với nhau một cách kì lạ. Sự gắn kết giữa họ vượt qua không gian và thời gian và phải cứu lấy thị trấn trước khi một thiên thạch vào trái đất.",
  "director" : "Makoto Shinkai",
  "id" : 7,
  "img" : "https://i.pinimg.com/originals/b7/4b/0c/b74b0c006adfe2ab323e59e360cf2027.jpg",
  "length" : "1h46p",
  "level" : "P",
  "priceVip" : "6",
  "status" : 1,
  "title" : "Tên cậu là gì?",
  "title_origin" : "Your Name",
  "top" : 1,
  "trending" : 4,
  "type" : {
    "anime" : "anime",
    "movie" : "movie",
    "romance" : "romance",
    "scifi" : "scifi"
  },
  "year" : "2016",
  "yttrailer" : "a2GujJZfXpg"
}, {
  "actor" : "Elijah Wood, Ian McKellen, Orlando Bloom",
  "country" : "us",
  "createDay" : "2021-07-15",
  "description" : "Một người Hobbit nhu mì đến từ Shire và tám người bạn đồng hành đã lên đường phá hủy Chiếc nhẫn và cứu Trung địa khỏi Chúa tể Hắc ám Sauron.",
  "director" : " Peter Jackson",
  "id" : 8,
  "img" : "https://g.christianbook.com/g/slideshow/5/554223/main/554223_1_ftc_dp.jpg",
  "length" : "2h58p",
  "level" : "PG13",
  "priceVip" : "10",
  "recommend" : 2,
  "status" : 1,
  "title" : "Chúa nhẫn phần 1",
  "title_origin" : "The Lord of the Rings: The Fellowship of the Rings",
  "type" : {
    "action" : "action",
    "drama" : "drama",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2001",
  "yttrailer" : "V75dMMIW2B4"
}, {
  "Editday" : "2021-08-14",
  "actor" : "Vin Diesel, John Cena, Jordana Brewster,...",
  "backimg" : "https://i.imgur.com/C1qqDnM.gif",
  "country" : "us",
  "createDay" : "2021-07-15",
  "description" : "Dom và những người bạn phải đối mặt với một tên khủng bố quốc tế hóa ra lại là anh trai của Mia...",
  "director" : "Bicht Gumnery",
  "id" : 9,
  "img" : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTe34hEmfewbuZlfFSL-PKON8dF-XqluUkHTAX4DDBDbyhh3pZC",
  "length" : "2h23p",
  "level" : "PG13",
  "priceVip" : "10",
  "status" : 1,
  "title" : "Quá nhanh quá nguy hiểm 9",
  "title_origin" : "F9",
  "top" : 3,
  "type" : {
    "action" : "action",
    "crime" : "crime",
    "movie" : "movie"
  },
  "year" : "20021",
  "yttrailer" : "dQw4w9WgXcQ"
}, {
  "actor" : "Không rõ",
  "country" : "ja",
  "createDay" : "2021-07-15",
  "description" : "Sau gần 3 năm chờ đợi, các fan của Miss Kobayashi's Dragon Maid (Kobayashi-san Chi no Maid Dragon)  sẽ được gặp lại dàn nhân vật vô cùng đáng yêu như Kanna, Tooru,... cùng hàng loạt những tình huống hài hước cười ra nước mắt.",
  "director" : "Không rõ",
  "id" : 10,
  "img" : "https://image.lag.vn/upload/news/20/08/10/Kobayashi-san_Chi_no_Maid_Dragon-3_FTYV.jpg",
  "length" : "6 tập",
  "level" : "P",
  "priceVip" : "10",
  "status" : 1,
  "title" : "Cô Hầu Gái Rồng Của Kobayashi S2",
  "title_origin" : "Kobayashi's maid dragon S2",
  "trending" : 7,
  "type" : {
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "movie" : "movie"
  },
  "year" : 2021,
  "yttrailer" : "5I5JHsOu5m4"
}, {
  "actor" : "Emily Blunt, Millicent Simmonds, Cillian Murphy",
  "country" : "us",
  "createDay" : "2021-07-12",
  "description" : "Sau những biến cố tại quê nhà, gia đình Abbott giờ đây phải đối mặt với nỗi kinh hoàng của thế giới bên ngoài. Bị buộc phải dấn thân vào những điều chưa biết, họ nhận ra những sinh vật săn mồi bằng âm thanh không phải là mối đe dọa duy nhất rình rập bên ngoài con đường cát.",
  "director" : "John Krasinski",
  "id" : 11,
  "img" : "https://static.247phim.com/162300/conversions/60d564ce7055c_vug-435_627.jpg",
  "length" : "1h37m",
  "level" : "PG13",
  "priceVip" : "10",
  "recommend" : 9,
  "status" : 1,
  "title" : "Vùng đất câm lặng 2",
  "title_origin" : "A Quite Place 2",
  "type" : {
    "action" : "action",
    "horror" : "horror",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2020",
  "yttrailer" : "BpdDN9d9Jio"
}, {
  "actor" : "Will Smith",
  "country" : "us",
  "createDay" : "2021-07-17",
  "description" : "Nhiều năm sau khi một trận đại dịch giết chết hầu hết nhân loại và biến những người còn lại thành quái vật, người sống sót duy nhất ở thành phố New York đấu tranh để tìm cách chữa trị.",
  "director" : "Francis Lawrence",
  "id" : 12,
  "img" : "https://static.247phim.com/154770/conversions/5f71abe973aac_i-am-legend-d-435_627.jpg",
  "length" : "1h41p",
  "level" : "PG13",
  "priceVip" : "10",
  "status" : 1,
  "title" : "Tôi là huyền thoại",
  "title_origin" : "I Am Legend",
  "type" : {
    "action" : "action",
    "horror" : "horror",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2007",
  "yttrailer" : "dtKMEAXyPkg"
}, {
  "actor" : " Chris Pratt",
  "country" : "us",
  "createDay" : "2021-07-16",
  "description" : "Một người đàn ông được chuẩn bị để chiến đấu trong một cuộc chiến tương lai, nơi số phận của nhân loại phụ thuộc vào khả năng đối đầu với quá khứ của anh ta.",
  "director" : " Chris McKay",
  "id" : 13,
  "img" : "https://image.tmdb.org/t/p/w300/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
  "length" : "2h18m",
  "level" : "PG13",
  "priceVip" : "12",
  "status" : 1,
  "title" : "Cuộc chiến tương lai",
  "title_origin" : "The Tomorrow War",
  "trending" : 2,
  "type" : {
    "action" : "action",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2021",
  "yttrailer" : "QPistcpGB8o"
}, {
  "actor" : "Tom Holland",
  "country" : "us",
  "createDay" : "2021-07-15",
  "description" : "Rapunzel có mái tóc dài kỳ diệu đã dành toàn bộ cuộc đời mình trong một tòa tháp, nhưng giờ đây khi một tên trộm bỏ trốn tình cờ gặp cô, cô sắp khám phá thế giới lần đầu tiên và cô thực sự là ai.",
  "director" : "Không rõ",
  "id" : 14,
  "img" : "https://upload.wikimedia.org/wikipedia/vi/c/ca/Tangled_rapunzel_poster_20.jpg",
  "length" : "1h40m",
  "level" : "P",
  "priceVip" : "10",
  "status" : 1,
  "title" : "Người đẹp tóc mây",
  "title_origin" : "Tangleg",
  "type" : {
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "movie" : "movie"
  },
  "year" : "2010",
  "yttrailer" : "JYKpIr1lSG0"
}, {
  "actor" : "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
  "country" : "us",
  "createDay" : "2021-07-15",
  "description" : "Một trong những bộ phim hay nhất từng được sản xuất",
  "director" : " Christopher Nolan",
  "id" : 15,
  "img" : "https://res.cloudinary.com/kphim/image/upload/v1631928664/poster/ezgif-6-c3d80fc0ed7b_mapetb.webp",
  "length" : "2h49m",
  "level" : "PG13",
  "priceVip" : "9",
  "status" : 1,
  "title" : "Hố đen tử thần",
  "title_origin" : "Interstellar",
  "trending" : 8,
  "type" : {
    "action" : "action",
    "drama" : "drama",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2014",
  "yttrailer" : "zSWdZVtXT7E"
}, {
  "actor" : "James Franco, Jonah Hill, Seth Rogen",
  "country" : "us",
  "createDay" : "2021-07-19",
  "description" : "Sáu ngôi sao nổi tiếng của Hollywood đang mắc kẹt trong ngôi nhà của James Franco sau một loạt các sự kiện tàn khốc vừa phá hủy thành phố. Bên trong, cả nhóm không chỉ phải đối mặt với ngày tận thế, mà còn với chính họ. ",
  "director" : "Evan Goldberg, Seth Rogen",
  "id" : 16,
  "img" : "https://upload.wikimedia.org/wikipedia/en/3/36/This-is-the-End-Film-Poster.jpg",
  "length" : "1h59m",
  "level" : "R",
  "priceVip" : "10",
  "recommend" : 1,
  "status" : 1,
  "title" : "Sống Nốt Ngày Cuối",
  "title_origin" : "This is the end",
  "type" : {
    "comedy" : "comedy",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2013",
  "yttrailer" : "kliQSsD_npo"
}, {
  "actor" : "Không rõ",
  "country" : "ja",
  "createDay" : "2021-07-18",
  "description" : "Trong thời gian gia đình chuyển đến vùng ngoại ô, một cô bé 10 tuổi vô tình vào một thế giới được cai trị bởi các vị thần, phù thủy và linh hồn, và nơi con người bị biến đổi thành quái thú.",
  "director" : "Hayao Miyazaki",
  "id" : 17,
  "img" : "https://kenh14cdn.com/thumb_w/660/2018/6/11/r1-1528687472132578993120.jpg",
  "length" : "2h05m",
  "level" : "PG",
  "priceVip" : "10",
  "status" : 1,
  "title" : "Spirited Away",
  "title_origin" : "Spirited Away",
  "type" : {
    "anime" : "anime",
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2001",
  "yttrailer" : "ByXuk9QqQkk"
}, {
  "actor" : "Tom Hank",
  "country" : "us",
  "createDay" : "2021-07-14",
  "description" : "Theo sau Cuộc đổ bộ Normandy, một nhóm binh sĩ Hoa Kỳ đi vào sâu chiến tuyến của kẻ thù để tìm và giải cứu một lính dù khi tất cả anh em của anh ta đã thiệt mạng trong chiến đấu. Một bộ phim xuất sắc về chiến tranh đã dành 5 giải Oscar.",
  "director" : " Steven Spielberg",
  "id" : 18,
  "img" : "https://res.cloudinary.com/kphim/image/upload/v1631928663/poster/ezgif-6-52273e5c2291_gnshji.webp",
  "length" : "2h49m",
  "level" : "R",
  "priceVip" : "3",
  "status" : 1,
  "title" : "Giải cứu binh nhì Ryan",
  "title_origin" : "Saving Private Ryan",
  "type" : {
    "action" : "action",
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "1998",
  "yttrailer" : "OqSg7WO4tT4"
}, {
  "actor" : "Fionn Whitehead, Barry Keoghan, Mark Rylance",
  "country" : "wo",
  "createDay" : "2021-07-20",
  "description" : "Hàng trăm ngàn lính Đồng minh từ nhiều quốc gia bị Quân đội Đức bao vây và không còn đường lui khi bị dồn vào bờ biển. Đứng trước cái chết, những người lính đã được cứu nhờ cuộc sơ tán với sự giúp đỡ của những ngư dân. Dẫn đến một bước ngoặt lớn trong thế chiến thứ hai.",
  "director" : "Christopher Nolan",
  "id" : 19,
  "img" : "https://upload.wikimedia.org/wikipedia/vi/thumb/7/71/Cu%E1%BB%99c_di_t%E1%BA%A3n_Dunkirk_poster.jpg/220px-Cu%E1%BB%99c_di_t%E1%BA%A3n_Dunkirk_poster.jpg",
  "length" : "1h46m",
  "level" : "PG13",
  "priceVip" : "10",
  "status" : 1,
  "title" : "Cuộc giải cứu Dunkirk",
  "title_origin" : "Dunkirk",
  "type" : {
    "action" : "action",
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2017",
  "yttrailer" : "F-eMt3SrfFU"
}, {
  "actor" : "Scarlett Johansson, Florence Pugh, David Harbour",
  "country" : "us",
  "description" : "Natasha Romanoff phải đối mặt với những phần đen tối trong hồ sơ của mình khi một âm mưu nguy hiểm liên quan đến quá khứ của cô nảy sinh.",
  "director" : "Cate Shortland",
  "id" : 20,
  "img" : "https://res.cloudinary.com/kphim/image/upload/v1631928663/poster/ezgif-6-a6024a5a2ee8_rhtfnr.webp",
  "length" : "2h14m",
  "level" : "PG13",
  "priceVip" : "10",
  "recommend" : 8,
  "status" : 1,
  "title" : "Black Window",
  "title_origin" : "Black Window",
  "trending" : 9,
  "type" : {
    "action" : "action",
    "movie" : "movie"
  },
  "year" : "2021",
  "yttrailer" : "ybji16u608U"
}, {
  "actor" : "Joaquin Phoenix, Robert De Niro",
  "country" : "us",
  "createDay" : "2021-07-20",
  "description" : "Tại thành phố Gotham, diễn viên hài Arthur Fleck bị rối loạn tâm thần bị xã hội coi thường và ngược đãi. Sau đó anh ta dấn thân vào vòng xoáy đi xuống của cuộc cách mạng và tội ác đẫm máu. Con đường này đưa anh ta đối mặt với bản ngã thay thế của mình: Joker.",
  "director" : " Todd Phillips",
  "id" : 21,
  "img" : "https://genk.mediacdn.vn/2019/10/28/photo-3-157223428377635797016.jpg",
  "length" : "2h02m",
  "level" : "R",
  "priceVip" : "10",
  "status" : 1,
  "title" : "JOKER",
  "title_origin" : "JOKER",
  "type" : {
    "action" : "action",
    "crime" : "crime",
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2019",
  "yttrailer" : "zAGVQLHvwOY"
}, {
  "actor" : "Christian Bale, Heath Ledger",
  "country" : "us",
  "createDay" : "2021-07-22",
  "description" : "Mối đe dọa mang tên Joker đang tàn phá và gây hỗn loạn lên người dân Gotham, Batman phải chấp nhận một trong những bài kiểm tra tâm lý và thể chất lớn nhất về khả năng chống lại sự bất công.",
  "director" : " Christopher Nolan",
  "id" : 22,
  "img" : "https://i.imgur.com/iB7uhyX.jpg",
  "length" : "2h32m",
  "level" : "PG13",
  "priceVip" : "10",
  "recommend" : 3,
  "status" : 1,
  "title" : "Hiệp sĩ bóng đêm",
  "title_origin" : "The Dark Kight",
  "type" : {
    "horror" : "horror",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : 2008,
  "yttrailer" : "EXeTwQWrcwY"
}, {
  "actor" : "just me",
  "country" : "us",
  "createDay" : "2021-07-24",
  "description" : "phim được thêm bằng client admin, không phải trực tiếp trên database. TESTTT",
  "director" : "It's me",
  "id" : 23,
  "img" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Felis_silvestris_silvestris_Luc_Viatour.jpg/310px-Felis_silvestris_silvestris_Luc_Viatour.jpg",
  "length" : "3 tập",
  "level" : "PG16",
  "priceVip" : "10",
  "recommend" : 4,
  "status" : 1,
  "title" : "Thêm vào rồi",
  "title_origin" : "First add from admin page",
  "type" : {
    "scifi" : "scifi",
    "series" : "series"
  },
  "year" : "2021",
  "yttrailer" : "dQw4w9WgXcQ"
}, {
  "Editday" : "2021-08-17",
  "actor" : "Robert Downey, Jr.Chris Evans, Mark Ruffalo, Chris Hemsworth, Chadwick Boseman, Benedict Cumberbatch, Tom Holland",
  "backimg" : "https://i.imgur.com/awkIpBS.gif",
  "country" : "us",
  "createDay" : "2021-07-20",
  "description" : "Sau những sự kiện tàn khốc của Avengers: Infinity War (2018), vũ trụ đang dần tàn lụi. Với sự giúp đỡ của các đồng minh còn lại, các Avengers tập hợp một lần nữa để đảo ngược hành động của Thanos và khôi phục lại sự cân bằng cho vũ trụ. Trận chiến cuối cùng của các siêu anh hùng trước thế lực mạnh mẽ của Thanos.",
  "director" : "Anthony Russo, Joe Russo",
  "id" : 24,
  "img" : "https://res.cloudinary.com/kphim/image/upload/v1631928664/poster/ezgif-6-d810a3d8c93f_uvfjmt.webp",
  "length" : "3h03p",
  "level" : "PG13",
  "priceVip" : "3",
  "status" : 1,
  "title" : "Avenger: Hồi kết",
  "title_origin" : "Avenger: End game",
  "top" : 4,
  "type" : {
    "action" : "action",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2019",
  "yttrailer" : "TcMBFSGVi1c"
}, {
  "Editday" : "2021-08-17",
  "actor" : "Không rõ",
  "country" : "us",
  "createDay" : "2021-08-17",
  "description" : "Một bộ sưu tập các bộ phim ngắn hoạt hình trải dài nhiều thể loại khác nhau bao gồm khoa học viễn tưởng, giả tưởng, kinh dị và hài.",
  "director" : "Tim Miller (Creator)",
  "id" : 25,
  "img" : "https://i.imgur.com/SQVO0ah.jpg",
  "length" : "8 tập",
  "level" : "R",
  "priceVip" : "12",
  "status" : 1,
  "title" : "Love, Death and Robots 2",
  "title_origin" : "Love, Death and Robots 2",
  "type" : {
    "anime" : "anime",
    "comedy" : "comedy",
    "drama" : "drama",
    "horror" : "horror",
    "scifi" : "scifi",
    "series" : "series"
  },
  "year" : "2021",
  "yttrailer" : "Gj2iCJkp6Ko"
}, {
  "actor" : "Russell Crowe, Ed Harris, Jennifer Connelly",
  "country" : "us",
  "description" : "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
  "director" : "Ron Howard",
  "id" : 26,
  "img" : "https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  "language" : "English",
  "length" : "135 min",
  "level" : "PG-13",
  "title" : "A Beautiful Mind",
  "title_origin" : "A Beautiful Mind",
  "type" : {
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2001"
}, {
  "actor" : "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
  "country" : "us",
  "description" : "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
  "director" : "Lana Wachowski, Lilly Wachowski",
  "id" : 27,
  "img" : "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  "language" : "English",
  "length" : "136 min",
  "level" : "R",
  "title" : "Ma trận",
  "title_origin" : "The Matrix",
  "type" : {
    "action" : "action",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "1999"
}, {
  "actor" : "Tom Hanks, Helen Hunt, Paul Sanchez",
  "country" : "us",
  "description" : "A FedEx executive undergoes a physical and emotional transformation after crash landing on a deserted island.",
  "director" : "Robert Zemeckis",
  "id" : 28,
  "img" : "https://m.media-amazon.com/images/M/MV5BN2Y5ZTU4YjctMDRmMC00MTg4LWE1M2MtMjk4MzVmOTE4YjkzXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_SX300.jpg",
  "language" : "English, Russian",
  "length" : "143 min",
  "level" : "PG-13",
  "title" : "Sinh tồn trên hoang đảo",
  "title_origin" : "Cast Away",
  "type" : {
    "adventure" : "adventure",
    "drama" : "drama",
    "romance" : "romance"
  },
  "year" : "2000"
}, {
  "actor" : "Dakota Fanning, Teri Hatcher, John Hodgman",
  "country" : "us",
  "description" : "An adventurous 11-year-old girl finds another world that is a strangely idealized version of her frustrating home, but it has sinister secrets.",
  "director" : "Henry Selick",
  "id" : 29,
  "img" : "https://m.media-amazon.com/images/M/MV5BMzQxNjM5NzkxNV5BMl5BanBnXkFtZTcwMzg5NDMwMg@@._V1_SX300.jpg",
  "language" : "English, Russian",
  "length" : "100 min",
  "level" : "PG",
  "title" : "Coraline",
  "title_origin" : "Coraline",
  "type" : {
    "anime" : "anime",
    "drama" : "drama",
    "family" : "family"
  },
  "year" : "2009"
}, {
  "actor" : "Kang-ho Song, Sun-kyun Lee, Yeo-jeong Cho",
  "country" : "ko",
  "description" : "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
  "director" : "Bong Joon Ho",
  "id" : 30,
  "img" : "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  "language" : "Korean, English",
  "length" : "132 min",
  "level" : "R",
  "title" : "Kí sinh trùng",
  "title_origin" : "Parasite",
  "type" : {
    "comedy" : "comedy",
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2019"
}, {
  "actor" : "Shameik Moore, Jake Johnson, Hailee Steinfeld",
  "country" : "us",
  "description" : "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
  "director" : "Bob Persichetti, Peter Ramsey, Rodney Rothman",
  "id" : 31,
  "img" : "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg",
  "language" : "English, Spanish",
  "length" : "117 min",
  "level" : "PG",
  "title" : "Spider-Man: Đi vào vũ trụ nhện",
  "title_origin" : "Spider-Man: Into the Spider-Verse",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "anime" : "anime",
    "movie" : "movie"
  },
  "year" : "2018"
}, {
  "actor" : "Trúc Anh, Tran Nghia, Tran Phong",
  "country" : "vi",
  "description" : "A movie tells the one sided love story of young man - Ngan for his girlfriend from childhood - Halan",
  "director" : "Victor Vu",
  "id" : 32,
  "img" : "https://m.media-amazon.com/images/M/MV5BMDlmYThhNWQtODcxZC00MjEwLTg1ZjgtODQyNDk0MmViNDRkXkEyXkFqcGdeQXVyOTIxNDQ1MTQ@._V1_SX300.jpg",
  "language" : "Vietnamese",
  "length" : "117 min",
  "level" : "N/A",
  "title" : "Mat Biec",
  "title_origin" : "Dream eye",
  "type" : {
    "drama" : "drama",
    "movie" : "movie",
    "romance" : "romance"
  },
  "year" : "2019"
}, {
  "actor" : "James Franco, Jonah Hill, Seth Rogen",
  "country" : "us",
  "description" : "Six Los Angeles celebrities are stuck in James Franco's house after a series of devastating events just destroyed the city. Inside, the group not only have to face the apocalypse, but themselves.",
  "director" : "Evan Goldberg, Seth Rogen",
  "id" : 33,
  "img" : "https://m.media-amazon.com/images/M/MV5BMTQxODE3NjM1Ml5BMl5BanBnXkFtZTcwMzkzNjc4OA@@._V1_SX300.jpg",
  "language" : "English, Spanish",
  "length" : "107 min",
  "level" : "R",
  "title" : "This Is the End",
  "title_origin" : "This Is the End",
  "type" : {
    "comedy" : "comedy",
    "movie" : "movie"
  },
  "year" : "2013"
}, {
  "actor" : "Jack Nicholson, Shelley Duvall, Danny Lloyd",
  "country" : "us",
  "description" : "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
  "director" : "Stanley Kubrick",
  "id" : 34,
  "img" : "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  "language" : "English",
  "length" : "146 min",
  "level" : "R",
  "title" : "The Shining",
  "title_origin" : "The Shining",
  "type" : {
    "drama" : "drama",
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "1980"
}, {
  "actor" : "Hugo Weaving, Natalie Portman, Rupert Graves",
  "country" : "us",
  "description" : "In a future British tyranny, a shadowy freedom fighter, known only by the alias of \"V\", descriptions to overthrow it with the help of a young woman.",
  "director" : "James McTeigue",
  "id" : 35,
  "img" : "https://m.media-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_SX300.jpg",
  "language" : "English",
  "length" : "132 min",
  "level" : "R",
  "title" : "V for Vendetta",
  "title_origin" : "V for Vendetta",
  "type" : {
    "action" : "action",
    "drama" : "drama",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2005"
}, {
  "actor" : "Melissa George, Joshua McIvor, Jack Taylor",
  "country" : "uk",
  "description" : "Yacht passengers encounter mysterious weather conditions that force them to jump onto another ship, only to have the odd havoc increase.",
  "director" : "Christopher Smith",
  "id" : 36,
  "img" : "https://m.media-amazon.com/images/M/MV5BY2VlODI5ZmMtZDExYS00OWI4LWJiMWItZWZkZWRkNzlmZWI2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  "language" : "English",
  "length" : "99 min",
  "level" : "R",
  "title" : "Triangle",
  "title_origin" : "Triangle",
  "type" : {
    "horror" : "horror",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2009"
}, {
  "actor" : "Gong Yoo, Yu-mi Jung, Ma Dong-seok",
  "country" : "ko",
  "description" : "While a zombie virus breaks out in South Korea, passengers struggle to survive on the train from Seoul to Busan.",
  "director" : "Sang-ho Yeon",
  "id" : 37,
  "img" : "https://m.media-amazon.com/images/M/MV5BMTkwOTQ4OTg0OV5BMl5BanBnXkFtZTgwMzQyOTM0OTE@._V1_SX300.jpg",
  "language" : "Korean, Hawaiian",
  "length" : "118 min",
  "level" : "Not level",
  "title" : "Train to Busan",
  "title_origin" : "Train to Busan",
  "type" : {
    "action" : "action",
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2016"
}, {
  "actor" : "Gô Ayano, Edward Bosco, Amber Lee Connors",
  "country" : "ja",
  "description" : "Truth and illusion blurs when a homeless amnesiac awakens from an experimental medical procedure with the ability to see people's innermost traumas.",
  "director" : "Takashi Shimizu",
  "id" : 38,
  "img" : "https://m.media-amazon.com/images/M/MV5BN2RkY2ExOGMtM2RmMi00YWVjLTliZDAtM2M1MDI5YzdiNzI5XkEyXkFqcGdeQXVyNjE4OTY3NTg@._V1_SX300.jpg",
  "language" : "Japanese",
  "length" : "115 min",
  "level" : "TV-MA",
  "title" : "Bản ngã",
  "title_origin" : "Homunculus",
  "type" : {
    "drama" : "drama",
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "Stephen Chow, Wah Yuen, Qiu Yuen",
  "country" : "ch",
  "description" : "In Shanghai, China in the 1940s, a wannabe gangster aspires to join the notorious \"Axe Gang\" while residents of a housing complex exhibit extraordinary powers in defending their turf.",
  "director" : "Stephen Chow",
  "id" : 39,
  "img" : "https://m.media-amazon.com/images/M/MV5BMjZiOTNlMzYtZWYwZS00YWJjLTk5NDgtODkwNjRhMDI0MjhjXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_SX300.jpg",
  "language" : "Trung Quoc",
  "length" : "99 min",
  "level" : "R",
  "title" : "Tuyệt đỉnh kung fu",
  "title_origin" : "Kung fu",
  "type" : {
    "action" : "action",
    "comedy" : "comedy",
    "movie" : "movie"
  },
  "year" : "2004"
}, {
  "actor" : "Stephen Chow, Wei Zhao, Yat-Fei Wong",
  "country" : "ch",
  "description" : "A young Shaolin follower reunites with his discouraged brothers to form a soccer team using their martial art skills to their advantage.",
  "director" : "Stephen Chow",
  "id" : 40,
  "img" : "https://m.media-amazon.com/images/M/MV5BMjA1NTAwNTcyN15BMl5BanBnXkFtZTYwNjYxNzk5._V1_SX300.jpg",
  "language" : "Trung quoc",
  "length" : "87 min",
  "level" : "PG",
  "title" : "Doi bong tieu lam",
  "title_origin" : "Doi bong tieu lam",
  "type" : {
    "action" : "action",
    "comedy" : "family",
    "movie" : "movie"
  },
  "year" : "2001"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
  "country" : "us",
  "description" : "Guy - Nhân viên giao dịch ngân hàng, phát hiện anh ấy thực chất là người chơi nền trong trò chơi điện tử thế giới mở. Guy quyết định trở thành người anh hùng và viết lại câu chuyện của chính mình. Giờ đây, trong một thế giới không còn giới hạn, anh ấy quyết định trở thành người giải cứu thế giới, theo cách của chính mình.",
  "director" : "updating...",
  "id" : 41,
  "img" : "https://image.tmdb.org/t/p/w300/kvTTnQ8C4RF0bZUAoYPD913NQx4.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Free Guy",
  "title_origin" : "Free Guy",
  "top" : 2,
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "comedy" : "comedy",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/aO9Nnv9GdwiPdkNO79TISlQ5bbG.jpg",
  "country" : "us",
  "description" : "Snake Eyes: G.I. Joe Origins theo chân Snake Eyes - một chiến binh cô độc, ngoan cường bất ngờ được kết nạp vào gia tộc Arashikage sau khi cứu mạng người thừa kế của họ. Khi đến Nhật Bản, Arashikage dạy Snake Eyes những chiêu thức cơ bản của một chiến binh ninja đồng thời mang tới cho anh một mái ấm. Tuy nhiên, khi những bí mật từ quá khứ của Snake Eyes được bật mí, anh sẽ phải đối mặt với những thử thách lớn nhất trong cuộc đời.",
  "director" : "updating...",
  "id" : 42,
  "img" : "https://image.tmdb.org/t/p/w300/uIXF0sQGXOxQhbaEaKOi2VYlIL0.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Biệt Đội G.I. Joe: Xà Nhãn Báo Thù",
  "title_origin" : "Snake Eyes: G.I. Joe Origins",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/owraiceOKtSOa3t8sp3wA9K2Ox6.jpg",
  "country" : "us",
  "description" : "Mười năm trước, Slade Wilson - hay còn gọi là siêu sát thủ được mệnh danh là Deathstroke - đã mắc phải một sai lầm bi thảm và vợ và con trai của hắn đã phải trả một cái giá khủng khiếp. Giờ đây, một thập kỷ sau, gia đình Wilson một lần nữa bị đe dọa bởi Jackal giết người và những kẻ khủng bố của H.IV.E. Deathstroke có thể chuộc lại tội lỗi trong quá khứ hay gia đình anh ta sẽ phải trả giá cuối cùng?",
  "director" : "updating...",
  "id" : 43,
  "img" : "https://image.tmdb.org/t/p/w300/vFIHbiy55smzi50RmF8LQjmpGcx.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Siêu Sát Thủ Và Rồng",
  "title_origin" : "Deathstroke: Knights & Dragons - The Movie",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "anime" : "anime",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2020"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/umAoDwLZMBrYeCDfbJYFRMuXWAr.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 44,
  "img" : "https://image.tmdb.org/t/p/w300/6Wm7P6y22UZA40QuPYHyWyJ6leI.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Vũ Trụ Tội Lỗi",
  "title_origin" : "Cosmic Sin",
  "type" : {
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/t9nyF3r0WAlJ7Kr6xcRYI4jr9jm.jpg",
  "country" : "us",
  "description" : "Siêu bom tấn #VENOM: LET THERE BE CARNAGE vừa bất ngờ tung đoạn trailer mãn nhãn, hứa hẹn trận chiến khốc liệt nhất giữa Venom và kẻ thù truyền kiếp, Carnage. Phim sẽ khởi chiếu DUY NHẤT TẠI RẠP vào ngày 24.09.2021 sắp tới. Cùng đón chờ!!",
  "director" : "updating...",
  "id" : 45,
  "img" : "https://image.tmdb.org/t/p/w300/489LD1LL2zQxFLbU6o5oslBhvwQ.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Venom: Đối Mặt Tử Thù",
  "title_origin" : "Venom: Let There Be Carnage",
  "type" : {
    "action" : "action",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/vkIJ2QgcKMJRvi6pBW4Tr2kgLdy.jpg",
  "country" : "fr",
  "description" : "",
  "director" : "updating...",
  "id" : 46,
  "img" : "https://image.tmdb.org/t/p/w300/r2NnRp4mi4G3e0x9zINQIcnGNd8.jpg",
  "language" : "fr",
  "length" : "updating...",
  "title" : "BAC Nord",
  "title_origin" : "BAC Nord",
  "type" : {
    "crime" : "crime",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/dIibeeq4QMay5bTJ2vjr72IFFRo.jpg",
  "country" : "ru",
  "description" : "Hòa bình đã được thiết lập tại Belogorie sau khi cái ác bị đánh bại và Ivan đang tận hưởng sự nổi tiếng mà anh xứng đáng. Không chỉ có được sự tín nhiệm từ gia đình, bạn bè và những điều mới lạ từ thế giới hiện đại đã mang tới cho anh một cuộc sống thoải mái, Ivan còn may mắn sở hữu thanh gươm phép thuật giúp việc di chuyển giữa hai thế giới trở nên thuận tiện hơn. Song, sự trỗi dậy của một ác quỷ cổ đại đã đe dọa thế giới ma thuật, Ivan quyết định hợp tác với những người bạn cũ và đối thủ của mình để bắt đầu cuộc hành trình dài tới vùng không gian mới, nhằm tìm cách đánh bạn kẻ thù cũng như trả lại hòa bình cho Belogorie.",
  "director" : "updating...",
  "id" : 47,
  "img" : "https://image.tmdb.org/t/p/w300/21dFNftKvX9a3bbnQjAMIzXLPKS.jpg",
  "language" : "ru",
  "length" : "updating...",
  "title" : "Chiến Binh Cuối Cùng: Cội Nguồn Của Quỷ",
  "title_origin" : "Последний богатырь: Корень зла",
  "type" : {
    "adventure" : "adventure",
    "comedy" : "comedy",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/5PQhNs4M3RxIqaNAdBI6mXlXyYh.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 48,
  "img" : "https://image.tmdb.org/t/p/w300/6WcJ4cV2Y3gnTYp5zHu968TYmTJ.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Dragon Fury",
  "title_origin" : "Dragon Fury",
  "type" : {
    "adventure" : "adventure",
    "fantasy" : "fantasy",
    "horror" : "horror",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/iDLtDgxLiYsarfdQ4msUhUqoNPp.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 49,
  "img" : "https://image.tmdb.org/t/p/w300/ApwmbrMlsuOay5rXQA4Kbz7qJAl.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Solitary",
  "title_origin" : "Solitary",
  "type" : {
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
  "country" : "us",
  "description" : "Quái Vật Venom là một kẻ thù nguy hiểm và nặng ký của Người nhện trong loạt series của Marvel. Chàng phóng viên Eddie Brock (do Tom Hardy thủ vai) bí mật theo dõi âm mưu xấu xa của một tổ chức và đã không may mắn khi nhiễm phải loại cộng sinh trùng ngoài hành tinh (Symbiote) và từ đó đã không còn làm chủ bản thân về thể chất lẫn tinh thần. Điều này đã dần biến anh thành quái vật đen tối và nguy hiểm nhất chống lại người Nhện - Venom ...",
  "director" : "updating...",
  "id" : 50,
  "img" : "https://image.tmdb.org/t/p/w300/bURIWlkMbzT8RdpemzCmQECo2Uh.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Venom",
  "title_origin" : "Venom",
  "type" : {
    "action" : "action",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2018"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/cinER0ESG0eJ49kXlExM0MEWGxW.jpg",
  "country" : "us",
  "description" : "Phim \"Shang-Chi và Huyền Thoại Thập Luân\" của Marvel Studios có sự tham gia của Simu Liu  (Lưu Tư Mộ) trong vai Shang-Chi (Thượng Khí), người phải đối mặt với quá khứ ngỡ đã quên khi bị lôi kéo vào mạng lưới của tổ chức bí ẩn Thập Hoàn. Phim còn có sự tham gia của Lương Triều Vỹ trong vai Wenwu (Văn Vũ), Awkwafina trong vai Katy, bạn của Shang-Chi và Dương Tử Quỳnh trong vai Jiang Nan, cùng với Fala Chen (Trần Pháp Lạp), Meng'er Zhang (Trương Mộng Nhi), Florian Munteanu và Ronny Chieng (Tiền Tính Y).",
  "director" : "updating...",
  "id" : 51,
  "img" : "https://image.tmdb.org/t/p/w300/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Shang-Chi và Huyền Thoại Thập Luân",
  "title_origin" : "Shang-Chi and the Legend of the Ten Rings",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
  "country" : "us",
  "description" : "Chính phủ gửi những siêu tội phạm nguy hiểm nhất trên thế giới - Bloodsport, Peacemaker, King Shark, Harley Quinn và những người khác - đến hòn đảo Corto Maltese xa xôi, đầy kẻ thù. Được trang bị vũ khí công nghệ cao, họ băng qua khu rừng rậm nguy hiểm trong một nhiệm vụ tìm kiếm và tiêu diệt, chỉ có Đại tá Rick Flag trên mặt đất để bắt họ hành xử.",
  "director" : "updating...",
  "id" : 52,
  "img" : "https://image.tmdb.org/t/p/w300/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Suicide Squad: Điệp Vụ Cảm Tử",
  "title_origin" : "The Suicide Squad",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "comedy" : "comedy",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/7WJjFviFBffEJvkAms4uWwbcVUk.jpg",
  "country" : "us",
  "description" : "Nội dung phim kể về một cặp đôi đi thám hiểm cùng nhau - Frank và Lily. Một người là thuyền trưởng người Mỹ và một người là nhà thám hiểm Anh quyết tâm hành trình vào rừng rậm Amazon để tìm kiếm một cây thần thoại với khả năng chữa bệnh đáng kinh ngạc.",
  "director" : "updating...",
  "id" : 53,
  "img" : "https://image.tmdb.org/t/p/w300/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Jungle Cruise: Thám Hiểm Rừng Xanh",
  "title_origin" : "Jungle Cruise",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "comedy" : "comedy",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/iTgM25ftE7YtFgZwUZupVp8A61S.jpg",
  "country" : "us",
  "description" : "Một nhóm gia đình trong kỳ nghỉ nhiệt đới phát hiện ra rằng bãi biển hẻo lánh nơi họ đang ở bằng cách nào đó khiến họ già đi nhanh chóng, giảm toàn bộ cuộc sống của họ chỉ còn một ngày.",
  "director" : "updating...",
  "id" : 54,
  "img" : "https://image.tmdb.org/t/p/w300/vclShucpUmPhdAOmKgf3B3Z4POD.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Già",
  "title_origin" : "Old",
  "type" : {
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg",
  "country" : "us",
  "description" : "Quá Nhanh Quá Nguy Hiểm 9: Huyền Thoại Tốc Độ là một bộ phim hành động sắp ra mắt của Mỹ do Justin Lin đạo diễn và Daniel Casey viết kịch bản. Phần tiếp theo của The Fate of the Furious 2017, đây sẽ là phần thứ chín của mạch truyện chính trong loạt phim The Fast Saga và bộ phim dài thứ mười được phát hành tổng thể.",
  "director" : "updating...",
  "id" : 55,
  "img" : "https://image.tmdb.org/t/p/w300/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Quá Nhanh Quá Nguy Hiểm 9: Huyền Thoại Tốc Độ",
  "title_origin" : "F9",
  "type" : {
    "action" : "action",
    "crime" : "crime",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/pUc51UUQb1lMLVVkDCaZVsCo37U.jpg",
  "country" : "us",
  "description" : "Sát Nhân Trong Bóng Tối 2 sẽ mở rộng câu chuyện về Mr. Blind Man khi anh đã ẩn náu vài năm trong một căn nhà gỗ biệt lập và đã nhận và nuôi dạy một cô gái trẻ mồ côi từ một vụ cháy nhà kinh hoàng. Cuộc sống êm ấm bên nhau của họ tan vỡ khi một nhóm tội phạm bắt cóc cô gái, buộc anh phải rời nơi trú ẩn an toàn để cứu cô.",
  "director" : "updating...",
  "id" : 56,
  "img" : "https://image.tmdb.org/t/p/w300/hRMfgGFRAZIlvwVWy8DYJdLTpvN.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Sát Nhân Trong Bóng Tối 2",
  "title_origin" : "Don't Breathe 2",
  "type" : {
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/3GgkzCDq6KYpcmJmcOKh27hYRyj.jpg",
  "country" : "us",
  "description" : "Theo tinh thần của Moana và Frozen, ‘Ainbo: Nữ Chiến Binh Amazon’ kể về cuộc hành trình đầy bất ngờ của Ainbo và thần dẫn đường của cô bé, \"Dillo\" là một chú tatu vừa dễ thương vừa hài hước và \"Vaca\" một con heo vòi quá khổ ngốc nghếch. Họ bắt tay vào cuộc tìm kiếm để cứu ngôi làng của chính mình trong Rừng nhiệt đới Amazon ngoạn mục.",
  "director" : "updating...",
  "id" : 57,
  "img" : "https://image.tmdb.org/t/p/w300/jMMYEZnddKHioXeKuZ5TzkEfcRo.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Ainbo: Nữ Chiến Binh Amazon",
  "title_origin" : "Ainbo: Spirit of the Amazon",
  "type" : {
    "adventure" : "adventure",
    "anime" : "anime",
    "family" : "family",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/byflnwPMumyvrCW9SfO5Miq3647.jpg",
  "country" : "us",
  "description" : "Trúng loại độc chết người trong nhiệm vụ cuối, một nữ sát thủ tàn nhẫn làm việc ở Tokyo chỉ có chưa đầy 24 giờ để tìm kẻ đã ra lệnh đầu độc rồi trả thù.",
  "director" : "updating...",
  "id" : 58,
  "img" : "https://image.tmdb.org/t/p/w300/uJgdT1boTSP0dDIjdTgGleg71l4.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Kate",
  "title_origin" : "Kate",
  "type" : {
    "action" : "action",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/ugukqzx4gSzBd1yzmbWEHLkpGaS.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 59,
  "img" : "https://image.tmdb.org/t/p/w300/hzq5XRGgm6NDMOW1idUvbpGqEkv.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "My Little Pony: A New Generation",
  "title_origin" : "My Little Pony: A New Generation",
  "type" : {
    "adventure" : "adventure",
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/zHHcindG4uVZLPLuYWoo4rnv6Ti.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 60,
  "img" : "https://image.tmdb.org/t/p/w300/6Y9fl8tD1xtyUrOHV2MkCYTpzgi.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "SAS: Red Notice",
  "title_origin" : "SAS: Red Notice",
  "type" : {
    "action" : "action",
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/akwg1s7hV5ljeSYFfkw7hTHjVqk.jpg",
  "country" : "us",
  "description" : "Nhóc trùm Ted giờ đây đã trở thành một triệu phú nổi tiếng trong khi Tim lại có một cuộc sống đơn giản bên vợ anh Carol và hai cô con gái nhỏ yêu dấu. Mỗi mùa Giáng sinh tới, cả Tina và Tabitha đều mong được gặp chú Ted nhưng dường như hai anh em nhà Templeton nay đã không còn gần gũi như xưa. Nhưng bất ngờ thay khi Ted lại có màn tái xuất không thể hoành tráng hơn khi đáp thẳng máy bay trực thăng tới nhà Tim trước sự ngỡ ngàng của cả gia đình.",
  "director" : "updating...",
  "id" : 61,
  "img" : "https://image.tmdb.org/t/p/w300/uWStkK8bq9ixY3fc7y209ZleCoF.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Nhóc Trùm 2: Nối Nghiệp Gia Đình",
  "title_origin" : "The Boss Baby: Family Business",
  "type" : {
    "adventure" : "adventure",
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/uZDE9VnKFnIPmWriMjnp82bH9S8.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 62,
  "img" : "https://image.tmdb.org/t/p/w300/ePYagdzUwKpzTP73n9CD3D1MFn.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Rogue Hostage",
  "title_origin" : "Rogue Hostage",
  "type" : {
    "action" : "action",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/8s4h9friP6Ci3adRGahHARVd76E.jpg",
  "country" : "us",
  "description" : "Superstar LeBron James và con trai nhỏ, Dom, bị mắc kẹt trong không gian kỹ thuật số bởi một kẻ lừa đảo ai. Để về nhà một cách an toàn, LeBron đã hợp tác với Bugs Bunny, Daffy Duck và phần còn lại của LOONEY TUNES GANG cho một trận bóng rổ cổ phần cao chống lại các nhà vô địch được số hóa của AI của Tòa án - một đội hình nâng cấp được gọi là Squad Goon.",
  "director" : "updating...",
  "id" : 63,
  "img" : "https://image.tmdb.org/t/p/w300/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Space Jam: Kỷ nguyên mới",
  "title_origin" : "Space Jam: A New Legacy",
  "type" : {
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg",
  "country" : "us",
  "description" : "Phần phim riêng của Natasha Romanoff bất ngờ tung teaser chính thức với những cảnh hành động mãn nhãn, mang đậm chất điệp viên. Bên cạnh đó, phần phim này cũng sẽ hé lộ quá khứ đen tối và quá trình biến cô trở thành một Black Widow.",
  "director" : "updating...",
  "id" : 64,
  "img" : "https://image.tmdb.org/t/p/w300/snwMN6DRf987jj79UqS1rd5Rvul.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Goá Phụ Đen",
  "title_origin" : "Black Widow",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg",
  "country" : "us",
  "description" : "Lấy bối cảnh thành phố biển Riviera xinh đẹp ở nước Ý thơ mộng, bộ phim Luca kể về câu chuyện trưởng thành của một câu bé cùng với những trải nghiệm mùa hè đáng nhớ với tất cả những nét đặc trưng của nước Ý như kem gelato, mỳ pasta và những chuyến du ngoạn thị trấn trên chiếc xe tay ga. Cậu bé Luca tận hưởng niềm vui bất tận của mùa hè cùng với người bạn thân thiết mới quen, tuy nhiên tình bạn đẹp đẽ này có phần bấp bênh khi Luca phát hiện ra một bí mật động trời: người bạn ấy là một sinh vật sống ở dưới đáy đại dương.",
  "director" : "updating...",
  "id" : 65,
  "img" : "https://image.tmdb.org/t/p/w300/4puYT4R4nqSeqvaQnkMzRQe6aWc.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Mùa hè của Luca",
  "title_origin" : "Luca",
  "type" : {
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/MDYanFolbT76dj0gsCbhS2GM5A.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 66,
  "img" : "https://image.tmdb.org/t/p/w300/qKxrBZ8Ts4KHZKp7BT6GAVMLFO2.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Catch the Bullet",
  "title_origin" : "Catch the Bullet",
  "type" : {
    "action" : "action",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/mtRW6eAwOO27h3zrfU2foQFW7Hg.jpg",
  "country" : "us",
  "description" : "Khi đối thủ lớn nhất của họ, Humdinger, bắt đầu tàn phá thị trưởng của Thành phố Phiêu lưu, Ryder và những chú chuột anh hùng yêu thích của mọi người tung tăng cao để đối mặt với thử thách. Được trang bị các tiện ích và thiết bị mới thú vị, PAW Patrol tham gia lực lượng với một chú chó săn hiểu biết để cứu các công dân của Adventure City.",
  "director" : "updating...",
  "id" : 67,
  "img" : "https://image.tmdb.org/t/p/w300/Aiv5GGf5bUw9iM49Os8Cs7a32d5.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Đội Đặc Nhiệm Siêu Đẳng",
  "title_origin" : "PAW Patrol: The Movie",
  "type" : {
    "adventure" : "adventure",
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/nprqOIEfiMMQx16lgKeLf3rmPrR.jpg",
  "country" : "us",
  "description" : "Một người đàn ông thề sẽ mang lại công lý cho những người chịu trách nhiệm về cái chết của vợ mình trong khi bảo vệ gia đình duy nhất mà anh ta còn lại - con gái của anh ta.",
  "director" : "updating...",
  "id" : 68,
  "img" : "https://image.tmdb.org/t/p/w300/cP7odDzzFBD9ycxj2laTeFWGLjD.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Đi Tìm Công Lý",
  "title_origin" : "Sweet Girl",
  "type" : {
    "action" : "action",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/gzppdxEJ6fofhtLzSVSUJZEVxvq.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 69,
  "img" : "https://image.tmdb.org/t/p/w300/bZnOioDq1ldaxKfUoj3DenHU7mp.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Jurassic Hunt",
  "title_origin" : "Jurassic Hunt",
  "type" : {
    "action" : "action",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/leDpP52W54kQvIxBd93G8lgTLCx.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 70,
  "img" : "https://image.tmdb.org/t/p/w300/pBSqH6avxduNAnXhyIkcAfcUMJ0.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Swim",
  "title_origin" : "Swim",
  "type" : {
    "action" : "action",
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/xPpXYnCWfjkt3zzE0dpCNME1pXF.jpg",
  "country" : "ja",
  "description" : "Trên đường điều tra sự mất tích của các Kiếm Sĩ thuộc Đội Diệt Quỷ, Tanjiro và các đồng đội cùng Viêm Trụ Rengoku rơi vào Huyết Quỷ Thuật ảo mộng của Quỷ Hạ Huyền Enmu. Cả bọn phải hiệp lực để bảo toàn tính mạng cho 200 hành khách trên chuyến tàu Vô Tận. Nhờ sự hi sinh của Viêm Trụ Rengoku, Quỷ Hạ Huyền đã bị đánh bại và mọi người được sống sót",
  "director" : "updating...",
  "id" : 71,
  "img" : "https://image.tmdb.org/t/p/w300/2MJz10b6ItzpKm3vb95S3X5Vcna.jpg",
  "language" : "ja",
  "length" : "updating...",
  "title" : "Thanh Gươm Diệt Quỷ: Chuyến Tàu Vô Tận",
  "title_origin" : "劇場版「鬼滅の刃」無限列車編",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "anime" : "anime",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2020"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/qD45xHA35HdJDGOaA1AgDwiWEgO.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 72,
  "img" : "https://image.tmdb.org/t/p/w300/3WfvjNWr5k1Zzww81b3GWc8KQhb.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "After We Fell",
  "title_origin" : "After We Fell",
  "type" : {
    "drama" : "drama",
    "movie" : "movie",
    "romance" : "romance"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/xDnFlNrNUoSKPq4uptnhYmUZNpm.jpg",
  "country" : "us",
  "description" : "Madison, một phụ nữ trẻ, vô cùng sợ hãi khi nhìn thấy những kẻ lạ mặt bị giết. Sau đó, Madison quyết định đi tìm và cứu các nạn nhân.",
  "director" : "updating...",
  "id" : 73,
  "img" : "https://image.tmdb.org/t/p/w300/dGv2BWjzwAz6LB8a8JeRIZL8hSz.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Hiện Thân Tà Ác",
  "title_origin" : "Malignant",
  "type" : {
    "crime" : "crime",
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/AjQgFtfXTmmMVuaH2VfQDdGbeQH.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 74,
  "img" : "https://image.tmdb.org/t/p/w300/7p0O4mKYLIhU2E5Zcq9Z3vOZ4e9.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Narco Sub",
  "title_origin" : "Narco Sub",
  "type" : {
    "action" : "action",
    "crime" : "crime",
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/dsdbViTNjLu4DbgkkYmuY4xDQ20.jpg",
  "country" : "us",
  "description" : "Sáu người vô tình thấy mình bị nhốt trong một loạt phòng trốn khác, từ từ khám phá ra những điểm chung của họ để tồn tại - và phát hiện ra rằng họ đều đã chơi trò chơi này trước đây.",
  "director" : "updating...",
  "id" : 75,
  "img" : "https://image.tmdb.org/t/p/w300/jGYJyPzVgrVV2bgClI9uvEZgVLE.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Căn Phòng Tử Thần: Cái Chết Trở Lại",
  "title_origin" : "Escape Room: Tournament of Champions",
  "type" : {
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/3pIqd1hgZ2xqzWEyiYp4blqE9Fi.jpg",
  "country" : "us",
  "description" : "The Courier (2020) thuộc thể loại chiến tranh, hành động với sự góp mặt của Benedict Cumberbatch, Merab Ninidze, Rachel Brosnahan do Dominic Cooke làm đạo diễn. Thời lượng 1h 52mn, nội dung xoay quanh công việc của Greville Wynne một điệp viên Chiến tranh Lạnh, đang cố gắng thực hiện đưa những nguồn tin về Nga để nhanh chóng chấm dứt Khủng hoảng tên lửa Cuba. ...",
  "director" : "updating...",
  "id" : 76,
  "img" : "https://image.tmdb.org/t/p/w300/zFIjKtZrzhmc7HecdFXXjsLR2Ig.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Người Đưa Tin",
  "title_origin" : "The Courier",
  "type" : {
    "drama" : "drama",
    "history" : "history",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/u5Fp9GBy9W8fqkuGfLBuuoJf57Z.jpg",
  "country" : "us",
  "description" : "Phần 25 của bộ phim điệp viên huyền thoại 007 sẽ tiếp nối câu chuyện về James Bond cùng những pha hành động táo bạo và hoành tráng hơn bao giờ hết. Sau sự kiện đầy ám ảnh trong Spectre, Bond lui về ở ẩn tại đất nước Jamaica, sống một cuộc đời cô độc nhưng bình lặng. Bỗng một người bạn cũ từ CIA xuất hiện, cầu xin anh giúp đỡ. Bond bất đắc dĩ phải tái xuất, nhưng không hề biết mình sẽ đối đầu với thế lực nào. Chi tiết đáng chú ý nhất là chiếc mặt nạ trắng vỡ nửa, đánh dấu sự xuất hiện của tên ác nhân kì quái bậc nhất trong cả series 007. Màn chạm trán giữa Bond và kẻ thù nguy hiểm này sẽ vén màn những bí ẩn còn để ngỏ và tiếp theo đó, có thể là một cuộc đối đầu “sinh tử”.",
  "director" : "updating...",
  "id" : 77,
  "img" : "https://image.tmdb.org/t/p/w300/6obsiTBb1D6Yc32q0BgAIFKOABu.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Điệp Viên 007: Không Phải Lúc Chết",
  "title_origin" : "No Time to Die",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/kDQdFs5XL6G8TuXvd0NnJfQ59GP.jpg",
  "country" : "fr",
  "description" : "Bộ phim lấy bối cảnh Paris năm 2021, các siêu anh hùng hoà nhập vào xã hội. Trong thế giới này, nơi một số người có quyền lực và những người khác thì không, ai đó đã có thể thay đổi điều này. Bằng cách tổng hợp sức mạnh siêu nhiên nhiên trong máu của một siêu anh hùng, nó có thể điều chế thành một loại thuốc.  Loại thuốc này có thể mang lại sức mạnh tương tự của siêu anh hùng cho ai ăn nó, nhưng chỉ có hiệu lực trong thời gian ngắn. Khi những sự cố liên tục tăng lên, Lts. Moreau và Schaltzmann được cử đi điều tra vụ việc. Cùng Monte Carlo và Callista, hai người thực sự cảnh giác và họ phát hiện ra nhiều điểm đáng nghi đằng sau chất gây nghiện.  Loại thuốc được sử dụng rộng rãi cho nhiều mục đích khác nhau, chủ yếu là để làm tổn thương người khác hoặc để phạm tội. Những người bị bắt nạt trong nhiều năm là đối tượng mà những kẻ xấu nhắm tới, việc họ khao khát được chống trả những kẻ bắt nạt luôn mạnh mẽ hơn bao giờ hết.",
  "director" : "updating...",
  "id" : 78,
  "img" : "https://image.tmdb.org/t/p/w300/5UDe6oVAIv6PC7eJ046o6oCyQc3.jpg",
  "language" : "fr",
  "length" : "updating...",
  "title" : "Hành Trình Trở Thành Siêu Anh Hùng",
  "title_origin" : "Comment je suis devenu super-héros",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "comedy" : "comedy",
    "fantasy" : "fantasy",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2020"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/70AV2Xx5FQYj20labp0EGdbjI6E.jpg",
  "country" : "us",
  "description" : "Một nhân viên bảo vệ mới lạnh lùng và bí ẩn cho một công ty xe tải chở tiền ở Los Angeles đã gây bất ngờ cho đồng nghiệp khi anh ta thể hiện những kỹ năng chính xác trong một vụ trộm. Phi hành đoàn còn lại tự hỏi anh ta là ai và anh ta đến từ đâu. Chẳng bao lâu, động cơ cuối cùng của tay thiện xạ trở nên rõ ràng khi anh ta thực hiện các bước ấn tượng và không thể thay đổi để giải quyết một điểm số.",
  "director" : "updating...",
  "id" : 79,
  "img" : "https://image.tmdb.org/t/p/w300/M7SUK85sKjaStg4TKhlAVyGlz3.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Cơn Thịnh Nộ Chết Người",
  "title_origin" : "Wrath of Man",
  "type" : {
    "action" : "action",
    "crime" : "crime",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/26LIw3oKGPUEGUpb8AXZ64dZZt8.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 80,
  "img" : "https://image.tmdb.org/t/p/w300/uIdMpWrQ30SHPINsy7LcPFloyvO.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Straight Outta Nowhere: Scooby-Doo! Meets Courage the Cowardly Dog",
  "title_origin" : "Straight Outta Nowhere: Scooby-Doo! Meets Courage the Cowardly Dog",
  "type" : {
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/daOd8KBGDdsOhVdzXB3KU5fgBd2.jpg",
  "country" : "fr",
  "description" : "",
  "director" : "updating...",
  "id" : 81,
  "img" : "https://image.tmdb.org/t/p/w300/cUI1PFsrQVJR3IZOpkfsOOOUhTO.jpg",
  "language" : "fr",
  "length" : "updating...",
  "title" : "Ava",
  "title_origin" : "Ava",
  "type" : {
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2017"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
  "country" : "us",
  "description" : "Mortal Kombat: Cuộc Chiến Sinh Tử xoay quanh võ sĩ võ thuật tổng hợp Cole Young (Lewis Tan), người mang trên mình một vết chàm rồng đen bí ẩn - biểu tượng của Mortal Kombat. Cole Young không hề biết về dòng máu bí ẩn đang chảy trong người anh, hay vì sao anh lại bị tên sát thủ Sub-Zero (Joe Taslim) săn lùng. Vì sự an nguy của gia đình, Cole cùng với một nhóm những chiến binh đã được tuyển chọn để tham gia vào một trận chiến đẫm máu nhằm chống lại những kẻ thù đến từ Outworld.",
  "director" : "updating...",
  "id" : 82,
  "img" : "https://image.tmdb.org/t/p/w300/5iHZ6KUSnLEnStXJ6BfFA5Uk2PT.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Mortal Kombat: Cuộc Chiến Sinh Tử",
  "title_origin" : "Mortal Kombat",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/piz0BFUJ4Bro4BFzxxkNpsGCmOd.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 83,
  "img" : "https://image.tmdb.org/t/p/w300/ysJte1iqN8pFQ470tumnViB1wHP.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Chuyện Kinh Dị Đêm Nay",
  "title_origin" : "Nightbooks",
  "type" : {
    "family" : "family",
    "fantasy" : "fantasy",
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/oM7AstNYo6eSkgAieXvsIxTPPDv.jpg",
  "country" : "us",
  "description" : "Sau vụ đột nhập chết người tại căn nhà mơ ước mới của một cặp vợ chồng, người vợ hoảng loạn tìm kiếm câu trả lời và nhận ra mối nguy thực sự mới chỉ bắt đầu.",
  "director" : "updating...",
  "id" : 84,
  "img" : "https://image.tmdb.org/t/p/w300/o6ozTBflWXlBje0uxJv4m6s4HTq.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Xâm Nhập",
  "title_origin" : "Intrusion",
  "type" : {
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/kmuSGNlF9mfNHIDOEVEWPj6f3Ak.jpg",
  "country" : "us",
  "description" : "Cruella là bản live action về phần tiền truyện của một trong những nhân vật phản diện mang tính biểu tượng, huyền thoại Cruella de Vil. “Cruella” lấy bối cảnh ở London những năm 1970 theo chân cô lao công thông minh & sáng tạo Estella với quyết tâm làm nên tên tuổi từ những thiết kế của mình. Cô kết giao với 2 kẻ trộm luôn đánh giá cao tham vọng và sự nghịch ngợm của cô và họ cùng nhau gây dựng tên tuổi ở khu phố London. Một ngày nọ, sự nhạy bén về thời trang của Estella đã lọt vào mắt xanh của bà Nam tước von Hallman, một huyền thoại thời trang, người phụ nữ sang trọng nhưng không kém vẻ đáng sợ. Nhưng mối quan hệ của họ dẫn đến những sự kiện và khiến Estella bước vào con đường để trở thành một người đậm chất thời trang nhưng tàn ác và đầy lòng hận thù - Cruella.",
  "director" : "updating...",
  "id" : 85,
  "img" : "https://image.tmdb.org/t/p/w300/sdcMDlrh0TWPY04fLTtKXnM9lmj.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Cruella: 101 Chú Chó Đốm",
  "title_origin" : "Cruella",
  "type" : {
    "comedy" : "comedy",
    "crime" : "crime",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/mA9PrseviOSHkM2lZja9FAUoarN.jpg",
  "country" : "es",
  "description" : "",
  "director" : "updating...",
  "id" : 86,
  "img" : "https://image.tmdb.org/t/p/w300/wEbBaFX7DBSrv0GbLvJFZXQ7Sdw.jpg",
  "language" : "es",
  "length" : "updating...",
  "title" : "A todo tren: destino Asturias",
  "title_origin" : "A todo tren: destino Asturias",
  "type" : {
    "comedy" : "comedy",
    "family" : "family",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/yMJBNo0FgTKeh5u9hrUBdUuUdSI.jpg",
  "country" : "pt",
  "description" : "",
  "director" : "updating...",
  "id" : 87,
  "img" : "https://image.tmdb.org/t/p/w300/bGIy308alpX12xdBVsREgsHawQC.jpg",
  "language" : "pt",
  "length" : "updating...",
  "title" : "Confissões de Uma Garota Excluída",
  "title_origin" : "Confissões de Uma Garota Excluída",
  "type" : {
    "comedy" : "comedy",
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/uRkRJjrxVa04w7k83Hy20FKot4G.jpg",
  "country" : "zh",
  "description" : "",
  "director" : "updating...",
  "id" : 88,
  "img" : "https://image.tmdb.org/t/p/w300/jeLePU48nWhPTKWSFMH2ni4o5bE.jpg",
  "language" : "zh",
  "length" : "updating...",
  "title" : "疯狂的拳头",
  "title_origin" : "疯狂的拳头",
  "type" : {
    "action" : "action",
    "movie" : "movie"
  },
  "year" : "2017"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg",
  "country" : "us",
  "description" : "Một người đàn ông của gia đình được soạn thảo để chiến đấu trong một cuộc chiến tương lai, nơi số phận của nhân loại dựa vào khả năng của anh ta để đối đầu với quá khứ.",
  "director" : "updating...",
  "id" : 89,
  "img" : "https://image.tmdb.org/t/p/w300/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Cuộc Chiến Tương Lai",
  "title_origin" : "The Tomorrow War",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/tUwgWj9EUK70qqkIlkwzMejc9wJ.jpg",
  "country" : "us",
  "description" : "Ảo giác của một kẻ tâm thần phân liệt được tiết lộ là những ký ức từ tiền kiếp nơi anh ta có được những tài năng mà anh ta vẫn còn cho đến ngày nay.",
  "director" : "updating...",
  "id" : 90,
  "img" : "https://image.tmdb.org/t/p/w300/niw2AKHz6XmwiRMLWaoyAOAti0G.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Vô Hạn",
  "title_origin" : "Infinite",
  "type" : {
    "action" : "action",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/iJ2HVOZT9Kjayrhy21pbGIJs9ey.jpg",
  "country" : "ch",
  "description" : "Lãnh chúa, chiến binh và chính khách tranh giành quyền lực tối cao trong phim hư cấu dựa trên các video game ăn khách và \"Romance of the Three Kingdoms\".",
  "director" : "updating...",
  "id" : 91,
  "img" : "https://image.tmdb.org/t/p/w300/tZ5XIM5wGCRV3InRkE772qsHgqF.jpg",
  "language" : "ch",
  "length" : "updating...",
  "title" : "Chân Tam Quốc Vô Song",
  "title_origin" : "真·三国无双",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/rnSn1m7na0AkvVelLVR7y9B85jV.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 92,
  "img" : "https://image.tmdb.org/t/p/w300/jeggetf6lrd0dhtcbqJH75Sik4K.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Barbie: Big City, Big Dreams",
  "title_origin" : "Barbie: Big City, Big Dreams",
  "type" : {
    "anime" : "anime",
    "family" : "family",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/AmHOQ7rpHwiaUMRjKXztnauSJb7.jpg",
  "country" : "us",
  "description" : "Bộ phim Avatar là câu chuyện về người anh hùng \"bất đắc dĩ\" Jake Sully -  một cựu sĩ quan thủy quân lục chiến bị liệt nửa thân. Anh được chọn để tham gia vào chương trình cấy gien với người ngoài hành tinh Na'vi nhằm tạo ra một giống loài mới có thể hít thở không khí tại hành tinh Pandora. Giống người mới này được gọi là Avatar. Trong phim, sau khi đã trở thành một Avatar, Jake có nhiệm vụ đi tìm hiều và nghiên cứu hành tinh Pandora. Những thông tin mà anh thu thập được rất có giá trị cho chiến dịch xâm chiếm hành tinh xanh thứ hai này của loài người.",
  "director" : "updating...",
  "id" : 93,
  "img" : "https://image.tmdb.org/t/p/w300/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Avatar",
  "title_origin" : "Avatar",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "fantasy" : "fantasy",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2009"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/tuYGaYW33H9qfmNRvyTXPXKtgeJ.jpg",
  "country" : "us",
  "description" : "Nội dung thông điệp dự báo ngày và số người thiệt mạng của các thảm họa lớn trong vòng 50 năm qua chính xác tuyệt đối. Khi anh tiếp tục lần theo manh mối những bí mật của tài liệu này, John phát hiện nó còn dự đoán thêm 3 thảm họa nữa. Trong đó, thảm họa cuối cùng chính là sự hủy diệt toàn cầu. John cố gắng cảnh báo giới chức trách nhưng không có ai tin anh. John càng lo lắng hơn khi nhận ra Caleb có liên hệ đến bí ẩn này. Anh tìm đến sự giúp đỡ của Diana Wayland và Abby Wayland, con gái và cháu của cô gái khi xưa đưa ra thông điệp. Họ cùng chạy đua với thời gian để cứu trái đất khỏi một thảm họa khốc liệt.",
  "director" : "updating...",
  "id" : 94,
  "img" : "https://image.tmdb.org/t/p/w300/nO9gTGDNdYnPr9ILKNQmk6EVTVR.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Hỗn Số Tử Thần",
  "title_origin" : "Knowing",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "drama" : "drama",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2009"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/5WPKkfVcMtQ0YOvSovbmxvNq3i1.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 95,
  "img" : "https://image.tmdb.org/t/p/w300/dqoshZPLNsXlC1qtz5n34raUyrE.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Sát Nhân Trong Gương",
  "title_origin" : "Candyman",
  "type" : {
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/gBoHwdz3d2jjlb9wXo0BcecGXY.jpg",
  "country" : "pt",
  "description" : "",
  "director" : "updating...",
  "id" : 96,
  "img" : "https://image.tmdb.org/t/p/w300/rZDEY4IztUVky6hEjGFfqKE4hiu.jpg",
  "language" : "pt",
  "length" : "updating...",
  "title" : "O Menino Que Matou Meus Pais",
  "title_origin" : "O Menino Que Matou Meus Pais",
  "type" : {
    "crime" : "crime",
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/tehpKMsls621GT9WUQie2Ft6LmP.jpg",
  "country" : "us",
  "description" : "Tất cả các quy tắc đã bị phá vỡ khi một giáo phái của những kẻ marauders vô luật pháp quyết định rằng Cuộc thanh trừng hàng năm không dừng lại vào rạng sáng và thay vào đó sẽ không bao giờ kết thúc khi họ truy đuổi một nhóm người nhập cư mà họ muốn trừng phạt vì quá khứ lịch sử khắc nghiệt của họ.",
  "director" : "updating...",
  "id" : 97,
  "img" : "https://image.tmdb.org/t/p/w300/9VGVwYDGpqW67EuSLlK6UxxNeNE.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Cuộc Thanh Trừng Vĩnh Viễn",
  "title_origin" : "The Forever Purge",
  "type" : {
    "action" : "action",
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
  "country" : "us",
  "description" : "Khi hai kẻ thù truyền kiếp gặp nhau trong một trận chiến ngoạn mục, số phận của cả thế giới vẫn còn bị bỏ ngỏ… Bị đưa khỏi Đảo Đầu Lâu, Kong cùng Jia, một cô bé mồ côi có mối liên kết mạnh mẽ với mình và đội bảo vệ đặc biệt hướng về mái nhà mới. Bất ngờ, nhóm đụng độ phải Godzilla hùng mạnh, tạo ra một làn sóng hủy diệt trên toàn cầu. Thực chất, cuộc chiến giữa hai kẻ khổng lồ dưới sự thao túng của các thế lực vô hình mới chỉ là điểm khởi đầu để khám phá những bí ẩn nằm sâu trong tâm Trái đất.",
  "director" : "updating...",
  "id" : 98,
  "img" : "https://image.tmdb.org/t/p/w300/ayKhR40ClDEivfmubfcXeyNPo2r.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Godzilla Đại Chiến Kong",
  "title_origin" : "Godzilla vs. Kong",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/heMC3jAjQPNSlr1n9mZKUQ58EOE.jpg",
  "country" : "ja",
  "description" : "Trước khi là người bảo vệ, Kenshin là tay sát thủ đáng sợ mang tên Battosai. Nhưng sau khi gặp cô gái hiền lành Yukishiro Tomoe, câu chuyện của anh bắt đầu thay đổi.",
  "director" : "updating...",
  "id" : 99,
  "img" : "https://image.tmdb.org/t/p/w300/nlCLslZNCflJgZOAUNN2XEV3RTg.jpg",
  "language" : "ja",
  "length" : "updating...",
  "title" : "Lãng Khách Kenshin: Khởi Đầu",
  "title_origin" : "るろうに剣心 最終章 The Beginning",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/uHmvk8FnoxpgujDU0RIXLkv2fNt.jpg",
  "country" : "es",
  "description" : "",
  "director" : "updating...",
  "id" : 100,
  "img" : "https://image.tmdb.org/t/p/w300/wrlQnKHLCBheXMNWotyr5cVDqNM.jpg",
  "language" : "es",
  "length" : "updating...",
  "title" : "Un rescate de huevitos",
  "title_origin" : "Un rescate de huevitos",
  "type" : {
    "anime" : "anime",
    "comedy" : "comedy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/b8cduNIEf75tBSFXDwBJfNAQMFP.jpg",
  "country" : "da",
  "description" : "",
  "director" : "updating...",
  "id" : 101,
  "img" : "https://image.tmdb.org/t/p/w300/u1cROU3xbE3ndDygREi3UO5cRoN.jpg",
  "language" : "da",
  "length" : "updating...",
  "title" : "Marco effekten",
  "title_origin" : "Marco effekten",
  "type" : {
    "crime" : "crime",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/mI0Qo7VtgW5siCtQQqNPXIk0Ar6.jpg",
  "country" : "ja",
  "description" : "",
  "director" : "updating...",
  "id" : 102,
  "img" : "https://image.tmdb.org/t/p/w300/rZ0JtG3VUWYGuE7j5JlmCQlcssl.jpg",
  "language" : "ja",
  "length" : "updating...",
  "title" : "Chiến Sĩ Cơ Động Gundam: Tia Chớp Hathaway",
  "title_origin" : "機動戦士ガンダム 閃光のハサウェイ",
  "type" : {
    "action" : "action",
    "anime" : "anime",
    "drama" : "drama",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/6RSmdzLx5Y975kKREVfa1KdCYMS.jpg",
  "country" : "pt",
  "description" : "",
  "director" : "updating...",
  "id" : 103,
  "img" : "https://image.tmdb.org/t/p/w300/rARhJwdW2cAeh8tgdc7WZqs2nZ1.jpg",
  "language" : "pt",
  "length" : "updating...",
  "title" : "A Menina Que Matou os Pais",
  "title_origin" : "A Menina Que Matou os Pais",
  "type" : {
    "crime" : "crime",
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/sjp19s49gm58iKbq64AxJxg9JgN.jpg",
  "country" : "es",
  "description" : "",
  "director" : "updating...",
  "id" : 104,
  "img" : "https://image.tmdb.org/t/p/w300/zvGC5jX5wQmU1GgPc0VGZz7Mtcs.jpg",
  "language" : "es",
  "length" : "updating...",
  "title" : "El mesero",
  "title_origin" : "El mesero",
  "type" : {
    "comedy" : "comedy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/qi6Edc1OPcyENecGtz8TF0DUr9e.jpg",
  "country" : "us",
  "description" : "Phần phim đen tối và đáng sợ nhất của vũ trụ kinh dị The Conjuring, dựa trên \"Vụ án kẻ sát nhân quỷ nhập\" gây rúng động nước Mỹ. Câu chuyện rùng rợn về vụ giết người và tội ác chưa từng được biết đến, gây sợ hãi cho hai nhà ngoại cảm Ed và Lorraine Warren. Đây là một trong những vụ án giật gân nhất từ hơn 3,000 hồ sơ của họ, bắt đầu bằng cuộc chiến giành linh hồn từ tay quỷ dữ cho một cậu bé, sau đó đưa họ vào trải nghiệm khủng khiếp nhất từ trước đến nay, để đánh dấu lần đầu tiên trong lịch sử nước Mỹ, một nghi phạm giết người tuyên bố mình bị quỷ nhập hồn, sai khiến cơ thể làm điều sai trái.",
  "director" : "updating...",
  "id" : 105,
  "img" : "https://image.tmdb.org/t/p/w300/5boXtxQjExJ7EsVvqICt0vZTGRC.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Ám Ảnh Kinh Hoàng: Ma Xui Quỷ Khiến",
  "title_origin" : "The Conjuring: The Devil Made Me Do It",
  "type" : {
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/jw6ASGRT2gi8EjCImpGtbiJ9NQ9.jpg",
  "country" : "us",
  "description" : "The Unholy (Tựa Việt: Ấn Quỷ) xoay quanh cô gái khiếm thính Alice (Cricket Brown) tại một thị trấn nhỏ thuộc vùng New England. Một ngày nọ, cô bỗng nhiên có thể nghe, nói như bình thường và có được năng lực chữa bệnh cho mọi người. Hàng trăm nghìn người từ khắp đất nước đổ về chứng kiến phép màu của cô. Trong số này, nhà báo Gerry Fenn (Jeffrey Dean Morgan) muốn thực hiện một phóng sự để cứu vãn sự nghiệp. Song, hàng loạt những sự kiện kinh hoàng xảy ra khiến ông dần nhận ra thế lực ma quỷ thật sự đứng sau lưng cô gái trẻ.",
  "director" : "updating...",
  "id" : 106,
  "img" : "https://image.tmdb.org/t/p/w300/dhr08ABR9PBzhWLjrDia6TmaDBE.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Ấn Quỷ",
  "title_origin" : "The Unholy",
  "type" : {
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/lzLzKXq2C0kL5Pu7VW5sNl5KV6L.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 107,
  "img" : "https://image.tmdb.org/t/p/w300/fBJducGBcmrcIOQdhm4BUBNDiMu.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Beckett",
  "title_origin" : "Beckett",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "crime" : "crime",
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/pVNXmfZvQKFdUKVYNJxZAiy69DC.jpg",
  "country" : "ru",
  "description" : "Khi một hiệp khách đeo mặt nạ giết người hàng loạt và gây hỗn loạn cả thành phố, chỉ có vị thanh tra nổi loạn và cộng sự tân binh mới có thể ngăn chặn anh ta.",
  "director" : "updating...",
  "id" : 108,
  "img" : "https://image.tmdb.org/t/p/w300/yBkZlG55CprznYxwUcGY6r3ZXP6.jpg",
  "language" : "ru",
  "length" : "updating...",
  "title" : "Thiếu Tá Grom: Bác Sĩ Bệnh Dịch",
  "title_origin" : "Майор Гром: Чумной Доктор",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/54yOImQgj8i85u9hxxnaIQBRUuo.jpg",
  "country" : "us",
  "description" : "Ava là một sát thủ giết người làm việc cho một tổ chức hoạt động đen, đi khắp thế giới chuyên về các vụ truy sát nổi tiếng. Khi một nhiệm vụ gặp trục trặc nguy hiểm đến tính mạng, cô ấy buộc phải chiến đấu vì sự sống còn của chính mình.",
  "director" : "updating...",
  "id" : 109,
  "img" : "https://image.tmdb.org/t/p/w300/qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Sát Thủ Ava",
  "title_origin" : "Ava",
  "type" : {
    "action" : "action",
    "crime" : "crime",
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2020"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/dssCw0mUmD4EriUmkwB3PnsGu4q.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 110,
  "img" : "https://image.tmdb.org/t/p/w300/ablrE8IbWcIrAxMmm4gnPn75AMS.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Huyền Thoại Rồng Đen: Cuộc Chiến Của Các Vương Quốc",
  "title_origin" : "Mortal Kombat Legends: Battle of the Realms",
  "type" : {
    "action" : "action",
    "anime" : "anime",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/z2UtGA1WggESspi6KOXeo66lvLx.jpg",
  "country" : "us",
  "description" : "Phần hai tiếp nối các sự kiện xảy ra trong phần một, khi gia đình Abbot gồm người mẹ Evelyn (do Emily Blunt thủ vai) cùng ba con chạy trốn đến một thành phố tưởng như an toàn. Tuy nhiên, cả gia đình không ngờ rằng ở thế giới bên ngoài cũng đã bị những sinh vật ngoài hành tinh thâu tóm. Những sinh vật này khiếm khuyết về thị giác nhưng có thính giác siêu nhạy để săn mồi bằng cách lần theo âm thanh. “Vùng đất câm lặng” lúc này đã trở thành “thế giới câm lặng” khi những người sống sót tiếp tục phải lẩn trốn, không được tạo ra tiếng động mỗi khi di chuyển hay giao tiếp với nhau. Nhưng càng bước ra ngoài thế giới, gia đình Abbot sớm nhận ra rằng hiểm họa duy nhất không chỉ đến từ những sinh vật ngoài hành tinh. Những bí ẩn xung quanh cuộc đổ bộ của các giống loài này dần được hé lộ.",
  "director" : "updating...",
  "id" : 111,
  "img" : "https://image.tmdb.org/t/p/w300/80x0HZxqkbLwktqMlJxUUewYb0U.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Vùng Đất Câm Lặng 2",
  "title_origin" : "A Quiet Place Part II",
  "type" : {
    "horror" : "horror",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/fRrpOILyXuWaWLmqF7kXeMVwITQ.jpg",
  "country" : "us",
  "description" : "Một nhóm bạn gồm 5 người rủ nhau khám phá một hang động chưa ai biết đến trong một cánh rừng già ở Úc. Mọi người đều rất vui mừng khi là người đầu tiên phát hiện ra nhiều cảnh quan đẹp mắt trong hang, đặc biệt là một hồ nước cực trong xanh, mát lạnh. Tuy nhiên, mọi thứ bỗng nhiên hết vui khi mà họ phát hiện có một sinh vật nguy hiểm đang rình rập ở dưới nước và cơn bão ở bên ngoài khiến họ bị mắc kẹt, không thể ra ngoài. Có điều gì đang chờ đón nhóm bạn này ở phía trước?",
  "director" : "updating...",
  "id" : 112,
  "img" : "https://image.tmdb.org/t/p/w300/nFmCwdIPHbb6ZNPNxsmfF5do1Kd.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Cá Sấu Tử Thần",
  "title_origin" : "Black Water: Abyss",
  "type" : {
    "adventure" : "adventure",
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2020"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/5Zv5KmgZzdIvXz2KC3n0MyecSNL.jpg",
  "country" : "us",
  "description" : "Jim - một cựu thủy quân lục chiến tại biên giới bang Arizona vô tình bị cuốn theo cuộc truy lùng của băng Vasquez khi cố giúp đưa Miguel thoát khỏi chúng. Nhiệm vụ giờ đây của Jim là \"vận chuyển\" Miguel về Chicago cùng gia đình trước sự truy giết máu lạnh của băng đảng Vasquez.",
  "director" : "updating...",
  "id" : 113,
  "img" : "https://image.tmdb.org/t/p/w300/w0cFlanzqZacG4jRfDZWHHsAgw2.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Tay Xạ Thủ",
  "title_origin" : "The Marksman",
  "type" : {
    "action" : "action",
    "crime" : "crime",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/rlNnwObbMu5G2FaOUlacnUIdIIA.jpg",
  "country" : "fr",
  "description" : "",
  "director" : "updating...",
  "id" : 114,
  "img" : "https://image.tmdb.org/t/p/w300/19Jdd4BTk38rruxoi05JxstFIda.jpg",
  "language" : "fr",
  "length" : "updating...",
  "title" : "Miraculous World: Shanghai, la légende de Ladydragon",
  "title_origin" : "Miraculous World: Shanghai, la légende de Ladydragon",
  "type" : {
    "adventure" : "adventure",
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/c0izdYdnTe4uMRifHgvTA85wPz0.jpg",
  "country" : "us",
  "description" : "Đội Quân Người Chết (Army of the Dead) là một bộ phim về vụ cướp xác sống của Mỹ năm 2021 do Zack Snyder đạo diễn, với kịch bản do anh ấy đồng viết với Shay Hatten và Joby Harold, dựa trên một câu chuyện của Snyder.",
  "director" : "updating...",
  "id" : 115,
  "img" : "https://image.tmdb.org/t/p/w300/7HdoUIMktAEyyJU8oUsB4IEl4Gc.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Đội Quân Người Chết",
  "title_origin" : "Army of the Dead",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "crime" : "crime",
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/wPjtacig0kIkVcTQmXoNt6jbMwo.jpg",
  "country" : "us",
  "description" : "Jolt (2021) là một bộ phim hành động Mỹ của đạo diển Tanya Wexler, nói về cô gái Lindy, một cô gái mang trong mình cơn rối loạn thần kinh hiếm gặp đã bị kết án oan sau khi sát hại người bạn trai, cô ta phải đối mặt với nguy hiểm khi điều tra và phải chạy trốn cảnh sát khỏi cuộc truy tìm.",
  "director" : "updating...",
  "id" : 116,
  "img" : "https://image.tmdb.org/t/p/w300/gYZAHan5CHPFXORpQMvOjCTug4E.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Giật Điện",
  "title_origin" : "Jolt",
  "type" : {
    "action" : "action",
    "comedy" : "comedy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/fZ4hrFacm5yow9gT64rS6YMNyHz.jpg",
  "country" : "fr",
  "description" : "Một mật vụ trở thành lính đánh thuê huyền thoại phải ra mặt để cứu đứa con trai chưa từng gặp. Học làm bố có thể là nhiệm vụ khó nhằn nhất trước giờ của ông.",
  "director" : "updating...",
  "id" : 117,
  "img" : "https://image.tmdb.org/t/p/w300/sNfEiOU2QOACkdcUBKRzhFcIYTN.jpg",
  "language" : "fr",
  "length" : "updating...",
  "title" : "Lính Đánh Thuê Cuối Cùng",
  "title_origin" : "Le Dernier Mercenaire",
  "type" : {
    "action" : "action",
    "comedy" : "comedy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
  "country" : "us",
  "description" : "Justice League hay còn được biết đến với cái tên Liên Minh Công Lý, là tập hợp những siêu anh hùng mang trong mình sức mạnh phi thường để giải cứu thế giới khỏi những thế lực đen tối trong vũ trụ DC. Lần này, nhân loại phải đối mặt với tên ác quỷ vô cùng tàn độc – Steppenwolf. Hắn là một trong những tay sai đắc lực của Darksied – một ác nhân và cũng chính là kẻ thù lớn nhất của Liên Minh Công Lý. Steppenwolf đã phô trương năng lực siêu phàm của mình, gieo rắc nỗi sợ hãi và bóng tối tới xứ Themyscira – quê hương của Wonder Woman và loài người.",
  "director" : "updating...",
  "id" : 118,
  "img" : "https://image.tmdb.org/t/p/w300/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Liên Minh Công Lý Phiên Bản của Zack Snyder",
  "title_origin" : "Zack Snyder's Justice League",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "fantasy" : "fantasy",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/g3T4Ydf8pPlEq54Stew5XzwGPrY.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 119,
  "img" : "https://image.tmdb.org/t/p/w300/6zt5l4DYV1kLPL5Vqz1kLq3THXD.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Hotel Transylvania: Transformania",
  "title_origin" : "Hotel Transylvania: Transformania",
  "type" : {
    "adventure" : "adventure",
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2019"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/c7dFSqZQYqNNJVpacpIGZe3gkLW.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 120,
  "img" : "https://image.tmdb.org/t/p/w300/tuzkEyCPwf5O56fDjGNerIA8hxT.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Monster Pets: A Hotel Transylvania Short",
  "title_origin" : "Monster Pets: A Hotel Transylvania Short",
  "type" : {
    "anime" : "anime",
    "comedy" : "comedy",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/6FzuNrApEc71aJ3CwwkpadbNled.jpg",
  "country" : "us",
  "description" : "Tên tội phạm khét tiếng, Richard Pace, được tuyển mộ vào một băng cướp với nhiều thành phần bất hảo để tham gia một phi vụ trộm vàng có một không hai. Trớ trêu thay, sự thành bại của phi vụ này không chỉ ảnh hưởng đến tính mạng của những tên trộm mà còn liên quan đến sự sống còn của rất nhiều người.",
  "director" : "updating...",
  "id" : 121,
  "img" : "https://image.tmdb.org/t/p/w300/dPOyYnCkRbWAEem85N3VFpQODf5.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Những Kẻ Dị Thường",
  "title_origin" : "The Misfits",
  "type" : {
    "action" : "action",
    "comedy" : "comedy",
    "crime" : "crime",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/caWb61PBLJOdnnVYnL8WU6I80kE.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 122,
  "img" : "https://image.tmdb.org/t/p/w300/8l9zU9932kjrJqrTVEVSm4Zfyne.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Body Brokers",
  "title_origin" : "Body Brokers",
  "type" : {
    "crime" : "crime",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/zsH3iW60T1t2HBTtrSKzzxJ406J.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 123,
  "img" : "https://image.tmdb.org/t/p/w300/rtMdtzywcAGOrF6t8fbxJBqpdcq.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "The Simpsons: The Good, the Bart, and the Loki",
  "title_origin" : "The Simpsons: The Good, the Bart, and the Loki",
  "type" : {
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/kTOheVmqSBDIRGrQLv2SiSc89os.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 124,
  "img" : "https://image.tmdb.org/t/p/w300/xYLBgw7dHyEqmcrSk2Sq3asuSq5.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "The Addams Family 2",
  "title_origin" : "The Addams Family 2",
  "type" : {
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/3emtmbHAp145frh3Pps1bZCCEHY.jpg",
  "country" : "us",
  "description" : "Raya và Rồng Thần Cuối Cùng kể về một vương quốc huyền bí có tên là Kumandra – vùng đất mà loài rồng và con người sống hòa thuận với nhau. Nhưng rồi một thế lực đen tối bỗng đe dọa bình yên nơi đây, loài rồng buộc phải hi sinh để cứu lấy loài người. 500 năm sau, thế lực ấy bỗng trỗi dậy và một lần nữa, Raya là chiến binh duy nhất mang trong mình trọng trách đi tìm Rồng Thần cuối cùng trong truyền thuyết nhằm hàn gắn lại khối ngọc đã vỡ để cứu lấy vương quốc. Thông qua cuộc hành trình, Raya nhận ra loài người cần nhiều hơn những gì họ nghĩ, đó chính là lòng tin và sự đoàn kết.",
  "director" : "updating...",
  "id" : 125,
  "img" : "https://image.tmdb.org/t/p/w300/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Raya và Rồng Thần Cuối Cùng",
  "title_origin" : "Raya and the Last Dragon",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "anime" : "anime",
    "family" : "family",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/qndvrOXGyoOxkhc12SqfLi9Hr31.jpg",
  "country" : "us",
  "description" : "Bộ phim là câu chuyện hài hước về Siêu anh hùng lười biếng Hancock. Vì những tật xấu cố hữu của mình mà Hancock bị mọi người ghét bỏ. Và để lấy lại hình ảnh của một Siêu anh hùng được yêu mến, Hancock đã có một kế hoạch...",
  "director" : "updating...",
  "id" : 126,
  "img" : "https://image.tmdb.org/t/p/w300/7DyuV2G0hLEqHeueDfOqhZ2DVut.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Siêu Nhân Cái Bang",
  "title_origin" : "Hancock",
  "type" : {
    "action" : "action",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2008"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/z8TvnEVRenMSTemxYZwLGqFofgF.jpg",
  "country" : "us",
  "description" : "Monster Hunter được chuyển thể từ series game nổi tiếng cùng tên của Capcom. Trong phim, đội trưởng Artemis của nữ diễn viên Milla Jovovich (Resident Evil) và đồng đội đã vô tình bước qua một cánh cửa bí ẩn dẫn tới thế giới khác. Tại đây, họ phải chiến đấu với nhiều loài quái vật khổng lồ trong hành trình trở về thế giới. Đồng hành với họ trong trận chiến là nhân vật “Thợ săn” của nam diễn viên Tony Jaa (Ong Bak). Monster Hunter hứa hẹn sẽ là bom tấn hành động với những màn săn quái vật khổng lồ hoành tráng nhất năm 2020.",
  "director" : "updating...",
  "id" : 127,
  "img" : "https://image.tmdb.org/t/p/w300/uwjaCH7PiWrkz7oWJ4fcL3xGrb0.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Thợ Săn Quái Vật",
  "title_origin" : "Monster Hunter",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2020"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/o0UGl6icA4DbhmDNgdZ5AWvuTtM.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 128,
  "img" : "https://image.tmdb.org/t/p/w300/uTgZuqUQbaCB6Wfk03N8IUEuzQf.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Vacation Friends",
  "title_origin" : "Vacation Friends",
  "type" : {
    "comedy" : "comedy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/4K57Vd78y3pMsAAfOdZYATTqnL3.jpg",
  "country" : "us",
  "description" : "Crank 2 High Voltage bắt đầu bằng việc sát thủ chuyên nghiệp Chev Chelios bị một nhóm gangster Trung Quốc bắt cóc.Ba tháng sau Chelios mới tỉnh dậy và phát hiện ra quả tim của mình đã bị thay thế bởi một quả tim nhân tạo. Để tồn tại và nuôi được quả tim này Chelios phải thường xuyên nạp điện cao thế vào người. Mục đích của nhóm xã hội đen này là muốn sử dụng Chelios làm công cụ thực hiện những ý đồ đen tối do chúng thiết lập nên. Tuy nhiên, chúng vấp phải sự kháng cự tột cùng của ý chí con người, của bản năng tồn tại tự do trong cá thể Chelios.",
  "director" : "updating...",
  "id" : 129,
  "img" : "https://image.tmdb.org/t/p/w300/tzTC4EEvF0OPL63frEiogxL2T8M.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Kẻ Lập Dị 2",
  "title_origin" : "Crank: High Voltage",
  "type" : {
    "action" : "action",
    "crime" : "crime",
    "movie" : "movie"
  },
  "year" : "2009"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/9guoVF7zayiiUq5ulKQpt375VIy.jpg",
  "country" : "ja",
  "description" : "Tác giả đã giải thích rằng movie thứ hai này có thể được mô tả như một dạng kết của Boku no Hero Academia. Đó là vì câu chuyện được sử dụng bao gồm những chuyện cũng sẽ xuất hiện trong trận chiến cuối cùng của manga. Do đó, ông cũng tuyên bố movie thứ 2 này sẽ có \"Plus Ultra\" nhiều hơn cả movie đầu tiên.",
  "director" : "updating...",
  "id" : 130,
  "img" : "https://image.tmdb.org/t/p/w300/y56HkHAbSZQJjQaxlqCaRI3lIHu.jpg",
  "language" : "ja",
  "length" : "updating...",
  "title" : "Học Viện Anh Hùng: Anh Hùng Trỗi Dậy",
  "title_origin" : "僕のヒーローアカデミア THE MOVIE ヒーローズ：ライジング",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "anime" : "anime",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2019"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/aknvFyJUQQoZFtmFnYzKi4vGv4J.jpg",
  "country" : "us",
  "description" : "Dune xoay quanh câu chuyện về Paul Atreides một chàng trai trẻ đầy tài năng và thông minh anh được sinh ra trong cuộc sống vô cùng tuyệt vời và vượt khỏi tầm hiểu biết của anh, không những thế anh còn phải du hành đến một hành tinh đầy nguy hiểm nhất trong vũ trụ để có thể bảo vệ an toàn cuộc sống trong tương lai của gia đình và người thân của anh. Nhưng những thế lực tàn ác đã trỗi dậy và gây xung đột về sự cung cấp tài nguyên cho sự tồn tại của hành tinh. Và chỉ có những người dũng cảm vượt qua được nỗi sợ hãi mới có thể giữ được mạng sống trên hành tinh này.",
  "director" : "updating...",
  "id" : 131,
  "img" : "https://image.tmdb.org/t/p/w300/s1FhMAr91WL8D5DeHOcuBELtiHJ.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Dune: Hành tinh cát",
  "title_origin" : "Dune",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "drama" : "drama",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/2BftdeCkD7uf68KUxaKRBxtsmZZ.jpg",
  "country" : "us",
  "description" : "Một chú gấu trúc potôt yêu âm nhạc bắt đầu hành trình hiếm có trong đời để hoàn thành định mệnh của mình và trao bản tình ca cho một người bạn cũ.",
  "director" : "updating...",
  "id" : 132,
  "img" : "https://image.tmdb.org/t/p/w300/eRLlrhbdYE7XN6VtcZKy6o2BsOw.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Chú Gấu Vivo",
  "title_origin" : "Vivo",
  "type" : {
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/5VydHjmbPiXAfJ2RJWFCjNdLS85.jpg",
  "country" : "de",
  "description" : "",
  "director" : "updating...",
  "id" : 133,
  "img" : "https://image.tmdb.org/t/p/w300/lthWL35rQlNbb9UAv44KEhKNEOX.jpg",
  "language" : "de",
  "length" : "updating...",
  "title" : "Hòn Đảo Đen",
  "title_origin" : "Schwarze Insel",
  "type" : {
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/h1coWIfm3mQPS5wLo3odWUzx97u.jpg",
  "country" : "fr",
  "description" : "",
  "director" : "updating...",
  "id" : 134,
  "img" : "https://image.tmdb.org/t/p/w300/o9xtEAlNb0wWql0EnT2SmaLZ1qa.jpg",
  "language" : "fr",
  "length" : "updating...",
  "title" : "Le bal des folles",
  "title_origin" : "Le bal des folles",
  "type" : {
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/yC4DRg5aGgNpkHpUDpLtBqzownS.jpg",
  "country" : "ko",
  "description" : "Seobok – Người Nhân Bản là câu chuyện về Ki-hun (Gong Yoo) – một cựu đặc vụ sống tách biệt với thế giới bên ngoài kể từ sau biến cố trong quá khứ, chấp nhận thực hiện nhiệm vụ cuối cùng từ Cơ quan Tình báo. Anh phải chịu trách nhiệm di chuyển Seobok (Park Bo Gum), một đối tượng thử nghiệm được tạo ra bằng cách nhân bản tế bào gốc và biến đổi gen. Tuy nhiên mọi việc không hề suôn sẻ với họ, khi Seobok trở thành mục tiêu của các thế lực khác với những tham vọng và âm mưu khó đoán. Ki-hun sẽ vượt qua tất cả những hiểm nguy đang chực chờ phía trước, hay Seobok cuối cùng sẽ rơi vào tay kẻ muốn chiếm đoạt vận mệnh của toàn nhân loại?",
  "director" : "updating...",
  "id" : 135,
  "img" : "https://image.tmdb.org/t/p/w300/bDYUwwhIyWI5kIwoecHdfZu79tr.jpg",
  "language" : "ko",
  "length" : "updating...",
  "title" : "Người Nhân Bản",
  "title_origin" : "서복",
  "type" : {
    "action" : "action",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/1Txzm4bY5ZDqvgMl7MmHeBMl7HH.jpg",
  "country" : "es",
  "description" : "",
  "director" : "updating...",
  "id" : 136,
  "img" : "https://image.tmdb.org/t/p/w300/oxNoVgbu2v9ETL93Kri1pw8osYf.jpg",
  "language" : "es",
  "length" : "updating...",
  "title" : "Sinaliento",
  "title_origin" : "Sinaliento",
  "type" : {
    "crime" : "crime",
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/srYya1ZlI97Au4jUYAktDe3avyA.jpg",
  "country" : "us",
  "description" : "Lấy bối cảnh năm 1984, 66 năm sau sự kiện diễn ra Thế Chiến thứ I (1918) ở phần phim đầu tiên, Wonder Woman tái hợp với người yêu tưởng chừng đã qua đời Steve Trevor, đồng thời đương đầu với hai kẻ thù mới là Max Lord và The Cheetah.",
  "director" : "updating...",
  "id" : 137,
  "img" : "https://image.tmdb.org/t/p/w300/sNUCQ07nnIhZWUoUssT67uvfyD7.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Wonder Woman 1984: Nữ Thần Chiến Binh",
  "title_origin" : "Wonder Woman 1984",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2020"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/xYz4u1jWCKyXGzddMJeOL845DTr.jpg",
  "country" : "us",
  "description" : "Amazing Spider-Man hay Siêu Nhện Tái Xuất có khá nhiều khác biệt so với các phần trước tập trung ở sự khác biệt ở tính cách của các nhân vật, Peter không còn là cậu bé nhút nhát mà khá nghịch ngợm, bên cạnh đó đạo diễn Marc Webb cũng mạnh dạn đưa ra thêm nhiều thay đổi về cốt truyện để Amazing Spider-Man thực sự mới lạ so với các phiên bản cũ.\r Cha mẹ Peter biến mất bí ấn và để cậu cho cô chú nuôi nấng. Sự tò mò về thân phận của bản thân lẫn những điều chưa biết về cha mẹ luôn thôi thúc cậu.  Peter tìm thấy tập tài liệu mà cha để lại. Từ đây, những manh mối dẫn cậu tới tập đoàn Oscorp và người cộng sự của ông. Một tai nạn tại Oscorp khiến Peter có những siêu năng lực của loài nhện, Người nhện xuất hiện bí ẩn trong lòng New York.",
  "director" : "updating...",
  "id" : 138,
  "img" : "https://image.tmdb.org/t/p/w300/jIfkQNARYyERqRAq1p1c8xgePp4.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Người Nhện Siêu Đẳng",
  "title_origin" : "The Amazing Spider-Man",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2012"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/5HjzYTihkH7EvOWSE7KcsF6pBMM.jpg",
  "country" : "us",
  "description" : "Trong phần tiếp theo của Thỏ Peter, những kẻ lừa đảo đáng yêu đã trở lại. Bea, Thomas và những con thỏ đã tạo ra một gia đình tạm thời, nhưng mặc dù đã cố gắng hết sức, Peter dường như không thể làm suy chuyển những \"thành tích\" nghịch ngợm tinh quái của cậu. Quyết định mở rộng cuộc phiêu lưu ra khỏi khu vườn, Peter tìm thấy chính mình ở nơi mà bản chất thật của cậu được trân trọng. Nhưng rồi gia đình cậu nhất quyết đánh đổi bằng mọi giá để tìm cậu về. Peter buộc phải tìm ra lối đi cho riêng mình và trở thành một người mà cậu luôn mong muốn.",
  "director" : "updating...",
  "id" : 139,
  "img" : "https://image.tmdb.org/t/p/w300/u0hUtTYghRnybYqCbr5Zl2vTb9G.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Thỏ Peter 2: Cuộc Trốn Chạy",
  "title_origin" : "Peter Rabbit 2: The Runaway",
  "type" : {
    "adventure" : "adventure",
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/fmIp40ev4VGquK2bMo52PQgaV2d.jpg",
  "country" : "us",
  "description" : "Sinh tồn trong một thế giới tiền sử luôn rình rập hiểm nguy từ đủ loài quái thú hung dữ cho tới thảm họa ngày tận thế, Nhà Croods chưa từng một lần chùn bước. Nhưng giờ đây họ sẽ phải đối mặt với thử thách lớn nhất từ trước tới nay: chung sống với một gia đình khác. Để tìm kiếm một mái nhà an toàn hơn, Nhà Croods bắt đầu hành trình khám phá thế giới tiến tới những vùng đất xa xôi đầy tiềm năng. Một ngày nọ, họ tình cờ lạc vào một nơi yên bình có đầy đủ mọi tiện nghi hiện đại và biệt lập với tường vây bao quanh. Tưởng rằng mọi vấn đề trong cuộc sống sẽ được giải quyết thì Nhà Croods lại phải chấp nhận với sự thật rằng đã có một gia đình khác định cư ở đây đó chính là Nhà Bettermans.",
  "director" : "updating...",
  "id" : 140,
  "img" : "https://image.tmdb.org/t/p/w300/pfSvoKuRV6Xqax1MktfdNe7qfqY.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Gia Đình Croods: Kỷ Nguyên Mới",
  "title_origin" : "The Croods: A New Age",
  "type" : {
    "adventure" : "adventure",
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2020"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/9p3bwHTpX5Axpyp4gxqmDxWaau0.jpg",
  "country" : "fr",
  "description" : "",
  "director" : "updating...",
  "id" : 141,
  "img" : "https://image.tmdb.org/t/p/w300/mab5wPeGVjbMyYMzyzfdKKnG9cl.jpg",
  "language" : "fr",
  "length" : "updating...",
  "title" : "The Loud House Movie",
  "title_origin" : "The Loud House Movie",
  "type" : {
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/6hgItrYQEG33y0I7yP2SRl2ei4w.jpg",
  "country" : "us",
  "description" : "Tessa thấy mình phải vật lộn với mối quan hệ phức tạp của cô với Hardin; cô phải đối mặt với một tình huống khó xử có thể thay đổi cuộc đời họ mãi mãi.",
  "director" : "updating...",
  "id" : 142,
  "img" : "https://image.tmdb.org/t/p/w300/kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Từ Khi Chúng Ta Tan Vỡ",
  "title_origin" : "After We Collided",
  "type" : {
    "drama" : "drama",
    "movie" : "movie",
    "romance" : "romance"
  },
  "year" : "2020"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/vQ9YlITvVFdbFXYX6qwTNgIP85u.jpg",
  "country" : "ja",
  "description" : "",
  "director" : "updating...",
  "id" : 143,
  "img" : "https://image.tmdb.org/t/p/w300/gtiNyP9BoQmPzjeDhvofUtUxpJV.jpg",
  "language" : "ja",
  "length" : "updating...",
  "title" : "劇場版 七つの大罪 光に呪われし者たち",
  "title_origin" : "劇場版 七つの大罪 光に呪われし者たち",
  "type" : {
    "action" : "action",
    "anime" : "anime",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/buop8brXQ8gGiOPrVTxZZUqE8Oa.jpg",
  "country" : "us",
  "description" : "Trong mùa dịch cách ly tại nhà buồn tẻ, hội bạn thân bèn bày trò mời thầy đồng cùng gọi hồn qua ứng dụng zoom và nhận được cái kết đáng sợ.",
  "director" : "updating...",
  "id" : 144,
  "img" : "https://image.tmdb.org/t/p/w300/xchcTKn3E4ISOVyBFZAHleWOk9Y.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Phòng Chat Quỷ Ám",
  "title_origin" : "Host",
  "type" : {
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2020"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/2351A6j2YJjuKstEyZl9uObpMrm.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 145,
  "img" : "https://image.tmdb.org/t/p/w300/jxjnjHtHXgvjdhkwpelE9ZwVMg6.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Carriers",
  "title_origin" : "Carriers",
  "type" : {
    "action" : "action",
    "drama" : "drama",
    "horror" : "horror",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2009"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/jWMWZ2ttg8B8YtVzG04UfhlcL67.jpg",
  "country" : "us",
  "description" : "Trigger Point là một bộ phim kinh dị hành động năm 2021 của Canada do Brad Turner đạo diễn và Michael Vickerman viết kịch bản.",
  "director" : "updating...",
  "id" : 146,
  "img" : "https://image.tmdb.org/t/p/w300/qlXenN6jjgbsIyEJxBjkfkEU0q8.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Điểm Kích Hoạt",
  "title_origin" : "Trigger Point",
  "type" : {
    "action" : "action",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg",
  "country" : "us",
  "description" : "Sau chuyến hành trình độc nhất vô nhị không ngừng mở rộng và phát triển vụ trũ điện ảnh Marvel, bộ phim Avengers: Cuộc Chiến Vô Cực sẽ mang đến màn ảnh trận chiến cuối cùng khốc liệt nhất mọi thời đại. Biệt đội Avengers và các đồng minh siêu anh hùng của họ phải chấp nhận hy sinh tất cả để có thể chống lại kẻ thù hùng mạnh Thanos trước tham vọng hủy diệt toàn bộ vũ trụ của hắn.",
  "director" : "updating...",
  "id" : 147,
  "img" : "https://image.tmdb.org/t/p/w300/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Biệt Đội Siêu Anh Hùng: Cuộc Chiến Vô Cực",
  "title_origin" : "Avengers: Infinity War",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2018"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/aMFl4wOPhJ7NVua6SgU9zIJvFSx.jpg",
  "country" : "fr",
  "description" : "",
  "director" : "updating...",
  "id" : 148,
  "img" : "https://image.tmdb.org/t/p/w300/kIHgjAkuzvKBnmdstpBOo4AfZah.jpg",
  "language" : "fr",
  "length" : "updating...",
  "title" : "Miraculous World : New York, les héros unis",
  "title_origin" : "Miraculous World : New York, les héros unis",
  "type" : {
    "adventure" : "adventure",
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "movie" : "movie"
  },
  "year" : "2020"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/fy8bBNQyKtRnznm3G3QWdu2wIC8.jpg",
  "country" : "ja",
  "description" : "",
  "director" : "updating...",
  "id" : 149,
  "img" : "https://image.tmdb.org/t/p/w300/1k6iwC4KaPvTBt1JuaqXy3noZRY.jpg",
  "language" : "ja",
  "length" : "updating...",
  "title" : "BORUTO -NARUTO THE MOVIE-",
  "title_origin" : "BORUTO -NARUTO THE MOVIE-",
  "type" : {
    "action" : "action",
    "anime" : "anime",
    "comedy" : "comedy",
    "movie" : "movie"
  },
  "year" : "2015"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/aRNMwIvEnYEMwGHLCAACyuq2I1K.jpg",
  "country" : "us",
  "description" : "Peter Parker đã bị lộ mặt và không còn có thể tách biệt cuộc sống bình thường của mình với những yêu cầu cao của việc trở thành một Siêu anh hùng. Khi anh ta yêu cầu sự giúp đỡ từ Doctor Strange, mọi thứ càng trở nên nguy hiểm hơn, buộc anh ta phải khám phá ra ý nghĩa thực sự của việc trở thành Người Nhện.",
  "director" : "updating...",
  "id" : 150,
  "img" : "https://image.tmdb.org/t/p/w300/5RjyUm9HP2ZRwvqCqK9sDqlQHxa.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Người Nhện: Không Còn Nhà",
  "title_origin" : "Spider-Man: No Way Home",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "fantasy" : "fantasy",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/xZAIJlK8QtqdBYXJ7RynO21yBdu.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 151,
  "img" : "https://image.tmdb.org/t/p/w300/yopdxvdSIEflWdEe3Ufj6DZ1yAH.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Monstruosamente Solo",
  "title_origin" : "Monstruosamente Solo",
  "type" : {
    "anime" : "anime",
    "comedy" : "comedy",
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/uEWCi9fc89m9qS5SNshlvxkSsLJ.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 152,
  "img" : "https://image.tmdb.org/t/p/w300/iB8rf8FYHGlrbmLybCo6Mpg8hNt.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "The Haunting of Helena",
  "title_origin" : "The Haunting of Helena",
  "type" : {
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2013"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/849RDhbADVVnhtggR14dDBYejeN.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 153,
  "img" : "https://image.tmdb.org/t/p/w300/clDFqATL4zcE7LzUwkrVj3zHvk7.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Lọ Lem",
  "title_origin" : "Cinderella",
  "type" : {
    "comedy" : "comedy",
    "fantasy" : "fantasy",
    "movie" : "movie",
    "romance" : "romance"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/1MxdxiUvKCbuKDoeiuq668eIKb8.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 154,
  "img" : "https://image.tmdb.org/t/p/w300/rMoVOCw6DF3zC6hS76ZhQMWiXNX.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Teen Titans Go! See Space Jam",
  "title_origin" : "Teen Titans Go! See Space Jam",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "fantasy" : "fantasy",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/9ns9463dwOeo1CK1JU2wirL5Yi1.jpg",
  "country" : "us",
  "description" : "“Sau nhiều năm chành chọe, nay cặp kỳ phùng địch thủ nổi tiếng nhất thế giới Tom và Jerry đã làm hòa, khăn gói rời khỏi mái nhà chung, và bắt đầu hành trình của riêng mình. Chuột Jerry nay trú ngụ tại một khách sạn sang trọng, nơi chuẩn bị tổ chức một đám cưới Thế kỷ. Cô nhân viên mới Kayla được giao cho nhiệm vụ đuổi Jerry đi nên mang về một chàng mèo “mình đầy kinh nghiệm” đối phó với chuột, không ai khác chính là Tom. Và thế là cuộc chiến mèo - chuột lại nổ ra, kéo theo loạt rắc rối cho khách sạn, và biết bao tình huống dở khóc dở cười.“",
  "director" : "updating...",
  "id" : 155,
  "img" : "https://image.tmdb.org/t/p/w300/chr13OzADti1YudVzjT5oDjgUaT.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Tom và Jerry: Quậy Tung New York",
  "title_origin" : "Tom & Jerry",
  "type" : {
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/3RMbkXS4ocMmoJyAD3ZsWbm32Kx.jpg",
  "country" : "us",
  "description" : "Khi một sự kiện toàn cầu làm mất đi khả năng ngủ của nhân loại, một cựu binh mang theo trăn trở chiến đấu để cứu gia đình khi xã hội và tâm trí cô rơi vào hỗn loạn.",
  "director" : "updating...",
  "id" : 156,
  "img" : "https://image.tmdb.org/t/p/w300/uZkNbB8isWXHMDNoIbqXvmslBMC.jpg",
  "language" : "us",
  "length" : "updating...",
  "recommend" : 0,
  "title" : "Thức Giấc",
  "title_origin" : "Awake",
  "type" : {
    "drama" : "drama",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg",
  "country" : "us",
  "description" : "Đôi khi người đàn ông mà bạn không để ý lại là người nguy hiểm nhất. Hutch Mansell, một người cha và người chồng bị đánh giá thấp và bị coi thường, luôn coi thường sự phẫn nộ của cuộc đời và không bao giờ lùi bước. Một kẻ vô danh.",
  "director" : "updating...",
  "id" : 157,
  "img" : "https://image.tmdb.org/t/p/w300/mGY5CrLuEFyxtPotHHqKNRCWvda.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Kẻ Vô Danh",
  "title_origin" : "Nobody",
  "type" : {
    "action" : "action",
    "crime" : "crime",
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/vqEjXzWdzPbV2DZ7bk29weDFiDl.jpg",
  "country" : "us",
  "description" : "Spirit: Chú Ngựa Bất Kham Nhiều năm sau khi Milagro Navarro-Prescott biểu diễn tiết mục đặc trưng của mình trong rạp xiếc cho đến khi một tai nạn cướp đi sinh mạng của cô trong một buổi biểu diễn, cô con gái nhỏ còn sống của cô, Fortuna “Lucky” Navarro-Prescott, đã sống với dì Cora và ông nội James trong thành phố.  Lucky và Cora đến thị trấn Miradero, nơi họ sẽ ở với Jim, cha của Lucky trong mùa hè, người mà Lucky thực sự không biết tên sau sự cố với Milagro. Khi đến Miradero, cặp đôi gặp các tay đua trẻ địa phương Pru Granger và Abigail Stone.",
  "director" : "updating...",
  "id" : 158,
  "img" : "https://image.tmdb.org/t/p/w300/q4WaFHk9Vp1poc88X1szwFRtYc5.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Spirit: Chú Ngựa Bất Kham",
  "title_origin" : "Spirit Untamed",
  "type" : {
    "adventure" : "adventure",
    "anime" : "anime",
    "family" : "family",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/zm2kMjiz0u6qdn2XKbEbQkDiltN.jpg",
  "country" : "es",
  "description" : "",
  "director" : "updating...",
  "id" : 159,
  "img" : "https://image.tmdb.org/t/p/w300/pMyOSRURkxF6YId9vOTGsBH1jRb.jpg",
  "language" : "es",
  "length" : "updating...",
  "title" : "El Exorcismo de Carmen Farías",
  "title_origin" : "El Exorcismo de Carmen Farías",
  "type" : {
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/yjmqROw9fa9GahuUxvBFnoVYYMG.jpg",
  "country" : "ja",
  "description" : "",
  "director" : "updating...",
  "id" : 160,
  "img" : "https://image.tmdb.org/t/p/w300/sH8xCXLEbihNNVDbewddzkYnNPF.jpg",
  "language" : "ja",
  "length" : "updating...",
  "title" : "イエスかノーか半分か",
  "title_origin" : "イエスかノーか半分か",
  "type" : {
    "anime" : "anime",
    "drama" : "drama",
    "movie" : "movie",
    "romance" : "romance"
  },
  "year" : "2020"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/z9EaK0h0hGhrhwqWsp2WyIOIwQF.jpg",
  "country" : "us",
  "description" : "Bộ phim Biệt Đội G.I. Joe: Cuộc Chiến Mãng Xà kể về mâu thuẫn xảy ra giữa dòng họ McCullen-chuyên sản xuất vũ khí và nhà vua. Chuyên gia vũ khí McCullen bị bắt giam và bị gắn chiếc mặt nạ đang nóng đỏ vào mặt và nó trở thành một phần của cơ thể ông. Trong một tương lai gần của thế kỉ 21, nhà sản xuất vũ khí tên là James McCullen đã tạo ra một công nghệ từ lĩnh vực Nano. Sau khi nghiên cứu thành công khả năng tiêu diệt tế bào ung thư, ông đã đi đến một phát minh về một loại vũ khí mới có sức tàn phá kinh khủng. Tập đoàn MARS đã bán bốn đầu đạn Namomite này cho phía NATO, vì thế quân đội Mỹ tức US Army được lệnh phái tới là để áp tải chuyến hàng này. Sĩ quan quân đội Duke nhận lệnh chỉ huy đoàn vận chuyển đến trung tâm NATO, khi đội của anh vào trong một khu rừng thì bất ngờ bị một lực lượng lạ tấn công. Khi gần như bị đánh bại, Đội của Duke lại nhận được sự yểm trợ từ Biệt đội Joe. Cuộc chiến quyết liệt để chiếm hữu chiếc vali chứa đựng 4 đầu đạn.",
  "director" : "updating...",
  "id" : 161,
  "img" : "https://image.tmdb.org/t/p/w300/mc9b25IAprHfsaOz0wTshOwGHcY.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Biệt Đội G.I. Joe: Cuộc Chiến Mãng Xà",
  "title_origin" : "G.I. Joe: The Rise of Cobra",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2009"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/ztbvseeUyHh0PtKMAcB27LpRax3.jpg",
  "country" : "es",
  "description" : "",
  "director" : "updating...",
  "id" : 162,
  "img" : "https://image.tmdb.org/t/p/w300/vi7O7aHSultS7AcEpMVz30SAJw7.jpg",
  "language" : "es",
  "length" : "updating...",
  "title" : "Fuimos canciones",
  "title_origin" : "Fuimos canciones",
  "type" : {
    "comedy" : "comedy",
    "movie" : "movie",
    "romance" : "romance"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/5739NMdQF4HObAywXCNzPar7HTt.jpg",
  "country" : "us",
  "description" : "Phim Ác Thần kể lại cuộc đấu tranh sinh tồn khắc nghiệt và tàn bạo, một bên là đạo quân ác thần hùng mạnh do Đức Chúa trời phái xuống nhằm tiêu diệt tận gốc loài người như từng làm trước đây, khi dùng cơn đại hồng thủy. Tuy nhiên, Tổng lãnh Thiên thần Michael đã quyết định bất tuân lệnh Chúa, bí mật giáng trần và giúp đỡ những con người đang bị kẹt trong một nhà hàng hẻo lánh vùng sa mạc New Mexico. Đây chính là nơi có cô gái trẻ Charlie đang mang trong mình niềm hy vọng duy nhất của nhân loại, một đứa bé sau này sẽ trở thành Đấng Cứu Thế.",
  "director" : "updating...",
  "id" : 163,
  "img" : "https://image.tmdb.org/t/p/w300/ykocDqwg5PRUopnBVb1x1DWnEJF.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Ác Thần",
  "title_origin" : "Legion",
  "type" : {
    "action" : "action",
    "fantasy" : "fantasy",
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2010"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/y3XMIea7mwTzxt3NFFXi5YJKeFJ.jpg",
  "country" : "ja",
  "description" : "Những con quỷ đã từng gần như phá hủy thế giới, được hồi sinh bởi một ai đó. Để ngăn chặn thế giới bị hủy diệt, con quỷ phải bị phong ấn và người duy nhất có thể làm điều đó là cô gái đền thờ Shion từ đất nước của quỷ, người có hai sức mạnh; Một người đang phong ấn quỷ và người kia dự đoán về cái chết của con người. Lần này, nhiệm vụ của Naruto là bảo vệ Shion, nhưng cô dự đoán cái chết của Naruto. Cách duy nhất để thoát khỏi nó, là tránh xa Shion, thứ sẽ khiến cô không được bảo vệ, sau đó là con quỷ, mục tiêu duy nhất là giết Shion sẽ làm như vậy, nghĩa là ngày tận thế. Naruto quyết định thách thức \"dự đoán về cái chết\" này.",
  "director" : "updating...",
  "id" : 164,
  "img" : "https://image.tmdb.org/t/p/w300/vaEX9f8ud7iF0G7EoyGxAyRNV1p.jpg",
  "language" : "ja",
  "length" : "updating...",
  "title" : "Naruto Shippūden: Cái Chết Tiên Đoán",
  "title_origin" : "劇場版 NARUTO -ナルト- 疾風伝",
  "type" : {
    "action" : "action",
    "anime" : "anime",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2007"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/gawy1Of3OSx8960jJY7JK4HcTla.jpg",
  "country" : "pt",
  "description" : "",
  "director" : "updating...",
  "id" : 165,
  "img" : "https://image.tmdb.org/t/p/w300/suXQOby3Vtxth3WaCilyNiSGBb1.jpg",
  "language" : "pt",
  "length" : "updating...",
  "title" : "Quem Vai Ficar com Mário?",
  "title_origin" : "Quem Vai Ficar com Mário?",
  "type" : {
    "comedy" : "comedy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/3cetvzRrg8l94hWwt0rRyaISPMQ.jpg",
  "country" : "de",
  "description" : "",
  "director" : "updating...",
  "id" : 166,
  "img" : "https://image.tmdb.org/t/p/w300/6D7nfhHI7b9ZvW3m7wVMtBSbC9U.jpg",
  "language" : "de",
  "length" : "updating...",
  "title" : "Con Mồi",
  "title_origin" : "Prey",
  "type" : {
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/4IeNkuGCiCumz42jj6w5aUuPepI.jpg",
  "country" : "pl",
  "description" : "",
  "director" : "updating...",
  "id" : 167,
  "img" : "https://image.tmdb.org/t/p/w300/oeAGbCZ77zVfJAHhhsWfGewKle6.jpg",
  "language" : "pl",
  "length" : "updating...",
  "title" : "Sweat",
  "title_origin" : "Sweat",
  "type" : {
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/ur4NTeFGZmQ6Hz5uEkAMgPI3WRg.jpg",
  "country" : "us",
  "description" : "Cuộc sống gia đình Addams bị đảo lộn bởi sự xuất hiện trước cửa nhà đầy bất ngờ một người dẫn chương trình truyền hình thực tế xảo trá, trong khi họ đang chuẩn bị đón chào họ hàng thân thích đến dự đại lễ kỷ niệm của cả gia đình",
  "director" : "updating...",
  "id" : 168,
  "img" : "https://image.tmdb.org/t/p/w300/q1epO0eO8DWu8Vo8tPfvVlzW48T.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Gia Đình Addams",
  "title_origin" : "The Addams Family",
  "type" : {
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2019"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg",
  "country" : "us",
  "description" : "Điều gì khiến bạn là chính bạn? Cuối năm nay, hãng phim hoạt hình danh tiếng Pixar sẽ trình làng một tác phẩm mới mang tên SOUL – CUỘC SỐNG NHIỆM MÀU với nhân vật chính là Joe Gardner (Jamie Foxx lồng tiếng) một giáo viên dạy nhạc ở trường trung học. Anh vừa nhận được một cơ hội duy nhất trong đời khi có thể được tham gia chơi Jazz cho một ban nhạc nổi nhất thành phố. Nhưng một bước chân sai lầm đã đưa anh từ thành phố New York hoa lệ đến Cõi Trước – một nơi kỳ diệu mà ở đó các linh hồn được nhận tính cách, sở thích trước khi họ đi đến Trái Đất. Quyết tâm trở về cuộc đời của chính mình, Joe hợp tác với một linh hồn bất hảo mang tên 22 (lồng tiếng bởi Tina Fey) - người chưa bao giờ hiểu được sự hấp dẫn của cuộc sống loài người. Joe cố gắng hết mình để cho 22 thấy cuộc sống này nhiệm màu như thế nào, đồng thời anh ấy cũng khám phá ra câu trả lời quan trọng cho đời người.",
  "director" : "updating...",
  "id" : 169,
  "img" : "https://image.tmdb.org/t/p/w300/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Cuộc Sống Nhiệm Màu",
  "title_origin" : "Soul",
  "type" : {
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2020"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/2DyEk84XnbJEdPlGF43crxfdtHH.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 170,
  "img" : "https://image.tmdb.org/t/p/w300/2DyEk84XnbJEdPlGF43crxfdtHH.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Fast & Furious 10",
  "title_origin" : "Fast & Furious 10",
  "type" : {
    "action" : "action",
    "crime" : "crime",
    "movie" : "movie"
  },
  "year" : "2023"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/yO2LFaO62SoM1ZuOq26hWLF1TQ4.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 171,
  "img" : "https://image.tmdb.org/t/p/w300/bZUostLcCZYgcuBuAjmuSkBggiQ.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Ác Mộng Không Lối Thoát",
  "title_origin" : "No One Gets Out Alive",
  "type" : {
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/xdIsccWAECo0YF9aTrPoMFUZiJo.jpg",
  "country" : "us",
  "description" : "Bộ phim tập trung vào nhân vật Raizo (Rain), một trong những ninja sát thủ nguy hiểm nhất trên thế giới. Raiza thuở nhỏ là một đứa trẻ đường phố, được tổ chức Ozunu Clan, một tổ chức bí mật mà sự tồn tại của nó dường như vẫn là huyền thoại, nhận về nuôi và huấn luyện để trở thành sát thủ chuyên nghiệp. Nhưng Raizo bị ám ảnh bởi cách đối xử tàn nhẫn của tổ chức đối với bạn mình, Raizo quyết định trốn chạy và biến mất khỏi tổ chức. Raizo chờ đợi, và chuẩn bị thời cơ để trả thù.Tại Berlin, điệp vụ Mika Coretti chộp được manh mối về đường dây chuyển tiền giữa các sát thủ chuyên ám sát chính trị gia và một tổ chức sát thủ bí ẩn từ Viễn Đông. Thừa lệnh của cấp trên, Mika xâm nhập vào hệ thống tối ...",
  "director" : "updating...",
  "id" : 172,
  "img" : "https://image.tmdb.org/t/p/w300/eQdtVLcwloJ1oqVSdfxazZBYHtX.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Ninja Sát Thủ",
  "title_origin" : "Ninja Assassin",
  "type" : {
    "action" : "action",
    "movie" : "movie"
  },
  "year" : "2009"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/fPGeS6jgdLovQAKunNHX8l0avCy.jpg",
  "country" : "us",
  "description" : "Cốt truyện của tác phẩm theo chân John Kelly, một đặc vụ SEAL của Hải quân Hoa Kỳ bắt đầu con đường trả thù sau khi người vợ đang mang thai của anh ta và các thành viên trong đơn vị bị sát hại bởi những kẻ sát nhân người Nga.  Anh ta phải hợp tác với đồng nghiệp cũng là hải quân SEAL Karen Greer ( Jodie Turner-Smith ) và đặc vụ CIA mờ ám Robert Ritter  ( Jamie Bell ). Kelly cố gắng tìm ra sự thật kẻ đứng đằng sau các vụ tấn công, trong quá trình điều tra, anh đã phát hiện ra âm mưu bí mật chắc chắn sẽ dẫn tới chiến tranh, Kelly phải chiến đấu với kẻ thù của mình để ngăn chặn những thảm hoạ sắp xảy ra.",
  "director" : "updating...",
  "id" : 173,
  "img" : "https://image.tmdb.org/t/p/w300/6GCOpT8QcNzup09TAMmvvk22LTR.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Không Hối Tiếc",
  "title_origin" : "Tom Clancy's Without Remorse",
  "type" : {
    "action" : "action",
    "movie" : "movie",
    "war" : "war"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/kzIiKLccwuzD3qD5OHFyPIkiqEw.jpg",
  "country" : "ja",
  "description" : "Hai năm sau khi các sự kiện của cuộc Chiến tranh Thế giới Thứ tư Shinobi, mặt trăng bắt đầu đi xuống về phía Trái đất. Với trăng bây giờ là một ngôi sao băng đó sẽ phá hủy tất cả mọi thứ về tác động, Naruto phải đối phó với mối đe dọa này. Trong khi đó, Toneri Ōtsutsuki, một hậu duệ của Hamura Ōtsutsuki xác định thực hiện về di sản tổ tiên mình, xuất hiện và bắt cóc Hanabi Hyuga sau khi thất bại trong việc bắt lấy Hinata. Naruto, Hinata, Sakura, Sai, và Shikamaru được triển khai để đi giải cứu Hanabi.",
  "director" : "updating...",
  "id" : 174,
  "img" : "https://image.tmdb.org/t/p/w300/bAQ8O5Uw6FedtlCbJTutenzPVKd.jpg",
  "language" : "ja",
  "length" : "updating...",
  "title" : "Naruto: Trận Chiến Cuối Cùng",
  "title_origin" : "The Last: Naruto the Movie",
  "type" : {
    "action" : "action",
    "anime" : "anime",
    "movie" : "movie",
    "romance" : "romance"
  },
  "year" : "2014"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/3rwszCm4XyBtIWSjbUbgNwJOidu.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 175,
  "img" : "https://image.tmdb.org/t/p/w300/8Y4XOIWhpOvSOEn8XrxbkH9yAXO.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "The Voyeurs",
  "title_origin" : "The Voyeurs",
  "type" : {
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/6tPOZmNQ1tbzlhcMmyhYN1a1dEh.jpg",
  "country" : "pl",
  "description" : "Sau khi anh trai qua đời trong một tai nạn xe hơi, một võ sĩ MMA thất thế tiếp quản hộp đêm của gia đình và sớm nhận ra cái chết của anh mình không phải tai nạn.",
  "director" : "updating...",
  "id" : 176,
  "img" : "https://image.tmdb.org/t/p/w300/kOVko9u2CSwpU8zGj14Pzei6Eco.jpg",
  "language" : "pl",
  "length" : "updating...",
  "title" : "Võ Sĩ Báo Thù",
  "title_origin" : "Bartkowiak",
  "type" : {
    "action" : "action",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/sEyNWq9985lyUrwayWnvicT4FHA.jpg",
  "country" : "us",
  "description" : "Percy Jackson luôn gặp phải những rắc rối ở trường trung học nhưng hóa ra đó chỉ là những chuyện đơn giản của tuổi dậy thì. Còn thử thách mà cậu sẽ gặp phải chính là việc Percy khám phá ra rằng cha đẻ mình là Poseidon, vị thần biển cả, và điều đó có nghĩa rằng Percy là một á thần. Cùng lúc đó, thần Dớt, vua của các vị thần, đã buộc tội Percy ăn cắp vũ khí tối thượng của ông - tia sét quyền năng. Và bây giờ, tính mạng của Percy rơi vào vòng xoáy nguy hiểm, và cậu phải chuẩn bị cho một cuộc phiêu lưu lớn, với những giông bão hiểm nguy đang chờ dịp trút xuống thế giới…",
  "director" : "updating...",
  "id" : 177,
  "img" : "https://image.tmdb.org/t/p/w300/nmyrUTjmvZ3OQYZJrUKAoiBfMq5.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Percy Jackson: Kẻ Cắp Tia Chớp",
  "title_origin" : "Percy Jackson & the Olympians: The Lightning Thief",
  "type" : {
    "adventure" : "adventure",
    "family" : "family",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2010"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/fX8e94MEWSuTJExndVYxKsmA4Hw.jpg",
  "country" : "zh",
  "description" : "Người Tiên Phong bộ phim điện ảnh kể về công ty bảo an quốc tế Cấp Tiên Phong trong quá trình bảo vệ thương nhân Thái Quốc Lập và con gái ông là Fareeda đã anh dũng đối đầu với ” Sói Bắc Cực ” và đập tan kế hoạch do tổ chức sau lưng “Sói Bắc Cực” vạch ra.",
  "director" : "updating...",
  "id" : 178,
  "img" : "https://image.tmdb.org/t/p/w300/n4Wnc8Hxp5JyXd2lZVT1gRu2J0m.jpg",
  "language" : "zh",
  "length" : "updating...",
  "title" : "Người Tiên Phong",
  "title_origin" : "急先锋",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "crime" : "crime",
    "movie" : "movie"
  },
  "year" : "2020"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/7ni1wZqhYUYeItU1amz1dgEbSV9.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 179,
  "img" : "https://image.tmdb.org/t/p/w300/kEKQjLYZiIy78eEiMrtBfqSm3LU.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Stay Out of the Attic",
  "title_origin" : "Stay Out of the Attic",
  "type" : {
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/hqzIuGbwAYMKljhoXwtFFfOrg1J.jpg",
  "country" : "us",
  "description" : "Bộ phim xoay quanh một nhóm phi hành gia trên tàu vũ trụ U.S.S. Enterprise. Trong chuyến phiêu lưu đầy mạo hiểm, họ phải tìm cách ngăn chặn Thuyền trưởng Nero, thuộc tộc người Romulan, kẻ đang có âm mưu tàn sát toàn nhân loại.",
  "director" : "updating...",
  "id" : 180,
  "img" : "https://image.tmdb.org/t/p/w300/lV5OpzAss1z06YNagOVap1I35mH.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Du Hành Giữa Các Vì Sao",
  "title_origin" : "Star Trek",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2009"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/wu1uilmhM4TdluKi2ytfz8gidHf.jpg",
  "country" : "us",
  "description" : "Khi cậu bạn thân Gary đột nhiên bị bắt cóc, SpongeBob chiêu mộ Patrick cho một nhiệm vụ điên rồ vượt khỏi thị trấn Đáy Biển Bikini để cứu cậu bạn có vỏ màu hồng này.",
  "director" : "updating...",
  "id" : 181,
  "img" : "https://image.tmdb.org/t/p/w300/j8MRnCjuN7kpM8w3B5hM5mrvTaE.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Spongebob: Bọt Biển Đào Tẩu",
  "title_origin" : "The SpongeBob Movie: Sponge on the Run",
  "type" : {
    "adventure" : "adventure",
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2020"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/7vDOtDCVuwp84lvdLp7IxheNWWr.jpg",
  "country" : "us",
  "description" : "Boyka, 1 tù nhân người Nga, đang chịu đựng chấn thương đầu gối nghiêm trọng sau khi kết thúc phần 2 của Undisputed. Sau giải đấu đó, bây giờ anh chỉ quan tâm và giỏi nhất ở việc lau rửa toalet. Nhưng một cơ hội đã đến với anh khi một giải đấu quốc tế giữa các tù nhân trên thế giới diễn ra, đó chính là giải đấu Quyền Vương. Giải đấu bao gồm những võ sĩ tù nhân giỏi nhất thế giới quy tụ với giải thưởng chính là sự tự do cho người chiến thắng. Chính vì thế, Boyka đã đánh thức lòng kiêu hãnh của chính bản thân để đổi lấy sự tự do. Nhưng cuộc đấu khônghề dễ dàng đối với Boyka...",
  "director" : "updating...",
  "id" : 182,
  "img" : "https://image.tmdb.org/t/p/w300/g8KB77SPA7SyU8eid6TAEpt9skU.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Quyết Đấu 3: Chuộc Tội",
  "title_origin" : "Undisputed III: Redemption",
  "type" : {
    "action" : "action",
    "movie" : "movie"
  },
  "year" : "2010"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/jeAQdDX9nguP6YOX6QSWKDPkbBo.jpg",
  "country" : "us",
  "description" : "Trận chiến sinh tử quyết định số phận của Trái đất của các đấu sĩ nhân loại với Kẻ du hành sẽ bắt đầu ngay khi cánh cổng kết nối giữa 2 thế giới được mở ra. Danh hiệu đấu sĩ tối thượng và vận mệnh của Trái đất sẽ rơi vào tay ai?",
  "director" : "updating...",
  "id" : 183,
  "img" : "https://image.tmdb.org/t/p/w300/iiVfRW9VLqDF3cD6a2QQzpgct2u.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Đấu Sĩ Tối Thượng",
  "title_origin" : "Jiu Jitsu",
  "type" : {
    "action" : "action",
    "fantasy" : "fantasy",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2020"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/8rIoyM6zYXJNjzGseT3MRusMPWl.jpg",
  "country" : "us",
  "description" : "Trong chuyến đi chơi cùng bà, một cậu bé 7 tuổi vô tình lọt vào hội nghị của các phù thủy và bị Phù Thủy Tối Thượng biến thành chuột bằng một loại thuốc đặc biệt. Đây cũng chính là chất độc ả định dùng để biến tất cả trẻ em thành loài gặm nhấm. Cùng với bà mình, cậu bé phải tìm mọi cách trở lại hình dạng thật và đánh bại âm mưu của binh đoàn Phù Thủy.",
  "director" : "updating...",
  "id" : 184,
  "img" : "https://image.tmdb.org/t/p/w300/e9xlFwOrPpJ8b0iY1Efq2aZ865P.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Phù Thủy, Phù Thủy",
  "title_origin" : "Roald Dahl's The Witches",
  "type" : {
    "adventure" : "adventure",
    "comedy" : "comedy",
    "family" : "family",
    "fantasy" : "fantasy",
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2020"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/5wPWgTvdoVKW6ICeEAg86IBJOBW.jpg",
  "country" : "us",
  "description" : "Bị giáng cấp làm nhân viên tổng đài 911, vị thanh tra phiền muộn vật lộn để cứu một người gọi gặp nguy nan — trong một ngày u ám đầy những phát hiện và nhìn nhận.",
  "director" : "updating...",
  "id" : 185,
  "img" : "https://image.tmdb.org/t/p/w300/m8aR1k35oZMOzZ1kYWUyt401mwq.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Tổng Đài Truy Vết",
  "title_origin" : "The Guilty",
  "type" : {
    "crime" : "crime",
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/uicia399gyMGE1smatJ41M0CtFx.jpg",
  "country" : "ja",
  "description" : "Cuộc hành trình cậu bé Izuku sau học kỳ siêu anh hùng đầu tiên, cũng như sau khi trải qua những lần đối đầu với kẻ thù lớn nhất của thế giới là “All For One” - kẻ mang sức mạnh chiếm đoạt các dị năng khác. Mang nặng mối lo nhưng Izuku sẽ được thư giãn vui chơi tại hòn đảo của những nhà khoa học lừng danh và biết thêm về quá khứ của All Might. Tuy nhiên không vì lẽ đó mà cái ác chịu đứng yên khi những thế lực xấu tiếp tục lên kế hoạch tấn công vào hòn đảo kiên cố nhất thế giới này.",
  "director" : "updating...",
  "id" : 186,
  "img" : "https://image.tmdb.org/t/p/w300/iPQNR9i5zzPGklnilE4eCjfArQJ.jpg",
  "language" : "ja",
  "length" : "updating...",
  "title" : "Học Viện Siêu Anh Hùng: 2 Người Hùng",
  "title_origin" : "僕のヒーローアカデミア THE MOVIE ～2人の英雄～",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "anime" : "anime",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2018"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/1tDelhmpG8KzFdU3QvOhBScm4sS.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 187,
  "img" : "https://image.tmdb.org/t/p/w300/gPkaPGNbjZCeRurSYGi0JD63DBa.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "The Starling",
  "title_origin" : "The Starling",
  "type" : {
    "comedy" : "comedy",
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/wsztJfJvJW5nXxn5n0DIMzH2TDM.jpg",
  "country" : "us",
  "description" : "Cô gái nổi tiếng giỏi tân trang ngoại hình cá cược rằng cô có thể biến chàng bạn học mờ nhạt thành vua vũ hội. Làm lại từ phim tuổi teen kinh điển “Em là tất cả”.",
  "director" : "updating...",
  "id" : 188,
  "img" : "https://image.tmdb.org/t/p/w300/kW3AG5NHoyq52dcSbMiFB6LyHvk.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Anh Ấy Là Tất Cả",
  "title_origin" : "He's All That",
  "type" : {
    "comedy" : "comedy",
    "movie" : "movie",
    "romance" : "romance"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/g15PR8eQV9DehSWlagvdnJZqoRq.jpg",
  "country" : "us",
  "description" : "Làm việc trong cái bóng của một cựu cảnh sát đáng kính, thám tử dũng cảm Ezekiel “Zeke” Banks và cộng sự tân binh của anh ấy phụ trách một cuộc điều tra rùng rợn về những vụ giết người gợi nhớ đến quá khứ khủng khiếp của thành phố. Vô tình bị cuốn vào một bí ẩn ngày càng sâu sắc, Zeke thấy mình là trung tâm của trò chơi bệnh hoạn của kẻ giết người.",
  "director" : "updating...",
  "id" : 189,
  "img" : "https://image.tmdb.org/t/p/w300/lcyKve7nXRFgRyms9M1bndNkKOx.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Lưỡi Cưa 9",
  "title_origin" : "Spiral: From the Book of Saw",
  "type" : {
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/4kIRrW1AlHP5Idne8CPHeQt8nR5.jpg",
  "country" : "us",
  "description" : "Thiếu niên đầy quyết tâm Din đang mong tìm lại người bạn thân hồi nhỏ thì gặp một chú rồng có thể ban điều ước – nhân vật cho cậu thấy sự kỳ diệu của các khả năng.",
  "director" : "updating...",
  "id" : 190,
  "img" : "https://image.tmdb.org/t/p/w300/lnPf6hzANL6pVQTxUlsNYSuhT5l.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Ước Nguyện Thần Long",
  "title_origin" : "Wish Dragon",
  "type" : {
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/1EAxNqdkVnp48a7NUuNBHGflowM.jpg",
  "country" : "ja",
  "description" : "",
  "director" : "updating...",
  "id" : 191,
  "img" : "https://image.tmdb.org/t/p/w300/eadcE25WY7XlnlhPnE9HuDWeLLj.jpg",
  "language" : "ja",
  "length" : "updating...",
  "title" : "シン・エヴァンゲリオン劇場版:||",
  "title_origin" : "シン・エヴァンゲリオン劇場版:||",
  "type" : {
    "action" : "action",
    "anime" : "anime",
    "drama" : "drama",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/997ToEZvF2Obp9zNZbY5ELVnmrW.jpg",
  "country" : "us",
  "description" : "Cô gái trẻ yêu một chàng trai có bí mật đen tối và hai người bắt đầu mối quan hệ sắt đá. Bộ phim dựa trên cuốn tiểu thuyết của Anna Todd.",
  "director" : "updating...",
  "id" : 192,
  "img" : "https://image.tmdb.org/t/p/w300/u3B2YKUjWABcxXZ6Nm9h10hLUbh.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Sau Khi Ta Gặp Nhau",
  "title_origin" : "After",
  "type" : {
    "drama" : "drama",
    "movie" : "movie",
    "romance" : "romance"
  },
  "year" : "2019"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/pG3m1z6eSjcKHCVa8rQdtWCvul5.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 193,
  "img" : "https://image.tmdb.org/t/p/w300/3CF743g2BpC8r3mCVV9gSX2yQBj.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Dreamcatcher",
  "title_origin" : "Dreamcatcher",
  "type" : {
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/5C8bfwglg91uZhc2fbfpSjNGamV.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 194,
  "img" : "https://image.tmdb.org/t/p/w300/pxHo4FWIhwv2rETUPo0gvSceYJB.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Phố Fear Phần 1: 1994",
  "title_origin" : "Fear Street: 1994",
  "type" : {
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/3OwaKVZf3A2NdnarqKbwzFEhKir.jpg",
  "country" : "us",
  "description" : "Các anh hùng của “Thợ săn yêu tinh”, “Bộ ba trời giáng” và “Pháp sư” bắt tay chống lại kẻ thù mờ ám đe dọa chiếm lấy thế giới của họ – và tái thiết lập cả Trái đất.",
  "director" : "updating...",
  "id" : 195,
  "img" : "https://image.tmdb.org/t/p/w300/zvUNFeTz0Sssb210wSiIiHRjA4W.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Thợ Săn Yêu Tinh: Titan Trỗi Dậy",
  "title_origin" : "Trollhunters: Rise of the Titans",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "anime" : "anime",
    "family" : "family",
    "fantasy" : "fantasy",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/7vCOBYP52Mm8Nlc09hLUtWfxHjJ.jpg",
  "country" : "us",
  "description" : "Sau khi nhận Huân chương danh dự vì đã anh dung chống lại tổ chức ISIS, Đội trưởng Hải quân Mỹ Brad Paxton (Gary Dourdan) bị sang chấn do mắc kẹt ở chiến trường một thời giang dài. Anh quyết định sống cuộc đời bình lặng bên vợ mình là Kate (Seridan Swan) – một nhà khảo cổ học nổi tiếng. Trong lúc đó, Kate nhận được một cơ hội hiếm có ở Morocco và Brad vô cùng ủng hộ vợ mình theo đuổi ước mơ này. Tuy nhiên, khi Kate đến Morocco thì cô bị một nhóm khủng bố bắt cóc và chúng đòi khoản tiền chuộc 10 triệu đô. Cuộc đàm phán giữa Đại sứ quán Mỹ và bọn khủng bố để giải cứu Kate đã rơi vào bế tắc vì thoả thuận này sẽ ảnh hưởng đến quyền khai thác dầu mỏ của Liên hợp quốc tại đất nước này. Brad đành phải lao đến Morocco và dùng khả năng chinh chiến của mình để thực thi một nhiệm vụ nguy hiểm nhằm cứu lấy vợ. Liệu Brad có thành công?",
  "director" : "updating...",
  "id" : 196,
  "img" : "https://image.tmdb.org/t/p/w300/3SNzGBjpdVYnQ1TrXDQKoeG3TU1.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Cuộc Giải Cứu Sinh Tử",
  "title_origin" : "Redemption Day",
  "type" : {
    "action" : "action",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/fKQt8d5eY8Aa1kr0PdALAdkPhBK.jpg",
  "country" : "pt",
  "description" : "",
  "director" : "updating...",
  "id" : 197,
  "img" : "https://image.tmdb.org/t/p/w300/oYlAnaH1dClevLyKl5hkNqZeKib.jpg",
  "language" : "pt",
  "length" : "updating...",
  "title" : "Terapia do Medo",
  "title_origin" : "Terapia do Medo",
  "type" : {
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/osHKguxvXPIUJJzsO3DEORZZ8QD.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 198,
  "img" : "https://image.tmdb.org/t/p/w300/77tIJpDUV5maRnmAUnxT1bzz1Zp.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Sex and the City",
  "title_origin" : "Sex and the City",
  "type" : {
    "comedy" : "comedy",
    "drama" : "drama",
    "movie" : "movie",
    "romance" : "romance"
  },
  "year" : "2008"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/mH4uEns9gnbeJiJN4C4AjMv4H0W.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 199,
  "img" : "https://image.tmdb.org/t/p/w300/n3G5XLqmJSs4RvozoIsqaTWTHRq.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Lady of the Manor",
  "title_origin" : "Lady of the Manor",
  "type" : {
    "comedy" : "comedy",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
  "country" : "us",
  "description" : "Coco sẽ kể về hành trình của Miguel, một cậu bé say mê những giai điệu nhưng lại sinh trưởng trong một gia đình cấm đoán sự xuất hiện của âm nhạc. Miguel luôn nung nấu giấc mơ trở thành một nhạc sĩ nổi tiếng giống như thần tượng Ernesto de la Cruz. Tuy nhiên, truyền thống ngang trái của gia đình đã khiến cậu không thể chứng minh tài năng của mình.  Rũ bỏ thực tế phũ phàng, Miguel tìm thấy chính mình ở Vùng Đất Linh Hồn (Land of the Dead) tuyệt đẹp và đầy sắc màu sau một chuỗi sự kiện huyền bí. Trong hành trình khám phá vùng đất mới, Miguel gặp gỡ “chuyên gia xảo quyệt” Hector. Cả hai cùng tạo nên chuyến phiêu lưu kỳ diệu để lật mở những bí mật chưa được tiết lộ về lịch sử của gia đình Miguel.",
  "director" : "updating...",
  "id" : 200,
  "img" : "https://image.tmdb.org/t/p/w300/fhdzscFm7chtwWtZaean2HqVQcp.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Coco: Hội Ngộ Diệu Kỳ",
  "title_origin" : "Coco",
  "type" : {
    "adventure" : "adventure",
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2017"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/7lmBufEG7P7Y1HClYK3gCxYrkgS.jpg",
  "country" : "us",
  "description" : "Tony Stark tự hé lộ thân phận Người sắt của mình cho công chúng và chìm trong hào quang danh vọng. Một kẻ lạ mặt xuất hiện tấn công anh trên đường đua Monte Carlo. Tony bị hiện tượng nhiễm trùng máu đe dọa mạng sống, còn tên sát thủ kia bắt tay với đối thủ của tập đoàn Stark hòng thôn tính Tony.  Phần 2 của Người sắt là lần đầu tiên trợ thủ Warmachine xuất hiện. Phim cũng tiết lộ những bí mật về cha của Tony, Howard Stark, trước khi dẫn dắt câu chuyện sang nhân vật Captain America, đồng đội tương lai của Người sắt tại tổ chức SHIELD.",
  "director" : "updating...",
  "id" : 201,
  "img" : "https://image.tmdb.org/t/p/w300/1NHEyFPxKnsLdMuDVPy6AI7GRmE.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Người Sắt 2",
  "title_origin" : "Iron Man 2",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2010"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/miOnymJ0dN2psWBB8Vleo3fUyrc.jpg",
  "country" : "us",
  "description" : "Một người đàn ông vừa góa vợ phải đối đầu với sự hoài nghi, sợ hãi, đau lòng và cả bỉm dơ khi anh phải tự mình nuôi dạy con gái. Lấy cảm hứng từ câu chuyện có thật.",
  "director" : "updating...",
  "id" : 202,
  "img" : "https://image.tmdb.org/t/p/w300/pR2fzm82fl0giommpo310LBOMbV.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Làm Cha",
  "title_origin" : "Fatherhood",
  "type" : {
    "comedy" : "comedy",
    "drama" : "drama",
    "family" : "family",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/4QA7pKpmNgeXkhN1FFIBelHwr6V.jpg",
  "country" : "ja",
  "description" : "",
  "director" : "updating...",
  "id" : 203,
  "img" : "https://image.tmdb.org/t/p/w300/zAWaWUsVSMhZJmMVYj3WzwprQN7.jpg",
  "language" : "ja",
  "length" : "updating...",
  "title" : "劇場版 美少女戦士セーラームーンEternal 後編",
  "title_origin" : "劇場版 美少女戦士セーラームーンEternal 後編",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "anime" : "anime",
    "comedy" : "comedy",
    "drama" : "drama",
    "fantasy" : "fantasy",
    "movie" : "movie",
    "romance" : "romance"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/nNmJRkg8wWnRmzQDe2FwKbPIsJV.jpg",
  "country" : "us",
  "description" : "Marvel’s The Avengers là bộ phim giả tưởng kể về một nhóm siêu anh hùng với những khả năng đặc biệt, họ bao gồm: Người Sắt, Thor, Captain America, và Người Khổng Lồ được gọi chung với cái tên SHIELD. Mục đích của SHIELD là nhằm bảo vệ Trái đất khỏi âm mưu hủy hoại của những thế lực xấu từ ngoài địa cầu mà kẻ cầm đầu là Loki.",
  "director" : "updating...",
  "id" : 204,
  "img" : "https://image.tmdb.org/t/p/w300/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Biệt Đội Siêu Anh Hùng",
  "title_origin" : "The Avengers",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2012"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/2M2JxEv3HSpjnZWjY9NOdGgfUd.jpg",
  "country" : "us",
  "description" : "Vì lỡ yêu một phụ nữ, tên cướp ngân hàng chuyên nghiệp quyết định \"rửa tay gác kiếm\". Anh chấp nhận tự thú với FBI vì cuộc đời lương thiện sau này. Thế nhưng, \"cựu tướng cướp\" nhanh chóng phát hiện ra việc tiết lộ khoản tiền cướp ngân hàng ngày xưa cho các Đặc vụ liên bang là sai lầm nghiêm trọng. Liệu anh có thành công hoàn lương, trở về bên người phụ nữ mình yêu khi các đặc vụ tha hoa tìm cách đánh cắp số tiền?",
  "director" : "updating...",
  "id" : 205,
  "img" : "https://image.tmdb.org/t/p/w300/2hdY8UsYY0oEgO6DYfbGeT1q4fZ.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Phi Vụ Hoàn Lương",
  "title_origin" : "Honest Thief",
  "type" : {
    "action" : "action",
    "crime" : "crime",
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2020"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/yiWfT2Bl1Nul3Xie39Ahs3FqSjA.jpg",
  "country" : "us",
  "description" : "Đưa tính hành động, tình yêu, tình bạn, sự ghen tuông, niềm đam mê - những gì đã đưa Twilight và The Twilight Saga: New Moon trở thành bom tấn trên toàn thế giới - lên một tầm cao mới, The Twilight Saga: Eclipse được đốt cháy bởi những âm mưu báo thù và câu chuyện tình yêu ngang trái.",
  "director" : "updating...",
  "id" : 206,
  "img" : "https://image.tmdb.org/t/p/w300/3mFM80dPzSqoXXuC2UMvLIRWX32.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Chạng Vạng 3: Nhật Thực",
  "title_origin" : "The Twilight Saga: Eclipse",
  "type" : {
    "adventure" : "adventure",
    "drama" : "drama",
    "fantasy" : "fantasy",
    "movie" : "movie",
    "romance" : "romance"
  },
  "year" : "2010"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/jST0q4EMty2kYyggxxwvsjpHPOs.jpg",
  "country" : "es",
  "description" : "",
  "director" : "updating...",
  "id" : 207,
  "img" : "https://image.tmdb.org/t/p/w300/iM5kNvZzcMSmWv7CFTxnTu5zfoa.jpg",
  "language" : "es",
  "length" : "updating...",
  "title" : "Juega Conmigo",
  "title_origin" : "Juega Conmigo",
  "type" : {
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/oOZM1C3wZtsZtdidVgEazeas7U4.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 208,
  "img" : "https://image.tmdb.org/t/p/w300/c7xcqnMDVQ5v1hJBm3AZ5YikNe6.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Bốt Hôn 3",
  "title_origin" : "The Kissing Booth 3",
  "type" : {
    "comedy" : "comedy",
    "movie" : "movie",
    "romance" : "romance"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/vDR2h5uQNgWyx3fsEVnEOcNFibZ.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 209,
  "img" : "https://image.tmdb.org/t/p/w300/qmddUxRwbsxHa7oEXm4PWh1KZe8.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Girl in the Basement",
  "title_origin" : "Girl in the Basement",
  "type" : {
    "crime" : "crime",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
  "country" : "us",
  "description" : "Sau sự kiện hủy diệt tàn khốc, vũ trụ chìm trong cảnh hoang tàn. Với sự trợ giúp của những đồng minh còn sống sót, biệt đội siêu anh hùng Avengers tập hợp một lần nữa để đảo ngược hành động của Thanos và khôi phục lại trật tự của vũ trụ.",
  "director" : "updating...",
  "id" : 210,
  "img" : "https://image.tmdb.org/t/p/w300/8go3YE9sBMQaCXEx23j6BAfeuxd.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Biệt Đội Siêu Anh Hùng: Hồi Kết",
  "title_origin" : "Avengers: Endgame",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2019"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/4cAc7XIe0CWgOZD1hF7z2OhfQ4P.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 211,
  "img" : "https://image.tmdb.org/t/p/w300/3Z2f50SKyHMWLLFH8OsV6hFoKLF.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Cirque du Freak: The Vampire's Assistant",
  "title_origin" : "Cirque du Freak: The Vampire's Assistant",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2009"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/bjfoBpZ5qP71wrUwGCLTZ2tDtw8.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 212,
  "img" : "https://image.tmdb.org/t/p/w300/2RKGUCbo2R6IDsufxApL6nRFL4j.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Brothers by Blood",
  "title_origin" : "Brothers by Blood",
  "type" : {
    "action" : "action",
    "crime" : "crime",
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2020"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/5n5BWIljsaeKf5wzwohjKuI7dG4.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 213,
  "img" : "https://image.tmdb.org/t/p/w300/h3v0rsQvik8yMh3LStRiDu0GTHP.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Birds of Paradise",
  "title_origin" : "Birds of Paradise",
  "type" : {
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/msU3F9DVNFvCsQVxhxliyWSO03D.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 214,
  "img" : "https://image.tmdb.org/t/p/w300/zgwRTYWEEPivTwjB9S03HtmMcbM.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "The Last Airbender",
  "title_origin" : "The Last Airbender",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2010"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/ganM82DDp4QQz2qa7Xjt0sq0uz5.jpg",
  "country" : "us",
  "description" : "Khi một vụ đột nhập và cướp tài sản ở một ngôi nhà diễn biến theo hướng tồi tệ, kẻ sống sót duy nhất sẽ chỉ dừng lại khi việc trả thù cho những người mà anh yêu quý hoàn tất. Clyde Shelton (Gerard Butler) thuộc tuýp người đàn ông đứng đắn của gia đình. Anh có vợ và con gái bị giết hại một cách dã man trong một vụ đột nhập nhà trái phép. Khi những tên sát thủ bị bắt, Nick Rice (Jamie Foxx) – công tố viên nổi tiếng của Philadelphia – được phân công thẩm định vụ án. Nick đã xử một trong những nghi phạm một bản án khá nhẹ để đổi lấy việc lấy lời khai chống lại đồng bọn của hắn.10 năm sau, người ta tìm thấy xác của một gã thoát tội giết người. Clyde Shelton bình thản nhận tội là đã giết hắn. Sau đó, anh cảnh báo ...",
  "director" : "updating...",
  "id" : 215,
  "img" : "https://image.tmdb.org/t/p/w300/fcEXcip7v0O1ndV4VUdFqJSqbOg.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Công Lý Báo Thù",
  "title_origin" : "Law Abiding Citizen",
  "type" : {
    "crime" : "crime",
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2009"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/ng6SSB3JhbcpKTwbPDsRwUYK8Cq.jpg",
  "country" : "us",
  "description" : "Hậu chiến Vô Cực, Người Nhện Peter Parker và nhóm bạn thân cùng tham gia chuyến du lịch châu Âu của trường. Tuy nhiên, kế hoạch siêu anh hùng nghỉ phép của Peter nhanh chóng bị hủy bỏ sau khi cậu đồng ý giúp Nick Fury khám phá bí ẩn về những cuộc tấn công của nhóm kẻ thù mang sức mạnh nguyên tố đang tàn phá khắp lục địa.",
  "director" : "updating...",
  "id" : 216,
  "img" : "https://image.tmdb.org/t/p/w300/wAGRyMHG2lPgrqRFeB7w4dwhrh0.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Người Nhện: Xa Nhà",
  "title_origin" : "Spider-Man: Far From Home",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2019"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/xZiMSXA8w1T2nWlXPDjN0RAYOvQ.jpg",
  "country" : "zh",
  "description" : "",
  "director" : "updating...",
  "id" : 217,
  "img" : "https://image.tmdb.org/t/p/w300/h4HcBZC8XMuSFBNxWu7qd34tFDI.jpg",
  "language" : "zh",
  "length" : "updating...",
  "title" : "Sao Hoả Dị Biến",
  "title_origin" : "火星异变",
  "type" : {
    "drama" : "drama",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/2nU5H8XIgtMkJrxsryP6nJuAHQ.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 218,
  "img" : "https://image.tmdb.org/t/p/w300/w7PJ7fBEYOuaAMKfYa4zmw45v3N.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Smelliville",
  "title_origin" : "Smelliville",
  "type" : {
    "adventure" : "adventure",
    "anime" : "anime",
    "drama" : "drama",
    "family" : "family",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/ejaUbNdNiWqajKlQSDCeTEOeh3g.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 219,
  "img" : "https://image.tmdb.org/t/p/w300/qDI6PbIjeEdLUoPHGaZqDMV9Fdx.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "The King of Fighters",
  "title_origin" : "The King of Fighters",
  "type" : {
    "action" : "action",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2010"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/szY15QJKhed0nhUz1NONTz1vez5.jpg",
  "country" : "us",
  "description" : "Lấy bối cảnh trước các sự kiện của ‘Soul’, 22 từ chối xuống Trái đất, gia nhập một nhóm gồm 5 linh hồn mới nhằm tìm cách nổi loạn. Tuy nhiên, âm mưu lật đổ của 22 dẫn đến một tiết lộ đáng ngạc nhiên về ý nghĩa của cuộc sống.",
  "director" : "updating...",
  "id" : 220,
  "img" : "https://image.tmdb.org/t/p/w300/wnWMxwpXRFIEmwjhULNGYGg8SEM.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "22 vs. Trái Đất",
  "title_origin" : "22 vs. Earth",
  "type" : {
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/qMxpGzmmnY1jLd4p7EhhoW43wWF.jpg",
  "country" : "ja",
  "description" : "",
  "director" : "updating...",
  "id" : 221,
  "img" : "https://image.tmdb.org/t/p/w300/6YAUvfEE5a5T4uTvQdRjtQKJDuF.jpg",
  "language" : "ja",
  "length" : "updating...",
  "title" : "アーヤと魔女",
  "title_origin" : "アーヤと魔女",
  "type" : {
    "anime" : "anime",
    "family" : "family",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/mYM8x2Atv4MaLulaV0KVJWI1Djv.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 222,
  "img" : "https://image.tmdb.org/t/p/w300/AoWY1gkcNzabh229Icboa1Ff0BM.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Vanquish",
  "title_origin" : "Vanquish",
  "type" : {
    "action" : "action",
    "crime" : "crime",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/bNiuvw5cZBAUZ7OtH7ZtHycWJlT.jpg",
  "country" : "es",
  "description" : "",
  "director" : "updating...",
  "id" : 223,
  "img" : "https://image.tmdb.org/t/p/w300/bAdokq9itL5WDRsMu52NnJTTyQz.jpg",
  "language" : "es",
  "length" : "updating...",
  "title" : "Lokillo: nada es igual",
  "title_origin" : "Lokillo: nada es igual",
  "type" : {
    "comedy" : "comedy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/f53Jujiap580mgfefID0T0g2e17.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 224,
  "img" : "https://image.tmdb.org/t/p/w300/fYiaBZDjyXjvlY6EDZMAxIhBO1I.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "LEGO Star Wars Terrifying Tales",
  "title_origin" : "LEGO Star Wars Terrifying Tales",
  "type" : {
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "horror" : "horror",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/u7SeO6Y42P7VCTWLhpnL96cyOqd.jpg",
  "country" : "us",
  "description" : "“Mỗi ngày tôi thức dậy và biết rằng, tôi càng cố cứu thêm nhiều người, có nghĩa tôi đang tạo ra nhiều kẻ thù hơn. Và đó chỉ là vấn đề thời gian, khi tôi phải đối mặt với những kẻ thù mạnh hơn mà tôi không thể đánh bại” – Câu nói của Người nhện báo trước cho sự xuất hiện của một loạt những kẻ thù nguy hiểm mà cậu sẽ phải đối đầu trong phần phim tiếp theo. Ngoài Electro (Jamie Foxx) đã xuất hiện trong đoạn teaser trước đây, người hùng giấu mặt Peter Parker sẽ phải chiến đấu chống lại Rhino (Paul Giamatti) và Green Goblin (Dane DeHaan).",
  "director" : "updating...",
  "id" : 225,
  "img" : "https://image.tmdb.org/t/p/w300/foJVlqwPUyvFEJTJqaPOnxKdqOj.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Người Nhện Siêu Đẳng 2",
  "title_origin" : "The Amazing Spider-Man 2",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2014"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/DA7gzvlBoxMNL0XmGgTZOyv67P.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 226,
  "img" : "https://image.tmdb.org/t/p/w300/zfdhsR3Y3xw42OHrMpi0oBw0Uk8.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Once Upon a Snowman",
  "title_origin" : "Once Upon a Snowman",
  "type" : {
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2020"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/TB88CYene7rzMs32FzFTLs0eU4.jpg",
  "country" : "us",
  "description" : "Lao đao vì cả cuộc đính hôn và sự nghiệp đều đổ bể, cô ca sĩ nhận biểu diễn ở một khu resort hạng sang trên đảo – nơi tình cờ là địa điểm đám cưới vị hôn phu cũ của cô.",
  "director" : "updating...",
  "id" : 227,
  "img" : "https://image.tmdb.org/t/p/w300/6TrkFcgCF8Vznk45rs3qvxxejiV.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Chặng Nghỉ Tình Yêu",
  "title_origin" : "Resort to Love",
  "type" : {
    "comedy" : "comedy",
    "movie" : "movie",
    "romance" : "romance"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/aAboL38GYEeJFMdu6NAsyPLT4tU.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 228,
  "img" : "https://image.tmdb.org/t/p/w300/kFDmVlJoa165FMlHpmnVLUeNSYc.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Universal Soldier: Regeneration",
  "title_origin" : "Universal Soldier: Regeneration",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2009"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/za2MCwq5Trnwa2t5yXB4PvTjLtx.jpg",
  "country" : "us",
  "description" : "Bối cảnh phim trong cuộc Đại khủng hoảng - thời kỳ suy thoái kinh tế từ năm 1929 đến hết các năm 1930 ở Mỹ. Nội dung xoay quanh cuộc đấu trí đấu tài tình giữa một trong những nhân viên đầu tiên của FBI là Melvin Purvis (Christian Bale) và tên tội phạm John Dillinger (Johnny Depp) cùng đồng bọn Pretty Boy Floyd (Channing Tatum), những kẻ cướp nhà băng lừng danh đã gây ra làn sóng tội ác kinh hoàng tại vùng Trung Tây nước Mỹ. Không ai có thể ngăn Dillinger và đồng bọn, không nhà tù nào giữ chân được hắn. Tuy nhiên, người dân lại xem Dillinger như một kẻ đáng ngưỡng mộ và cảm kích, coi anh ta là một người hiệp nghĩa kiểu Robin Hood vì anh ta đã cướp tiền từ những ngân hàng mà họ cho là phải chịu trách nhiệm cho cuộc Đại khủng hoảng.",
  "director" : "updating...",
  "id" : 229,
  "img" : "https://image.tmdb.org/t/p/w300/ezFQaPf4cOEfsl39Me0gSV29d7V.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Kẻ Thù Quốc Gia",
  "title_origin" : "Public Enemies",
  "type" : {
    "crime" : "crime",
    "history" : "history",
    "movie" : "movie"
  },
  "year" : "2009"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/pvxmYJcgrLiYC6G2IQTn1PPNems.jpg",
  "country" : "us",
  "description" : "Bộ phim là một viễn cảnh được dựng lên về tương lai của Trái Đất vào năm \"đại họa\" năm 2012. Thay vì đề cập đến các trận động đất hay các đợt thủy triều khổng lồ như trong phim 2012 thì bộ phim lại miêu tả 2012 là năm của kỷ băng hà, một kỷ nguyên mới mà băng hà sẽ thống trị Trái Đất. Siêu núi lửa Fuji phun trào mây mù dày đặc bao phủ khắp nơi trên Trái Đất, nhân loại phải đối mặt với một sự diệt chủng mới, không ánh nắng mặt trời, nhiệt độ ngày càng hạn thấp. Và một nhóm nhà khoa học đã chiến đấu để ngăn chặn kỷ nguyên băng hà mới...",
  "director" : "updating...",
  "id" : 230,
  "img" : "https://image.tmdb.org/t/p/w300/8i1xFqcItT6GKEbY6VDbFnxe7sJ.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Năm Đại Họa 2012",
  "title_origin" : "2012",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2009"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/3ombg55JQiIpoPnXYb2oYdr6DtP.jpg",
  "country" : "us",
  "description" : "SKYLIN3S - phim hành động giả tưởng, xoay quanh cuộc xâm lăng Trái Đất của một chủng tộc người ngoài hành tinh. 15 năm sau kết thúc của phần hai, một loại virus mới đã xuất hiện và xâm nhập vào những người ngoài hành tinh đang sinh sống trên Trái Đất. Loại virus này khiến những sinh vật từ thân thiện trở nên hung hãn và chống lại con người. Đội trưởng Rose Corley phải lãnh đạo một đội lính đánh thuê tinh thuệ, tham gia nhiệm vụ đến thế giới ngoài hành tinh để cứu những gì còn lại của nhân loại.",
  "director" : "updating...",
  "id" : 231,
  "img" : "https://image.tmdb.org/t/p/w300/ig5hyy1TROHvkgbBes2TBCJl1cq.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Cuộc Chiến Hủy Diệt",
  "title_origin" : "Skylines",
  "type" : {
    "action" : "action",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2020"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/z81ZWXB0RNj6IRrYP9ckQh2KyB9.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 232,
  "img" : "https://image.tmdb.org/t/p/w300/40qxr2p2s297Q1mWFJOsRatQPK0.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Zack and Miri Make a Porno",
  "title_origin" : "Zack and Miri Make a Porno",
  "type" : {
    "comedy" : "comedy",
    "movie" : "movie"
  },
  "year" : "2008"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/ouOojiypBE6CD1aqcHPVq7cJf2R.jpg",
  "country" : "us",
  "description" : "Một chuyên gia sinh tồn có nhiệm vụ bảo vệ nhân chứng một vụ giết người đang bị truy sát giữa rừng.",
  "director" : "updating...",
  "id" : 233,
  "img" : "https://image.tmdb.org/t/p/w300/4naB7B5PB46wCjF79VP4Gyl1M1X.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Kẻ Nguyền Ta Chết",
  "title_origin" : "Those Who Wish Me Dead",
  "type" : {
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/A0xW7GgeFQoQmPOn7HcHkBQ5nlb.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 234,
  "img" : "https://image.tmdb.org/t/p/w300/ccsSqbpEqr2KK9eMvoeF8ERFCd5.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Endangered Species",
  "title_origin" : "Endangered Species",
  "type" : {
    "action" : "action",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/lOSdUkGQmbAl5JQ3QoHqBZUbZhC.jpg",
  "country" : "us",
  "description" : "Trong tương lai không xa, một phi công máy bay không người lái ở vùng chiến sự phải hợp tác với một sĩ quan người máy tuyệt mật nhằm ngăn chặn một vụ tấn công hạt nhân.",
  "director" : "updating...",
  "id" : 235,
  "img" : "https://image.tmdb.org/t/p/w300/gGkFDz4waJJqdrnGhnaUVZZHPHR.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Vùng Chiến Sự Hiểm Nguy",
  "title_origin" : "Outside the Wire",
  "type" : {
    "action" : "action",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/uILX4gGU9OqpndR7JXENn29MoEv.jpg",
  "country" : "es",
  "description" : "Là một tác phẩm trộm cướp đột phá và cuốn hút đến từ đất nước Tây Ban Nha, La Casa De Papel kể về một nhóm những tội phạm tập hợp lại cho một phi vụ lịch sử: đột nhập Royal Mint of Spain – sở đúc tiền hoàng gia của Tây Ban Nha và tiến hành trộm hàng tỷ euro.\r Không dừng lại ở việc lấy tiền rồi chạy trốn, kế hoạch của gang trộm này còn bao gồm… in thêm tiền, bắt giữ con tin kéo dài đến hàng chục ngày được thiết kế tỉ mẩn và cực kỳ thông minh bởi nhân vật trùm cuối mang tên Profesor (Giáo Sư). Cùng lúc đó, băng tội phạm sẽ phải cân não với lực lượng cảnh sát, thám tử cũng đang cố gắng giải vây cho nhóm con tin bị bắt giữ.",
  "director" : "updating...",
  "id" : 236,
  "img" : "https://image.tmdb.org/t/p/w300/AboUXTrDWEi0PuZUqaft0iwBTm7.jpg",
  "language" : "es",
  "length" : "updating...",
  "title" : "Phi Vụ Triệu Đô",
  "title_origin" : "La Casa de Papel: el fenómeno",
  "type" : {
    "document" : "document",
    "movie" : "movie"
  },
  "year" : "2020"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
  "country" : "us",
  "description" : "Dom Cobb không phải là một đạo chích tầm thường, anh ta là bậc thầy về đánh cắp, có thể xâm nhập vào cõi vô thức của bất kỳ người nào để đánh cắp những bí mật thầm kín nhất của người đó. Muốn thực hiện chuyện này, anh ta bước vào những giấc mơ của người đó.  “Chúng ta tạo ra thế giới của giấc mơ. Chúng ta đưa đối tượng vào thế giới giấc mơ đó và đối tượng sẽ phun ra hết những bí mật, rồi chúng ta sẽ đánh cắp các bí mật đó.” Nhưng đã đến lúc Cobb mệt mỏi với những tội phạm thực hiện theo yêu cầu của các tổng công ty. Anh muốn quay lại cuộc sống bình thường như mọi người. Muốn vậy, anh phải làm một công tác cuối cùng cho Saito, một đại gia nắm tẩy của Cobb trước nhà chức trách Mỹ. Nhưng thay vì đánh cắp thông tin, Saito muốn cấy một ý tưởng vào óc của tổng công ty đối thủ cạnh tranh. Khi đã mang ý tưởng ấy rồi, đối thủ này chỉ có một con đường là sập tiệm.",
  "director" : "updating...",
  "id" : 237,
  "img" : "https://image.tmdb.org/t/p/w300/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Kẻ Đánh Cắp Giấc Mơ",
  "title_origin" : "Inception",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2010"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/5MgMCnslrxQfOfaq6T5ndkLlcCk.jpg",
  "country" : "ja",
  "description" : "Có một tin đồn trong thế giới học đường, ấy là về một hiện tượng kì bí gọi là \"hội chứng tuổi mới lớn\". Một ngày nọ, cậu học sinh cao trung Sakuta Azusagawa đột nhiên thấy một cô gái tai thỏ xinh đẹp xuất hiện trước mặt mình. Cô gái ấy chính là Mai Sakurajima - đàn chị lớp trên của Sakuta và là một nữ diễn viên nổi tiếng hiện đang tạm nghỉ. Không hiểu vì lý do gì mà chỉ có mình Sakuta thấy cái tai thỏ của Mai mà thôi, không ai ngoài cậu có thể thấy được cả. Thế là Sakuta quyết định tìm cách giải mã bí ẩn này. Cậu tiếp cận và dành nhiều thời gian với Mai hơn, và từ đó, cậu dần hiểu ra những cảm xúc bí mật được giấu kín trong Mai. Nào ngờ đâu, những cô gái khác với \"hội chứng tuổi mới lớn\" cũng bắt đầu xuất hiện trước mặt Sakuta.",
  "director" : "updating...",
  "id" : 238,
  "img" : "https://image.tmdb.org/t/p/w300/lyx0rfL4g6mfUJfSC17pEYXR3xW.jpg",
  "language" : "ja",
  "length" : "updating...",
  "title" : "Hội Chứng Tuổi Mới Lớn",
  "title_origin" : "青春ブタ野郎はゆめみる少女の夢を見ない",
  "type" : {
    "anime" : "anime",
    "comedy" : "comedy",
    "drama" : "drama",
    "fantasy" : "fantasy",
    "romance" : "romance",
    "series" : "series"
  },
  "year" : "2019"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/ok7RdHhVngnwkvKj09tvtOvypG.jpg",
  "country" : "us",
  "description" : "Phim lấy bối cảnh vào những năm 1955 ở Detroit, một nhóm tổ chức tội phạm gồm những người giỏi được một người bí ẩn thuê để đánh cắp một tài liệu mật, tưởng chừng chỉ là một tài liệu thông thường thì nhóm vô tình phát hiện ra một sự thật đăng sau tài liệu này, và điều điên rồ hơn là họ lại đi điều tra chính người dã thuê họ làm điều đó",
  "director" : "updating...",
  "id" : 239,
  "img" : "https://image.tmdb.org/t/p/w300/34BmdJkdvRweC3xJJFlOFQ2IbYc.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Sập Bẫy",
  "title_origin" : "No Sudden Move",
  "type" : {
    "crime" : "crime",
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/ovggmAOu1IbPGTQE8lg4lBasNC7.jpg",
  "country" : "us",
  "description" : "Todd Hewwitt (Tom Holland) tình cờ phát hiện ra Viola (Daisy Ridley)- một cô gái sống sót sau khi phi thuyền của cô gặp nạn và rơi xuống hành tinh của cậu. Hành tinh này không hề có bóng dáng phụ nữ, còn đàn ông thì bị ảnh hưởng bởi 'Tiếng Ồn' - một thế lực thể hiện toàn bộ suy nghĩ của họ ra bên ngoài. Vì là cô gái duy nhất trên hành tinh kì lạ này, tính mạng của Viola bị đe dọa. Todd quyết tâm bảo vệ Viola và cả hai bị cuốn vào cuộc phiêu lưu nguy hiểm. Từ đó, Todd dần khám phá ra năng lực đặc biệt của mình, và phát hiện ra những bí mật đen tối của hành tinh mà cậu đang sống.",
  "director" : "updating...",
  "id" : 240,
  "img" : "https://image.tmdb.org/t/p/w300/c0ZWIxdj4I3PqizOOvHFYw6eDBO.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Hành Tinh Hỗn Loạn",
  "title_origin" : "Chaos Walking",
  "type" : {
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/m03jul0YdVEOFXEQVUv6pOVQYGL.jpg",
  "country" : "us",
  "description" : "Đã quá ngán với cường độ làm việc chăm chỉ 365 ngày không nghỉ, bá tước Dracula quyết định “đình công”. Để khai sáng cho người cha trăm tuổi chưa bao giờ bước ra khỏi “lũy tre làng”, vợ chồng nhà Jonathan – Mavis lập ra kế hoạch xả hơi táo bạo: Thuê đứt một em du thuyền hạng sang để đưa tất cả bộ xậu quái vật già trẻ lớn bé làm một chuyến ra khơi nhớ đời. Đồ ăn sang chảnh, bãi biển tuyệt đẹp, giải trí đỉnh cao và cả tam giác quỷ Bermuda?",
  "director" : "updating...",
  "id" : 241,
  "img" : "https://image.tmdb.org/t/p/w300/o7RY5zNHdH2heGS1hET2Rt6hZOe.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Khách Sạn Huyền Bí 3",
  "title_origin" : "Hotel Transylvania 3: Summer Vacation",
  "type" : {
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2018"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/g9fS7s8V54wyFRc2O9iAowPJCNB.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 242,
  "img" : "https://image.tmdb.org/t/p/w300/jjV1DY1SlGI1eUJAXSdre8bpw7t.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Daisy Quokka: World's Scariest Animal",
  "title_origin" : "Daisy Quokka: World's Scariest Animal",
  "type" : {
    "anime" : "anime",
    "comedy" : "comedy",
    "family" : "family",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/owAe5rRStnX7ibVAPmza3NCXjCy.jpg",
  "country" : "us",
  "description" : "Bộ phim được chuyển thể từ cuốn tiểu thuyết Chuck Hogan 's Prince of Thieves . Ngoài ra bộ phim còn có sự góp mặt của dàn diễn viên gồm: Rebecca Hall, Jon Hamm, Jeremy Renner, Blake Lively, Titus Welliver, Pete Postlethwaite và Chris Cooper họ vào vai những người theo dõi một nhóm những tên cướp ngân hàng ở Boston và đặt ra mục tiêu cuối cùng bằng cách cướp lấy Fenway Park .",
  "director" : "updating...",
  "id" : 243,
  "img" : "https://image.tmdb.org/t/p/w300/3NIzyXkfylsjflRKSz8Fts3lXzm.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Thị Trấn Tội Ác",
  "title_origin" : "The Town",
  "type" : {
    "crime" : "crime",
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2010"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/6XVqVAMOsKL5C26pHesiAawuGYW.jpg",
  "country" : "us",
  "description" : "Phim đưa chúng ta theo chân một nhóm bạn đến Harpers Ferry, Tây Virginia để dành vài ngày đi bộ đường dài trên đường mòn Appalachian. Chuỗi ngày “không may mắn” của họ bắt đầu khi phải đối mặt với “The Foundation” – một cộng đồng những người đã sống trên núi từ trước Nội chiến, và họ không ưa gì với người lạ, thậm chí muốn tiêu diệt bất cứ người lạ nào mà họ gặp.",
  "director" : "updating...",
  "id" : 244,
  "img" : "https://image.tmdb.org/t/p/w300/4U1SBHmwHkNA0eHZ2n1CuiC1K1g.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Ngã Rẽ Tử Thần",
  "title_origin" : "Wrong Turn",
  "type" : {
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/kIG81E0H4CxuYIRgyNyD0z3KSlM.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 245,
  "img" : "https://image.tmdb.org/t/p/w300/1hT1HXhSgLHW3XEAcsgsZNfhbiY.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Halloween Kills",
  "title_origin" : "Halloween Kills",
  "type" : {
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/kujUJjGGKNN2d7G5NcCnplZPfGd.jpg",
  "country" : "es",
  "description" : "",
  "director" : "updating...",
  "id" : 246,
  "img" : "https://image.tmdb.org/t/p/w300/i2XCKfV81GcDbXbDNM80kK25Y0o.jpg",
  "language" : "es",
  "length" : "updating...",
  "title" : "Celda 211",
  "title_origin" : "Celda 211",
  "type" : {
    "action" : "action",
    "drama" : "drama",
    "movie" : "movie"
  },
  "year" : "2009"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/y2Cl2LBYaabgtSLlOa4VqnOiNin.jpg",
  "country" : "us",
  "description" : "Câu bé Dre Parker, 12 tuổi theo mẹ di chuyển từ thành phố Detroit, Mỹ sang Bắc Kinh, Trung Quốc. Tại đây, ngỡ ngàng với cuộc sống mới, khác biệt về ngôn ngữ, Dre vô tình gây sự đánh nhau với những học sinh giỏi kungfu Trung Quốc cùng trường. Để lấy lại danh dự và cũng để chinh phục cô bạn gái Mỹ Anh xinh đẹp, Dre quyết tâm \"đi học võ\". Và vị sư phụ chính là ông thợ điện bí ẩn sống cùng khu phố.",
  "director" : "updating...",
  "id" : 247,
  "img" : "https://image.tmdb.org/t/p/w300/bGVimVqh4JlfjdRxfm1IDW8LdZu.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Cậu Bé Karate",
  "title_origin" : "The Karate Kid",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "drama" : "drama",
    "family" : "family",
    "movie" : "movie"
  },
  "year" : "2010"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/hoQhlAskVNgLQhArnH7reWP4pUp.jpg",
  "country" : "us",
  "description" : "Trong tập phim lần này, toàn bộ hồ sơ tuyệt mật về các điệp viên nằm vùng mà MI6 cài đặt khắp thế giới bị phát tán. Sinh mệnh tổ chức tình báo này bị đe dọa nặng nề. M - người đứng đầu MI6 - phải vận dụng mọi khả năng ứng biến để cứu vãn tình hình. 007 là niềm hy vọng duy nhất của M. Tuy nhiên, kẻ thù nguy hiểm nhất từ trước tới nay là Silva đã lật tẩy nhiều bí mật đáng sợ trong quá khứ của M. Điều này thử thách lòng trung thành của James Bond cũng như tương lai của MI6…",
  "director" : "updating...",
  "id" : 248,
  "img" : "https://image.tmdb.org/t/p/w300/izrHg2UzxG3YXTBcKFaUbYp9LWA.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Điệp Viên 007: Tử Địa Skyfall",
  "title_origin" : "Skyfall",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "movie" : "movie"
  },
  "year" : "2012"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg",
  "country" : "us",
  "description" : "Ở bên kia vũ trụ, Thor (Chris Hemsworth) phải bước vào một cuộc chiến đầy khốc liệt với đối thủ mà anh sẽ gặp là một đồng đội cũ đến từ biệt đội Avenger – Hulk. Cuộc tìm kiếm sự sống còn của Thor khiến anh phải chạy đua với thời gian để ngăn chặn Hela (Cate Blanchett) tiêu diệt cả thế giới anh đang sống cùng nền văn minh Asgard.",
  "director" : "updating...",
  "id" : 249,
  "img" : "https://image.tmdb.org/t/p/w300/8hnNdUFlUkjPWxKDyiE4Kn8h7Q5.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Thần Sấm 3: Tận Thế Ragnarok",
  "title_origin" : "Thor: Ragnarok",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "comedy" : "comedy",
    "fantasy" : "fantasy",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2017"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/yVSgw4UyXWg0Edl7KMehdhhgIwL.jpg",
  "country" : "us",
  "description" : "Một trong những phim khoa học viễn tưởng rùng rợn được mong chờ nhất năm 2010. Nội dung phim xoay quanh việc một nhóm những sát thủ nguy hiểm nhất trên thế giới bị đưa tới một hành tinh xa lạ. Royce - một cựu lính đánh thuê, đang rơi giữa không trung và chỉ kịp bung dù khi gần chạm đất. Dần dần, Royce nhận ra mình không phải là người duy nhất “đổ bộ” xuống khu rừng bí ẩn này. Và tại đây, anh sớm nhận ra mình là con mồi của những sinh vật tiến hoá cấp cao - Predator.Predator, Cuộc Chiến Dưới Tháp Cổ, Quái Thú Vô Hình",
  "director" : "updating...",
  "id" : 250,
  "img" : "https://image.tmdb.org/t/p/w300/gsnUhWMYLSD8VZS7nrMT9mj9BYr.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Quái Thú Vô Hình 3",
  "title_origin" : "Predators",
  "type" : {
    "action" : "action",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2010"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/4jKbWxfIpuzPvSCUKGVVjF2L5mV.jpg",
  "country" : "ko",
  "description" : "",
  "director" : "updating...",
  "id" : 251,
  "img" : "https://image.tmdb.org/t/p/w300/a11TdGOWqASvbeMs7q0a1YLa5K.jpg",
  "language" : "ko",
  "length" : "updating...",
  "title" : "Đêm Thứ 8",
  "title_origin" : "제8일의 밤",
  "type" : {
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/sRP9iWnygnfvTlXCwsaZLXRzhuh.jpg",
  "country" : "us",
  "description" : "Hai mươi năm trước, người ngoài hành tinh bắt liên lạc lần đầu tiên với Trái đất. Con người chờ đợi các cuộc tấn công dữ dội, hoặc những bước tiến công nghệ vĩ đại. Nhưng trái với những gì con người mong đợi, người ngoài hành tinh là những sinh vật tị nạn, là những sinh vật sống sót duy nhất trên hành tinh của họ. Các sinh vật này dựng một phi thuyền căn cứ ở Khu 9 thuộc Nam Phi. Khi đấy, cả thế giới đang còn tranh cãi phải làm gì với người ngoài hành tinh.30 năm sau, lòng kiên nhẫn của con người đi đến giới hạn. Mọi vấn đề liên quan đến người ngoài hành tinh được giao cho MNU, một công ty tư nhân không mấy liên quan đến các vấn đề về người ngoài hành tinh, nhưng họ sẽ nhận được khoảng tiền khổng lồ ...",
  "director" : "updating...",
  "id" : 252,
  "img" : "https://image.tmdb.org/t/p/w300/tuGlQkqLxnodDSk6mp5c2wvxUEd.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Khu Vực 9",
  "title_origin" : "District 9",
  "type" : {
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2009"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/o8u0NyEigCEaZHBdCYTRfXR8U4i.jpg",
  "country" : "us",
  "description" : "12 năm sau cái chết bi thảm của người con gái, một người thợ làm búp bê và vợ của ông chào đón một bà xơ và vài bé gái từ một cô nhi viện đã đóng vào nhà mình, nơi họ trở thành mục tiêu của một sản phẩm bị ám của người thợ, Annabelle.",
  "director" : "updating...",
  "id" : 253,
  "img" : "https://image.tmdb.org/t/p/w300/yNIU9u556lP8dxBfa0eKYT778aM.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Búp Bê Ma Ám: Khởi Nguồn",
  "title_origin" : "Annabelle: Creation",
  "type" : {
    "horror" : "horror",
    "movie" : "movie"
  },
  "year" : "2017"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/rbB7g8YBFMLKtmwB8QEvVlKh5Yh.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 254,
  "img" : "https://image.tmdb.org/t/p/w300/1xO2LirDZstkqZic1FwfK6GJIHH.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "TEKKEN",
  "title_origin" : "TEKKEN",
  "type" : {
    "action" : "action",
    "crime" : "crime",
    "drama" : "drama",
    "movie" : "movie",
    "scifi" : "scifi"
  },
  "year" : "2010"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/a9zFUuxzChmAlIybVge9IZt1hH0.jpg",
  "country" : "us",
  "description" : "Trong chương trình hài chơi khăm có máy quay ẩn, đôi bạn thân gắn kết trong chuyến đi náo loạn đến New York qua việc kéo người thật vào các trò đùa thô tục, bát nháo.",
  "director" : "updating...",
  "id" : 255,
  "img" : "https://image.tmdb.org/t/p/w300/A1Gy5HX3DKGaNW1Ay30NTIVJqJ6.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Chuyến Đi Siêu Quậy",
  "title_origin" : "Bad Trip",
  "type" : {
    "comedy" : "comedy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/qBPR4ebyNfsmwsTSvam1Y3LdXW5.jpg",
  "country" : "es",
  "description" : "",
  "director" : "updating...",
  "id" : 256,
  "img" : "https://image.tmdb.org/t/p/w300/nMRsz9sjCgTVlq4zVmw0v9gw930.jpg",
  "language" : "es",
  "length" : "updating...",
  "title" : "Chilangolandia",
  "title_origin" : "Chilangolandia",
  "type" : {
    "comedy" : "comedy",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/cyEAb9it7G9Atwc5ldUZ0F0iN7c.jpg",
  "country" : "us",
  "description" : "The Hangover là bộ phim hài hước xoay quanh cuộc phiêu lưu của ba anh chàng độc thân. Doug Billings sắp kết hôn, ba chàng bạn thân Phil Wenneck, Stu Price, và cậu em rể Alan Garner quyết phải cùng Doug trải qua một buổi tiệc độc thân nhớ đời, theo đúng cách của các chàng trai Mỹ vẫn làm. Nhưng mọi việc bất ngờ trở nên tồi tệ sau một đêm quậy tưng bừng, anh bạn Doug đã mất tích, trong phòng tắm có một con hổ, chàng nha sĩ Stu mất một chiếc răng, còn trong tủ áo thì đột nhiên xuất hiện thêm một đứa bé. Không thể liên lạc được với Doug, cũng như không nhớ nổi chuyện gì đã xảy ra vào tối hôm trước, cả ba bắt đầu lần tìm từ những manh mối còn sót lại trong phòng. Nguy cơ chú rể mất tích trong lễ cưới và hôn lễ phải hủy bỏ càng khiến cả ba càng lo lắng. Trên đường truy tìm tông tích Doug, bao chuyện bi hài tréo ngoe đã diễn ra với bộ ba....",
  "director" : "updating...",
  "id" : 257,
  "img" : "https://image.tmdb.org/t/p/w300/jjCPcxw7QCmFPYM1t3BThdEawJK.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Ba Chàng Ngự Lâm",
  "title_origin" : "The Hangover",
  "type" : {
    "comedy" : "comedy",
    "movie" : "movie"
  },
  "year" : "2009"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/j14Z0pP7tpuHZlVBSuUL7tq2SGb.jpg",
  "country" : "us",
  "description" : "Đêm trường Halloween là một phần khác của Vũ trụ Hoạt hình DC, dựa trên những câu chuyện phong phú về lịch sử của Người Dơi. Là phần tiếp theo của Batman: Year One, đây là một Bat-man trong quá trình chuyển đổi.",
  "director" : "updating...",
  "id" : 258,
  "img" : "https://image.tmdb.org/t/p/w300/5X1n5q08mZ7NpNpxehMFODxfNYq.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Người Dơi: Đêm Trường Halloween, Phần 2",
  "title_origin" : "Batman: The Long Halloween, Part Two",
  "type" : {
    "action" : "action",
    "anime" : "anime",
    "crime" : "crime",
    "movie" : "movie"
  },
  "year" : "2021"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/iNYe0BmPDAEQlChNYOfceGPNnq6.jpg",
  "country" : "us",
  "description" : "",
  "director" : "updating...",
  "id" : 259,
  "img" : "https://image.tmdb.org/t/p/w300/1MpWjcCn8M0763QDoxcN0gXrc5q.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Jonah Hex",
  "title_origin" : "Jonah Hex",
  "type" : {
    "action" : "action",
    "drama" : "drama",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2010"
}, {
  "actor" : "updating...",
  "backimg" : "https://image.tmdb.org/t/p/w500/239KWoUxiKT0bR3UsmsoX7GsDf9.jpg",
  "country" : "us",
  "description" : "Phim Thor: Thần Sấm xoay quanh một chiến binh hùng mạnh nhưng do kiêu ngạo, bị tước hết quyền năng và bị đày xuống Trái Đất.",
  "director" : "updating...",
  "id" : 260,
  "img" : "https://image.tmdb.org/t/p/w300/jWnbuXuzMIl3FDIs0qY9ZdDPxCl.jpg",
  "language" : "us",
  "length" : "updating...",
  "title" : "Thần Sấm",
  "title_origin" : "Thor",
  "type" : {
    "action" : "action",
    "adventure" : "adventure",
    "fantasy" : "fantasy",
    "movie" : "movie"
  },
  "year" : "2011"
} ]

a.map((e) => {
  e.price = Math.floor(Math.random() * 7) * 5 + 5; 
  e.priceVip = null});
save(a)

function save(saveit) {
  fs.writeFile("idonly.js", JSON.stringify(saveit), "utf8", function (err) {
    if (err) throw err;
    console.log("complete");
  });
}