<?php

    if(isset($_GET))
    $tmpquery=$_GET['query'];
    $query = urlencode($tmpquery);
    $url="https://www.google.com/search?site=imghp&tbm=isch&source=hp&biw=1920&bih=945&q=".$query;

    $ch2 = curl_init();
    curl_setopt($ch2, CURLOPT_ENCODING, 'gzip');
    curl_setopt ($ch2, CURLOPT_URL, $url);
    curl_setopt ($ch2, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt ($ch2, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.31 (KHTML, like Gecko)   Chrome/26.0.1410.64 Safari/537.31");
    curl_setopt ($ch2, CURLOPT_TIMEOUT, 60);
    curl_setopt ($ch2, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt ($ch2, CURLOPT_FOLLOWLOCATION, 0);
    curl_setopt ($ch2, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt ($ch2, CURLOPT_REFERER, $url);
    $result = curl_exec ($ch2);
    curl_close($ch2);


    //$pattern='/ou":"http[s]?:[\/]{2}.{10,100}[j]{1}[p]{1}[g]{1}|ou":"http[s]?:[\/]{2}.{10,100}[p]{1}[n]{1}[g]{1}/';
   // $pattern='/ou":"http[s]?:[\/]{2}.{10,200}\.(?:png|jpg)/';
   //$pattern='/http[s]?:[\/]{2}.{10,100}[j]{1}[p]{1}[g]{1}/';
   $pattern='/ou":"http[s]?:[\/]{2}.{10,450}\.(?:png|jpg).,"ow/';
   preg_match_all($pattern, $result, $matches);
   foreach ($matches as $array) {
    foreach ($array as $url) {
        
        $url=str_replace('ou":"http',"http",$url);
        $url=str_replace('","ow',"",$url);

        $imageUrl[]=$url;
    }
   }
   echo json_encode($imageUrl);

  //Didn't use it though
  function is_404($url) {
          $handle = curl_init($url);
          curl_setopt($handle,  CURLOPT_RETURNTRANSFER, TRUE);
          /* Get the HTML or whatever is linked in $url. */
          $response = curl_exec($handle);
          /* Check for 404 (file not found). */
          $httpCode = curl_getinfo($handle, CURLINFO_HTTP_CODE);
          curl_close($handle);
          /* If the document has loaded successfully without any redirection or error */
          if ($httpCode >= 200 && $httpCode < 300) {
              return false;
          } else {
              return true;
          }
  }

?>


