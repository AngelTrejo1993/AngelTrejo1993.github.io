const currentUrl = window.location.href;
let browsertype = navigator.userAgent;
console.log(browsertype)
console.log(navigator.vendor)



const params = new URLSearchParams(document.location.search);
console.info(document.location.search);
const s = params.get("s");
const o = params.get("o");
console.info(s); //show C
console.info(o); //show 1


function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
    
}




function TestPage(){
console.log(currentUrl);
    if (currentUrl == "http://192.168.0.131:5500/home.html"){

        window.location.href = "https://apps.apple.com/us/app/la-loteria/id1456692257";
    }
}
    

if (getMobileOperatingSystem() == "iOS") {

    try {window.location.href = "loteria://party";}
      catch(err) { }

      setTimeout(()=>{TestPage()},
      3000);
//url = "loteria://party";
  //  try {
        // Code that may throw an error
        // For instance, calling an undefined function:
    //    window.location=url; // Throws an error because 'getData' is not defined
    //} catch (error) {
        // Handle the error
      //  document.getElementById("TittleFuck").textContent=error.document;
        
       // alert("error"); // Display an alert with the error message
    //}

//window.open("loteria://party");
//window.location="loteria://party";

  //  window.location.href = "loteria://party";
  //  setTimeout(() => { window.location.href = "https://apps.apple.com/us/app/la-loteria/id1456692257";
  //  }, 3000);
   // window.location.href = "https://apps.apple.com/us/app/la-loteria/id1456692257";
}

if (getMobileOperatingSystem() == "Android") {
    console.log("https://play.google.com/store/apps/details/La_Loteria?id=com.HappyTimes.LaLoteriaA&hl=en_US")
    //using these codes will open both. try to find a way to see if the app is downloaded then open the app
    //if not then open the website.    
    //window.location.href = "https://play.google.com/store/apps/details/La_Loteria?id=com.HappyTimes.LaLoteriaA&hl=en_US";
    window.location.href = "loteria://party" + document.location.search;
    setTimeout(()=>{window.location.href = "https://play.google.com/store/apps/details/La_Loteria?id=com.HappyTimes.LaLoteriaA&hl=en_US";},
1500);
}
