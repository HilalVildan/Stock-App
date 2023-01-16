// ! BU GÖSTERIM LAZIM OLABILIR DIYE BU DOSYADA DURUYOR. (PIYASADA BAZEN BU KULLANILIYOR.)
// ! BUNUN YERINE HOOKS KLASÖRÜNDEKI USEAXIOS FILEINI KULLANIYORUZ. BÜTÜN IMPORTLAR DA ORAYA GÖRE OLUCAK
// ! burada localstorageden cektik useAxios dosyasinda ise direkt olarak state kismindan cektik tokeni. bu da bize cok büyük kolaylik sagliyor.

import axios from "axios";

const BASE_URL = "https://13105.fullstack.clarusway.com/";

//* Token'siz api istekleri icin bir instance olustur.
export const axiosPublic = axios.create({
  baseURL: BASE_URL,
});

//* tokeni state üzerinden cagiramam cünku bu bir react componenti degil. 
//* local storage'dan token'ı oku
const escapedToken = JSON.parse(localStorage.getItem("persist:root"))?.token;
const token = escapedToken && JSON.parse(escapedToken); // tokenin seklini düzeltmek icin bi daha JSON.parse yaptik

//* Token gerektiren istekler icin bir baska instance olusutur.
export const axiosWithToken = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Token ${token}` },
});

//* Instance, token'nın ilk degirini okuyarak istekte bulunur.
//* Dolayisiyla bazen localSotrage'Dan token alinmadan ilk degeri (null) ile istek yapilmis olabilir.
//* Bunun cozumu icin axios interceptors kullanilabilir.
//* interceptor belirtilen her axios instance calismadan once calisan bir metodtur.
//* Dolayısıyla once yeni token okunmasini saglar.

axiosWithToken.interceptors.request.use((config) => {
  console.log("interceptor run");

  if (!config.headers["Authorization"]) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
});

//! ------------------------------------------------------
//! Bunlara alternatif olarak eger axios instance kullanimini
//! custom hook icerisinde yaparsak daha kolay bir sekilde token'a
//! erismek mumkun olur.
//! ------------------------------------------------------
