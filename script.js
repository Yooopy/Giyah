const baboone = document.getElementsByClassName("main-arts")[0];
const babooneImage = window.getComputedStyle(baboone).backgroundImage;

const nana = document.getElementsByClassName("main-arts")[1];
const nanaImage = window.getComputedStyle(nana).backgroundImage;
// console.log(Nana.textContent);
const zanjebil = document.getElementsByClassName("main-arts")[2];
const zanjebilImage = window.getComputedStyle(zanjebil).backgroundImage;
// console.log(Zanjebil.textContent);
const avishan = document.getElementsByClassName("main-arts")[3];
const avishanImage = window.getComputedStyle(avishan).backgroundImage;
// console.log(Avishan.textContent);
const zardchoobe = document.getElementsByClassName("main-arts")[4];
const zardchoobeImage = window.getComputedStyle(zardchoobe).backgroundImage;

const body = document.getElementById("body");
// console.log(Zardchoobe.textContent);

const addHideClass = (element) => {
  element.classList.add("hide");
};

const removeHideClass = (element) => {
  element.classList.remove("hide");
};

const clickOnBaboone = () => {
  document.getElementById("back-button").classList.add("show");
  //   console.log("baboone");
  for (let i = 0; i < 5; i++) {
    if (i == 0) {
      document.getElementsByClassName("main-arts")[i].classList.add("clicked");
      document.getElementsByClassName("main-arts")[
        i
      ].innerHTML = `آرامبخش: بابونه به دلیل خواص آرامبخش، برای کاهش استرس و اضطراب مفید است.<br><br>
ضد التهاب: این گیاه می‌تواند التهاب‌های بدن را کاهش دهد و برای درمان دردهای مفصلی یا عضلانی مفید است.<br><br>
مشکلات گوارشی: بابونه به هضم غذا کمک می‌کند و برای درمان مشکلات معده مانند نفخ و دردهای گوارشی مؤثر است.<br><br>
خواب‌آور: نوشیدن چای بابونه می‌تواند به بهبود کیفیت خواب کمک کند.<br><br>
ضد باکتری: بابونه خواص ضدعفونی‌کننده دارد و می‌تواند به درمان عفونت‌های سطحی کمک کند.`;
    } else {
      addHideClass(document.getElementsByClassName("main-arts")[i]);
      addHideClass(document.getElementById("header"));
      setTimeout(() => {
        document.getElementById("header").style.display = "none";
      }, 300);
      setTimeout(() => {
        document.getElementsByClassName("main-arts")[i].style.display = "none";
      }, 400);
    }
  }
};

const clickOnNana = () => {
  document.getElementById("back-button").classList.add("show");
  document.getElementsByClassName(
    "main-arts"
  )[1].innerHTML = `کمک به گوارش: نعنا به هضم غذا کمک می‌کنه و برای درمان مشکلات گوارشی مثل دل درد، نفخ و سوء هاضمه مفیده.<br></br>
تسکین سردرد: نعنا به دلیل خاصیت خنک‌کننده‌ای که داره می‌تونه سردردها رو تسکین بده، مخصوصاً اگر روغن نعنا رو به شقیقه‌ها بمالی. <br></br> 
آرامبخش: این گیاه برای کاهش استرس و اضطراب مفیده. چای نعنا می‌تونه کمک کنه که آرامش پیدا کنی.
ضد التهاب: نعنا خواص ضد التهابی داره و می‌تونه به کاهش التهابات بدن کمک کنه. <br></br> 
ضد تهوع و استفراغ: برای درمان حالت تهوع و استفراغ هم مفیده، به ویژه برای کسانی که مشکل حرکت دارند یا در دوران بارداری تهوع دارند. <br></br> 
`;
  //   console.log("baboone");
  for (let i = 0; i < 5; i++) {
    if (i == 1) {
      document.getElementsByClassName("main-arts")[i].classList.add("clicked");
    } else {
      addHideClass(document.getElementsByClassName("main-arts")[i]);
      addHideClass(document.getElementById("header"));
      setTimeout(() => {
        document.getElementById("header").style.display = "none";
      }, 300);
      setTimeout(() => {
        document.getElementsByClassName("main-arts")[i].style.display = "none";
      }, 400);
    }
  }
};
const clickOnZanjebil = () => {
  document.getElementById("back-button").classList.add("show");
  document.getElementsByClassName("main-arts")[2].innerHTML = `

تقویت سیستم ایمنی: زنجبیل به دلیل خاصیت آنتی‌اکسیدانی که داره، به تقویت سیستم ایمنی بدن کمک می‌کنه و می‌تونه در برابر بیماری‌ها محافظت کنه <br> </br>

کمک به هضم غذا: زنجبیل باعث تحریک ترشح صفرا میشه و هضم غذا رو راحت‌تر می‌کنه. برای مشکلات گوارشی مثل نفخ و سوء هاضمه مفیده <br> </br

ضد التهاب: این گیاه خاصیت ضد التهابی زیادی داره و می‌تونه به کاهش درد و التهاب مفاصل و عضلات کمک کنه <br> </br>

کاهش حالت تهوع: زنجبیل برای کاهش حالت تهوع و استفراغ خیلی مفیده. به ویژه برای افرادی که در سفر دچار بیماری حرکت میشن یا در دوران بارداری تهوع دارند<br> </br>

تقویت گردش خون: مصرف زنجبیل می‌تونه به بهبود گردش خون و رفع مشکلات مربوط به آن کمک کنه <br></br>

کاهش درد: زنجبیل به عنوان یک مسکن طبیعی شناخته میشه و می‌تونه دردهای خفیف و متوسط رو کاهش بده <br> </br>`;
  //   console.log("baboone");
  for (let i = 0; i < 5; i++) {
    if (i == 2) {
      document.getElementsByClassName("main-arts")[i].classList.add("clicked");
    } else {
      addHideClass(document.getElementsByClassName("main-arts")[i]);
      addHideClass(document.getElementById("header"));
      setTimeout(() => {
        document.getElementById("header").style.display = "none";
      }, 300);
      setTimeout(() => {
        document.getElementsByClassName("main-arts")[i].style.display = "none";
      }, 400);
    }
  }
};
const clickOnAvishan = () => {
  document.getElementById("back-button").classList.add("show");
  document.getElementsByClassName(
    "main-arts"
  )[3].innerHTML = `ضد باکتری و ضد قارچ: اویشن خاصیت ضدعفونی‌کنندگی فوق‌العاده‌ای داره و می‌تونه در مبارزه با عفونت‌های باکتریایی و قارچی مفید باشه. حتی در درمان گلو درد یا عفونت‌های تنفسی هم می‌تونه موثر باشه <br></br>

تقویت سیستم ایمنی: این گیاه به تقویت سیستم ایمنی بدن کمک می‌کنه و می‌تونه به بدن در برابر بیماری‌ها مقاوم‌تر بشه <br></br>

کمک به گوارش: اویشن به هضم غذا کمک می‌کنه و مشکلات گوارشی مثل نفخ و دل‌درد رو تسکین می‌ده <br></br>

ضد التهاب: این گیاه خاصیت ضد التهابی داره و می‌تونه به کاهش التهاب در بدن کمک کنه، مخصوصاً در مشکلات مفاصل و عضلات <br></br>

کاهش سرفه و مشکلات تنفسی: اویشن در درمان سرفه‌های خشک و بهبود مشکلات تنفسی خیلی مفیده. چای اویشن به باز شدن مجاری تنفسی کمک می‌کنه و برای درمان سرماخوردگی و آنفولانزا عالیه <br></br>

ضد استرس و آرامش‌بخش: اویشن همچنین به عنوان یک آرامبخش طبیعی شناخته میشه و می‌تونه به کاهش استرس و اضطراب کمک کنه <br></br>`;
  //   console.log("baboone");
  for (let i = 0; i < 5; i++) {
    if (i == 3) {
      document.getElementsByClassName("main-arts")[i].classList.add("clicked");
    } else {
      addHideClass(document.getElementsByClassName("main-arts")[i]);
      addHideClass(document.getElementById("header"));
      setTimeout(() => {
        document.getElementById("header").style.display = "none";
      }, 300);
      setTimeout(() => {
        document.getElementsByClassName("main-arts")[i].style.display = "none";
      }, 400);
    }
  }
};
const clickOnZardchoobe = () => {
  document.getElementById("back-button").classList.add("show");
  document.getElementsByClassName(
    "main-arts"
  )[4].innerHTML = `کاهش خطر بیماری‌های قلبی: مصرف زردچوبه می‌تواند باعث کاهش کلسترول بد (LDL) و فشار خون بشه، که این‌ها عوامل مهمی در سلامت قلب هستند <br></br>

خواص ضد سرطانی: تحقیقات نشون داده که کورکومین می‌تواند به پیشگیری از برخی نوع‌های سرطان کمک کنه و حتی در درمان برخی از سرطان‌ها موثر باشه <br></br>

کاهش درد: به عنوان یک مسکن طبیعی، زردچوبه در کاهش دردهای عضلانی و مفصلی، مخصوصاً در بیماری‌هایی مثل آرتریت، مفید است <br></br>

افزایش حافظه و سلامت مغز: زردچوبه می‌تواند به بهبود عملکرد مغز کمک کنه و حتی در پیشگیری از بیماری‌های مغزی مثل آلزایمر نقش داشته باشه <br></br>

حفاظت از کبد: زردچوبه می‌تواند به سلامت کبد کمک کرده و از آسیب‌های ناشی از سموم محافظت کنه <br></br>`;
  //   console.log("baboone");
  for (let i = 0; i < 5; i++) {
    if (i == 4) {
      document.getElementsByClassName("main-arts")[i].classList.add("clicked");
    } else {
      addHideClass(document.getElementsByClassName("main-arts")[i]);
      addHideClass(document.getElementById("header"));
      setTimeout(() => {
        document.getElementById("header").style.display = "none";
      }, 300);
      setTimeout(() => {
        document.getElementsByClassName("main-arts")[i].style.display = "none";
      }, 400);
    }
  }
};

const back = () => {
  document.getElementById("back-button").classList.remove("show");
  document.getElementById("back-button").classList.add("hide");

  for (let i = 0; i < 5; i++) {
    removeHideClass(document.getElementsByClassName("main-arts")[i]);
    if (i == 0) {
      document.getElementsByClassName("main-arts")[i].innerHTML = "بابونه";
    } else if (i == 1) {
      document.getElementsByClassName("main-arts")[i].innerHTML = "نعنا";
    } else if (i == 2) {
      document.getElementsByClassName("main-arts")[i].innerHTML = "زنجبیل";
    } else if (i == 3) {
      document.getElementsByClassName("main-arts")[i].innerHTML = "آویشن";
    } else if (i == 4) {
      document.getElementsByClassName("main-arts")[i].innerHTML = "زردچوبه";
    }
    removeHideClass(document.getElementById("header"));
    document.getElementsByClassName("main-arts")[i].classList.remove("clicked");
    document.getElementsByClassName("main-arts")[i].style.display = "flex";
  }
  setTimeout(() => {
    document.getElementById("header").style.display = "flex";
  }, 300);
};
